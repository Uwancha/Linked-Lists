
# Linked List

## Description

A linked list is a data structure that consists of a sequence of nodes, where each node stores a value and a reference (or link) to the next node in the sequence. The linked list provides efficient insertion and removal operations compared to arrays, especially when dealing with large data sets. This implementation of a linked list in JavaScript provides various methods to manipulate and perform operations on the list, such as appending and prepending nodes, retrieving node values at specific indexes, removing nodes, and more.

This project is part of The Odin Project's curriculum for learning full-stack web development.

## Usage

To use the linked list implementation, follow these steps:

1. Create an instance of the linked list:

   ````javascript
   const myList = linkedList();
   ```

   ````

1. Append values to the list:

   ````javascript
   myList.append(value);
   ```

   ````

1. Prepend values to the list:

   ````javascript
   myList.prepend(value);
   ```

   ````

1. Perform operations on the list using the available methods such as `size()`, `Head()`, `Tail()`, `at(index)`, `pop()`, `contains(value)`, `find(value)`, `insertAt(value, index)`, `removeAt(index)`, and `toString()`.

## Methods

### `append(value)`

Appends a new node with the specified value to the end of the list.

- Parameters:
  - `value`: The value to be stored in the new node.

### `prepend(value)`

Prepends a new node with the specified value to the beginning of the list.

- Parameters:
  - `value`: The value to be stored in the new node.

### `size()`

Returns the number of nodes in the list.

- Returns:
  - The size of the list (number of nodes).

### `Head()`

Returns the first node (head) of the list.

- Returns:
  - The head node of the list.

### `Tail()`

Returns the last node (tail) of the list.

- Returns:
  - The tail node of the list.

### `at(index)`

Returns the node at the specified index in the list.

- Parameters:

  - `index`: The index of the node to retrieve.

- Returns:

  - The node at the specified index, or `undefined` if the index is out of range.

### `pop()`

Removes the last node from the list.

### `contains(value)`

Checks if the list contains a node with the specified value.

- Parameters:

  - `value`: The value to search for in the list.

- Returns:

  - `true` if a node with the value is found, otherwise `false`.

### `find(value)`

Finds the index of the first node with the specified value in the list.

- Parameters:

  - `value`: The value to search for in the list.

- Returns:

  - The index of the first node with the value, or `null` if the value is not found.

### `insertAt(value, index)`

Inserts a new node with the specified value at the specified index in the list.

- Parameters:
  - `value`: The value to be stored in the new node.
  - `index`: The index at which to insert the new node.

### `removeAt(index)`

Removes the node at the specified index from the list.

- Parameters:
  - `index`: The index of the node to remove.

### `toString()`

Returns a string representation of the list, showing the values of all nodes.

- Returns:
  - A string representation of the list.

