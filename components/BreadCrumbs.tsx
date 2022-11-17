import { FC } from "react";
import Link from 'next/link';
import { getCrumbsFromCrumbProps } from "../utils/getCrumbsFromCrumbProps";

type BreadCrumbsProps = {
  crumbProps: { route: string; }
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ crumbProps }) => {
  const crumbs = getCrumbsFromCrumbProps(crumbProps);

  console.log('crumbs', crumbs);

  return (
    <div style={{ display: 'flex' }}>
      {crumbs.map((crumb: any, idx: number) => (
        <>
          <Link key={idx} href={crumb.href}>
            {crumb.name}
          </Link>
          <div style={{ margin: '0 5px' }}>{`>`}</div>
        </>
      ))}
    </div>
  )
}