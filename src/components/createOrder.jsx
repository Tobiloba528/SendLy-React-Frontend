import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { saveOrder } from '../services/orderService';
import Title from './title';

class CreateOrder extends Form {
    state = {  
        data: { pickup: "", destination: "", recipientName: "", recipientNumber: ""},
    }


    schema = {
        pickup: Joi.string().required().label('Pickup Location'),
        destination: Joi.string().required().label('Destination'),
        recipientName: Joi.string().required().label('Recipient Name'),
        recipientNumber: Joi.string().min(11).max(11).required().label('Recipient Number')
    }

    doSubmit = async () => {
        await saveOrder(this.state.data);
        
        this.props.history.push('/profile');
    }


    render() { 
        const { pickup, destination, recipientName, recipientNumber } = this.state.data
        return (
          <form id="register-form" onSubmit={this.handleSubmit}>
            <Title title="Create Order" />
            <div id="inner-register">
              <h1>Create Order</h1>
              <div className="form-group">
                <label htmlFor="pickup">Pickup Location</label>
                <input
                  type="type"
                  className="form-control"
                  id="pickup"
                  name="pickup"
                  onChange={this.handleChange}
                  value={pickup}
                  autoFocus
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  id="destination"
                  name="destination"
                  value={destination}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipientName">Recipient Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipientName"
                  name="recipientName"
                  value={recipientName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipientNumber">Recipient Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="recipientNumber"
                  name="recipientNumber"
                  value={recipientNumber}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ display: "block" }}
              >
                Submit
              </button>
            </div>
          </form>
        );
    }
}
 
export default CreateOrder;