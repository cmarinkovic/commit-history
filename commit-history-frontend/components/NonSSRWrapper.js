import React from "react";
import dynamic from "next/dynamic";

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

const NonSSRWrapper = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
