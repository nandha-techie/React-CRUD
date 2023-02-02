import { useState } from "react";
import Swal from 'sweetalert2'


const Edit = ({ employees, setEmployees, setIsEdit, selectedEmployee }) => {
    const id = selectedEmployee.id;
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [date, setDate] = useState(selectedEmployee.date);
    
    const submitEdit = (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !email || !salary || !email || !date){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            }); 
        }
        
        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
        }

        for(let i=0; i<employees.length; i++){
            if(employees[i].id == id){
                employees.splice(i, 1, employee)
                break;
            }
        }
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees)
        setIsEdit(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Edited.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }
         
    return(
        <>
            <h2 className="text-center">Edit Employee</h2>
            <form onSubmit={ submitEdit }>
                <div className="mb-3 ">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" value={firstName} className="form-control" onChange={e => setFirstName(e.target.value)}  id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" value={lastName} name="lastName" className="form-control" id="lastName" onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} id="email" onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="number" className="form-control" value={salary} id="salary" onChange={e => setSalary(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" value={date} id="date" onChange={e => setDate(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-outline-dark mx-2" onClick={() => setIsEdit(false)}>Cancel</button>
            </form>
        </>
    )
}

export default Edit;