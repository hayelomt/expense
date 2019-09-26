import React from 'react';
import Link from 'next/link';
import { useRouter} from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
        <Link href="/">
          <a className="navbar-brand">Expensify</a>
        </Link>

        <div className="navbar" id="navbarSupportedContent">
          <ul className="navbar-nav pull-right">
            <li 
              className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
              <Link href="/">
                <a className="nav-link">Home </a>
              </Link>
            </li>
            <li 
              className={`nav-item ${router.pathname === '/expense' ? 'active' : ''}`}>
              <Link href="/expense">
                <a className="nav-link">Expense </a>
              </Link>
            </li>
            <li 
              className={`nav-item ${router.pathname === '/income' ? 'active' : ''}`}>
              <Link href="/income">
                <a className="nav-link">Income </a>
              </Link>
            </li>
            <li 
              className={`nav-item ${router.pathname === '/transactions' 
              ? 'active' : ''}`}>
              <Link href="/transactions">
                <a className="nav-link">Transactions</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
}


export default Layout;