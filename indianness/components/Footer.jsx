import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start content-between">
          {/* Left Column - Logo and Contact Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <Image
                src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Indianness%20Academy%20LOGO%202021.png?updatedAt=1759219577250"
                alt="Indianness Academy Logo"
                width={140}
                height={36}
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm font-medium text-foreground">
                Address
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Indianness Academy, Indianness Square, Calicut - 673004, Kerala,
                India.
              </p>
            </div>

            <div>
              <h3 className="mb-1 text-foreground font-medium  text-sm">
                Contact
              </h3>
              <p className="text-muted-foreground text-sm">1800 123 4567</p>
              <p className="text-muted-foreground text-sm">
                icirhtrust@gmail.com
              </p>
            </div>
          </div>

          {/* Right Column - Owned by section */}
          <div className="flex flex-col  md:text-left">
            <div>
              <h3 className="mb-2 text-foreground text-sm font-medium ">
                Owned & Run by
              </h3>
              <Image
                src="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/ICIRH_LOGO.JPG?updatedAt=1760508906102"
                alt="ICIRH Logo"
                width={100}
                height={20}
                className="object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              The Indian Center of Indianess, Renaissance & Humaneness (ICIRH)
              Trust.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
          <p className="text-sm text-foreground">
            © 2025 ICIRH Trust. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://www.termsfeed.com/live/1e0e4da0-b518-44b4-b82b-70052d779681"
              className="text-foreground text-xs hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </Link>
            {/* <Link
              href="/cookies"
              className="text-foreground text-xs hover:underline hover:underline-offset-4"
            >
              Cookies Settings
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
