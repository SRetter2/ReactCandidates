import React from 'react';
import axios from 'axios';

const CandidateContext = React.createContext();

class CandidateContextComponent extends React.Component {

    state = {
        candidateCount: {}
    }
    componentDidMount  = () => {
        this.setCandidateCounts();
    }
    setCandidateCounts = async () => {
        const { data } = await axios.get(`api/candidate/getcandidatecount`);
        this.setState({ candidateCount: data });
    }

    render() {
        const obj = {
            candidateCount: this.state.candidateCount,
            setCandidateCounts: this.setCandidateCounts
        }
        return (
            <CandidateContext.Provider value={obj}>
                {this.props.children}
            </CandidateContext.Provider>
        )
    }
}

export { CandidateContextComponent, CandidateContext }