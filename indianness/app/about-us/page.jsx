import { ScrollImages } from "@/components/ScrollImages";
import { aboutImages } from "@/data/aboutImages";
import {
  Sprout,
  UsersRound,
  Landmark,
  Flag,
  Sparkles,
  Palette,
  PenTool,
  BookOpenText,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        className="w-full bg-background h-dvh text-center flex flex-col items-center justify-center py-20 sm:py-20 px-4 sm:px-6 
  bg-[url('https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Building%20About%20Us?updatedAt=1763204486966')] bg-cover bg-center bg-no-repeat"
      ></section>
      {/* Mission */}
      <section className="w-full bg-background text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            Our Mission
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Fostering Unity Through Heritage and Values.
          </h1>
        </div>
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-6xl mt-10">
          {/* px-4 sm:px-6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <Sprout size={40} />
              </div>
              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Nurture Values
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Promote humaneness, patriotism, ethics, and the timeless
                principles that guide moral living.
              </p>
            </article>

            {/* Card 2 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <UsersRound size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Strengthen Unity
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Encourage national integration, communal harmony, secularism,
                and pluralistic coexistence.
              </p>
            </article>

            {/* Card 3 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <Landmark size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Preserve Heritage
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Revive India’s freedom struggle, celebrate its contributions to
                world peace, and support initiatives.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* Chairman Message */}
      <section className="w-full  py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row md:items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start space-y-4">
            <p className="text-base text-muted-foreground">
              Chairman's Message
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
              Leading with Vision and Purpose.
            </h1>
            <p className="text-base text-muted-foreground text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="space-y-1">
              <p className="text-base text-foreground text-left">
                M. P. Abdussamad Samadani
              </p>
              <p className="text-base text-muted-foreground text-left">
                Chairman, ICIRH Trust & Member of Parliament, Lok Sabha
              </p>
            </div>
          </div>

          {/* Right Image Div */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full h-150 overflow-hidden shadow-md">
              <Image
                src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Mp_abdussamad_samadani.jpg?updatedAt=1763097205677"
                alt="Chairman"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="w-full bg-gray-100 text-center flex flex-col items-center justify-center py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-4xl">
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            Our Initiatives
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Living Culture, Breathing Knowledge, Inspiring Action.
          </h1>
          <p className="text-base sm:text-base md:text-base text-muted-foreground">
            The Indianness Academy curates and hosts a diverse tapestry of
            programs that bring together scholars, artists, thinkers, students,
            and citizens from all walks of life. Our calendar is a vibrant blend
            of intellectual exploration and cultural celebration, including
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-center space-y-4 max-w-6xl mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <Flag size={40} />
              </div>
              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                National Celebrations
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Marking Independence Day, Republic Day, Gandhi Jayanti, and
                other significant milestones with solemnity, reflection, and
                patriotic fervour.
              </p>
            </article>

            {/* Card 2 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <Sparkles size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Cultural Festivals
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Celebrating the ethos of India through Onam, Vishu, and other
                regional festivals that showcase the pluralistic beauty of our
                traditions.
              </p>
            </article>

            {/* Card 3 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <Palette size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Artistic Showcases
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Offering a platform for traditional and modern artistic
                expressions that reflect the soul of India, nurturing creative
                minds and cultural ambassadors.
              </p>
            </article>

            {/* Card 4 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <PenTool size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Literary & Aesthetic Pursuits
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Honouring and engaging with the rich tapestry of Hindustani and
                Malayalam literature, exploring timeless works and nurturing
                contemporary voices.
              </p>
            </article>

            {/* Card 5 */}
            <article className="relative bg-gray-50 p-6 shadow-sm overflow-hidden">
              <div className="absolute top-4 right-4 text-red-700" aria-hidden>
                <BookOpenText size={40} />
              </div>

              <h3 className="text-lg text-left font-semibold text-foreground mt-30 mb-1">
                Academic & Philosophical Forums
              </h3>
              <p className="text-base text-left text-gray-600 leading-relaxed">
                Hosting seminars, webinars, and symposia that delve into India's
                civilizational contributions — from philosophy and ethics to
                social harmony and national identity.
              </p>
            </article>
          </div>
        </div>
        <div className="container mx-auto  flex flex-col items-center space-y-4 mt-10 max-w-6xl">
          <ScrollImages images={aboutImages} />
        </div>
      </section>
    </>
  );
}
