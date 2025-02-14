export interface GraphNode extends Node {
  children?: GraphNode[];
}

export interface Node {
  name: string;
  description: string;
  parent: string;
}

export const graphData: Node[] = [
  {
    name: "A",
    description: "This is a description of A",
    parent: "",
  },
  {
    name: "B",
    description: "This is a description of B",
    parent: "A",
  },
  {
    name: "C",
    description: "This is a description of C",
    parent: "A",
  },
  {
    name: "D",
    description: "This is a description of D",
    parent: "A",
  },
  {
    name: "B-1",
    description: "This is a description of B-1",
    parent: "B",
  },
  {
    name: "B-2",
    description: "This is a description of B-2",
    parent: "B",
  },
  {
    name: "B-3",
    description: "This is a description of B-3",
    parent: "B",
  },
];
