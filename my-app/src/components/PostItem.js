import React from 'react'
import css from './css/Content.module.css'

function PostItem({ posts }) {
  return (
        posts.map(post => {
            const { id, user, type, tags, webformatURL } = post 
            return (
                <div key={id} className={css.searchItem}>
                    <p>{ type }</p>
                    <p>{ user }</p>
                    <img src={ webformatURL } alt={type} />
                    <p>{ tags }</p>
                </div>
            )
        })
  )
}

export default PostItem