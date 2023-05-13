import './HeaderBodyLeftButtonContainer.css'

const HeaderBodyLeftButtonContainer = () => {

    const smoothScrollToBody = () => {
        const element = document.querySelector('.Body');

        if(element)
        {
            element.scrollIntoView({behavior : 'smooth'})
        }
    }

    return (
        <div className = 'HeaderBodyLeftButtonContainer'>
            <button style={{backgroundColor : '#000000', color : '#FFFFFF'}} 
            onClick = {smoothScrollToBody}>Lets Start Cooking</button>
            <button>Explore More</button>
        </div>
    );
}

export default HeaderBodyLeftButtonContainer;