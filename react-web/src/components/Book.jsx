import React from 'react'

export default function Book({
    title,
    author
}) {
    return (
        <div>
            <h2>{ title }</h2>
            { 
              author ? <h4>by: { author }</h4> : ""
            }
        </div>
    )
}