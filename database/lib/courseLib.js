const courseModel = require('../model/schema1');
module.exports.getAllCourses= async function()
{
    return await courseModel.find({});
}
module.exports.insertFirstCourse=async()=>
{
    const courses=await courseModel.find({})
    if(courses && courses==0)
    {
        return
    }
    const instance={
        title:'by bz',
        level:'easy',
    }
    const course= new courseModel(instance);
    course.save()
}