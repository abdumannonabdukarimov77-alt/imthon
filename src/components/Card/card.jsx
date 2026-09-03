function Card({ nomi, boshlanish, tugash }) {
    return (
        <div className="wrap">
            <div className="right">
                <h2>{nomi}</h2>
            </div>

            <div className="left">
                <div>
                    <h3>{boshlanish}</h3>
                </div>

                <div>
                    <h3>{tugash}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;