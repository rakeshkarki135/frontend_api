import '../src/styles/home.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
        <h1 style={{textAlign:"center",marginTop:"100px"}}>welcome to  page</h1>

        <div className="container">
            <div className="student_info">
                
                <p>Id : -- </p>
                
                <p>Name : -- </p>
                
                <p>Address : -- </p>
                
                <p>Gender : -- </p>
                
                <p>Age : -- </p>
                
                <div className="btns">
                    <Link to="/student" className="a-btns">Edit</Link>
                    <Link to="" className="a-btns">Delete</Link>
                </div>

            </div>
        </div>
    </>
    )
}

export default Home