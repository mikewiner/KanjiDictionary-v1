import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components//SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//import { kanjiList } from './kanji';



class App extends Component {
  constructor() {
    super();
    this.state = {
      kanjiList: [],
      searchField: ''
    }
  }

  searchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/jensechu/kanji/master/data/kanji.json')
      .then(response => response.json())
      .then(kanjiList => this.setState({kanjiList: kanjiList.kanji}));
    //console.log(kanjiList);
  }

  render() {
    //console.log('Where are we?',this.state.kanjiList);
    const {kanjiList, searchField} = this.state;
    const filteredKanji = kanjiList.filter(kanji => {
      return (kanji.kunyomi.includes(searchField) 
        || kanji.character.includes(searchField)
        || kanji.meaning.toLowerCase().includes(searchField))
    })

    if (!kanjiList.length){
      return <h1>LOADING</h1>
    } else {
        return(
          <div className='tc '>
            <h1 className='f1'>Mikes Kanji Dictionary</h1>
            <SearchBox searchChange={this.searchChange} />
            <Scroll>
              <CardList kanjiList={filteredKanji}/>
            </Scroll>  
          </div>
        );
      }
  }
}

export default App;