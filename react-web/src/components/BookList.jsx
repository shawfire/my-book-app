import React from 'react'
import Book from './Book'

export default function BookList({
    items
}) {
    return (
        <div>
          {
              items.map((item, index) => (
                  <Book key={ item._id }
                      title={ item.title }
                      author={ item.author }
                  />
              ))
          }
        </div>
    )
}