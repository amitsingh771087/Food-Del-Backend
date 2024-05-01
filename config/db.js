import  mongoose  from "mongoose"

export const connectDB = async ()=>{

    await mongoose.connect('mongodb+srv://amitsingh771087:amit7710879216@cluster0.esvjbqi.mongodb.net/food-del').then(()=>{
        console.log('DB connected')
    })
    

}