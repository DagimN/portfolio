const NavItem = ({
  title,
  center,
  size = "h-64 w-64",
  animation,
  style,
}: {
  title: string;
  size?: string;
  center?: string | undefined;
  animation?: string | undefined;
  style?: React.CSSProperties | undefined;
}) => {
  return (
    <div
      className={`absolute ${center} ${size} border-2 border-black rounded-full grid items-center justify-center ${animation} hover:scale-125 duration-[1000ms]`}
      style={style}
    >
      <p className="text-xl text-center w-24">{title}</p>
    </div>
  );
};

export default NavItem;
