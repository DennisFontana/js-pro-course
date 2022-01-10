import React from 'react';
import "./emojiList.css"

class EmojiList extends React.Component {
  render() {
    const emojiList = this.props.list.map((item) => {
      return <li key={item.title}>{item.symbol}</li>
    })
    
    return (
        <ul>
          {emojiList}
        </ul>
    )
  }
}

export default EmojiList