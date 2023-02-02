import { useState } from "react";
import Swal from 'sweetalert2'

const Add = ({ employees, setEmployees, setIsAdd }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    
    const handleAdd = (e) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !salary || !email || !date){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            }); 
        }
        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
        }

        employees.push(newEmployee);
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees)
        setIsAdd(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }
         
    return(
        <>
            <h2 className="text-center">Add Employee</h2>
            <form onSubmit={ handleAdd }>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" value={firstName} className="form-control" onChange={e => setFirstName(e.target.value)}  id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" value={lastName } name="lastName" className="form-control" id="lastName" onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="number" className="form-control" id="salary" onChange={e => setSalary(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" onChange={e => setDate(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-outline-dark mx-2" onClick={() => setIsAdd(false)}>Cancel</button>
            </form>
        </>
    )
}

export default Add;