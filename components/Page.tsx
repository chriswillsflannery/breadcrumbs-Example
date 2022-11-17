import { FC, ReactElement } from "react";
import { BreadCrumbs } from "./BreadCrumbs";

type PageProps = {
  crumbProps: { route: string; }
  children: ReactElement;
}

export const Page: FC<PageProps> = ({ crumbProps, children }) => (
  <>
    <BreadCrumbs crumbProps={crumbProps} />
    {children}
  </>
)