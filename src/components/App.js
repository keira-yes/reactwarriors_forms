import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            country: ''
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log("submit", this.state)
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    getItems = (items) => {
        return items.map(item => {
            return <option value={item.name} key={item.id}>{item.name}</option>
        })
    };

    render() {

        // const getCountry = countries.map(item => {
        //     return <option value={item.name} key={item.id}>{item.name}</option>
        // });

        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="repeatPassword"
                            placeholder="Enter repeat password"
                            value={this.state.repeatPassword}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countries">Select country</label>
                        <select
                            className="form-control"
                            id="countries"
                            name="country"
                            value={this.state.country}
                            onChange = {this.onChange}
                        >
                            {this.getItems(countries)}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmitForm}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
