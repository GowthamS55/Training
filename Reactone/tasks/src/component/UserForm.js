import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

 const handleChange = (e)=>{
    setFormData((p)=>{
        return {...p , [e.target.name]: [e.target.value] };
    })
 }

  return (
    <div >
      <h2 >User Form</h2>
      <div >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div >
        <h3 >Live Preview:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
}
