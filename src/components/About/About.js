import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about'>
          <h3>About</h3>
          </Link>
          <Link to='/about/history'>
          <h3>History</h3>
          </Link>
          <Link to='/about/contact'>
          <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route exact path='/about' render={()=>(
              <div>
              <h1>About the University</h1>
              <p>
              I'm baby gluten-free next level palo santo green juice crucifix cloud bread everyday carry +1, banh mi master cleanse seitan microdosing fam. Ethical squid letterpress cloud bread coloring book kickstarter godard raw denim. Pok pok unicorn live-edge semiotics YOLO irony shaman cred meggings bushwick pabst cloud bread vice brunch thundercats. Glossier venmo chartreuse, authentic kitsch ethical air plant chambray small batch kinfolk cold-pressed. Marfa cold-pressed whatever air plant, shoreditch hell of bespoke trust fund messenger bag meggings tattooed taiyaki kickstarter gochujang.
              </p>
            </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}