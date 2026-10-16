const HeroSection = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Trusted by <br />
          <span className="text-blue-600">100,000+</span> Businesses
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
          We help companies grow with modern digital solutions
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">100K+</h3>
            <p className="mt-1 text-sm text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="mt-1 text-sm text-gray-600">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="mt-1 text-sm text-gray-600">Team Members</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">4.9</h3>
            <p className="mt-1 text-sm text-gray-600">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;