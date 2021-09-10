import React, { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { db } from "fbase";
import Transaction from "components/Transaction";
import ScreenTemplate from "components/ScreenTemplate";

function TransactionPage() {
  const [transactions, setTransactions] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const col = collection(db, "transactions");
      const q = query(col, orderBy("date"));
      const snapshot = await getDocs(q);
      let data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTransactions(data);
    })();
  }, []);

  return (
    <ScreenTemplate backBtn={true} title="Transactions">
      {transactions.map((item) => (
        <Transaction {...item} key={item.id} />
      ))}
    </ScreenTemplate>
  );
}

export default TransactionPage;
