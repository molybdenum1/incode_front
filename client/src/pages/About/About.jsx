import NavBar from "../../components/NavBar/NavBar";
import { Box, Row } from "./about.style";

function About() {
  return (
    <>
      <NavBar />
      <Box>
        <h2>About</h2>
        <Row>
          <h3>Stock Exchange</h3>
          <p>
            A stock exchange, securities exchange, or bourse is an exchange
            where stockbrokers and traders can buy and sell securities, such as
            shares of stock, bonds and other financial instruments. Stock
            exchanges may also provide facilities for the issue and redemption
            of such securities and instruments and capital events including the
            payment of income and dividends.[citation needed] Securities traded
            on a stock exchange include stock issued by listed companies, unit
            trusts, derivatives, pooled investment products and bonds. Stock
            exchanges often function as "continuous auction" markets with buyers
            and sellers consummating transactions via open outcry at a central
            location such as the floor of the exchange or by using an electronic
            trading platform.
          </p>
        </Row>
        <Row>
          <h3>Ownership</h3>
          <p>
            Stock exchanges originated as mutual organizations, owned by its
            member stockbrokers. However, the major stock exchanges have
            demutualized, where the members sell their shares in an initial
            public offering. In this way the mutual organization becomes a
            corporation, with shares that are listed on a stock exchange.
            Examples are Australian Securities Exchange (1998), Euronext (merged
            with New York Stock Exchange), NASDAQ (2002), Bursa Malaysia (2004),
            the New York Stock Exchange (2005), Bolsas y Mercados Españoles, and
            the São Paulo Stock Exchange (2007).
          </p>
        </Row>
      </Box>
    </>
  );
}

export default About;
