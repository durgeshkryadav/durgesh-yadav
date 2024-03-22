import { FC } from "react";
import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Linkedin,
  Video,
  X,
} from "lucide-react";
import List from "../ui/List";
import { useMenu } from "../Provider";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { showMenuVisibility } = useMenu();
  return (
    <div
      className='flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5'
      onClick={() => showMenuVisibility(false)}>
      <div className='block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl'>
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link='/' effect='slideUp'>
        <Home /> Home
      </List>
      {/* List 2 */}
      <div className='mt-5'>Socials</div>
      <List target='_blank' link='https://github.com/DGSH9' effect='slideUp'>
        <Github color='#2a9d8f' /> Github
      </List>
      <List
        target='_blank'
        link='https://www.linkedin.com/in/durgeshkryadav/'
        effect='slideUp'>
        <Linkedin color='#0277b5' /> Linkedin
      </List>
    </div>
  );
};

export default Menu;
