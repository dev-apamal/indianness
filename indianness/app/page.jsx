import Hero from "@/components/Hero";
import { ScrollImages } from "@/components/ScrollImages";
import { guestData } from "@/data/guest";
import { homeImages } from "@/data/homeImages";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Quotes */}
      <section className="w-full bg-black text-center flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 flex flex-col items-center space-y-4 max-w-4xl">
          {/* Quote */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            “All of us are Indians first and last. Wherever we live and to
            whatever creed or class or province we belong.”
          </h1>
          {/* Author */}
          <p className="text-base text-white">— Mahatma Gandhi</p>
        </div>
      </section>
      {/* About Us */}
      <section className="w-full bg-background text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          {/* Quote */}
          <p className="text-base text-red-700">About Us</p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            A Vision Rooted in Values, Mission Inspired by Heritage.
          </h1>
          {/* Author */}
          <p className="text-base text-muted-foreground">
            The Indianness Academy was born out of a profound commitment to
            revive the ethical and spiritual compass of the nation. Under the
            aegis of a dedicated Trust, the Academy stands as a beacon for those
            who believe in the transformative power of India’s civilizational
            wisdom. At its heart, the Academy seeks to rekindle the eternal
            values of humaneness, patriotism, and national integration, and to
            channel the collective consciousness towards a society marked by
            communitarian harmony, secular ideals, and ethical responsibility.
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center space-y-4 max-w-6xl">
          <ScrollImages images={homeImages} />
        </div>
      </section>

      {/* Guests & Collaborators */}
      <section className="w-full bg-gray-100 text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          <p className="text-base sm:text-base md:text-base text-red-700">
            Honoured Guests & Collaborators
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Voices of Wisdom, Pillars of Inspiration
          </h1>
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            The Indianess Academy brings together distinguished guests,
            collaborators, and thought leaders whose presence and insights
            inspire dialogue, scholarship and cultural enrichment.
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center space-y-4 max-w-6xl mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {guestData.map((guest, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-md group"
              >
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-base font-semibold">
                    {guest.name}
                  </h3>
                  <p className="text-gray-300 text-base">{guest.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="w-full bg-black flex justify-center">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 max-w-4xl
          flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white md:w-1/2">
            Join the Journey.
            <br />
            Engage, Contribute, and Grow
          </h1>
          <p className="text-base text-white md:w-1/2">
            The Indianness Academy invites you to be a part of this noble
            endeavour. Whether you are an academic, artist, student, or a
            concerned citizen who believes in India’s pluralistic spirit, your
            voice matters here.
            <br />
            <br />
            Support us through your time, talents, or thoughts. Join our events,
            collaborate with us, or simply stay connected as we continue our
            mission of national renewal through cultural awakening. Together,
            let us celebrate the Indianness that unites us all.
          </p>
        </div>
      </section>
    </>
  );
}

//Add Map & Real Photo - Home Page
//Option - Home Page - Photo, Right above about us
//Preloader - Try building or painting
