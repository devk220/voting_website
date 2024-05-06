const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const connectToMongo=require('./yb')
const schema=require('./userSchema')
const mongo = require('mongoose')
const multer=require('multer')
const bcrypt=require('bcryptjs')

const port=4000

const app=express()

app.use(cors(
    {
        origin:["https://voting-website-frontend.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(bodyParser.json())
app.use('/signupUploads', express.static('signupUploads'));


connectToMongo()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addUser=async(fname,lname,email,pass,image)=>{
    const user=new mongo.model("user",schema)

    await user.create({
        firstname:fname,
        lastname:lname,
        email:email,
        password:bcrypt.hashSync(pass,12),
        image:image.toString('base64')
    })
}

app.post('/register',upload.single('file'),async(req,res)=>{
    try {
        let fname = req.body.fname;
        let lname = req.body.lname;
        let email = req.body.email;
        let pass = req.body.pass;
        let image=req.file.buffer

        const user = await mongo.model("user", schema).findOne({ email, password: pass });

        if(user)
        {
            res.json(
                {
                    message:"exists"
                }
            )
        }
        else
        {
            await addUser(fname, lname, email, pass,image);
    
            res.json(
                {
                    message:"success",
                }
            );
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/signin', async (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;

    const user = await mongo.model("user", schema).findOne({ email });

    if (user) {
        if(bcrypt.compareSync(pass, user.password))
        {
            res.json({
                message: "success",
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    image: user.image
                }
            });
        }
        else
        {
            res.json({message:"password error"})
        }
    } else {
        res.json({ message: "email error" });
    }
});

app.listen(port,()=>{
    console.log(`app listening on port:${port}`)
})