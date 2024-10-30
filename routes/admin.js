const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) =>  {
    // Implement admin signup logic
    const username  = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    //ideally you should await it 
    res.json({
           message: 'Admin created Successfully'
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    const title = req.body.title ;
    const description =req.body.description;
    const ImageLink =req.body.ImageLink;
    const price=req.body.price;
    //zod

    const newCourse = await Course.create({
        title : title,
        description :description,
        ImageLink :ImageLink,
        price:price

    })
    console.log(newCourse);
    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses});
});

module.exports = router;