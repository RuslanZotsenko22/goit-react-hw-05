import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <Audio
      visible={true}
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
