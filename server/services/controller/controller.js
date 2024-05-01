const { User }  = require('../model/model');

exports.signup = async (req,res)=>{
  try {
    const {fname, lname, mobilenumber, email} = req.body;
    console.log(fname, lname, mobilenumber, email);

    if(!fname || !lname || !mobilenumber || !email){
      return res.status(400).json({message: "Please Provide Above Data"});
    }

    const user = new User({
      fname,
      lname,
      mobilenumber,
      email
    })

    await user.save();

    req.session.user = {
      id: user._id,
      fname: user.fname,
      lname: user.lname,
      email: user.email
    };

    console.log("User Validated Succesfully & Loggedin");
    return  res.status(200).json({message:"User Validated Successfully & Logging you In"});
    
  } catch (error) {
    console.log({"Error while Signup":error});
    return res.status(500).json({"Error while Signup":error})
  }
}

exports.login = async (req,res)=>{
  try {
    let {email} = req.body;

    email = email.toLowerCase();
 
    if(!email) return res.status(400).json({message : "Email is required!"});
 
    const user = await User.findOne({email:email});
 
    if(user){
      req.session.user = {
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email
      };
      console.log("Session Created");
      return res.status(200).json({name:user.fname,message:"OTP Verified! Login Successful"})
    }else{
     console.log('User Not Found');
     return res.status(401).json({message : 'User not found'});
    }
   
  } catch (error) {
    console.log({error:"Error while Login"});
    return res.status(500).json({error:"Server Error"}) 
  }
}