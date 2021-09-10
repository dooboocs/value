import React, { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { db } from "fbase";
import Transaction from "./Transaction";

function TransactionWidget() {
  const [transactions, setTransactions] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const col = collection(db, "transactions");
      const q = query(col, orderBy("date"), limit(3));
      const snapshot = await getDocs(q);
      let data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTransactions(data);
    })();
  }, []);

  return transactions.map((item) => <Transaction {...item} key={item.id} />);
}

export default TransactionWidget;
