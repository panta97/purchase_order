import order from "./mock.json";
import { RowHandler } from "./logic/rowHandler";
import { Sheet } from "./Components/Sheet/Sheet";

const App = () => {
  const rowHandler = new RowHandler(order);
  const orderGroups = rowHandler.getGroups();
  const totalQty = rowHandler.getTotalQty();

  // debugger;
  return (
    <div>
      {orderGroups.map((orderGroup, idx) => (
        <Sheet key={idx} orderGroup={orderGroup} totalQty={totalQty} />
      ))}
    </div>
  );
};

export default App;
