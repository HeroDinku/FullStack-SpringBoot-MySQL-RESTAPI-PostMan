import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button} from '@material-ui/core';
//import { run } from 'node:test';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    
    },
  },
}));
 // below is where the database is called
export default function Student() {
    const PaperStyle={padding :'50px 20px', height:'600',width:600, margin:"20px auto"}
     const[name,setName]= useState('');
     const[address,setAddress]= useState('');
        const[phone,setPhone]= useState('');
        const [email,setEmail]= useState('');
        const [course,setCourse]= useState('');
        const [sex,setSex]= useState('');

     const [students, setStudents] = useState([]);
     const classes = useStyles();


     const handelClick = (e) => {
            e.preventDefault();
            const student = {name, phone, email, course, sex,address};
            console.log(student);
         fetch('http://localhost:8080/student/add', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New student added");
            })
        }

   useEffect(() => {
        fetch('http://localhost:8080/student/all')
            .then(response => response.json())
            .then(data => setStudents(data));

    }, []);

  return (
    
    <Container>
        
        <Paper elevation={3} style={PaperStyle}>
          <h1 style ={{color:"#C0C0C0"}}><u> Add Student </u></h1>
    <form className={classes.root} noValidate autoComplete="off">
       <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
     
     <TextField id="outlined-basic" label=" Email" variant="outlined" fullWidth 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />

     <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth 
       value={phone}
       onChange={(e)=>setPhone(e.target.value)}
       />
     
     <TextField id="outlined-basic" label=" Course" variant="outlined" fullWidth 
       value={course}
       onChange={(e)=>setCourse(e.target.value)}
       />
     
     <TextField id="outlined-basic" label=" Sex" variant="outlined" fullWidth 
       value={sex}
       onChange={(e)=>setSex(e.target.value)}
       />


      <TextField id="outlined-basic" label=" Adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      
      />
      <Button variant="contained" color="secondary" onClick ={handelClick}>
    Submit /አስገባ
    </Button>
    </form>
    </Paper>

    <Paper elevation={3} style={PaperStyle}>
    {students.map((student) => (
        <Paper elevation={6} style={{ margin:"10px", padding:"15px", textAlign:"left"}} 
        key={student.id}>
            Id: {student.id} <br/>
            Name: {student.name} <br/>
            Address: {student.address} <br/>
            Phone: {student.phone} <br/>
            Email: {student.email} <br/>
            Course: {student.course} <br/>
            Sex : {student.sex} <br/>
        </Paper>
    ))}

    </Paper>
    </Container>
  );
}
