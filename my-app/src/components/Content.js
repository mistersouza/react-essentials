import React, { Component } from 'react'
import PostItem from './PostItem'
import Loader from './Loader'
import { savedPosts as posts } from '../posts.json'
import css from './css/Content.module.css'

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

  render() {
    return (
        <div className={css.content}>
            <div className={css.titleBar}>
                <h1>My Photos</h1>
            </div>
            <div className={css.searchResults}>
                {
                    this.state.isLoaded 
                    ? <PostItem posts={posts} />
                    : <Loader />
                }
            </div>
        </div>
    )}
}

export default Content; 