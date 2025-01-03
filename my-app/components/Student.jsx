import '../src/styles/student.css'


function Student() {
    return (
        <>
        <h1 style={{textAlign:"center"}}>Add Student</h1>

    
        <form method="POST">
            <h2 style={{textAlign:"center"}}>Student Detail</h2>
            
            <div className="input">
                <input type="text"  name="name" placeholder="Enter the Name" />
            </div>

            <div className="input">
                <input type="text"  name="address" placeholder="Enter the  Address" />
            </div>

            <div className="input">
                <input type="text"  name="gender" placeholder="Enter the Gender" />
            </div>

            <div className="input">
                <input type="text"  name="age" placeholder="Enter the Age" />
            </div>

            <button type="submit">Submit</button>

        </form>
    </>
    )
}

export default Student