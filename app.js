const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require('lodash');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin-yuvasree:65HariYuvi74@cluster0.zabaa.mongodb.net/reportcardDb",{useNewUrlParser:true});
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//teacher schema
const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

//teacher model
const Teacher = mongoose.model("Teacher",teacherSchema);

//1a
const oneaSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const OneA = mongoose.model("OneA",oneaSchema);

//1b
const onebSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const OneB = mongoose.model("OneB",onebSchema);

//2a
const twoaSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const TwoA = mongoose.model("TwoA",twoaSchema);

//2b
const twobSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const TwoB = mongoose.model("TwoB",twobSchema);

//3a
const threeaSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
        {
            maths: Number,
            science: Number,
            social: Number,
            english: Number,
            language: Number,
            total: Number,
            percent: Number,
            rank: Number
        },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const ThreeA = mongoose.model("ThreeA",threeaSchema);

//3b
const threebSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const ThreeB = mongoose.model("ThreeB",threebSchema);

//4a
const fouraSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const FourA = mongoose.model("FourA",fouraSchema);

//4b
const fourbSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    quaterly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    halfyearly:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    },
    annual:
    {
        maths: Number,
        science: Number,
        social: Number,
        english: Number,
        language: Number,
        total: Number,
        percent: Number,
        rank: Number
    }


});

const FourB = mongoose.model("FourB",fourbSchema);


app.get("/",function(req,res){
    res.render("selection");
    
})

app.get("/adminlogin",function(req,res){
    res.render("adminlogin");
    
})

app.get("/admin",function(req,res){
    res.render("admin");
    
})

app.get("/addTeacher",function(req,res){
    res.render("addTeacher");
    
})

app.get("/addStudent",function(req,res){
    res.render("addStudent");
    
})

app.get("/1A",function(req,res){
    res.render("StudentDetails",{title:"1A"});
    
})

app.get("/1B",function(req,res){
    res.render("StudentDetails",{title:"1B"});
    
})

app.get("/2A",function(req,res){
    res.render("StudentDetails",{title:"2A"});
    
})

app.get("/2B",function(req,res){
    res.render("StudentDetails",{title:"2B"});
    
})
app.get("/3A",function(req,res){
    res.render("StudentDetails",{title:"3A"});
    
})
app.get("/3B",function(req,res){
    res.render("StudentDetails",{title:"3B"});
    
})
app.get("/4A",function(req,res){
    res.render("StudentDetails",{title:"4A"});
    
})
app.get("/4B",function(req,res){
    res.render("StudentDetails",{title:"4B"});
    
})
app.get("/teacherlogin",function(req,res){
    res.render("teacherlogin");
    
})
app.get("/studentlogin",function(req,res){
    res.render("studentlogin");
    
})

app.get("/TeacherSelectionPage",function(req,res){
    res.render("TeacherSelectionPage");
    
})
app.get("/1Amarks",function(req,res){
    res.render("marks",{title:"1A"});
    
})
app.get("/1Bmarks",function(req,res){
    res.render("marks",{title:"1B"});
    
})
app.get("/2Amarks",function(req,res){
    res.render("marks",{title:"2A"});
    
})
app.get("/2Bmarks",function(req,res){
    res.render("marks",{title:"2B"});
    
})
app.get("/3Amarks",function(req,res){
    res.render("marks",{title:"3A"});
    
})
app.get("/3Bmarks",function(req,res){
    res.render("marks",{title:"3B"});
    
})
app.get("/4Amarks",function(req,res){
    res.render("marks",{title:"4A"});
    
})
app.get("/4Bmarks",function(req,res){
    res.render("marks",{title:"4B"});
    
})
app.get("/studentlogin",function(req,res){
    res.render("studentlogin");
    
})
app.post("/adminlogin",function(req,res){
    const adminEmail = req.body.adminEmail;
    const adminPass = req.body.adminPasswrd;
    if(adminEmail==="admin@gmail.com" && adminPass==="admin@123")
    {
        res.redirect("admin");
    }
    else
    {
        res.send("INVALID CREDENTIALS");
    }
    
})


app.post("/addTeacher",function(req,res){
    const teacherData = new Teacher({
        name: req.body.nameT,
        email: req.body.emailT,
        password: req.body.passwordT

    });
    teacherData.save();
    res.redirect("admin");

})

