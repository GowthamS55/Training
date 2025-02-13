import React, { useState } from "react";

const Code = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  const [expenses, setExpenses] = useState([]); 

  const addvalue = () => {
    if (!description.trim() || !amount ||!name) {
      return;
    }
    const newvalue = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      name,
    };
    setExpenses([...expenses, newvalue]);

    setDescription("");
    setAmount("");
    setName("");
    
  };

  const handledetele = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id)); 
  };

  return (
    <>
      <div className="container-sm">
        <h1>Expense Tracker Application</h1>
        <div className="flex space-x-2 mt-4">
          <input className="input-group"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="description"
          />
          <br />
          <input className="input-group"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Amount"
          />
          <br />
          <input className="input-group"
            type="text"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            placeholder="Enter Your name "
          />
          <button onClick={addvalue} className="btn btn-primary">Add</button>
        </div>
        <h2>History</h2>
        <div>
          <ul className="mt-4">
            {expenses.map((expense) => (
              <li className="" key={expense.id}>
                {expense.description} - ${expense.amount} - {expense.name}
                <button onClick={() => handledetele(expense.id)} className="btn btn-primary">Delete</button> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Code;
