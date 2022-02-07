import React, { useState } from 'react';
import './listUser.scss';
const ListUser = () => {

    return (
    <div className="listUserPadding">
        <p>List User</p>    
    </div>
    )};
  

  
  
  export default ListUser;


  /*
  const [users, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost:8888/api/').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }

  const deleteUser = (id) => {
      axios.delete(`http://localhost:8888/api/${id}`).then(function(response){
          console.log(response.data);
          getUsers();
      });
  }
  return (
      <div className="listUsersDiv">
          <h1>List Users</h1>
          <table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map((user, key) =>
                      <tr key={key}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>
                              <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                              <button onClick={() => deleteUser(user.id)}>Delete</button>
                          </td>
                      </tr>
                  )}
                  
              </tbody>
          </table>
      </div>
  )
}
*/