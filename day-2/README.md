# Data Structures and Algorithms: Lists and Arrays in Python

## Table of Contents

1. Introduction
2. Python Lists
3. Arrays in Python
4. Time Complexity Analysis

---

## Introduction

### What are Lists and Arrays?

**Lists** and **Arrays** are linear data structures that store elements in contiguous memory locations. They allow for efficient access to elements using indices.

- **Python Lists**: Dynamic arrays that can hold heterogeneous data types
- **Arrays**: Fixed-size, homogeneous data structures (via `array` module or NumPy)

### Key Characteristics

| Feature | Python List | Array (array module) |
| --- | --- | --- |
| Size | Dynamic | Fixed (can be resized) |
| Data Types | Heterogeneous | Homogeneous |
| Memory | More overhead | More efficient |
| Performance | Flexible | Faster for numeric ops |

---

## Python Lists

### 1. List Creation

```python
# Empty list
empty_list = []
empty_list = list()

# List with elements
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List comprehension
squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]

# Nested lists (2D arrays)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# List from range
numbers = list(range(1, 11))  # [1, 2, 3, ..., 10]

```

### 2. Accessing Elements

```python
arr = [10, 20, 30, 40, 50]

# Indexing (O(1))
first = arr[0]        # 10
last = arr[-1]        # 50
second_last = arr[-2] # 40

# Slicing (O(k) where k is slice size)
subset = arr[1:4]     # [20, 30, 40]
first_three = arr[:3] # [10, 20, 30]
last_two = arr[-2:]   # [40, 50]
reverse = arr[::-1]   # [50, 40, 30, 20, 10]
every_second = arr[::2] # [10, 30, 50]

```

### 3. Modifying Lists

```python
arr = [1, 2, 3, 4, 5]

# Update element (O(1))
arr[0] = 100  # [100, 2, 3, 4, 5]

# Append (O(1) amortized)
arr.append(6)  # [100, 2, 3, 4, 5, 6]

# Insert at position (O(n))
arr.insert(2, 999)  # [100, 2, 999, 3, 4, 5, 6]

# Extend with another list (O(k))
arr.extend([7, 8, 9])  # Adds multiple elements

# Remove by value (O(n))
arr.remove(999)  # Removes first occurrence

# Pop (O(1) for last, O(n) for others)
last = arr.pop()      # Removes and returns last element
second = arr.pop(1)   # Removes and returns element at index 1

# Delete by index (O(n))
del arr[2]

# Clear all elements (O(n))
arr.clear()

```

### 4. List Methods

```python
arr = [3, 1, 4, 1, 5, 9, 2, 6]

# Sorting
arr.sort()              # In-place sorting (O(n log n))
sorted_arr = sorted(arr) # Returns new sorted list

arr.sort(reverse=True)  # Descending order

# Custom sorting
arr.sort(key=lambda x: -x)  # Descending
words = ["apple", "pie", "zoo"]
words.sort(key=len)     # Sort by length

# Reverse
arr.reverse()           # In-place (O(n))
reversed_arr = arr[::-1] # New reversed list

# Count occurrences (O(n))
count = arr.count(1)    # Returns 2

# Find index (O(n))
index = arr.index(5)    # Returns index of first occurrence

# Copy
shallow_copy = arr.copy()
deep_copy = arr[:]

```

### 5. List Comprehensions (Advanced)

```python
# Basic comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Multiple conditions
filtered = [x for x in range(50) if x % 2 == 0 if x % 5 == 0]

# Nested comprehension (flatten 2D list)
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]  # [1, 2, 3, 4, 5, 6]

# 2D list comprehension
matrix = [[i*j for j in range(5)] for i in range(5)]

# With if-else
result = [x if x % 2 == 0 else -x for x in range(10)]

```

### 6. Iterating Over Lists

```python
arr = [10, 20, 30, 40, 50]

# Basic iteration
for item in arr:
    print(item)

# With index using enumerate
for index, value in enumerate(arr):
    print(f"Index {index}: {value}")

# Reverse iteration
for item in reversed(arr):
    print(item)

# Iterating over multiple lists
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
for num, char in zip(list1, list2):
    print(num, char)

```

