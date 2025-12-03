const Hero = () => {
  return (
    <section className="w-full bg-background">
      {/* Text Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 py-24">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Welcome to the <br /> Indianness Academy
          </h1>
          {/* Description */}
          <p className="text-base sm:text-base md:text-base text-muted-foreground max-w-4xl">
            The Indianness Academy, a non-profit institution, is rooted in
            humaneness, unity, cultural heritage and literary traditions.
            Dedicated to reviving Indian heritage, it upholds patriotism,
            secularism, and ethical living while fostering intellectual,
            cultural, and academic growth. Through seminars, programs, and
            national celebrations, the Academy inspires dialogue for
            integration, harmony, and pluralism—celebrating India’s freedom
            movement, literary traditions, and vision of peaceful coexistence.
          </p>
        </div>
      </div>
      {/* Hero Image - Full Width */}
      <div className="w-full">
        <img
          src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/HeroCompressed-2.png"
          alt="People celebrating with the Indian flag in a patriotic watercolor illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
