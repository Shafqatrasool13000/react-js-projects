import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [editID, setEditID] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [list, setlList] = useState([]);
  const [alert, setAlert] = useState({ show: false, title: '', type: '' });

  // List For Changing Reference

  const itemsList = [...list];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent Empty Name
    if (!name) {
      return;
    }
    // Check for Edit or Normal Addition of Items
    else if (name && isEdit) {
      itemsList[editID] = name;
      setlList(itemsList);
      setEditID(null);
      setIsEdit(false);
      setName('');
    } else {
      setlList([name, ...list]);
      setName('');
    }
  }

  const editHandler = (id, value) => {
    setEditID(id);
    setIsEdit(true);
    setName(value);
  }

  // Delete Handler

  const deleteHandler = (id) => {
    setlList(itemsList.filter((_, itemId) => id !== itemId))
  }

  const deleteAll = () => {
    setlList([]);
  }

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      <h3>Grocery bud</h3>
      {alert.show && <Alert />}
      <div className="form-control">
        <input type="text" value={name} className='grocery' onChange={(e) => setName(e.target.value)} />
        <button className='submit-btn' type="submit">{isEdit ? 'Edit' : 'submit'}</button>
      </div>
    </form>
    {
      list.length === 0 ? <div>
        <p>Not Items To Show</p>
      </div> : (
        <div className="grocery-container">
          <List list={list} editHandler={editHandler} deleteHandler={deleteHandler} />
          <button onClick={deleteAll} className="clear-btn">Clear Items</button>
        </div>
      )
    }

  </section>
}

export default App
