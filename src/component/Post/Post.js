import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home/Home';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const cardStyle={
    minWidth:'150px',
    minHeight:'250px',
    margin:'10px',
    boxShadow:'1px 1px 3px black',
    backgroundImage:'linear-gradient(60deg,#e1bee7,#f48fb1)'
     
}


const contentStyle={
    fontWeight:'700',
    color:'black',
    fontSize:'18px',
    fontFamily:'Poppins,sans-serif',
   
   
  
}
const design={

    paddingTop:'20px'
}


const buttonStyle={
    width:'300px',
    backgroundColor:'black',
    color:'white',
    textDecoration:'none',
    display:'center',
    margin:'auto'
}
const Post = () => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    const [users,setUsers]=useState([])
    useEffect(()=>{
 let url='https://jsonplaceholder.typicode.com/posts';
 fetch(url)
 .then (response =>response.json())
 .then (data =>setUsers(data))

    },[])
    return (
        
       <div style={design} className="container">
           <div className="row">
           {


users.map(user=><div className="col-md-4"><Card style={cardStyle} className={classes.root} variant="outlined">
<CardContent >
<Typography style={contentStyle}  className={classes.title} color="textSecondary" gutterBottom>
<strong> Title: {user.title}</strong>
</Typography>
<Typography variant="h5" component="h5">
Posted by {bull}UserID: {user.id}{bull}
</Typography>

</CardContent>
<CardActions>
<Link style={buttonStyle} to={`/postDetail/${user.id}`}> 
<Button  color="secondary" size="large" >
Get Comments&nbsp;&nbsp;<FontAwesomeIcon icon={faComments}/>
</Button>


</Link>


</CardActions>
</Card></div>

    



  )  }

           </div>


       </div>
        
    );
};

export default Post;