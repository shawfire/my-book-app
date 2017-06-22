import React from 'react'
// import BookFormContainer from './BookFormContainer'

export default function Book({
    title,
    author
}) {
    return (
        <div>
            {/*<BookFormContainer />*/}
            <div>
                <h2>{ title }</h2>
                { 
                author ? <h4>by: { author }</h4> : ""
                }
            </div>
        </div>
    )
}