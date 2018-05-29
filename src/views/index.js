import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';

class Main extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            welcomeWords: 'Hello World',
            items: [
                {
                    name: 'demo1',
                    href: '/demo1',
                },
                {
                    name: 'demo2',
                    href: '/demo2',
                },
                {
                    name: 'demo3',
                    href: '/demo3'
                }
            ]
        }
    }
    itemOnClick(item) {
        this.props.history.push(item.href);
    }
    render() {
        return (
            <div>
                <div>
                    <img src={logo} />
                </div>
                <div onClick={() => {
                    this.setState({
                        ...this.state,
                        welcomeWords: 'Halo Wrrd!!!',
                    });
                }}>{this.state.welcomeWords}</div>
                <ul>
                    {
                        this.state.items.map((item, index) => (
                            <li onClick={() => { this.itemOnClick(item) }} key={index}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect()(Main);