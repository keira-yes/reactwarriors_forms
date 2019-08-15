import React from "react";
import countries from "../data/countries";
import Field from './Field';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            country: 'USA',
            gender: 'male',
            age: 16,
            policy: true,
            avatar: '',
            errors: {}
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const errors = {};

        if (!this.state.username) {
            errors.username = 'Please enter the username';
        }

        if (this.state.password.length < 5) {
            errors.password = 'Password must be at least 5 characters';
        }

        if (this.state.repeatPassword !== this.state.password) {
            errors.repeatPassword = 'Password must be the same';
        }

        if(this.state.age < 18) {
            errors.age = "You haven't 18 yet";
        }

        if(Object.keys(errors).length > 0) {
            this.setState({
                errors
            });
        } else {
            this.setState({errors: {}});
            console.log("submit", this.state)
        }
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

    onChangeFile = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            this.setState({
                avatar: e.target.result
            })
        };
    };

    onIncrease = () => {
        this.setState(
            (prevState, prevProps) => ({
                age: prevState.age + 1
            }),
            () => {
                this.setState({
                    errors: {
                        age: this.state.age < 18 ? "You haven't 18 yet" : false
                    }
                })
            }
        )
    };

    onDecrease = () => {
        this.setState(
            (prevState, prevProps) => ({
                age: prevState.age - 1
            }),
            () => {
                this.setState({
                    errors: {
                        age: this.state.age < 18 ? "You haven't 18 yet" : false
                    }
                })
            }
        )
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
                    <Field
                        id="username"
                        labelName="Username"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.onChange}
                        error={this.state.errors.username}
                    />
                    <Field
                        id="password"
                        labelName="Password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                    />
                    <Field
                        id="repeatPassword"
                        labelName="Repeat password"
                        type="password"
                        name="repeatPassword"
                        placeholder="Enter repeat password"
                        value={this.state.repeatPassword}
                        onChange={this.onChange}
                        error={this.state.errors.repeatPassword}
                    />
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
                    <div className="form-group">
                        <label>Your age?</label>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={this.onDecrease}
                        >-
                        </button>
                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            placeholder="Enter age"
                            value={this.state.age}
                            onChange = {this.onChange}
                        />
                        {this.state.errors.age ? <span className="invalid-feedback">{this.state.errors.age}</span> : null}
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={this.onIncrease}
                        >+
                        </button>
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="avatar">Onload the avatar</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="avatar"
                            name='avatar'
                            onChange={this.onChangeFile}
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
