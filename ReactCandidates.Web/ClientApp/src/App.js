import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import PendingCandidates from './Pages/PendingCandidates';
import DeclinedConfirmedCandidates from './Pages/DeclinedConfirmedCandidates';
import ViewPendingCandidate from './Pages/ViewPendingCandidate';
import Layout from './Layout';
import { CandidateContextComponent } from './CandidateContext';


export default class App extends Component {
    render() {
        return (
            <CandidateContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addcandidate' component={AddCandidate} />
                    <Route exact path='/pendingcandidates' component={PendingCandidates} />
                    <Route exact path='/viewpendingcandidate/:id' component={ViewPendingCandidate} />
                <Route exact path='/declinedconfirmedcandidates/:status' component={DeclinedConfirmedCandidates} />
                </Layout>
            </CandidateContextComponent>
        );
    }
}