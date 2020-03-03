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


class TransactionInserter extends React.Component {
  constructor(props) {
    super(props);
    this.defaultValues = {
      amount: 12.80,
      category: 3,
      date: new Date().toLocaleDateString(),
    }
    this.state = {
      amount: this.defaultValues.amount,
      category: this.defaultValues.category,
      date: this.defaultValues.date
    }
  }

  render() {
    return (
      <div className="transaction-inserter">
        <form action="" onSubmit={ (e) => { this.props.addTransaction({ amount: this.state.amount, category: this.state.category, date: this.state.date }); e.preventDefault(); } }>
          <label htmlFor="amount">Amount</label><br />
          <input type="number" step="0.01" name="amount" id="amount" placeholder={ this.defaultValues.amount } onChange={ (e) => { this.setState({ amount: parseFloat(e.target.value) || 0 }) } } /><br />
          <label htmlFor="category">Category</label><br />
          <input type="number" name="category" id="category" placeholder={ this.defaultValues.category } onChange={ (e) => { this.setState({ category: parseInt(e.target.value) }) } } /><br />
          <label htmlFor="date">Date</label><br />
          <input type="text" name="date" id="date" defaultValue={ this.defaultValues.date } onChange={ (e) => { this.setState({ date: e.target.value }) } }/><br />
          <input type="submit" value="Add transaction" />
        </form>
      </div>
    )
  };
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
        transactions: prevState.transactions.concat({ id: 999999, amount: transaction.amount, category: transaction.category, date: transaction.date })
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
