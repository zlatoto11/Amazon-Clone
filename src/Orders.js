import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  //Runs everytime the user changes.
  useEffect(() => {
    //Only if user exists.
    if (user) {
      // pull in orders from db. User pulled in from react context API using statevalue.
      // Goes into theat user ids order collection, and orders by date created in descending
      // goes through list of orders and stores it.
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      //Set orders to empty if user does not exist.
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        //for all orders create a new Order component
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
