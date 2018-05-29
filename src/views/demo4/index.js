import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BeautifulBox = styled.div`
    padding: 20px;
    box-shadow: 2px 2px 2px 2px #eaeaea;
    border-raduis: 2px;
    margin: 5px;
`

export default connect()(class Main extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                <BeautifulBox>
                    Hello Styled.Components`Wow`
                </BeautifulBox>
            </div>
        )
    }
});