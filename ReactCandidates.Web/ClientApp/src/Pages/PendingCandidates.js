import React from 'react';
import axios from 'axios';
import PendingRow from '../Components/PendingRow';

class PendingCandidates extends React.Component {

    state = {
        candidates: []
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`api/candidate/getall?status=pending`);
        console.log(data);
        this.setState({ candidates: data });
    }

    render() {
        return (
            <div className='row'>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.candidates.map(c => <PendingRow key={c.id} candidate={c} />)}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PendingCandidates;