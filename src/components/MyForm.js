import React from 'react'
export class MyForm extends React.Component {
  state = {
    value: 'Alpha Avalon'
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Name: ${this.state.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>

        <input type="submit" value="Submit Name" />

        <pre>
          <code>{this.state.value}</code>
        </pre>
      </form>
    )
  }
}
