const orders = [
  {
    _id: 1,
    pickup: "Egbeda",
    destination: "Ikorodu",
    recipientName: "Okelabi",
    recipientNumber: "08132138380",
    status: "in transit"
  },
  {
    _id: 2,
    pickup: "Ogbomosho",
    destination: "Ilorin",
    recipientName: "Tobiloba",
    recipientNumber: "08165543329",
    status: "delivered"
  },
  {
    _id: 3,
    pickup: "Ketu",
    destination: "CSM",
    recipientName: "Bisola",
    recipientNumber: "O9035671771",
    status: "delivered"
  },
   {  _id: 4,
    pickup: "Ibadan",
    destination: "Ife",
    recipientName: "Mrs Omitomo",
    recipientNumber: "08139427475",
    status: "cancelled"
  }
];


export function getOrders(){
    return orders;
}

export function saveOrder(order){
  let orderInDb = {};
  orderInDb.pickup = order.pickup;
  orderInDb.destination = order.destination;
  orderInDb.recipientName = order.recipientName;
  orderInDb.recipientNumber = order.recipientNumber;
  orderInDb.status = 'in transit'

  if(!orderInDb._id) orderInDb._id = orders.length + 1;

  orders.push(orderInDb);
}

