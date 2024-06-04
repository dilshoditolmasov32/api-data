import axios from '../api';
import { useState, useEffect } from 'react';

export default function UserPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Users data</h1>
      <table className="table table-striped m-2">
        <thead>
          <tr>
            <th scope="col">T/r</th>
            <th scope="col">FullName</th>
            <th scope="col">Company (role)</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{item.company.title}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
