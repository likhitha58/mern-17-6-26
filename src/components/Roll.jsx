import "../index.css";
function Roll({user}){
    return(
        <>
        <div className="card">
        <h1>Student Name:{user.name}</h1>
        <h2>Student Age: {user.age}</h2>
        <h2>Student Department: {user.dept}</h2>
        <h2>Student Blood Group: {user.bloodGroup}</h2>
        <h3>Student Address: {user.address}</h3>
        </div>
        </>
    );
}

export default Roll;