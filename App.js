// App.js
import React from 'react';
import { SQLiteProvider } from 'expo-sqlite';
import ExpenseScreen from './ExpenseScreen';

export default function App() {
  return (
    <SQLiteProvider databaseName="expenses.db">
      <ExpenseScreen />
    </SQLiteProvider>
  );
}
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('expenses.db');

const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount REAL NOT NULL,
        category TEXT NOT NULL,
        note TEXT,
        date TEXT NOT NULL
      );`
    );
  });
};

// Call this once at startup
initDB();
import { useState } from 'react';

const [filter, setFilter] = useState('all'); // 'all', 'week', or 'month'

