# Quick Select Analysis: Sedgewick vs. Lomuto Partition

## Overview
This project empirically analyzes two algorithms for finding the median of a dataset using Quick Select with Sedgewick Partition and Lomuto Partition. The report evaluates their efficiency, compares performance, and highlights the most efficient partition based on empirical evidence.

## Features
- Implements Quick Select using:
  - **Sedgewick Partition**
  - **Lomuto Partition**
- Evaluates algorithm efficiency using basic operation counters.
- Empirical analysis with input sizes ranging from 100 to 1.5 million.
- Generates efficiency graphs for best, average, and worst-case scenarios.
- Summarizes efficiency classes for both partitions.

## Implementation Details
### Quick Select
Quick Select is an algorithm used to find the k-th smallest element in an unordered list. The median is calculated when \( k = \lceil n / 2 \rceil \).

### Partitions Used
1. **Sedgewick Partition**
   - Theory: \( \Theta(n \log n) \) for best and average cases, \( \Theta(n^2) \) for worst-case.
   - Implementation: Based on Lecture 22 by Dr. Muhammad Al-Hashimi.

2. **Lomuto Partition**
   - Theory: \( \Theta(n) \) for best and average cases, \( \Theta(n \log n) \) for worst-case.
   - Implementation: From Chapter 4.5 (Page 159) of the textbook.

## Tools Used
- **JavaScript**: Algorithm implementation.
- **Firefox Browser Console**: To run the code and collect data.
- **Excel**: For data analysis and graph generation.

## Results Summary
| Partition         | Best Case       | Average Case    | Worst Case      |
|-------------------|-----------------|-----------------|-----------------|
| Sedgewick         | \( \Theta(n) \) | \( \Theta(n) \) | \( \Theta(n^2) \) |
| Lomuto            | \( \Theta(n \log n) \) | \( \Theta(n \log n) \) | \( \Theta(n^2) \) |

## Efficiency Graphs
Efficiency graphs for each partition can be found in the `graphs/` directory:
- **Sedgewick Partition**: `sedgewick_efficiency.png`
- **Lomuto Partition**: `lomuto_efficiency.png`

## Conclusion
Quick Select with Sedgewick Partition is more efficient for finding the median, especially for larger datasets, based on the basic operation counter. However, the results are limited to specific ranges and random samples. Future experiments with broader input ranges and sizes are recommended.

## References
1. Levitin, A. *Introduction to Design and Analysis of Algorithms*, 3/E. Pearson Education India.
2. Dr. M. Al-Hashimi's website: [https://www.hashimi.ws/cs223/index.ph](https://www.hashimi.ws/cs223/index.ph)

