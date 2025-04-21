function Customer({count, toggle}) {
    // console.log("Customer count: ", count);
    return (
        <div>
        {toggle ? <h1>Customer Component for teacher</h1> :
        <h1>Customer Component for Student</h1>
        }
        <p>This is the Customer count: {count}</p>
        </div>
    );
}
export default Customer;