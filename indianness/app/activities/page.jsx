import { eventsData } from "@/data/events";

export default function Activities() {
  return (
    <section className="w-full bg-gray-100 text-center flex flex-col items-center justify-center py-40 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
        <p className="text-base sm:text-base md:text-base text-muted-foreground">
          Highlights of our Journey
        </p>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
          A Chronicle of Events and Engagements
        </h1>
        <p className="text-base sm:text-base md:text-base text-muted-foreground">
          The Indianness Academy has consistently fostered spaces for dialogue,
          discovery, and creativity. Through a rich variety of seminars,
          lectures, performances, workshops, and commemorative events, we bring
          together a community of scholars, artists, students, and engaged
          citizens to explore the many dimensions of Indian thought and culture.
        </p>
      </div>
      <div className="container mx-auto flex flex-col items-center space-y-4 max-w-6xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {eventsData.map((events, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={events.image}
                // alt={events.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="text-base sm:text-base md:text-base text-muted-foreground text-left py-4">
                {events.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
