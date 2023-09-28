class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];
    let seen = new Set(stack)
    let retArr = []

    while (stack.length > 0) {
      let currNode = stack.pop()
      retArr.push(currNode.value);

      for (let adjacent of currNode.adjacent) {
        if (!seen.has(adjacent)) {
          stack.push(adjacent);
          seen.add(adjacent);
        }
      }
    }

    return retArr;
  }

  // Provided Solution
  // depthFirstSearch(start) {
  //   // Create an empty stack
  //   const stack = [start];
  //   const result = [];
  //   const visited = new Set();
  //   let currentVertex;

  //   // visit node
  //   visited.add(start);

  //   // while there are still neighbors to visit
  //   while (stack.length) {
  //     currentVertex = stack.pop();
  //     result.push(currentVertex.value);

  //     // visit neighbors and push onto stack
  //     currentVertex.adjacent.forEach(neighbor => {
  //       if (!visited.has(neighbor)) {
  //         visited.add(neighbor);
  //         stack.push(neighbor);
  //       }
  //     });
  //   }
  //   return result;
  // }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let seen = new Set(queue)
    let retArr = []

    while (queue.length > 0) {
      let currNode = queue.shift()
      retArr.push(currNode.value);
      for (let adjacent of currNode.adjacent) {
        if (!seen.has(adjacent)) {
          queue.push(adjacent);
          seen.add(adjacent);

        }
      }
    }

    return retArr;
  }
}

module.exports = {Graph, Node}