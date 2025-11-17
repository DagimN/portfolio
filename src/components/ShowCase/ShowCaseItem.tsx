const ShowCaseItem = ({ offset }: { offset: string }) => {
  return (
    <div
      className={`bg-gray-400 bg-opacity-30 backdrop-blur-sm border-primary border-opacity-10 border-[1px] rounded-[50px] h-96 absolute ${offset} w-full shadow-xl transition-transform`}
      style={{ top: offset, transition: "top 300ms ease-in-out" }}
    ></div>
  );
};

export default ShowCaseItem;
