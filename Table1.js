import * as React from 'react';


const Table1 = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table1;
