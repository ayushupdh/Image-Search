import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component{
    state= {images:[],count:1};
    
    componentDidMount(){
        this.onSearchSubmit('tech');
    }

    onSearchSubmit=  async (term)=>{
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params:{ query: term }
        })        
        if(response.data.results.length!==0){
            let count1= this.state.count;
            this.setState({images: response.data.results, count:count1+1})
            console.log(this.state.count);
        }else{
            this.setState({count:0, images:[]});
            console.log(this.state.count);
        }
    }
    
    render(){
       console.log(this.state.images);
        return (
            <div className=" ui container" style={{ marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} count={this.state.count} />
            </div>
            
        );
    }
}

export default App;