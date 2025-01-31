const Hero = () => {
  return (
    <main className="h-[800px]">
      <div className="h-[800px] w-full absolute z-0 opacity-30 bg-[url('https://capeeng.com/wp-content/uploads/2022/12/layer-wave.png')] bg-cover" />
      <section className="absolute z-10 w-full">
        <nav className="p-10 z-10 relative top-0">
          <ul className="flex gap-3 justify-between text-saturated-green">
            <li className="">
              <a href="#">Nav1</a>
            </li>
            <li>
              <a href="#">Nav2</a>
            </li>
            <li>
              <a href="#">Nav3</a>
            </li>
            <li>
              <a href="#">Nav4</a>
            </li>
            <li>
              <a href="#">Nav5</a>
            </li>
          </ul>
        </nav>

        <header className="grid justify-center">
          <h1 className="text-saturated-green font-bold text-5xl m-5">
            {"<HelloWorld>"}
          </h1>
        </header>
        <section className="flex col-span-3 gap-24 p-24">
          <div className="mt-32 w-96">
            <h1 className="text-saturated-green font-semibold text-3xl my-5">
              Hi there!!!
            </h1>
            <h2 className="text-gray-400 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem possimus fugiat maxime expedita adipisci minima facere,
              non quaerat unde veniam omnis odio eveniet quae, blanditiis
              repellendus dicta mollitia temporibus vitae?
            </h2>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-full h-96 w-96">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-black-boy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--man-avatar-pack-people-icons-5012785.png?f=webp"
              alt="cover"
              className="h-[400px] rounded-[70px]"
            />
          </div>
          <div className="bg-slate-400 bg-opacity-20 h-[400px] w-96 backdrop-blur-sm rounded-2xl border-[1px] border-primary grid justify-center p-5">
            <h1 className="text-xl text-primary font-bold">Links</h1>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Hero;
