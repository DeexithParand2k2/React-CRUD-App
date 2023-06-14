import React, { useEffect, useState } from 'react'

function authenticate(cred,dbObj){
    let authUid = cred.username, authPswd = cred.password; 
    const foundElement = dbObj.find(eachElement => eachElement.username === authUid && eachElement.password === parseInt(authPswd));
    if (foundElement) {
        return 'valid cred';
    } else {
        return 'invalid cred or not registered';
    }
}

const onSubmit = (event,inpt,dbObj) =>{
    console.log(authenticate(inpt,dbObj))
    //to prevent reload every time after submission
    event.preventDefault();
}

function Login() {

    const [inpt,changeInpt] = useState({username:'',password:''});
    const [dbObj,changeDbObj] = useState([]);

    useEffect(()=>{
        loginCredDb()
    },[])

    async function loginCredDb() {
        const response = await fetch("http://localhost:5000/cred");
        const jsonData = await response.json();
        changeDbObj(jsonData)
    }

    return (
    <div>
        <form onSubmit={(e)=>onSubmit(e,inpt,dbObj)}>
            <label className="username">user id</label><br/>
            <input type="text" autoComplete='off' onChange={(e)=>{
                let obj = inpt
                obj.username = e.target.value
                changeInpt(obj)
            }}/>
            <br/>
            <label className="pswd">password</label>
            <br/>
            <input type="password" data-lpignore="true" autoComplete='off' onChange={(e)=>{
                let obj = inpt
                obj.password = e.target.value
                changeInpt(obj)
            }}/>
            <br/><br/>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
}

export default Login