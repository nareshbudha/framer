import React, { useState } from 'react';

// Form component
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({}); // Clear form after submission
  };

  return (
    <form className='flex flex-row gap-2' onSubmit={handleSubmit}>
      <input className='px-1 py-1 border-2 rounded mx-10' type="text" name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} />
      <input className='px-1 py-1 border-2 rounded mx-10'  type="text" name="age" placeholder="Age" value={formData.age || ''} onChange={handleChange} />
      <button className='text-red-500 px-10 py-5 bg-green-400' type="submit">Submit</button>
    </form>
  );
};

// Table component
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr  className='flex gap-2'>
          <th >Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Parent component
const Tables = () => {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData([...tableData, formData]);
  };

  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={handleFormSubmit} />
      <h1>Table</h1>
      <Table data={tableData} />
    </div>
  );
};

export default Tables;


