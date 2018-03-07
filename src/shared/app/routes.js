import Loadable from 'react-loadable';

export const Landing = Loadable({
  loader: () => import("../landing/Landing"),
  loading: () => <div>Loading...</div>
})

export const Projects = Loadable({
  loader: () => import("../projects/Projects"),
  loading: () => <div>Loading...</div>
})
