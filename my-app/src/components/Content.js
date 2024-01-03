import React, { Component, useState, useEffect } from 'react'
import PostItem from './PostItem'
import Loader from './Loader'
import { savedPosts as posts } from '../posts.json'
import css from './css/Content.module.css'

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: []
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: posts
            })
        }, 2000)
    }

    handleInputChange = (event) => {
        let name = event.target.value.toLowerCase()
        const filteredPosts = posts.filter(post => {
            return post.name.toLowerCase().includes(name); 
        })
        this.setState({
            posts: filteredPosts
        })
    }

  render() {
    return (
        <div className={css.content}>
            <div className={css.titleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input type='search' id='searchInput' placeholder='By author' onChange={this.handleInputChange} />
                    <h4>posts found: {this.state.posts.length}</h4>
                </form>
            </div>
            <div className={css.searchResults}>
                {
                    this.state.isLoaded 
                    ? <PostItem posts={this.state.posts} />
                    : <Loader />
                }
            </div>
        </div>
    )}
}

export default Content; 