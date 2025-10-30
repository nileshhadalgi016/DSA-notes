# Day 1: Introduction to Arrays

## What is an Array?

An array is a data structure that stores a collection of elements of the same type in contiguous memory locations. It's one of the fundamental data structures in computer science.

## Key Properties

- **Fixed Size**: Arrays have a fixed size that must be specified at creation
- **Indexed Access**: Elements can be accessed using their index (0-based)
- **Contiguous Memory**: Elements are stored in consecutive memory locations
- **Same Type**: All elements must be of the same data type

## Basic Operations

### 1. Declaration and Initialization

```python
# Python
arr = [1, 2, 3, 4, 5]

# Java
int[] arr = {1, 2, 3, 4, 5};
```

### 2. Accessing Elements

```python
# Access first element
first = arr[0]  # 1

# Access last element
last = arr[-1]  # 5 (Python)
```

### 3. Modifying Elements

```python
arr[0] = 10  # Change first element
```

### 4. Traversing an Array

```python
# Using for loop
for i in range(len(arr)):
    print(arr[i])

# Using foreach
for element in arr:
    print(element)
```

## Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Access    | O(1)          |
| Search    | O(n)          |
| Insert    | O(n)          |
| Delete    | O(n)          |

## Common Problems

1. Find the maximum element
2. Find the minimum element
3. Reverse an array
4. Find duplicates
5. Rotate an array

## Practice Problems

Try solving these problems to master arrays:

- Two Sum
- Best Time to Buy and Sell Stock
- Contains Duplicate
- Product of Array Except Self

## Key Takeaways

> Arrays are the foundation of many other data structures and algorithms. Master them first!

- Arrays provide constant time access to elements
- They are memory efficient for storing sequential data
- Understanding arrays is crucial for solving complex problems
- Many advanced data structures are built on top of arrays

---

**Next Topic**: Day 2 - Array Algorithms and Patterns
