import React, { Component, Fragment } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context';

export class Contacts extends Component {

  
  

  deleteContact = (id) => {
    let contacts = this.state.contacts.filter(contact => contact.id !== id)

    this.setState({
      contacts
    })
  }

  render() {

    return (
      <Consumer>
        {value => {

          // Destructuring and  accessing State
          const { contacts} = value

          return (

            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>

              {
                contacts.map(contact => (
                  <Contact
                    key={contact.id} 
                    contact={contact}
                    deleteClickHandler={this.deleteContact}
                  />
                ))
              }
            </Fragment>

          )
        }}
      </Consumer>
    )

    
  }
}

export default Contacts
