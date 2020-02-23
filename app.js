const TransactionsIndex = (props) => {
  return (
    <div className="transactions-index">
    {
      props.transactions.map( transaction =>
        <Transaction
          amount={transaction.amount}
          category={transaction.category}
          id={transaction.id}
          key={transaction.id.toString()}
          date={transaction.date}
        />
      )
    }
    </div>
  );
}

const Transaction = (props) => {
  return (
    <div className="transaction">
      <span className="transaction-category">
        { props.category }
      </span>
      <span className="transaction-amount">
        € { props.amount }
      </span>
      <span className="transaction-date">
        { props.date }
      </span>
    </div>
  );
}

const TransactionInserter = (props) => {
  return (
    <div className="transaction-inserter">
      <form action="" onSubmit={ (e) => { props.addTransaction(999999); e.preventDefault(); } }>
        <label htmlFor="amount">Amount</label><br />
        <input type="text" name="amount" id="amount" value="11.20" /><br />
        <label htmlFor="category">Category</label><br />
        <input type="text" name="category" id="category" value="2" /><br />
        <label htmlFor="date">Date</label><br />
        <input type="text" name="date" id="date" value="10/02/2020" /><br />
        <input type="submit" value="Add transaction" />
      </form>
    </div>
  );
}

class App extends React.Component {
  state = {
    transactions: [
      {
        id: 1,
        amount: 10.50,
        category: 1,
        date: "01/01/2020"
      },
      {
        id: 2,
        amount: 12.20,
        category: 2,
        date: "01/01/2020"
      },
      {
        id: 3,
        amount: 18.30,
        category: 1,
        date: "01/01/2020"
      },
      {
        id: 4,
        amount: 6.30,
        category: 3,
        date: "01/01/2020"
      }
    ]
  };

  handleAddTransaction = (transaction) => {
    this.setState( prevState => {
      return {
        transactions: prevState.transactions.concat({ id: 5, amount: 10, category: 11, date: "23/02/2020" })
      }
    })
  }
  
  render() {
    return (
      <div className="ourbalance">
        <TransactionInserter
          addTransaction={ this.handleAddTransaction }
        />

        <TransactionsIndex
          transactions={ this.state.transactions }
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
