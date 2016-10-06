import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import Reactable from './reactable';

ReactDOM.render(
    <Reactable.Table className="table" id="table" data={[
        { Name: Reactable.unsafe('<span id="griffins-name">Griffin Smith</span>'), Age: '18'},
        { Age: '28', Position: Reactable.unsafe('<span id="who-knows-job">Developer</span>')},
        { Age: '23', Name: Reactable.unsafe('<span id="lees-name">Lee Salminen</span>')},
    ]} sortable={['Name']} />,
    document.getElementById('test-div')
);

