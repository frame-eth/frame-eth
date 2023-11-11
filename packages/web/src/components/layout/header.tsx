import { FC } from "react";
import { CustomConnectButton } from "../common/ConnectButton";
import Container from "./container";
import Logo from "./logo";

const Header: FC = () => {
  return (
    <Container>
      <nav className="relative z-50 flex justify-between mx-4 py-8">
        <Logo title="frame-eth" />
        <div className="flex items-center gap-4">
          <CustomConnectButton />
        </div>
      </nav>
    </Container>
  );
};

export default Header;
