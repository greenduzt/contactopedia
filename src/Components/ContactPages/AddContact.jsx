import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();

    const name =
      e.target.querySelector("[name='contactName']")?.value.trim() || "";
    const email =
      e.target.querySelector("[name='contactEmail']")?.value.trim() || "";
    const phone =
      e.target.querySelector("[name='contactPhone']")?.value.trim() || "";

    // if (this.props.handleAddContact) {
      
      const response = this.props.handleAddContact({ name:name, email:email, phone:phone });
      
      if (response.status === "success") {
        this.setState({ errorMessage: undefined, successMessage: response.msg });
        document.querySelector(".contactForm").reset();
      } else {
        this.setState({ errorMessage: response.msg, successMessage: undefined });
      }  
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contactForm"
        >
          <div class="row p-2">
            <div className="col-12 text-white-50">Add a new contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
              ></input>
            </div>

            {this.state.errorMessage === undefined ? (<div></div>) : 
            (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}

            {this.state.successMessage === undefined ? (<div></div>) : 
            (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}

            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
