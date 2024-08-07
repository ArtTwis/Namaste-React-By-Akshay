const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card__header">
        <div className="shimmer-card__header-placeholder" />
      </div>
      <div className="shimmer-card__content">
        <div className="shimmer-card__content-placeholder" />
      </div>
    </div>
  );
};

const HomepageShimmerUI = () => {
  return (
    <div id="restro_Container">
      {[...Array(10).keys()].map((element) => (
        <ShimmerCard />
      ))}
    </div>
  );
};

export default HomepageShimmerUI;
