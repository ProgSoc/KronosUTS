import { useHelloWorld } from "../features/hello-world";

const HelloWorld: React.FC = () => {
  const { data, isLoading, error } = useHelloWorld();

  if (isLoading) return <span>Loading...</span>;

  if (error) return <span>An error has occured: {error.message}</span>;

  return <span>{data}</span>;
};

export default HelloWorld;
