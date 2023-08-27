

function Node(node_value) {

    return {
        value: node_value,
        next: null
    };
}

function linkedList () {
    return {
        head:null,
        tail:null,

        append (value) {
            const newNode = Node(value);

            if (this.head == null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        },

        prepend (value) {
            const newNode = Node(value);

            if (this.head == null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.next = this.head
                this.head = newNode;
            }
        },

        size () {
            let current = this.head
            let count = 0

            while (current) {
                current = current.next

                count += 1
            }
            return count
        },

        Head () {
            return this.head;
        },

        Tail () {
            return this.tail;
        },

        at (index) {
            if (index < 0 || index >= this.size()) return;

            let current = this.head
            let count = 0

            while (count < index) {
                current = current.next;

                count += 1
            }

            return current;
        },

        pop () {
            if (this.head == null) return;

            let current = this.head;
            let previous = null;

            while (current,next) {
                previous = current;
                current = current.next;
            }

            if (!previous) {
                this.head = null;
                this.tail = null;
            } else {
                previous.next = null;
                this.tail = previous
            }
        },

        contains (value) {
            let current = this.head;

            while (current) {
                if (current.value == value)
                    return true
                current = current.next
            }
            return false
        },

        find (value) {
            let current = this.head
            let index = 0

            while (current) {
                if (current.value == value)
                    return index
                current = current.next;
                index += 1;
            }

            return null;
        },

        insertAt (value, index) {
            if (index < 0 || index > this.size()) return;

            if (index === 0) {
                this.prepend(value);
            }else if (index == this.size()) {
                this.append(value);
            }else {
                let newNode = Node(value);
                let current = this.head;
                let previous = null;
                let count = 0;

                while (count < index) {
                previous = current;
                current = current.next;
                count += 1;
                }

                previous.next = newNode;
                newNode.next = current;
            }
        },

        removeAt (index) {
            if (index < 0 || index >= this.size) return;

            if (index === 0) {
                this.head = this.head.next;
                if (!this.head) {
                this.tail = null
                }
            }
            else {
                let current = this.head;
                let previous = null;
                let count = 0;

                while (count < index) {
                    previous = current;
                    current = current.next;
                    count += 1
                }
                if (current == this.tail)
                    this.tail = previous

                previous.next = current.next;
            }
        },

        toString () {

            let current = this.head;
            let result = "";

            while (current) {
                result += `(${current.value}) -> `
                current = current.next
            }

            result += "null"
            
            return result;
        }
    }
}