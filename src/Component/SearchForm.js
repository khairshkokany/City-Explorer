import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      // this.props.updateCityName(event.target.city.value);
      this.props.displayLatLon();
    }
  
    render(){
        return (
      <>
      <h1>City Explorer</h1>
      <Form id='form' onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control  onChange={this.props.updateCityName} className='control' type="city" placeholder="Enter City" name ="city"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        {this.props.showErr && 
          <>

              <strong className="mr-auto">Error {' '}</strong>
              {this.props.error}, please try another search.

          </>
        }
        <Button  variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
      
    
      
      
      
      
      
      </>
      
        )
      }
      
      
      
      }
      
      export default Search;