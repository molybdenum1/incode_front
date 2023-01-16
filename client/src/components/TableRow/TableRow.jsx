import { TD } from "./tablerow.style";

function TableRow({ quote }) {
  const { ticker, exchange, price, change, dividend } = quote;
  const isChanged = change > 0 ? true : false;

  return (
    <tr>
      <TD>{ticker}</TD>
      <TD>{price}$ </TD>
      <TD>
        {isChanged ? (
          <div style={{ color: "green" }}>+{change}$</div>
        ) : (
          <div style={{ color: "red" }}>-{change}$</div>
        )}
      </TD>
      <TD>{exchange}</TD>
      <TD>{dividend}</TD>
    </tr>
  );
}

export default TableRow;
