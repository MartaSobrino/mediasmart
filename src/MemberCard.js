import React from 'react';
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
          </div>
          <div className="main__information">
            <p className="member__name">{`Name: ${data.name}`}</p>
            <p className="member__age">{`Age: ${data.age}`}</p>
          </div>
          <div className="bio__information">
            <p className="member__bio">{`Bio: ${data.bio}`}</p>
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