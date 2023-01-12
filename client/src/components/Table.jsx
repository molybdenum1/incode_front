import TableRow from "./TableRow";
import "./table.css";

function MyTable({ quotes }) {
  return (
    <div className="table-div">
      <table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Tickers</th>
            <th>Price</th>
            <th>Change</th>
            <th>Exchange</th>
            <th>dividend</th>
          </tr>
        </thead>
        <tbody>
          {quotes &&
            quotes.map((quote) => (
              <TableRow key={quote.ticker} quote={quote} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
