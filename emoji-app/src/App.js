import React from 'react';
import './App.css';
import emojiList from "./emojilist.json";
import  EmojiInput  from './components/EmojiInput/EmojiInput'
import  EmojiList  from './components/EmojiList/EmojiList'
import { Select } from './components/Select/Select'


class App extends React.Component {
  state = {
    list: emojiList,
    filterValue: "",
    optionsValue: 10
  }

  handleChangeFilterValue = (value) => {
    this.setState({filterValue: value})
  }
  onChangeOptionsValue = (value) => {
    this.setState({optionsValue: value})  
  }
  render() {
    const filteredList = this.state.list.filter((item) => {
      return item.title.toUpperCase().includes(this.state.filterValue.toUpperCase()) || item.keywords.toUpperCase().includes(this.state.filterValue.toUpperCase());
      
    })
    
    const restricted = filteredList.slice(0, this.state.optionsValue)

    return (
      <div className="wrapper">
        <EmojiInput placeholder="Поиск" type="search" onChangeFilterValue={this.handleChangeFilterValue} />
        <Select  options={[10,20,30,40,50,60]} onChange={this.onChangeOptionsValue}/>
        <EmojiList list={this.state.filterValue && this.state.filterValue !== " " ? restricted : []} />
      </div>
  
    );
  }
}

export default App;
