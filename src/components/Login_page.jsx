import React, { useState } from 'react';

function Login(){
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const change = event => {
        setValue(event.target.value)
    }

    const handleLogin = () =>{
        setSubmitted(true);
    }
    return(
        <div>
            {submitted ? (
                <div>
                    <h1 class="welcome">Welcome {value}!</h1>
                </div>
            ) : (
                <div className='login_box'>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='entry'>
                            <input type="text" onChange = {change} value = {value} placeholder='Username' required/>
                        </div>
                        <div className='entry'>
                            <input type="password" placeholder='Password' required/>
                        </div>
                        <button href="#" className='btn'>Login</button>
                    </form>
                </div>
            )} 
        </div>     
    );
}

export default Login;