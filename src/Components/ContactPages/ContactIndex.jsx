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
        { id: 1, name: "Ben Parker", phone: "666-666-7770", email: "benp@yahoo.com", isFavorite: true },
        { id: 2, name: "Alan Donald", phone: "112-456-9888" , email: "aland@yahoo.com", isFavorite: false },
        { id: 3, name: "Phoenix Sava", phone: "166-636-5720", email: "ps780@yahoo.com", isFavorite: true }
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContacts contacts ={this.state.contactList.filter((u) => u.isFavorite === true)} />
            </div>
            <div className="row py-2">
              <GeneralContact contacts ={this.state.contactList.filter((u) => u.isFavorite === false)} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
