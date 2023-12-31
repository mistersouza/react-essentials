import React from 'react'
import css from './css/Content.module.css'

function PostItem({ posts }) {
  return (
        posts.map(post => {
            const { title, name, image, description } = post 
            return (
                <div key={title} className={css.searchItem}>
                    <p>{ title }</p>
                    <p>{ name }</p>
                    <img src={ image } alt={name} />
                    <p>{ description }</p>
                </div>
            )
        })
  )
}

export default PostItem