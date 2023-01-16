import TableRow from "../TableRow/TableRow";
import { Table, TH } from "./table.style";

function MyTable({ quotes }) {
  return (
    <div className="table-div">
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <TH>Tickers</TH>
            <TH>Price</TH>
            <TH>Change</TH>
            <TH>Exchange</TH>
            <TH>dividend</TH>
          </tr>
        </thead>
        <tbody>
          {quotes &&
            quotes.map((quote) => (
              <TableRow key={quote.ticker} quote={quote} />
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
