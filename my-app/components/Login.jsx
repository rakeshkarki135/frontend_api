import '../src/styles/login.css'

function Login() {
    return (
        <form method="POST">
        

        <h1 style={{textAlign:"center"}}>User Login</h1>
        
        <div className="input">
            <input type="text" value="" name="username" placeholder="Enter your Phone or Email Address" required />
        </div>

        <div className="input">
            <input type="text" value="" name="password" placeholder="Enter your Password" required />
        </div>
        
            <p><a href="{% url 'register-user' %}">Do not have account? Register from here.</a></p>
        
        <button type="submit">Submit</button>

    </form>
    )
}

export default Login