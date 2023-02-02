import { Table } from 'react-bootstrap';

const TableList = ({ employees, handleDelete, handleEdit }) => { 
    return(
        <>
        <Table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>FirstName</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { employees.length > 0 ? (
                employees.map((employee, i) => (
                    <tr key={ employee.id }>
                        <td>{ i + 1 }</td>
                        <td>{ employee.firstName }</td>
                        <td>{ employee.lastName }</td>
                        <td>{ employee.email }</td>
                        <td>{ employee.salary }</td>
                        <td>{ employee.date }</td>
                        <td><button className='btn btn-secondary' onClick={() => handleEdit(employee.id) }>Edit</button> <button className='btn btn-danger' onClick={() => handleDelete(employee.id) }>Delete</button></td>
                    </tr>
                ) ) ) : (
                    <tr>
                        <td>No Employees</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
        </>

)}
export default TableList;