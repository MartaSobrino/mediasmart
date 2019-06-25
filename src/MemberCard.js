import React from 'react';
import {Link} from 'react-router-dom';
import './MemberCard.scss';

class MemberCard extends React.Component {
  render(){
    const {List} = this.props;
    const id = this.props.match.params.id;
    const data = List.find(person => person.id === id);
    console.log(data);
    return(
      <React.Fragment>
        {data ? 
          <div className="card__container">
            <div className="main__image">
              <img className="member__image" src={data.image} alt={data.name}/>
              <div className="main__information">
                <p className="member__name"><span className="bold">Name: </span>{data.name}</p>
                <p className="member__age"><span className="bold">Age: </span>{data.age}</p>
              </div>
            </div>
            
            <div className="bio__information">
              <p className="member__bio"> <span className="bold">Bio: </span>{data.bio}</p>
            </div>
            <div className="back__container">
              <Link className="back__to" to="/">Cerrar</Link>            
            </div>
          </div>
          :
          <p>No hay datos disponibles</p>
        }
      </React.Fragment>
    );
  }
}

export default MemberCard;