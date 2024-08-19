import Admin from "../model/admin.model.js";
import bcryptjs from 'bcryptjs'
export const signup= async(req,res)=>{
    try{
    const{fullname,email,password}=req.body;
    const admin =await Admin.findOne({email})
    if(admin){
        return res.status(400).json({message:"admin already exists"});
    }
    const hashPassword  = await bcryptjs.hash(password,10);

    const createdAdmin = new Admin({
        fullname:fullname,
        email:email,
        password:hashPassword,
    });
    await createdAdmin.save();
    res.status(201).json({message:"admin created successfully",admin:{
        _id:createdAdmin._id,
        fullname:createdAdmin.fullname,
        email:createdAdmin.email,
    },
});

    }catch(error){
        console.log("Error:"+error.message);
        res.status(500).json({message:"internal server error"});

    }
};



export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const admin = await Admin.findOne({email});
        const isMatch = await bcryptjs.compare(password,admin.password);
        if(!admin || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login successful",
                admin:{
                _id:admin._id,
                fullname:admin.fullname,
                email:admin.email
            },
        });
        }

    }catch(error){
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server Error "});


    }

}