import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render()
    {
        return (
            <div className='container'>
                <div className='row col-me-offset-4'>
                    <h4>
                        <Link to='./addcandidate'>
                            Add Candidate
                        </Link>
                    </h4>
                    <h4>
                        <Link to='./pendingcandidates'>
                            View Pending Candidates
                        </Link>
                    </h4>
                    <h4>
                        <Link to={`./declinedconfirmedcandidates/confirmed`}>
                            View Confirmed Candidates
                        </Link>
                    </h4>
                    <h4>
                        <Link to={`./declinedconfirmedcandidates/declined`}>
                            View Declined Candidates
                        </Link>
                    </h4>
                    </div>
            </div>
            );
    }

}

export default Home;