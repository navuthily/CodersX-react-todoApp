import React, { Component } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Todolist extends Component {
  render() {
    const {item,onClick,onRemove} = this.props;
 
    let className ='TodoItem ';
    if(item.isComplete===true){
      className +='TodoItem-complete';
    }
    return (
      <div className={className } >
        <FontAwesomeIcon onClick={onClick} className='facheckcircle' icon={faCheckCircle} />
        <a className="p-2 text-dark work " id="anan" href="#"><i  className={item.icon}></i>{item.name}</a>
        <button onClick ={onRemove}>Remove</button>
      </div>
    );
  }
}

export default Todolist;