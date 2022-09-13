import React, { Component } from 'react';

//Importing Modal
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class ModalSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.openModal.bind(this)
    }
    
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <ModalVideo channel='custom' isOpen={this.state.isOpen} url="https://fast.wistia.net/embed/iframe/5kcd6dk3i5?videoFoam=true&amp;autoPlay=true" onClose={() => this.setState({isOpen: false})} />
            </React.Fragment>
        );
    }
}

export default ModalSection;