### 7. List Operations

```python
# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]

# Repetition
repeated = [1, 2] * 3  # [1, 2, 1, 2, 1, 2]

# Membership testing
if 3 in list1:
    print("Found")

# Length
length = len(list1)

# Min and Max
numbers = [5, 2, 8, 1, 9]
minimum = min(numbers)  # 1
maximum = max(numbers)  # 9
total = sum(numbers)    # 25

```

---

## Arrays in Python

### 1. Using `array` Module

```python
import array

# Create array with type code
# 'i' = signed integer
int_array = array.array('i', [1, 2, 3, 4, 5])

# Type codes:
# 'b' = signed char (1 byte)
# 'B' = unsigned char (1 byte)
# 'h' = signed short (2 bytes)
# 'i' = signed int (2-4 bytes)
# 'l' = signed long (4-8 bytes)
# 'f' = float (4 bytes)
# 'd' = double (8 bytes)

# Operations (similar to lists)
int_array.append(6)
int_array.insert(0, 0)
int_array.remove(3)
value = int_array.pop()

# Array-specific methods
int_array.extend([7, 8, 9])
int_array.reverse()

# Convert to list
list_from_array = int_array.tolist()

# Convert from list
new_array = array.array('i', [1, 2, 3])

```

### 2. NumPy Arrays (Brief Overview)

```python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros(5)           # [0, 0, 0, 0, 0]
ones = np.ones((3, 3))        # 3x3 matrix of ones
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# Array operations (vectorized)
arr2 = arr * 2                # Element-wise multiplication
arr3 = arr + 10               # Add 10 to all elements

# 2D arrays
matrix = np.array([[1, 2, 3], [4, 5, 6]])
shape = matrix.shape          # (2, 3)

# Indexing and slicing
element = matrix[0, 1]        # 2
row = matrix[0, :]            # [1, 2, 3]
column = matrix[:, 1]         # [2, 5]

```

---

## Time Complexity Analysis

### List Operations

| Operation | Time Complexity | Description |
| --- | --- | --- |
| Access by index | O(1) | Direct memory access |
| Search (unsorted) | O(n) | Linear scan |
| Search (sorted) | O(log n) | Binary search |
| Insert at end | O(1) amortized | May need resize |
| Insert at position | O(n) | Shift elements |
| Delete at end | O(1) | Simple removal |
| Delete at position | O(n) | Shift elements |
| Append | O(1) amortized | Dynamic resizing |
| Pop (last) | O(1) | Remove last |
| Pop (index) | O(n) | Shift elements |
| Slice | O(k) | k = slice size |
| Sort | O(n log n) | Tim sort algorithm |
| Reverse | O(n) | Swap elements |
| Extend | O(k) | k = length of extension |
| Count | O(n) | Linear scan |
| Index | O(n) | Linear scan |
| Remove | O(n) | Find and shift |
| Copy | O(n) | Create new list |

### Space Complexity

- **List**: O(n) where n is number of elements
- **2D List**: O(n × m) for n rows and m columns
- **List Comprehension**: O(n) for output list
- **Slicing**: O(k) where k is slice size (creates new list)

### Comparison: List vs Array

| Aspect | Python List | Array (array module) | NumPy Array |
| --- | --- | --- | --- |
| Access | O(1) | O(1) | O(1) |
| Append | O(1) amortized | O(1) amortized | O(n) |
| Insert | O(n) | O(n) | O(n) |
| Delete | O(n) | O(n) | O(n) |
| Memory | Higher overhead | Lower overhead | Lowest overhead |
| Element-wise ops | Slow (loop needed) | Moderate | Fast (vectorized) |

---

## Tips for Optimization

### 1. Use Built-in Functions

Python's built-in functions are optimized in C and are much faster than manual implementations.

