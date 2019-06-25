import React from 'react';
import fetch from 'isomorphic-fetch';
import logo from './images/logo-mediasmart.png';
import MemberList from './MembersList';
import MemberCard from './MemberCard';
import {Route, Switch} from 'react-router-dom';
import './Header.scss';
import './App.scss';

class App extends React.Component{
  constructor(props) {
    super(props);
      this.state= {
        dataList: []
      };
  }

  async FETCH() {
    await fetch('http://work.mediasmart.io?page=1&page_size=20', 
      {
      headers: {
        authorization: 'mediasmart2019'
      }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataList: data
        });
      });
  }

  componentDidMount(){
    this.FETCH();
  }

  render(){
    const {dataList} = this.state;
    return (
      <div className="container">
      <header className="header">
        <h1 className="logo__container">
          <img className="mediasmart__logo" src={logo} alt="mediamart logotipo"/>
        </h1>
        <h2 className="header__members">Members</h2>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={() =>
            <MemberList
            List={dataList}
            />  
          }
          />
          <Route
            path="/detail/:id"
            render={props => 
              <MemberCard 
              match={props.match}
                List={dataList}
              />
            }
          />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;