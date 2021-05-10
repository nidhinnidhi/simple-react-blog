import React from 'react'
import Sort from './Sort'

const Title = ({ text, withFilter, onToggle }) => {
    return (
        <div className="bg-white rounded-t-lg px-5 py-3 mt-6 mb-3 flex justify-between items-center">
            <h1 className="text-2xl text-left uppercase text-gray-700 ">{text}</h1>
            {withFilter ?
                <Sort onToggle={onToggle}></Sort>
                : ''}
        </div>
    )
}

export default Title
