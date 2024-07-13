import { Node, graphData } from "./data";

export const fetchGraphData = async (): Promise<Node[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return graphData;
};
