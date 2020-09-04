function Node(data) {
    this.data = data;
    this.isEndOfWord = false;
    this.children = [];
}

function Trie() {
    this.root = new Node();
}



t = new Trie();
console.log(t.root)