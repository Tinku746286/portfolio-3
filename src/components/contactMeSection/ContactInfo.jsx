import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="tk1932266@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+917462867438" Image={FiPhone} />
      <SingleInfo text="Bhopal,Madhya Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
