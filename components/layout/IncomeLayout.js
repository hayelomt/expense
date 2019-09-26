
import Head from 'next/head';
const layoutStyle = {

};

const Layout = props => (
  <div style={layoutStyle}>
      <Head>
          <title>Income</title>
      </Head>
    {props.children}
  </div>
);

export default Layout;