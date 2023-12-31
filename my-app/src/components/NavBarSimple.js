import { Component } from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello!', 
            buttonText: 'log in'
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                message: prevState.message === 'Hello!' ? 'Welcome back!' : 'Hello!',
                button: prevState.buttonText === 'log in' ? 'log out' : 'log in'
            } 
        }, () => {
            console.log(this.state.message)
            console.log(this.state.buttonText)
        })
    }

    render() {
        return (
            <div className={css.navBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple