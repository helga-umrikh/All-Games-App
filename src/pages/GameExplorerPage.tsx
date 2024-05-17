import React from 'react'
import GamesList from '../components/GamesList/GamesList'
import DataControlsWidget from '../components/DataControlsWidget/DataControlsWidget'
import { useFetchAllGamesQuery } from '../api/DataService'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const GameExplorerPage = () => {
    const filters = useSelector(
        (state: RootState) => state.filters.selectedFilters
    )
    const { data, error, isLoading } = useFetchAllGamesQuery(filters || null)

    return (
        <div className="game-explorer-page page">
            <div className="page-container">
                <DataControlsWidget />
                <GamesList
                    games={data && data.results}
                    error={error}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default GameExplorerPage
