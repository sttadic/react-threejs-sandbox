import React from "react";

const Hero = () => {
	return (
		<section id="hero" className="overflow-hidden">
			<div className="absolute top-0 left-0 z-10">
				<img src="/images/bg.png" alt="background" />
			</div>

			<div className="hero-layout"></div>
		</section>
	);
};

export default Hero;
