import React from 'react';

class Detail extends React.Component {
    componentDidMount() {//Detail component mounts
        const { location, history } = this.props;
        //get location, history via destructuring assignment
        if (location.state === undefined) {
            history.push('/');
        }//if location.state data doesn't exist -> move to home
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return <span>{ location.state.title }</span>;
        //will print movie title
        } else {
            return null;
            //if no location.state
        }
        
    }
}

/* function Detail(props) {
    console.log(props);
    return <span>hello</span>;
} removed lines due to the detail component revision */

export default Detail;