const HeritageSection = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        bg-[url('/images/heritage-bg.png')]
        bg-no-repeat bg-cover bg-center
        flex items-center
      "
    >
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Right Content */}
          <div className="lg:col-start-2 max-w-xl">
            <div className="mb-8 text-[#8B1E1E] font-serif font-bold tracking-widest">
              <div className="text-lg">
                INDIA<span>NN</span>ESS
              </div>
              <div className="text-xs tracking-[0.35em] mt-1">ACADEMY</div>
            </div>

            <p className="font-serif text-[15.5px] leading-8 text-neutral-800 mb-8">
              I never imagined this institution would achieve such remarkable
              progress. The first time I saw this building, I was overcome with
              a sense of cultural pride. It reminded me of the feeling I had
              when I passed through Subrahmanya Bharati Street in New Delhi and
              Shakespeare Street in Calcutta. I salute this magnificent
              building, a symbol of India's national glory and greatness.
            </p>

            <p className="font-serif text-sm text-neutral-800">
              MT Vasudevan Nair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
