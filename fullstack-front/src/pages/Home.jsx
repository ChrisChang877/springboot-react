import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    return () => {
      loadUsers();
    };
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  return (
    <div className="py-4 shadow m-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td key={index}>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/viewuser/${user.id}`}>
                  <button className="btn btn-primary mx-2">View</button>
                </Link>

                <Link to={`/edituser/${user.id}`}>
                  <button className="btn btn-outline-primary mx-2">Edit</button>
                </Link>

                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
