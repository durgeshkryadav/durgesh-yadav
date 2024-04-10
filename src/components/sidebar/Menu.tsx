import { FC } from "react";
import {
  Code2Icon,
  Github,
  Home,
  Image as ImageIcon,
  Linkedin,
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

      <List
        link='/'
        effect='slideUp'
        className={`pl-6 py-3 hover:bg-zinc-600 `}>
        <Home /> Home
      </List>
      {/* List 2 */}
      <div className='mt-5 mb-5'>Socials</div>
      <List
        target='_blank'
        link='https://github.com/durgeshkryadav'
        effect='slideUp'
        className={`pl-6 py-3 hover:bg-zinc-600 `}>
        <Github color='#2a9d8f' /> Github
      </List>
      <List
        target='_blank'
        link='https://www.linkedin.com/in/durgeshkryadav/'
        effect='slideUp'
        className={`pl-6 py-3 hover:bg-zinc-600 `}>
        <Linkedin color='#0277b5' /> Linkedin
      </List>
      <List
        link='/dsa'
        effect='slideUp'
        className={`pl-6 py-3 hover:bg-zinc-600 `}>
        <Code2Icon color='#0277b5' /> DSA
      </List>
    </div>
  );
};

export default Menu;
