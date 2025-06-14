/**
 * Props for the LazyLoad component
 * @property children - A function that receives an object with `isLoaded` properties.
 * `isLoaded` indicates whether the component is currently loaded.
 */
export type LazyLoadProps = {
  initLoaded?: boolean;
  loadMoreItems?: () => void;
  children: (args: {
    isLoaded: boolean;
    ref: React.RefObject<HTMLDivElement>;
  }) => React.ReactNode;
};
