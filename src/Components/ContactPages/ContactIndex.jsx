import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContact from "./GeneralContact";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

 class ContactIndex extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{minHeight : "85vh"}}>
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
                    <FavoriteContacts />
                </div>
                <div className="row py-2">
                    <GeneralContact />
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;