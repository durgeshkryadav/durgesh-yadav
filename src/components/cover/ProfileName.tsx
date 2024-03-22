import Link from "next/link";
import { FC } from "react";
import Button from "../ui/Button";
import { Instagram } from "lucide-react";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
  return (
    <div className='text-3xl flex flex-col font-bold text-highlight'>
      Durgesh Yadav
      <div className='my-1 text-sm font-thin flex justify-between items-center'>
        7054392173
      </div>
    </div>
  );
};

export default ProfileName;
