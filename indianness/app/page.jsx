import Hero from "@/components/Hero";
import { ScrollImages } from "@/components/ScrollImages";

export default function Home() {
  const homeImages = [
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/6.jpg?updatedAt=1763096366572",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/02%20copy.jpg?updatedAt=1763096332105",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/3.jpg?updatedAt=1763096332077",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/08.jpg?updatedAt=1763096332044",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/4.jpg?updatedAt=1763096332010",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/1.jpg?updatedAt=1763096331990",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/5.jpg?updatedAt=1763096331965",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/9.jpg?updatedAt=1763096331956",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/2.jpg?updatedAt=1763096331937",
    "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Scroll%20Images/Home/7.jpg?updatedAt=1763096331850",
  ];

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
          <p className="text-base text-muted-foreground">— Mahatma Gandhi</p>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full bg-background text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          {/* Quote */}
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            About Us
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            A Vision Rooted in Values, Mission Inspired by Heritage.
          </h1>
          {/* Author */}
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            The Indianness Academy was born out of a profound commitment to
            revive the ethical and spiritual compass of the nation. Under the
            aegis of a dedicated Trust, the Academy stands as a beacon for those
            who believe in the transformative power of India’s civilisational
            wisdom. At its heart, the Academy seeks to rekindle the eternal
            values of humaneness, patriotism, and national integration, and to
            channel the collective consciousness towards a society marked by
            communal harmony, secular ideals, and ethical responsibility.
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center space-y-4 max-w-6xl">
          <ScrollImages images={homeImages} />
        </div>
      </section>

      {/* Guests & Collaborators */}
      <section className="w-full bg-gray-100 text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
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
            {[
              {
                name: "Kapil Sibal",
                position: "Renowned jurist and parliamentarian",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Kapil%20Sibal.jpg?updatedAt=1762951114493",
              },
              {
                name: "Karan Singh",
                position: "Eminent scholar, philosopher, and statesman",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Kara%20Singh.jpg?updatedAt=1762951112475",
              },
              {
                name: "Jairam Ramesh",
                position: "Chief Guest",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Jairam%20Ramesh.jpg?updatedAt=1762951180527",
              },
              {
                name: "Shashi Tharoor",
                position: "Chief Guest",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Shashi%20Tharoor.jpg?updatedAt=1762951228373",
              },
              {
                name: "RL Bhatia",
                position: "Former Governor of Kerala",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/RL%20Bhatia(1).png?updatedAt=1763096824766",
              },
              {
                name: "Raj Babbar",
                position: "Veteran actor and Member of Parliament",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Raj%20Babbar_KWlCYSNF0?updatedAt=1762952852360",
              },
              {
                name: "Dr K Sankranarayanan",
                position: "Chief Guest",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Dr%20K%20Sankranarayanan.jpg?updatedAt=1762951109268",
              },
              {
                name: "MT Vasudevan Nair",
                position: "Jnanpith Laureate and literary stalwart",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/MT(1).jpg?updatedAt=1763096950784",
              },
              {
                name: "Kuldip Nayar",
                position: "Iconic journalist and political thinker",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Kuldip_Nayar.jpg?updatedAt=1762951207192",
              },
              {
                name: "Shamsur Rahman Faruqi",
                position: "Literary theorist and critic",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/shamsur_ZcWIqg852?updatedAt=1762968429918",
              },
              {
                name: "Ali Sardar Jafri",
                position: "Celebrated Urdu poet and cultural activis",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/alisardarjafri.jpg?updatedAt=1763097247517",
              },
              {
                name: "Gopichand Narang",
                position: "Former President, Sahitya Akademi",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Gopichand%20Narang.jpg?updatedAt=1762951112604",
              },
              {
                name: "Sukumar Azhikode",
                position: "Respected public intellectuals and cultural figures",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Sukumar%20Azhikode.jpg?updatedAt=1762951114294",
              },
              {
                name: "P Jayachandran",
                position: "Chief Guest",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/P%20Jayachandran.jpg?updatedAt=1762951113521",
              },
              {
                name: "Kaithapram Damodaran Namboothiri",
                position: "Chief Guest",
                image:
                  "https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Guests/Kaithapram%20Damodaran%20NamboothiriEdited.jpg?updatedAt=1762951109270",
              },
            ].map((guest, index) => (
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
