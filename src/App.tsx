import order from "./mock.json";
import { RowHandler } from "./logic/rowHandler";
import { Sheet } from "./Components/Sheet/Sheet";
import { Destiny } from "./Components/Destiny/Destiny";
import { useState } from "react";
import { Catalog } from "./types";
import { stores } from "./logic/stores";

const App = () => {
  const [store, setStore] = useState<Catalog>(stores[0]);
  const rowHandler = new RowHandler(order);
  const orderGroups = rowHandler.getGroups();
  const totalQty = rowHandler.getTotalQty();

  const handleStoreUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = Number(e.target.value);
    const newStore = stores.find((store) => store.id === newId);
    if (!newStore) return;
    setStore(newStore);
  };
  return (
    <div>
      <Destiny store={store} updateStore={handleStoreUpdate} />
      {orderGroups.map((orderGroup, idx) => (
        <Sheet key={idx} orderGroup={orderGroup} totalQty={totalQty} />
      ))}
    </div>
  );
};

export default App;
