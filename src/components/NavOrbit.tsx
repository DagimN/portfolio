import NavItem from "./NavItem";

const NavOrbit = () => {
  const animationDuration = "30s";
  return (
    <div className="bg-gray-400 h-[100%] w-[100%] duration-1000">
      <NavItem title="Main Placeholder Avatar" center="top-[30%] left-[41%]" />
      <NavItem
        title="Item 1"
        size="h-10 w-10"
        animation="animate-wide-orbit"
        center="top-[45%] left-[30%]"
        ellipse={{
          majorAxis: 800,
          minorAxis: 100,
          unit: "px",
          duration: animationDuration,
          delay: "-5s",
        }}
      />
      <NavItem
        title="Item 2"
        size="h-10 w-10"
        animation="animate-wide-orbit"
        center="top-[45%] left-[45%]"
        ellipse={{
          majorAxis: 500,
          minorAxis: 100,
          unit: "px",
          duration: animationDuration,
          delay: "0s",
        }}
      />
      <NavItem
        title="Item 3"
        size="h-20 w-20"
        animation="animate-narrow-orbit"
        center="top-[-20%] left-[47%]"
        ellipse={{
          majorAxis: 200,
          minorAxis: 900,
          unit: "%",
          duration: animationDuration,
          delay: "-5s",
        }}
      />
      <NavItem
        title="Item 4"
        size="h-20 w-20"
        animation="animate-narrow-orbit"
        center="top-[-20%] left-[47%]"
        ellipse={{
          majorAxis: 200,
          minorAxis: 700,
          unit: "px",
          duration: animationDuration,
          delay: "0s",
        }}
      />
    </div>
  );
};

export default NavOrbit;
