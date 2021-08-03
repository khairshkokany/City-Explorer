import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.displayLatLon();
    }
  
    render(){
        return (
      <>
      <h1>City Explorer</h1>
      <Form id='form' onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control className='control' type="city" placeholder="Enter City" name ="city"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <Button onChange={this.props.updateCityName} variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
      
    
      
      
      
      
      
      </>
      
        )
      }
      
      
      
      }
      
      export default Search;