export enum LoadingSkeletonType {
  CARD = "CARD",
  LIST = "LIST",
}
type LoadingSkeletonProps = {
  type: LoadingSkeletonType;
};

export const LoadingSkeleton = ({ type }: LoadingSkeletonProps) => {
  if (type === LoadingSkeletonType.CARD) {
    return (
      <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg">
        Loading...
      </div>
    );
  }
  return null;
};
