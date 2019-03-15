import React from "react";
import { Spinner } from "reactstrap";
import useFetch from "./useFetchs";

export default props => {
  const { error, loading, data } = useFetch(props.api);
  if (loading) return <Spinner className="center" color="warning" />;
  if (error)
    return (
      <div className="small-error-text" style={error}>
        Error
      </div>
    );
  if (props.noData && Array.isArray(data) === true && !data.length) {
    return <div className="text-small italic center">{props.noData}</div>;
  }
  return <>{props.render(data)}</>;
};