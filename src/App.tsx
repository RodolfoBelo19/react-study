import { useState } from "react"
import { Button } from "./components/Button"
import { Order } from "./components/Order"

function App() {
  const [orders, setOrders] = useState<string[]>([
    'Pedido 1',
    'Pedido 2',
    'Pedido 3',
    'Pedido 4',
  ])

  function createOrder() {
   setOrders([...orders, 'Pedido 5'])
  }

  return (
    <div>
      {orders.map(order => {
        return <Order text={order}/>
      })}

      {/* 
      exemplo button reutilizável <Button text="Add Order"/> */}

      <button onClick={createOrder}
        style={{
        backgroundColor: "#000",
        color: "#f1f1f1",
        borderRadius: "8px",
        fontSize: "15px",
      }}>
          Add Order
      </button>
    </div>
  )
}

export default App
