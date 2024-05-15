import React from 'react'
import './HeaderComponent.scss'
import { Layout } from 'antd'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography
const { Header } = Layout

const HeaderComponent = () => {
    return (
        <Header className="header">
            <div className="header__container">
                <Link to={'/'}>
                    <div className="header__logo">
                        <img src="./assets/gamepad.svg" alt="game pad logo" />
                    </div>
                </Link>
                <Title className="header__title">All Games App</Title>
            </div>
        </Header>
    )
}

export default HeaderComponent
