const ProfileCard = ({ title, handle, img, description }) => {
	return (
		<article className="card">
			<div className="card-image">
				<figure className="image is-1by1">
					<img src={img.src} alt={img.alt} loading="lazy"/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<h2 className="title is-4">{title}</h2>
						<h3 className="subtitle is-6">{handle}</h3>
					</div>
				</div>
				<div className="content">
					{description}
				</div>
			</div>
		</article>
	);
}

export default ProfileCard;
