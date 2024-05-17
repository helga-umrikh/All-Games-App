import React, { FC } from 'react'
import './SortingComponent.scss'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { addFilter } from '../../redux/slices/filtersSlice'

interface SortingProps {
    options: any[]
    sortingLabel: string
    sortingType: string
}

const SortingComponent: FC<SortingProps> = ({
    options,
    sortingLabel,
    sortingType,
}) => {
    const dispatch = useDispatch()
    const selectSorting = (value: string) => {
        dispatch(addFilter({ key: sortingType.toLowerCase(), value }))
    }

    return (
        <Select
            className="sorting-component"
            defaultValue={sortingLabel}
            options={options}
            onChange={selectSorting}
        ></Select>
    )
}

export default SortingComponent
