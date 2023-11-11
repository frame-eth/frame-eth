import { FC, ReactNode } from "react";
import Container from "./container";
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen overflow-y-scroll bg-base-200">
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
