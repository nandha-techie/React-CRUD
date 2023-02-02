import { useEffect, useState } from 'react';
import Header from './Header';
import TableList from './TableList';
import Add from './Add';
import Edit from './Edit';
import { EmployeesData }  from '../Data/StaticData';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const [employees, setEmployees ] = useState(EmployeesData);
    const [isAdd, setIsAdd ] = useState(false);
    const [isEdit, setIsEdit ] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('employees_data'))
        if(data !== null && Object.keys(data).length !== 0 ) setEmployees(data);
    }, []);

    const handleDelete = (id) => {
        const employeesFilter = employees.filter(employee => employee.id !== id );
        localStorage.setItem('employees_data', JSON.stringify(employeesFilter));
        setEmployees(employeesFilter)
        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `Employee data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
    }
    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id == id)
        setSelectedEmployee(employee)
        setIsEdit(true)
    }

    return(
        <>   
            { !isAdd && !isEdit &&(
                <>
                    <Header setIsAdd={ setIsAdd } />
                    <TableList 
                        employees={ employees }
                        handleDelete={ handleDelete }
                        handleEdit={ handleEdit }
                    />
                </>
            )}
            { isAdd && (
                <Add employees={ employees } 
                setEmployees={ setEmployees }
                setIsAdd={ setIsAdd } />
                )

            }
            { isEdit && (
                <Edit employees={ employees } 
                setEmployees={ setEmployees }
                setIsEdit={ setIsEdit }
                selectedEmployee={ selectedEmployee } />
                )
            }
            
        </>
    )
} 
export default Dashboard;