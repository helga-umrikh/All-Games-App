import React, { FC } from 'react'
import './Filter.scss'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { addFilter } from '../../redux/slices/filtersSlice'

interface FilterProps {
    options: any[]
    filterLabel: string
    filterType: string
}

const Filter: FC<FilterProps> = ({ options, filterLabel, filterType }) => {
    const dispatch = useDispatch()
    const selectFilter = (value: string) => {
        dispatch(addFilter({ key: filterType.toLowerCase(), value }))
    }

    return (
        <Select
            className="filter"
            defaultValue={filterLabel}
            options={options}
            onChange={selectFilter}
        ></Select>
    )
}

export default Filter
