import './Team.css'
import peter from './images/peter.png'
import laurie from './images/Laurie@2x.jpg'
import monica from './images/monica.png'

const Team = () => {
    return (
        <div className="container">
            <div>
                <div className="image-container">
                    <img src={peter} alt="Peter Gregory" />
                </div>
                <p>Peter Gregory</p>
                <p>Founder/General Partner</p>
            </div>
            <div>
                <div className="image-container">
                    <img src={laurie} alt="Laurie Bream" />
                </div>
                <p>Laurie Bream</p>
                <p>Managing Partner</p>
            </div>
            <div>
                <div className="image-container">
                    <img src={monica} alt="Monica Hall" />
                </div>
                <p>Monica Hall</p>
                <p>Partner</p>
            </div>
        </div>
    )
}

export default Team;
