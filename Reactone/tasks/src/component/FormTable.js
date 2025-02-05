import React, { useState } from 'react';
import './FormTable.css'

const FormTable = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
      if(!formData.name || !formData.email || !formData.phone){
        alert("Please fill all fields");
        return;
      }
      if (editIndex !== null) {
        const updatedData = [...tableData];
        updatedData[editIndex] = formData;
        setTableData(updatedData);
        setEditIndex(null);
    }else {
      setTableData([...tableData, formData]);
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleDelete = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]); 
    setEditIndex(index);
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>
        <button type="submit">
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>
                <button onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default FormTable;