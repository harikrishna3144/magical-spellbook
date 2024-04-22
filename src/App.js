import axios from 'axios';
import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';
import MagicWand from './MagicWand';


function App(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try{
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    }catch(error){
      console.log('Error fetching users:', error);
    }
  }


  return(
    <div>
      <h1>Magical Users</h1>
      <div className='user-container'>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}

      </div>
      <MagicWand />
    </div>
  )
}

export default App;