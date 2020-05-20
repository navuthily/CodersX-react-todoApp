import React, { Component } from 'react';
import { faCheckCircle , faTimesCircle} from '@fortawesome/free-solid-svg-icons';
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
        <a className="p-2  work " id="anan" href="#"><i  className={item.icon}></i><span><h6>{item.name}</h6></span></a>
        <button className='remove'  onClick ={onRemove}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>     </button>
      </div>
    );
  }
}

export default Todolist;
