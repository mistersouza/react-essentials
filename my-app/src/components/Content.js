import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import PostItem from './PostItem'
import Loader from './Loader'
import css from './css/Content.module.css'

export class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false,
        posts: []
      }
    }
    
    fetchImages() {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        .then(response => {
            this.setState({
                posts: response.data.hits,
                isLoaded: true
            })
        })
    }

    componentDidMount() {
        this.fetchImages()
    }


    handleInputChange = (event) => {
        let name = event.target.value.toLowerCase()
        const filteredPosts = this.state.posts.filter(post => {
            return post.user.toLowerCase().includes(name); 
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