import { Node, graphData } from "./data";

export const fetchGraphData = async (): Promise<Node[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // This simulates an API request
  return graphData;
};
