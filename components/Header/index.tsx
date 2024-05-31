import Bar from "./Bar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center relative pt-2">
      <Logo />
      <Bar />
    </header>
  );
};

export default Header;
