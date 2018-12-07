import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../components/utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Warehouses extends Component {
  state = {
    Warehouses: [],
    Name: "",
    Sections: "",
    Items: "",
    Aisles:"",
    Notes: ""

};

  componentDidMount() {
    this.getWarehouses();
  }

  getWarehouses = () => {
    API.getWarehouses()
      .then(res =>{
        console.log(res.data);
        this.setState({ Warehouses: res.data,Location:"", Warehouse: "" })
      })
      .catch(err => console.log(err));
  };

  deleteWarehouse = id => {
    API.deleteWarehouse(id)
      .then(res => this.getWarehouses())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log(event)
    const getName = name => name.slice(0, -5)
    const { name, value } = event.target;
    let inputChangeObj = {
      [getName(name)]: value
    }
    // let inputChangeObj = {
    //   [name]: value
    // }
    // {
    //   "Warehouse Name": "mycoolwarehouse"
    // }
    // Object.keys(inputChangeObj) => ["Warehouse Name"]
    // ["Warehouse Name"] => [{ "Warehouse": "mycoolwarehouse" }]
    // [{ "Warehouse": "mycoolwarehouse" }] => { "Warehouse": "mycoolwarehouse" }
    // inputChangeObj = Object.keys(inputChangeObj).map(startingKey =>{
    //   const endingKey = getName(startingKey)
    //   return { [endingKey]: inputChangeObj[startingKey] }
    // })[0]
    this.setState(inputChangeObj, () => console.log(this.state));

  };

  handleFormSubmit = event => {

    event.preventDefault();
    if (this.state.Warehouse && this.state.Location) {
      console.log(this.state)
      API.saveWarehouse({
        Warehouse: this.state.Warehouse,
        Location: this.state.Location,
        // Aisles: this.state.Warehouse,
        // Items: this.state.Items,
        // Section: this.state.Section,
        // Notes: this.state.Notes
      })
        .then(res => this.getWarehouses())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Warehouses</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.Warehouse}
               handleChange={this.handleInputChange}
                name="Warehouse Name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.Location}
               handleChange={this.handleInputChange}
                name="Location Name"
                placeholder="Location (required)"
              />
              {/* <Input
                value={this.state.Section}
                handleChange={this.handleInputChange}
                name="Section"
                placeholder="Section (required)"
              />
               <Input
                value={this.state.Aisles}
               handleChange={this.handleInputChange}
                name="Aisles"
                placeholder="Aisle (required)"
              />
              <Input
                value={this.state.Items}
               handleChange={this.handleInputChange}
                name="Items"
                placeholder="Item Name (required)"
              />
              <TextArea
                value={this.state.Notes}
               handleChange={this.handleInputChange}
                name="Notes"
                placeholder="Notes (Optional)"
              /> */}
              <code>
                <p>this.state is: {JSON.stringify(this.state)}</p>
                <p>the value of !(this.state.Warehouses && this.state.Location) is: {JSON.stringify(!(this.state.Warehouse && this.state.Location))}</p>
              </code>
              <FormBtn
                disabled={!(this.state.Warehouse && this.state.Location)}
                onClick={this.handleFormSubmit}
              >
                Submit Warehouse
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Available Warehouses</h1>
            </Jumbotron>
            {this.state.Warehouses.length ? (
              <List>
                {this.state.Warehouses.map(Warehouse => (
                  <ListItem key={Warehouse._id}>
                    <Link to={"/api/warehouses/" + Warehouse._id}>
                      <strong>
                        {Warehouse.Name}
                        {Warehouse.Location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteWarehouse(Warehouse._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Warehouses;
