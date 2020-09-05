function Node(data) {
    this.data = data;
    this.isEndOfWord = false;
    this.children = new Array(26).fill(null);
}

function Trie() {
    this.root = new Node();

    insert = (string) => {



    }

    search = (string) => {



    }

    remove = (string) => {

        

    }
}



t = new Trie();
console.log(t.root.children)