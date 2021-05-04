import mongoose from "mongoose"

const instance = mongoose.Schema({
    username:{type:String , required:true},
    name:{type:String , required:true},
    address:{type:String , required:true},
    mobile:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    id:{type:String}
})

export default mongoose.model("User" , instance)