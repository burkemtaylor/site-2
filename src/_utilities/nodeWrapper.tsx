import React from "react";

export function nodeWrapper(
  node: React.ReactNode | React.ReactNode[],
): React.ReactNode {
  if (Array.isArray(node)) {
    return (
      <>
        {node.map((child, i) => (
          <React.Fragment key={i}>{child}</React.Fragment>
        ))}
      </>
    );
  } else {
    return node;
  }
}
