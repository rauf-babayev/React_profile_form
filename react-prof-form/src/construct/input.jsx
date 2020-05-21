import React, { Component} from 'react'
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
    } = this.props

        return (
            <input
                type = {type}
                className = {className}
                placeholder = {placeholder}
                value = {value}
            />
        );
    }
}

export default Input;
