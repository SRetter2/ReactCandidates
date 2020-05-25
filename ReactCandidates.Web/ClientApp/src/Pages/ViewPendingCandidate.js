import React from 'react';
import axios from 'axios';
import { CandidateContext } from '../CandidateContext';

class ViewPendingCandidate extends React.Component {

    state = {
        candidate: {}
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/candidate/getcandidate?id=${id}`);
        this.setState({ candidate: data });
    }
    onConfirmClick = async value => {
        const { firstName, lastName, phoneNumber, email, id, notes } = this.state.candidate;
        const status = 'confirmed';
        await axios.post('/api/candidate/changestatus', { firstName, lastName, phoneNumber, email, id,notes, status });
        value.setCandidateCounts();
        this.props.history.push('/pendingcandidates');
    }
    onDeclineClick = async value => {
        const { firstName, lastName, phoneNumber, email, id, notes } = this.state.candidate;
        const status = 'declined';
        await axios.post('/api/candidate/changestatus', { firstName, lastName, phoneNumber, email, id,notes, status });
        value.setCandidateCounts();
        this.props.history.push('/pendingcandidates');
    }

    render()
    {
        const { firstName, lastName, email, phoneNumber, status, notes } = this.state.candidate;
        return (
            <CandidateContext.Consumer>
               {value => {
                    return  <div className='row well'>
                        <br />
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Notes:</h4>
                        <h5>{notes}</h5>
                        <br />
                        <button className='btn btn-primary' style={{ marginLeft: 10 }} onClick={() => this.onConfirmClick(value)}>Confirm</button>
                        <button className='btn btn-danger' onClick={() => this.onDeclineClick(value)}>Decline</button>
                    </div>
                }}
            </CandidateContext.Consumer>
        );

    }

}

export default ViewPendingCandidate;