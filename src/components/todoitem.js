import React, { Component } from "react"

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props
    return (
      <li className="d-flex justify-content-between list-group-item my-2">
        <h6>{title}</h6>
        <div className="todo-icons">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    )
  }
}
