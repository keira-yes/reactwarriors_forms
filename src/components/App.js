import React from "react";

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log("refs", this.name.value);
    console.log("submit", this.state)
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node => this.name = node}
              onChange = {this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmitForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
