import { useState, useEffect } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import PostItem from './PostItem'
import Loader from './Loader'
import css from './css/Content.module.css'

function Content() {
    const [ fetchedPosts, setFetchedPosts ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false)

    const fetchImages = async() => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        const { hits } = response.data
        setFetchedPosts(hits);
        setIsLoaded(true)
    }

    useEffect(() => {
        fetchImages()
    }, [])
    
    const handleInputChange = (event) => {
        let name = event.target.value.toLowerCase()
        const filteredPosts = fetchedPosts.filter(post => {
            return post.user.toLocaleLowerCase().includes(name)
        })
        setFetchedPosts(filteredPosts)
    }
    
  return (
    <div className={css.content}>
            <div className={css.titleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input type='search' id='searchInput' placeholder='By author' onChange={handleInputChange} />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.searchResults}>
                {
                    isLoaded 
                    ? <PostItem posts={fetchedPosts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default Content