function TableRow({ quote }) {
  const { ticker, exchange, price, change, change_percent, dividend } = quote;
  const isChanged = change > 0 ? true : false;

  return (
    <tr>
      <td>{ticker}</td>
      <td>{price}$ </td>
      <td>
        {isChanged ? (
          <div style={{ color: "green" }}>+{change}$</div>
        ) : (
          <div style={{ color: "red" }}>-{change}$</div>
        )}
      </td>
      <td>{exchange}</td>
      <td>{dividend}</td>
    </tr>
  );
}

export default TableRow;
