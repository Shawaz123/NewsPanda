import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps ={
  country:'in',
  pageSize:8,
  category : "science"
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
    }
  articles = []
  constructor(){
    super()
    this.state = {
      articles : this.articles,
      loading :  true,
      page: 1

      
    }
    
  
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=73b94410c69c48299f28256e362cb2d4&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
   this.setState({articles:parsedData.articles
    ,totalResults:parsedData.totalResults,
  loading:false})
  }

  handleNextClick = async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}
    else{  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=73b94410c69c48299f28256e362cb2d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({page:this.state.page+1,
      articles:parsedData.articles,
    loading:false})

    }
  }
  handlePrevClick = async()=>{
    
   {  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=73b94410c69c48299f28256e362cb2d4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
   this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({page:this.state.page-1,
      articles:parsedData.articles,
    loading:false})

    }
  }
  

render() {
    return (
      <div className='container my-3 zflex'>
        <h2 className='text-center'>News Panda -- Top HeadLines</h2>
        
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{return  <div className='col md-4 my-2' key={element.url}>
        <Newsitem title ={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>})}
        <div className="container d-flex justify-content-between">
    <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
      
        </div>
      </div>
    )
  }
}



export default News
