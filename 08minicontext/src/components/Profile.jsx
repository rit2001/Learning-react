import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const  {User} = useContext(useContext)

    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
        
    
  
}

export default Profile