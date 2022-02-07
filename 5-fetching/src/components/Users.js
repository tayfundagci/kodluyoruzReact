import { useEffect, useState } from 'react'; 
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data)) // ekranda göstermek için useState kullan
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))

    }, [])

  return (
    <div>
    <h1>Users</h1>

    {isLoading && <div>Loading...</div>}
        <div>
            {
                <div>
                {
                    users.map((user) => ( 
                        <li key={user.id}>

                            <span className='test'>ID</span> = {user.id} <br /> 
                            <span className='test'>Name</span> = {user.name} <br /> 
                            <span className='test'>Username</span> = {user.username} <br /> 
                            <span className='test'>Email</span> = {user.email} <br /> 
                            <span className='test'>Phone</span> = {user.phone} <br />
                            <span className='test'>Website</span> = {user.website} <br /> <br />

                        </li>
                         ))
                }
                </div>
            }
        </div>
    </div>
  );
}

export default Users;
    