
export const getCrumbsFromCrumbProps = (crumbProps: any) => {
  const { route } = crumbProps;

  // Home
  if (route === '/') {
    return [{ href: '/', name: 'Home'}]
  }

  console.log('route', route);
  const paths = route.split('/');
  console.log('paths', paths);


  const mapped = paths.map((path: any, idx: number) => (idx === 0) ? { href: '/', name: 'Home'} : { href: path, name: path});
  return mapped;
}