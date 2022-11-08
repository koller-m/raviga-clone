import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="investments">
                <h2>Investments</h2>
                <p>Pied Piper</p>
                <p>Eklow Labs</p>
            </div>
            <div className="exits">
                <h2>Exits</h2>
                <p>Lemonade</p>
                <p>Resy</p>
                <p>Warby Parker</p>
                <p>Uber</p>
            </div>
        </div>
    )
}

export default Portfolio;
