import { EllipseAnimation } from "../types/ellipse_animation";

const ShowCaseItem = ({
  title,
  center,
  size = "h-64 w-64",
  animation,
  ellipse,
}: {
  title: string;
  size?: string;
  center?: string | undefined;
  animation?: string | undefined;
  ellipse?: EllipseAnimation | undefined;
}) => {
  const getLatusEndpoint = () => {
    return {
      latusX: Math.floor(
        Math.sqrt(
          Math.pow(ellipse?.majorAxis ?? 0, 2) -
            Math.pow(ellipse?.minorAxis ?? 0, 2)
        )
      ),
      latusY: Math.ceil(
        Math.pow(ellipse?.minorAxis ?? 0, 2) /
          Math.pow(ellipse?.majorAxis ?? 1, 2)
      ),
    };
  };

  if (animation)
    console.table({
      "--orbit-major-axis": `${ellipse?.majorAxis}${ellipse?.unit}`,
      "--orbit-minor-axis": `${ellipse?.minorAxis}${ellipse?.unit}`,
      "--orbit-n-major-axis": `-${ellipse?.majorAxis}${ellipse?.unit}`,
      "--orbit-n-minor-axis": `-${ellipse?.minorAxis}${ellipse?.unit}`,
      "--orbit-latus-p-x": `${getLatusEndpoint().latusX}${ellipse?.unit}`,
      "--orbit-latus-n-x": `-${getLatusEndpoint().latusX}${ellipse?.unit}`,
      "--orbit-latus-p-y": `${getLatusEndpoint().latusY}${ellipse?.unit}`,
      "--orbit-latus-n-y": `-${getLatusEndpoint().latusY}${ellipse?.unit}`,
      "--orbit-duration": ellipse?.duration,
      animationDelay: ellipse?.delay,
    } as React.CSSProperties);

  return (
    <div
      className={`absolute ${center} ${size} border-2 border-black rounded-full grid items-center justify-center ${animation} hover:scale-125 duration-[1000ms]`}
      style={
        animation
          ? ({
              "--orbit-p-major-axis": `${ellipse?.majorAxis}${ellipse?.unit}`,
              "--orbit-p-minor-axis": `${ellipse?.minorAxis}${ellipse?.unit}`,
              "--orbit-n-major-axis": `-${ellipse?.majorAxis}${ellipse?.unit}`,
              "--orbit-n-minor-axis": `-${ellipse?.minorAxis}${ellipse?.unit}`,
              "--orbit-latus-p-x": `${getLatusEndpoint().latusX}${
                ellipse?.unit
              }`,
              "--orbit-latus-n-x": `-${getLatusEndpoint().latusX}${
                ellipse?.unit
              }`,
              "--orbit-latus-p-y": `${getLatusEndpoint().latusY}${
                ellipse?.unit
              }`,
              "--orbit-latus-n-y": `-${getLatusEndpoint().latusY}${
                ellipse?.unit
              }`,
              "--orbit-duration": ellipse?.duration,
              animationDelay: ellipse?.delay,
            } as React.CSSProperties)
          : undefined
      }
    >
      <p className="text-xl text-center w-24">{title}</p>
    </div>
  );
};

export default ShowCaseItem;
