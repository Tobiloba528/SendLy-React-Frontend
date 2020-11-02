import React, { Component } from "react";
import { getOrders, updateOrder } from "../services/orderService";
import "./styles/profile.css";
import { toast } from "react-toastify";
import Title from "./title";

class Profile extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    const { data: orders } = await getOrders();
    this.setState({ orders });
  }

  handleDestinationChange = async (order) => {
    const destination = prompt("Enter new address Destination");
    const orders = [...this.state.orders];
    const index = orders.indexOf(order);
    orders[index] = { ...orders[index] };
    if (destination === null || destination === "") return;
    orders[index].destination =
      destination.charAt(0).toUpperCase() + destination.substring(1);
      this.setState({ orders });
      
    await updateOrder(orders[index]);
    toast('Destination Updated');
  };

  handleCancel = async (order) => {
    const reply = window.confirm(
      "Are you sure you want to cancel percel order?"
    );
    if (reply) {
      const orders = [...this.state.orders];
      const index = orders.indexOf(order);
      orders[index] = { ...orders[index] };
      orders[index].status = "cancelled";
      this.setState({ orders });

      await updateOrder(orders[index]);
      toast('Order cancelled.');
      console.log(reply);
    }
  };

  render() {
    const { orders } = this.state;
    const inTransit = this.state.orders.filter(
      order => order.status === "in transit"
    );
    const delivered = this.state.orders.filter(
      order => order.status === "delivered"
    );
    const cancelled = this.state.orders.filter(
      order => order.status === "cancelled"
    );

    const getClassBadges = count => {
      let classes = "badge badge-";
      classes += count > 0 ? "success" : "danger";
      return classes;
    };
    return (
      <div id="profile">
        <Title title="Profile" />
        <ul className="list-group">
          <li className="list-group-item list-group-item-dark">Summary</li>
          <li className="list-group-item">
            Number of orders:{" "}
            <span className={getClassBadges(orders.length)}>
              {orders.length}
            </span>
          </li>
          <li className="list-group-item">
            Orders in transit:{" "}
            <span className={getClassBadges(inTransit.length)}>
              {inTransit.length}
            </span>
          </li>
          <li className="list-group-item">
            Delivered Orders :{" "}
            <span className={getClassBadges(delivered.length)}>
              {delivered.length}
            </span>
          </li>
          <li className="list-group-item">
            Cancelled Orders:{" "}
            <span className={getClassBadges(cancelled.length)}>
              {cancelled.length}
            </span>
          </li>
        </ul>

        <table className="table table-hover overflow-auto">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Pickup Location</th>
              <th>Destination</th>
              <th>Recipient Name</th>
              <th>Recipient Mobile Number</th>
              <th>Order Status</th>
              <th>Edit Destination</th>
              <th>Cancel Parcel Order</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.pickup}</td>
                <td>{order.destination}</td>
                <td>{order.recipientName}</td>
                <td>{order.recipientNumber}</td>
                <td>{order.status}</td>
                <td className="text-center">
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.handleDestinationChange(order)}
                    disabled={order.status === "cancelled"}
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleCancel(order)}
                    disabled={order.status === "cancelled"}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
