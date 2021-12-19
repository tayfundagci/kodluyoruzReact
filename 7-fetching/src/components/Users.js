import {useEffect, useState} from 'react'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        // .then((res) => res.json()) //axios ile yapınca buna gerek yok (npm add axios)
        .then((res) => setUsers(res.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false)) // Loadingi yok etmek için
    }, [])

    return (
        <div>
            <h1>Users</h1>

            { isLoading && <div>Loading...</div>} 

            {
                users.map((user) => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users
