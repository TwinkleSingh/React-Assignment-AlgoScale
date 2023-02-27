import React, { useState } from 'react';

const Login = () =>{
    return(
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        <div>
            <form action="">
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="username" id="username" placeholder='enter username'/>
                </div>
                <div>
                    <label htmlFor='passwd'>Password : </label>
                    <input type="password" name="passwd" id="passwd"/>
                </div>
            </form>
        </div>
    )
}

export default Login;