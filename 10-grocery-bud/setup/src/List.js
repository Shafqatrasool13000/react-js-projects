import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, editHandler, deleteHandler }) => {
  return <div>
    <div className="grocery-list">
      {list.map((name, index) => (
        <article key={index} className='grocery-item'>
          <p className="title">{name}</p>
          <div className="btn-container">
            <button onClick={() => editHandler(index, name)} type='button' className="edit-btn"><FaEdit /></button>
            <button onClick={() => deleteHandler(index)} type='button' className="delete-btn"><FaTrash /></button>
          </div>

        </article>
      ))}
    </div>
  </div>
}

export default List
