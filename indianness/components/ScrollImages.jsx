"use client";

export const ScrollImages = ({ images = [] }) => {
  const cols = [images.slice(0, 3), images.slice(3, 6), images.slice(6, 9)];
  const UNIFORM_SPEED = "20s";

  return (
    <div className="w-full relative mt-10 overflow-hidden h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
      {/* ========== Desktop: 3 columns (visible at lg and up) ========== */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4 h-full">
        {cols.map((col, colIndex) => (
          <div
            key={colIndex}
            className="col-wrap relative overflow-hidden h-full"
            style={{ ["--speed"]: UNIFORM_SPEED }}
          >
            <div
              className={`col-inner ${colIndex % 2 === 0 ? "" : "reverse"}`}
              aria-hidden="true"
              style={{ animationDuration: "var(--speed)" }}
            >
              {/* each column duplicates only its own slice */}
              {col.concat(col).map((src, i) => (
                <img
                  key={`desktop-${colIndex}-${i}`}
                  src={src}
                  alt={
                    i < col.length
                      ? `Gallery image ${colIndex * 3 + (i % 3) + 1}`
                      : ""
                  }
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-cover block"
                  draggable="false"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ========== Tablet / Mobile: single column (visible below lg) ========== */}
      <div
        className="lg:hidden col-wrap relative overflow-hidden h-full "
        style={{ ["--speed"]: UNIFORM_SPEED }}
      >
        <div
          className="col-inner"
          aria-hidden="true"
          style={{ animationDuration: "var(--speed)" }}
        >
          {/* show all images in one column, duplicated for seamless loop */}
          {images.concat(images).map((src, i) => (
            <img
              key={`mobile-${i}`}
              src={src}
              alt={i < images.length ? `Gallery image ${i + 1}` : ""}
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover block"
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* blur overlay (top + bottom) */}
      <div className="blur-overlay absolute inset-0 pointer-events-none" />
    </div>
  );
};
