import ContactsCard from "./components/ContactsCard";

const Hero = () => {
  const bio =
    "I’m a software engineer with experience building modern, user-focused platforms across ecommerce, hospitality, social apps, and marketplaces. I enjoy working with a variety of web technologies, creating clean, responsive, and intuitive digital experiences. I also love to explore new skills and work on side-projects for experimenting and exploring different technologies. I bring energy, curiosity, and a strong product mindset to every project I take on.";

  return (
    <main className="h-[1600px] sm:h-[1400px] lg:h-[800px]">
      <div className="h-[1600px] md:h-[800px] w-full absolute z-0 opacity-30 bg-[url('https://capeeng.com/wp-content/uploads/2022/12/layer-wave.png')] bg-cover" />
      <section className="absolute z-10 w-full">
        <header className="grid justify-center">
          <h1 className="text-saturated-green font-bold text-3xl sm:text-5xl m-5">
            {"<HelloWorld>"}
          </h1>
        </header>

        <nav className="p-10 z-10 relative top-0">
          <ul className="flex gap-3 justify-evenly text-saturated-green underline">
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
          </ul>
        </nav>

        <section className="col-span-3 gap-24 p-24 lg:flex hidden justify-center">
          <div className="mt-32 w-96">
            <h1 className="text-primary font-semibold text-3xl my-5">
              Hi there!!!
            </h1>
            <h2 className="text-subtitle font-light">{bio}</h2>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-96 h-96">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-black-boy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--man-avatar-pack-people-icons-5012785.png?f=webp"
              alt="cover"
              className="h-[400px] rounded-[70px] object-contain"
            />
          </div>
          <ContactsCard />
        </section>

        <section className="col-span-3 gap-24 p-6 sm:p-24 lg:hidden md:grid content-center justify-items-center">
          <div className="md:flex grid gap-8">
            <div className="md:w-[55%] sm:text-left text-center">
              <h1 className="text-primary font-semibold text-3xl my-5">
                Hi there!!!
              </h1>
              <h2 className="text-subtitle font-light">{bio}</h2>
            </div>
            <ContactsCard />
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-full sm:mt-20 mt-56 md:w-96 md:h-96">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-black-boy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--man-avatar-pack-people-icons-5012785.png?f=webp"
              alt="cover"
              className="sm:h-[400px] rounded-[70px] object-contain"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Hero;
