import React from 'react';
import { Link } from 'react-router-dom';
import { CandidateContext } from './CandidateContext';


const Layout = (props) => {
    return (
        <CandidateContext.Consumer>
            {value => {
                const { pendingCount, confirmedCount, declinedCount } = value.candidateCount;
              return  <div>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to='/' className='navbar-brand'>
                                    React Candidates
                        </Link>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link to='/pendingcandidates' className='navbar-brand'>
                                            Pending ({pendingCount})
                                </Link>
                                    </li>
                                    <li>
                                        <Link to={`/declinedconfirmedcandidates/confirmed`} className='navbar-brand'>
                                            Confirmed ({confirmedCount})
                                </Link>
                                    </li>
                                    <li>
                                        <Link to={`/declinedconfirmedcandidates/declined`} className='navbar-brand'>
                                            Declined ({declinedCount})
                                </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container" style={{ marginTop: 60 }}>
                        {props.children}
                    </div>
                </div>
            }}
        </CandidateContext.Consumer>
    );
}


export default Layout;