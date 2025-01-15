import NavItem from "./NavItem";

const NavOrbit = () => {
  const animationDuration = "40s";
  return (
    <div className="bg-gray-400 h-[100%] w-[100%] duration-1000">
      <NavItem title="Main Placeholder Avatar" center="top-[30%] left-[41%]" />
      <NavItem
        title="Item 1"
        size="h-20 w-20"
        animation="animate-wide-orbit"
        center="top-[45%] left-[25%]"
        style={
          {
            "--orbit-p-major-axis": "1000%",
            "--orbit-p-minor-axis": "1%",
            "--orbit-n-major-axis": "-1000%",
            "--orbit-n-minor-axis": "-1%",
            "--orbit-duration": animationDuration,
            animationDelay: "-5s",
          } as React.CSSProperties
        }
      />
      <NavItem
        title="Item 2"
        size="h-10 w-10"
        animation="animate-wide-orbit"
        center="top-[45%] left-[25%]"
        style={
          {
            "--orbit-p-major-axis": "1000%",
            "--orbit-p-minor-axis": "100%",
            "--orbit-n-major-axis": "-1000%",
            "--orbit-n-minor-axis": "-100%",
            "--orbit-duration": animationDuration,
          } as React.CSSProperties
        }
      />
      <NavItem
        title="Item 3"
        size="h-20 w-20"
        animation="animate-narrow-orbit"
        center="top-[-20%] left-[47%]"
        style={
          {
            "--orbit-p-major-axis": "200%",
            "--orbit-p-minor-axis": "900%",
            "--orbit-n-major-axis": "-200%",
            "--orbit-n-minor-axis": "-900%",
            "--orbit-duration": animationDuration,
            animationDelay: "-5s",
          } as React.CSSProperties
        }
      />
      <NavItem
        title="Item 4"
        size="h-20 w-20"
        animation="animate-narrow-orbit"
        center="top-[-20%] left-[47%]"
        style={
          {
            "--orbit-p-major-axis": "200%",
            "--orbit-p-minor-axis": "900%",
            "--orbit-n-major-axis": "-200%",
            "--orbit-n-minor-axis": "-900%",
            "--orbit-duration": animationDuration,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export default NavOrbit;
