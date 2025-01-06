
import '../src/styles/home.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


function Home() {
    const [data, setData] = useState([])
    const [error, setError] = useState(" ")

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}`);

                if(!response.ok){
                    throw new Error(`HTTP error : ${response.status}`);
                }

                const result = await response.json();
                setData(result.payload);
            } catch (error) {
                console.error("Error while fetching data", error);
                setError(error.message);
            };
        }

        fetchData();

    },[])

    return (
        <>
        <h1 style={{textAlign:"center",marginTop:"100px"}}>welcome to  page</h1>

        <div className="container">
        { data.map((d) => {
            return (
                <>
                <div className="student_info">
                    
                    <p>Id : {d.id || "--"}</p>
                    
                    <p>Name : {d.name || "--"}</p>
                    
                    <p>Address : {d.address || "--"} </p>
                    
                    <p>Gender : {d.gender || "--"} </p>
                    
                    <p>Age : {d.age || "--"} </p>
                    
                    <div className="btns">
                        <Link to="/student" className="a-btns">Edit</Link>
                        <Link to="" className="a-btns">Delete</Link>
                    </div>

                </div>
                </>
            );
        })
        }
        </div>



        {/* <h1 style={{ textAlign: "center", marginTop: "100px" }}>Welcome to the Page</h1>
        <div className="container">
            {error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : data.length > 0 ? (
                data.map((d) => 
                    (
                    <div key={d.id} className="student_info">
                        <p>Id: {d.id || "--"}</p>
                        <p>Name: {d.name || "--"}</p>
                        <p>Address: {d.address || "--"}</p>
                        <p>Gender: {d.gender || "--"}</p>
                        <p>Age: {d.age || "--"}</p>
                        <div className="btns">
                            <Link to="/student" className="a-btns">Edit</Link>
                            <Link to="" className="a-btns">Delete</Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading or no data available...</p>
            )}
        </div> */}
    </>
    )
}

export default Home