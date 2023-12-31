import React, { Component } from 'react'
import PostItem from './PostItem'
import { savedPosts as posts } from '../posts.json'
import css from './css/Content.module.css'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: 1
      }
    }
  render() {
    return (
        <div>
            <div className={css.titleBar}>
                <h1>My Photos</h1>
            </div>
            <div className={css.searchResults}>
                <PostItem posts={posts} />
            </div>
        </div>
    )}
}

export default Content; 