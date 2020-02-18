const express=require('express');
const morgan=require('morgan');
const app=express();

//SETTINGS
app.set('port', 3000);

//MIDDELWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//ROUTES
//app.use(require('/routes'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/cities',require('./routes/cities'));

//STARTING SERVE
app.listen(app.get('port'),() =>{
    console.log("Server on port "+app.get('port'));
});