app.post("/StudentDetails",function(req,res){

    const title  = req.body.class;
    if(title === "1A")
    {
        const student = new OneA({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();

    }
    else if(title === "1B")
    {
        const student = new OneB({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "2A")
    {
        const student = new TwoA({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "2B")
    {
        const student = new TwoB({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "3A")
    {
        const student = new ThreeA({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "3B")
    {
        const student = new ThreeB({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "4A")
    {
        const student = new FourA({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    else if(title === "4B")
    {
        const student = new FourB({
            name: req.body.nameS,
            regNo: req.body.regS,
            email: req.body.emailS
    
        });
        student.save();
    }
    res.redirect("admin");



})

app.post("/teacherlogin",function(req,res){
    
    const password = req.body.teacherPasswrd;

    Teacher.findOne({email : req.body.teacherEmail},function(err,teachers){
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(teachers === null)
            {
                res.send("INVALID EMAIL");
            }
            else if(teachers.password !== password )
            {
                res.send("INVALID PASSWORD");

            }
            else
            {
                res.redirect("TeacherSelectionPage");
            }
        
        }
    })
    
})

app.post("/1A",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;
    
    if(exam === "1")
    {
        
        OneA.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        OneA.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        OneA.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/1B",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        OneB.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language,total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        OneB.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        OneB.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/2A",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        TwoA.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        TwoA.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        TwoA.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/2B",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        TwoB.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        TwoB.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        TwoB.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/3A",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        ThreeA.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        ThreeA.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        ThreeA.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/3B",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        ThreeB.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        ThreeB.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        ThreeB.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/4A",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        FourA.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        FourA.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        FourA.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});

app.post("/4B",function(req,res){
    const exam = req.body.select;
    var Total = Number(req.body.maths)+ Number(req.body.science) + Number(req.body.social) + Number(req.body.english) + Number(req.body.language) ;
    
    var Per = (Total/500)*100;

    if(exam === "1")
    {
        
        FourB.findOneAndUpdate({ name : req.body.nameS }, { $set: { quaterly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "2")
    {
        FourB.findOneAndUpdate({ name : req.body.nameS }, { $set: { halfyearly:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
    }
    else if(exam === "3")
    {
        FourB.findOneAndUpdate({ name : req.body.nameS }, { $set: { annual:{maths:req.body.maths, science:req.body.science, social: req.body.social, english : req.body.english, language :req.body.language, total:Total, percent:Per}}}, function(err,docs){
            if(err) {
                console.log(err);
                res.send("Student Not Found");
            } 
            else {
                    console.log("Updated Successfully");
                    
            }
        });
        

    }
    res.redirect("TeacherSelectionPage");
});
app.post("/studentlogin",function(req,res){
    let Name;
    let regNo;
    let Sclass;
    let Sexam;
    let maths;
    let science;
    let social;
    let english;
    let language;
    let total;
    let percent;
  
    const std = req.body.selectClass;
    const exam = req.body.selectExam;

    if(std === "1")
    {
        if(exam === "1")
        {
            OneA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 A";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneA.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            OneA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 A";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneA.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            OneA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 A";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneA.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }
    else if(std === "2")
    {
        if(exam === "1")
        {
            OneB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 B";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneB.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            OneB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 B";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneB.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            OneB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "1 B";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
OneB.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "3")
    {
        if(exam === "1")
        {
            TwoA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 A";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoA.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            TwoA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 A";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoA.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            TwoA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 A";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoA.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "4")
    {
        if(exam === "1")
        {
            TwoB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 B";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoB.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            TwoB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 B";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoB.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            TwoB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "2 B";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
TwoB.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "5")
    {
        if(exam === "1")
        {
            ThreeA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 A";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeA.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            ThreeA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 A";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeA.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            ThreeA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 A";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeA.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "6")
    {
        if(exam === "1")
        {
            ThreeB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 B";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeB.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            ThreeB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 B";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeB.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            ThreeB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "3 B";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
ThreeB.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "7")
    {
        if(exam === "1")
        {
            FourA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 A";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourA.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            FourA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 A";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourA.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            FourA.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 A";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourA.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

    else if(std === "8")
    {
        if(exam === "1")
        {
            FourB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 B";
                        Sexam = "Quaterly Exam";
                        maths = student.quaterly.maths;
                        science = student.quaterly.science;
                        social = student.quaterly.social;
                        english = student.quaterly.english;
                        language = student.quaterly.language;
                        total = student.quaterly.total;
                        percent = student.quaterly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourB.find().sort({'quaterly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.quaterly.rank=count;
                count=count+1;

             }
             else
             {
                i.quaterly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.quaterly.rank});

             }
           
            
         })
         
       
    }
 });


            

        }
        else if(exam === "2")
        {
            FourB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 B";
                        Sexam = "Halfyearly Exam";
                        maths = student.halfyearly.maths;
                        science = student.halfyearly.science;
                        social = student.halfyearly.social;
                        english = student.halfyearly.english;
                        language = student.halfyearly.language;
                        total = student.halfyearly.total;
                        percent = student.halfyearly.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourB.find().sort({'halfyearly.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.halfyearly.rank=count;
                count=count+1;

             }
             else
             {
                i.halfyearly.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.halfyearly.rank});

             }
           
            
         })
         
       
    }
 });

        }
        else if(exam === "3")
        {
            FourB.findOne({name : req.body.StudentName},function(err,student){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    if(student === null)
                    {
                        res.send("Student Not Found");
                    }
                    else
                    {
                        Name = student.name;
                        regNo = student.regNo;
                        Sclass = "4 B";
                        Sexam = "Annual Exam";
                        maths = student.annual.maths;
                        science = student.annual.science;
                        social = student.annual.social;
                        english = student.annual.english;
                        language = student.annual.language;
                        total = student.annual.total;
                        percent = student.annual.percent;
                        console.log(student);

                    }
                
                }
            })

            var count = 1;
FourB.find().sort({'annual.total':"desc"}).exec(function(err, docs) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        docs.forEach(function(i)
         {
             if(i.name!== Name)
             {
                i.annual.rank=count;
                count=count+1;

             }
             else
             {
                i.annual.rank=count;
                res.render("reportCard",{nm: Name ,rn: regNo ,cs: Sclass,ex: Sexam,ma: maths,sci: science,soc: social,eng: english,lang: language,tt: total,pr: percent,rnk: i.annual.rank});

             }
           
            
         })
         
       
    }
 });

        }
    }

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
    console.log("Successfully connected to port 3000");

});




