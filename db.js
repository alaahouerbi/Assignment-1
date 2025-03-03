const mongoose=require('mongoose');
module.exports=()=>{
const uri=process.env.mongoUri || "mongodb://localhost:27017/assignement1"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false}).catch(err=>console.log(err));

mongoose.connection.on('connected', function () {
  console.log('Database connection established!');
}); 

//option to return new document after update (not original document)
mongoose.set('returnOriginal', false);

mongoose.connection.on('disconnected', function () { 
  console.log('Database disconnected'); 
});
//safe exit on process crash
process.on('SIGINT', function() {   
  mongoose.connection.close(function () { 
    console.log('App terminated... Database connection closed.'); 
    process.exit(0); 
  }); 
}); 

};

