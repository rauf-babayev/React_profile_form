import React from 'react';
import ModalWindow from '../modal/ModalWindow';

class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShowModalWindow: false,
        }
    }

    changeModalWindow = isShow => {
        this.setState({ isShowModalWindow: isShow })
    }

    render() {
        const { changeModalWindow } = this;
        const { isShowModalWindow } = this.state;

        return (
            <>
                    { isShowModalWindow ? (<ModalWindow/>) :
                        <div className='first_page_container'>
                            <div className='welcome_container'>
                                <p className='welcome_heading'>Welcome To Your Our Page</p>
                                <input className='welcome_button' type='submit' value='Open' onClick={ () => changeModalWindow(!isShowModalWindow)}/>
                            </div>
                        </div>
                    }
            </>
        );
    }
}

export default MainPage;
