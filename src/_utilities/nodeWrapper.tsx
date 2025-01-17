export function nodeWrapper(
  node: React.ReactNode | React.ReactNode[],
): React.ReactNode {
  if (Array.isArray(node)) {
    return <>{node.map((child) => child)}</>;
  } else {
    return node;
  }
}
