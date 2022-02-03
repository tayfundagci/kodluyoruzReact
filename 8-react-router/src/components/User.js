import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
// ilk olarak projeye npm add axios yapılmalı.
function User() {
    const [loading, setLoading] = useState(true) // Loading...
    const [user, setUser] = useState({});

    const { id } = useParams();
 
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`) // api den veri bu şekilde çekilir. 
        .then(res => setUser(res.data)).finally(() => setLoading(false)) // Loadingin gitmesini sağlar
    }, [id]); // next user'daki user bilgilerinin dğeiişmesi için buraya id eklendi.

    return <div>
        <h1>User Detail</h1>
        {loading && <div>Loading...</div>} {/* loading varsa loading yazdır. */}
        {!loading && <code>
            {JSON.stringify(user)}
        </code>}
            <br /><br />
        <Link to={`/user/${parseInt(id)+1}`}>
            Next User ({parseInt(id)+1}) 
            </Link>
    </div>;
}

export default User;
