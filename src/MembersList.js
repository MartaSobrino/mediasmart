import React from 'react';
import {Link} from 'react-router-dom';
import './MemberList.scss';

class MemberList extends React.Component{
  render(){
    const {List} = this.props;
    return(
      <ul className="list__container">
        {List.map(item =>
          <li className="list__item" key={item.id}>
            <div className="top__information">
              <img className="item__image" src={item.image} alt="imagen usuario"/>
              <h3 className="item__name">{item.name}</h3>
            </div>
            <div className="bottom__information">
              <p className="item__age">{`${item.age} years old`}</p>
              <Link to={`/detail/${item.id}`} className="more__info">Más información</Link>
            </div>
          </li>
        )}

      </ul>
    );
  }
}

export default MemberList;
