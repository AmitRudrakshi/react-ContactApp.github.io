import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();//to prevent page refresh
    if (this.state.name === "" || this.state.phone === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", phone: "", email: "" });//clear fields
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}//e: event
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{10}"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}//e: event
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}//e: event
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;