import { Button } from 'react-bootstrap';

const Header = ({ setIsAdd }) => {
    
    return(
        <>
            <h2 className='text-center'>Employees Management</h2>
            <div>
                <button className='btn btn-primary col-1' onClick={() => setIsAdd(true)}>Add</button>
            </div>
        </>
    );
}

export default Header; 