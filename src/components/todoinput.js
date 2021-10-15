import React, { Component } from "react"

export default class todoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text text-white bg-primary p-3">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input type="text" placeholder="add a todo item" className="text-capitalize form-control" onChange={handleChange} value={item} />
          </div>
          <button type="submit" className={editItem ? "btn btn-success d-block w-100  m-auto mt-3" : "btn btn-primary d-block w-100  m-auto mt-3"}>
            {editItem ? "Edit item" : "Add item"}
          </button>
        </form>
      </div>
    )
  }
}
