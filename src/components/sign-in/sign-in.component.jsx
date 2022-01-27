import React from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
