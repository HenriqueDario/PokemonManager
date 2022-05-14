import React, { Component } from 'react';

export class Login extends Component {
  static displayName = Login.name;

  constructor(props) {
      super(props);
      this.state = { email: '', password: '' };
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChangeEmail(event) {
        this.setState({ value: event.target.email });
    }
    handleChangePassword(event) {
        this.setState({ value: event.target.password });
    }

    handleSubmit(event) {
    event.preventDefault();
    alert('Um nome foi enviado: ' + this.state.email);
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label style={styles.lblEmail}>
                Email:
            </label>
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
            <br/>
            <label style={styles.lblPassword}>
                Password:
            </label>
            <br />
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
            <br />
            <input type="submit" value="Enviar" />
        </form>
    );
  }
}

const styles = {
    lblEmail: {
        width: "100%",

    },
    lblPassword: {
        width: "30%",
    },
    txtEmail: {
        width: "100%",

    },
    txtPassword: {
        width: "30%",
    },
    btnSubmit: {
        width: "30%",
    }
};