```python
# Good - Using built-ins
max_val = max(arr)
min_val = min(arr)
total = sum(arr)

# Avoid - Manual implementation
max_val = arr[0]
for num in arr:
    if num > max_val:
        max_val = num

```

### 2. List Comprehensions Over Loops

List comprehensions are more readable and typically faster than traditional loops.

```python
# Good - List comprehension
squares = [x**2 for x in range(100)]

# Avoid - Traditional loop
squares = []
for x in range(100):
    squares.append(x**2)

```

### 3. Avoid Unnecessary Copies

Use in-place operations when possible to save memory and time.

```python
# Good - In-place sort
arr.sort()

# Avoid - Creates new list
arr = sorted(arr)

```

### 4. Use Appropriate Data Structures

Choose the right data structure for your use case.

```python
# For membership testing, use sets
# Good
lookup = set(arr)
if x in lookup:  # O(1)
    pass

# Avoid
if x in arr:  # O(n)
    pass

```

### 5. Preallocate Lists When Size is Known

```python
# Good - Preallocate
result = [0] * n
for i in range(n):
    result[i] = i ** 2

# Less efficient - Dynamic growth
result = []
for i in range(n):
    result.append(i ** 2)

```

---

## Common Pitfalls

### 1. Modifying List While Iterating

```python
# Wrong - Causes issues
arr = [1, 2, 3, 0, 4, 0, 5]
for i in range(len(arr)):
    if arr[i] == 0:
        arr.pop(i)  # Index changes during iteration

# Correct - Use list comprehension
arr = [x for x in arr if x != 0]

# Or iterate backwards
for i in range(len(arr) - 1, -1, -1):
    if arr[i] == 0:
        arr.pop(i)

```

### 2. Shallow vs Deep Copy

```python
# Shallow copy - Only copies first level
arr2d = [[1, 2], [3, 4]]
shallow = arr2d.copy()
shallow[0][0] = 999  # Also changes arr2d!

# Deep copy - For nested structures
import copy
deep = copy.deepcopy(arr2d)
deep[0][0] = 999  # arr2d remains unchanged

```

### 3. Mutable Default Arguments

```python
# Wrong - Default list is shared across calls
def add_item(item, lst=[]):
    lst.append(item)
    return lst

# Correct - Use None as default
def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

```

### 4. Index Out of Bounds

```python
# Always check bounds
arr = [1, 2, 3]

# Wrong
value = arr[5]  # IndexError

# Correct
if 0 <= i < len(arr):
    value = arr[i]

# Or use try-except
try:
    value = arr[i]
except IndexError:
    print("Index out of range")

```

### 5. Comparison Operators

```python
# == checks value equality
list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(list1 == list2)  # True

# is checks identity (same object)
print(list1 is list2)  # False

# Same object
list3 = list1
print(list1 is list3)  # True

```

---

## Conclusion

Lists and arrays are fundamental data structures in Python and form the foundation of many algorithms and data structures.

### Key Takeaways

1. **Python Lists** are dynamic, flexible, and can hold heterogeneous data
2. **Arrays** (from array module) are memory-efficient for homogeneous numeric data
3. **NumPy Arrays** are best for numerical computations and scientific computing
4. Understanding **time complexity** is crucial for writing efficient code
5. Use **built-in functions** and **list comprehensions** for better performance
6. Be aware of **common pitfalls** like shallow copies and modifying lists during iteration

### Best Practices

- Choose the appropriate data structure based on your needs
- Use list comprehensions for concise and efficient code
- Leverage built-in functions instead of reinventing the wheel
- Be mindful of time and space complexity
- Write clean, readable code with proper error handling

### Next Steps

To master lists and arrays:

1. Practice implementing basic operations from scratch
2. Solve problems on coding platforms (LeetCode, HackerRank, CodeForces)
3. Learn common algorithms that use arrays (sorting, searching, etc.)
4. Study advanced data structures built on arrays (heaps, hash tables)
5. Analyze the time and space complexity of your solutions

Remember: **Consistent practice is the key to mastering data structures and algorithms!**