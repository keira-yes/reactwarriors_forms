import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            country: 'USA',
            gender: 'male',
            policy: true
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

    onChangeCheckbox = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    };

    getItems = (items) => {
        return items.map(item => {
            return <option value={item.name} key={item.id}>{item.name}</option>
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
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-4 pt-0">Gender</legend>
                            <div className="col-sm-8">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={this.state.gender === 'male'}
                                        onChange = {this.onChange}
                                    />
                                        <label className="form-check-label" htmlFor="male">
                                            Male
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={this.state.gender === 'female'}
                                        onChange = {this.onChange}
                                    />
                                        <label className="form-check-label" htmlFor="female">
                                            Female
                                        </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-4">Privacy policy</div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="agree"
                                    name="policy"
                                    value={this.state.policy}
                                    onChange = {this.onChangeCheckbox}
                                    checked={this.state.policy}
                                />
                                    <label className="form-check-label" htmlFor="agree">
                                        I agree
                                    </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmitForm}>
                        Submit
                    </button>
                </form>
            </div>
    );
    }
    }
