import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ContactsCard = () => {
  return (
    <aside className="bg-slate-400 bg-opacity-20 h-[400px] w-96 backdrop-blur-sm rounded-2xl border-[1px] border-primary grid justify-center p-5">
      <h1 className="text-xl text-primary text-center font-bold">Contacts</h1>
      <ul className="grid gap-3 text-center">
        <a
          target="_blank"
          href="mailto:dagmnebiat.work@gmail.com"
          className="text-slate-400 hover:text-primary duration-300"
        >
          <li className="grid justify-items-center items-center gap-2">
            <MdOutlineEmail size={45} />
            <h1>dagmnebiat.work@gmail.com</h1>
          </li>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/dagmawi-nebiat-b694ab174/"
          className="text-slate-400 hover:text-primary duration-300"
        >
          <li className="grid justify-items-center items-center gap-2">
            <IoLogoLinkedin size={45} />
            <h1>Dagmawi Nebiat</h1>
          </li>
        </a>

        <a
          target="_blank"
          href="https://github.com/DagimN"
          className="text-slate-400 hover:text-primary duration-300"
        >
          <li className="grid justify-items-center items-center gap-2">
            <IoLogoGithub size={45} />
            <h1>DagimN</h1>
          </li>
        </a>
      </ul>
    </aside>
  );
};

export default ContactsCard;
