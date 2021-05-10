import React from 'react'


function Sort({ onToggle }) {
    return (
        <div className="w-full flex justify-end" onClick={() => onToggle()}>
            <div className="flex  bg-pink-200 rounded-full px-3 py-1 text-pink-700 cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <div className="mx-1 text-xs">Sort</div>
            </div>
        </div>
    )
}

export default Sort
