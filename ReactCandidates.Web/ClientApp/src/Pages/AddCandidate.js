import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
import { CandidateContext } from '../CandidateContext';


class AddCandidate extends React.Component{

    state = {
        Candidate:{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            notes: ''
        }
        
    }
    onTextChange = e => {
        const nextstate = produce(this.state, draft => {
            draft.Candidate[e.target.name] = e.target.value
        });
        this.setState(nextstate);
    }
    onAddClick = async value => {
        const { firstName, lastName, email, phoneNumber, notes } = this.state.Candidate;
        const status = 'pending';
        await axios.post('/api/candidate/addcandidate', { firstName, lastName, email, phoneNumber, notes, status });
        value.setCandidateCounts();
        this.props.history.push('/');
    }

    render()
    {
        const { firstName, lastName, email, phoneNumber, notes } = this.state.Candidate;
        return (
            <CandidateContext.Consumer>
                {value => {
                    return <div className="row">
                        <div className='col-md-6 col-md-offset-3 well'>
                            <h2>Add Candidate</h2>
                            <input type="text" className='form-control' name='firstName' value={firstName} onChange={this.onTextChange} placeholder="First Name" />
                            <br />
                            <input type="text" className='form-control' name='lastName' value={lastName} onChange={this.onTextChange} placeholder="Last Name" />
                            <br />
                            <input type="text" className='form-control' name='email' value={email} onChange={this.onTextChange} placeholder="Email" />
                            <br />
                            <input type="text" className='form-control' name='phoneNumber' value={phoneNumber} onChange={this.onTextChange} placeholder="Number" />
                            <br />
                            <textarea className='form-control' rows='4' name='notes' value={notes} onChange={this.onTextChange} placeholder="Notes" />
                            <br />
                            <button className='btn btn-primary btn-lg btn-block' onClick={()=>this.onAddClick(value)}>Add</button>
                        </div>
                    </div>
                }}
                </CandidateContext.Consumer>
            );

    }
}

export default AddCandidate;