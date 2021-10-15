import TodoInput from "./components/todoinput"
import TodoList from "./components/todolist"
import "bootstrap/dist/css/bootstrap.min.css"
import { v1 as uuid } from "uuid"
import React, { Component } from "react"

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()

    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    console.log(newItem)

    const updatedArray = [...this.state.items, newItem]

    this.setState({
      items: updatedArray,
      id: uuid(),
      item: "",
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = id => {
    const filteredList = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredList
    })
  }

  handleEdit = id => {
    const filteredList = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id == id)
    this.setState({
      items: filteredList,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="m-3">
        <h2 className="text-capitalize text-center">todo input</h2>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    )
  }
}
