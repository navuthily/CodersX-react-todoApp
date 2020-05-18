import React, { Component } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Todolist extends Component {
  render() {
    const {item,onClick} = this.props;
    let className ='TodoItem ';
    if(item.isComplete===true){
      className +='TodoItem-complete';
    }
    return (
      <div className={className } >
        <FontAwesomeIcon onClick={onClick} className='facheckcircle' icon={faCheckCircle} /> <a className="p-2 text-dark work " href="#"><i  className={item.icon}></i>{item.name}</a>
      </div>
    );
  }
}

export default Todolist;