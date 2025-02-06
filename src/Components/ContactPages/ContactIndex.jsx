import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContact from "./GeneralContact";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "benp@yahoo.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Alan Donald",
          phone: "112-456-9888",
          email: "aland@yahoo.com",
          isFavorite: false,
        },
        {
          id: 3,
          name: "Phoenix Sava",
          phone: "166-636-5720",
          email: "ps780@yahoo.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return {
              ...obj,
              isFavorite: !obj.isFavorite,
            };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.filter((c) => c.id !== contact.id),
    }));
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateClick = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleCancelUpdateContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  cancelUpdateContact = {this.handleCancelUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
