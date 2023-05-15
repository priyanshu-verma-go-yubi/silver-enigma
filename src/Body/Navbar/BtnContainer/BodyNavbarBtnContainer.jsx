import './BodyNavbarBtnContainer.css'
import { FiArrowDownCircle, FiArrowLeftCircle, FiArrowRightCircle, FiArrowUpCircle, FiCircle, FiXCircle} from "react-icons/fi";

const BodyNavbarBtnContainer = () => {
    const btnList = [
        {
            id: 0,
            color: "#38dbff",
            value: <FiArrowDownCircle/>
        },
        {
            id: 1,
            color: "#ffb443",
            value: <FiArrowLeftCircle/>
        },
        {
            id: 2,
            color: "#ff5d5d",
            value: <FiArrowRightCircle/>
        },
        {
            id: 3,
            color: "#fff503",
            value: <FiArrowUpCircle/>
        },
        {
            id: 4,
            color: "#00ff75",
            value: <FiCircle/>
        },
        {
            id: 5,
            color: "#dd7dff",
            value: <FiXCircle/>
        }
    ];

    return (
        <div className='BodyNavbarBtnContainer'>
            {btnList.map(data => (
                <button
                style={{backgroundColor : `${data.color}`}}>
                    {data.value}
                </button>
            ))}
        </div>
    );
}

export default BodyNavbarBtnContainer;