export enum SkeletonLoadingType {
  CARD = "CARD",
  LIST = "LIST",
}
type SkeletonLoadingProps = {
  type: SkeletonLoadingType;
};

export const SkeletonLoadingCard = () => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl hover:drop-shadow-md">
      <div className="md:flex">
        <div className="md:shrink-0">
          {/* image skeleton */}
          <div className="h-48 w-full md:h-full md:w-64 bg-zinc-200 animate-pulse" />
        </div>
        <div className="p-8 bg-zinc-50">
          <div className="bg-zinc-200 animate-pulse " />
          <div className="h-6 w-8 mt-1 bg-zinc-200 animate-pulse" />
          <div className="h-6 w-32 mt-1 bg-zinc-200 animate-pulse" />
          <div className="h-20 mt-2 bg-zinc-200 animate-pulse" />
          <div className="h-6 w-16 mt-1 bg-zinc-200 animate-pulse " />
        </div>
      </div>
    </div>
  );
};

export const SkeletonLoading = ({ type }: SkeletonLoadingProps) => {
  if (type === SkeletonLoadingType.CARD) {
    return (
      <div className="flex flex-row flex-wrap justify-center m-4 gap-4">
        <SkeletonLoadingCard />
        <SkeletonLoadingCard />
      </div>
    );
  }
  return null;
};
