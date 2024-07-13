import { Node, graphData } from "./data";

export interface GraphNode extends Node {
  children?: GraphNode[];
}

export const fetchGraphData = async (): Promise<Node[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return graphData;
};
