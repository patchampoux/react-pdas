import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
	return (
		<>
			<header className="hero is-primary">
				<div className="hero-body">
					<h1 className="title">Personal Digital Assistant</h1>
				</div>
			</header>
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Alexa"
								handle="@alexa99"
								img={{ src: AlexaImage, alt: "Alexa Logo" }}
								description="Alexa was created by Amazon and helps you buy things."
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								img={{ src: CortanaImage, alt: "Cortana Logo" }}
								description="Cortana was made by Microsoft. Who knows what it does?"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@siri01"
								img={{ src: SiriImage, alt: "Siri Logo" }}
								description="Siri was made by Apple and is being phased out."
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
