import React from 'react';
import axios from 'axios';
import CandidateRow from '../Components/CandidateRow';

class DeclinedConfirmedCandidates extends React.Component {
    state = {
        candidates: [],
        showNotes: true
    }
    componentDidMount = async () => {
        const { status } = this.props.match.params;
        if (status === 'confirmed') {
            const { data } = await axios.get(`api/candidate/getall?status=confirmed`);
            this.setState({ candidates: data });
        }
        else {
            const { data } = await axios.get(`api/candidate/getall?status=declined`);
            this.setState({ candidates: data });
        }
    }
    onToggleClick = () => {
        if (this.state.showNotes == true) {
            this.setState({ showNotes: false });
        }
        else {
            this.setState({ showNotes: true });
        }
    }

    render() {
        const { status } = this.props.match.params;
        const { showNotes } = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <h1>{status}</h1>
                    <button className='btn btn-success' onClick={this.onToggleClick}>Toggle Notes</button>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes && <th>Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.candidates.map(c => <CandidateRow key={c.id} candidate={c} showNotes={showNotes} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default DeclinedConfirmedCandidates;