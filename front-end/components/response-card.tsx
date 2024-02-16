import Loader from "./loader";

interface ResponseCardProperties {
  error?: string;
  loading?: boolean;
}

export default function ResponseCard({
  error,
  loading,
}: ResponseCardProperties) {
  return (
    <div className="flex-1 grid place-content-center">
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </div>
  );
}
