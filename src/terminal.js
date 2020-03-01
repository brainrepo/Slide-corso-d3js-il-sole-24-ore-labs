import React from 'react';
import Terminal from 'terminal-in-react';

const TerminalT = () => {
    return <Terminal
        color='green'
        backgroundColor='black'
        barColor='black'
        style={{ fontWeight: "bold", fontSize: "1em" }}
        commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: () => alert('Terminal in React'),
            popup: () => alert('Terminal in React')
        }}
        descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
        }}
        msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
    />
};



export default TerminalT;
