import React from 'react'
import './input.css';

class Input extends React.Component {
    constructor(props) {
    super(props);
        console.log('CONSTRUCTOR');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        const {
        type,
        className,
        placeholder,
        value,
        onClick,
        onKeyPress,
    } = this.props

        return (
            <input
                type = {type}
                className = {className}
                placeholder = {placeholder}
                value = {value}
                onClick = {onClick}
                onKeyPress = {onKeyPress}
            />
        )
    }
}

export default Input;
