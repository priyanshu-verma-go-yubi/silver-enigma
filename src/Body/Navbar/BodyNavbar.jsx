import './BodyNavbar.css'
import BodyNavbarBtnContainer from './BtnContainer/BodyNavbarBtnContainer';
import BodyNavbarTilte from './Title/BodyNavbarTitle';

const BodyNavbar = () => {
    return (
        <div className='BodyNavbar'>
            <BodyNavbarTilte/>
            <BodyNavbarBtnContainer/>
        </div>
    );
}

export default BodyNavbar;