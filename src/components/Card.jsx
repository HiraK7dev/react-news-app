function Card({ image, title, desc, link, category }){
    const words = desc?.split(' ');
    const description = words?.slice(0, 10).join(' ');
    return(
        <div className="card w-96 bg-base-100 shadow-xl mt-16">
            <figure><img src={image} alt={category} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description + ` ....`}</p>
                <div className="card-actions justify-end">
                    <a href={link} target="_main">
                        <button className="btn btn-primary">View Details</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card