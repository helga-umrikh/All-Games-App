import React, { FC } from 'react'
import './GamesList.scss'
import { Carousel, List } from 'antd'
import { AllGames } from '../../interfaces/AllGamesInterfaces'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { Typography } from 'antd'
const { Title } = Typography

interface GamesListProps {
    games: AllGames[]
    error: FetchBaseQueryError | SerializedError | undefined
    isLoading: boolean
}

const GamesList: FC<GamesListProps> = ({ games, error, isLoading }) => {
    return error ? (
        <div className="error">
            <Title className="error__title"> Error </Title>
        </div>
    ) : (
        <List
            className="games-list"
            loading={isLoading}
            dataSource={games}
            bordered
            renderItem={(item) => (
                <List.Item className="game" key={item.id}>
                    <div>
                        <div className="game__poster">
                            <img
                                src={item.background_image}
                                alt="poster of a game"
                            />
                        </div>
                        <div className="game__description">
                            <p>{item.rating}</p>
                            <Title level={4}>{item.name}</Title>
                            <p>{`Playtime: ${item.playtime}`}</p>
                        </div>
                    </div>
                    <Carousel className="game__screenshots-carousel">
                        {item.short_screenshots.map((i) => (
                            <div className="screenshots-carousel__item">
                                <img
                                    src={i.image}
                                    alt={`${item.name}screenshots`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </List.Item>
            )}
        ></List>
    )
}

export default GamesList
