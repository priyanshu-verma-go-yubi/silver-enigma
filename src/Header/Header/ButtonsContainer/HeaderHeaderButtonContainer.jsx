import './HeaderHeaderButtonContainer.css'
import { FiAlertCircle, FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";


const HeaderHeaderButtonContainer = () => {
    const btnData = [
        {
            id: 1,
            value: <FiAlertCircle />,
            color: '#ff5d5d'
        },
        {
            id: 2,
            value: <FiAlertOctagon />,
            color: '#dd7dff'
        },
        {
            id: 3,
            value: <FiAlertTriangle />,
            color: '#ffb443'
        },
    ]

    return (
        <div className="HeaderHeaderButtonContainer">
            {btnData.map(data => (
                <button 
                key = {data.id}
                style={{backgroundColor : `${data.color}`}}>{data.value}</button>
            ))}
        </div>
    );
}

export default HeaderHeaderButtonContainer;