// This file is to create schema and model for the postMessage.

import mongoose from 'mongoose'; // Importing mongoDB crawler

// Creating schema
const postSchema = mongoose.Schema({ // Using .Schema function for creating schema
    // Below contains the field we require in our data and also its data-type
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0 // specifying the default value to 0
    },
    createdAt :{
        type : Date,
        default : new Date() // specifying the default value to 0
    }
}); 

// After we have created our Schema, we will bind it to a model
// We will use .model function to do this.
const PostMessage = mongoose.model('PostMessage', postSchema);

// Exporting the defualt PostMessage model
export default PostMessage;