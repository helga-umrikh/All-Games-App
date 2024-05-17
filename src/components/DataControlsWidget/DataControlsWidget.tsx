import React from 'react'
import './DataControlsWidget.scss'
import Filter from '../Filter/Filter'
import { useFetchAllFIlterOptionsQuery } from '../../api/DataService'
import { FilterOption } from '../../interfaces/FiltersOptions'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../redux/slices/filtersSlice'
import SortingComponent from '../SortingComponent/SortingComponent'

const DataControlsWidget = () => {
    const { data: platformOptions } = useFetchAllFIlterOptionsQuery('platforms')
    const { data: genresOptions } = useFetchAllFIlterOptionsQuery('genres')
    const dispatch = useDispatch()

    return (
        <div className="data-controls-widget">
            <SortingComponent
                options={[
                    { value: 'rating', label: 'Increase Rating' },
                    { value: '-rating', label: 'Decrease Rating' },
                ]}
                sortingLabel="Rating"
                sortingType="ordering"
            />

            <Filter
                options={
                    platformOptions &&
                    platformOptions.results.map((item: FilterOption) => {
                        return {
                            value: item.id,
                            label: item.name,
                        }
                    })
                }
                filterLabel={'Platforms'}
                filterType={'platforms'}
            />
            <Filter
                options={
                    genresOptions &&
                    genresOptions.results.map((item: FilterOption) => {
                        return {
                            value: item.id,
                            label: item.name,
                        }
                    })
                }
                filterLabel={'Genres'}
                filterType={'genres'}
            />
            <Filter
                options={[
                    { value: 'singleplayer', label: 'Singleplayer' },
                    { value: 'multiplayer', label: 'Multiplayer' },
                ]}
                filterLabel={'Players'}
                filterType={'tags'}
            />

            <Button
                onClick={() => {
                    dispatch(clearFilters())
                }}
            >
                Clear filters
            </Button>
        </div>
    )
}

export default DataControlsWidget
