import '../src/styles/register.css'


function Register() {
    return (
        <>
        <form method="POST">

        <h1 style={{textAlign:"center"}}>Sign up</h1>
        
        <div className="input">
            <input type="text" value="" name="firstname" placeholder="Enter the First Name" required />
        </div>

        <div className="input">
            <input type="text" value="" name="username" placeholder="Enter the Phone Number" required />
        </div>

        <div className="input">
            <input type="text" value="" name="email" placeholder="Enter the Email Address" required />
        </div>

        <div className="input">
            <input type="text" value="" name="password" placeholder="Enter the Password" required />
        </div>

        <div className="input">
            <input type="text" value="" name="confirm-password" placeholder="reEnter the Password" required />
        </div>

        
        <button type="submit">Submit</button>

    </form>
        </>
    )
}

export default Register