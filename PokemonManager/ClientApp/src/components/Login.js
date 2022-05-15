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
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Um nome foi enviado: ' + this.state.email);
    }


    render() {
        return (
            <div style={styles.form}>

                <form onSubmit={this.handleSubmit} >
                    <div class="form-group">
                        <label style={styles.title}>
                            Login
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            Email:
                        </label>
                        <input type="text" id="email" style={styles.txtArea} class="form-control" value={this.state.email} onChange={this.handleChangeEmail} />
                    </div>
                    <div class="form-group">
                        <label>
                            Password:
                        </label>

                        <input type="password" id="password" style={styles.txtArea} class="form-control" value={this.state.password} onChange={this.handleChangePassword} />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-success" style={styles.button} value="Login" />
                    </div>

                </form>
            </div>
        );
    }
}

const styles = {
    form: {
        display: "flex",
        JustifyContent: "center",
        alignItems: "center",
        marginLeft: "35%",
    },
    txtArea: {
        width: "120%",
    },
    button: {
        width: "70%",
        marginLeft: "25%",
        marginTop: "3%",
    },
    title: {
        width: "70%",
        heigth: "50%",
        fontSize: "40px",
        fontWeight: "bold",
        marginLeft: "35%",
        marginBottom: "10%",
        marginTop: "10%",
    }
};