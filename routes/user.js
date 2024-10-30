const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User ,Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = req.body.username;
    const pass = req.body.password;
    await User.create({
        username:user,
        password:pass,


    })
    res.json({
       message: "User created successfully"
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    
        
        const allCourses = await Course.find({isPublished :"true"});
        res.json({
            courses: allCourses
        });
    
    
    
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = rew.params.courseId;
    const username = req.headers.username;
    try{
        await User.updateOne({
        uesrname:username
    },{
        "$push": {
            purchasedCourses: courseId;
        }
        
    
    });
    } catch(e){
        console.log(e);
    };
    res.json({
        message:"Purchse Successful"
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses:courses
    })

});

module.exports = router