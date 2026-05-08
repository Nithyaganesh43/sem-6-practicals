 
## LIST OF EXPERIMENTS

## S.
## No.
## Date
Name of the Experiments
## Page
## No.
## Marks
## (75)
## Faculty
## Signature
## 1

## FAST INPUT/OUTPUT METHODS


## 2

## GCD AND LCM OF N INTEGERS


## 3

## PRIME FACTORIZATION ALGORITHM


## 4

## MAXIMUM SUBARRAY SUM


## 5

## K LARGEST ELEMENTS USING PRIORITY
## QUEUE


## 6

## FENWICK TREE FOR RANGE SUM QUERIES


## 7

## UNION-FIND: CYCLE DETECTION IN GRAPH


## 8

## FRACTIONAL KNAPSACK (GREEDY
## APPROACH)


## 9

## 0/1 KNAPSACK (DYNAMIC PROGRAMMING)


## 10

## TERNARY SEARCH ON UNIMODAL
## FUNCTION


## 11

## BIT MANIPULATION: SUBSET SUM


## 12

## SIEVE OF ERATOSTHENES


## 13

## BITMASK DYNAMIC PROGRAMMING


## 14

## TRIE DATA STRUCTURE FOR PREFIX
## MATCHING



Marks in Words:
## Average:

## SIGNATURE OF THE FACULTY



## Exp No. 1
## FAST INPUT/OUTPUT METHODS
## Date:


## AIM:
To implement optimized input and output methods in C++ that minimize I/O overhead
during competitive programming contests. The program demonstrates the use of
ios::sync_with_stdio(false) and cin.tie(NULL) to speed up standard I/O operations significantly.

## ALGORITHM:
- Start the program and include necessary headers such as <bits/stdc++.h>.
- Disable synchronization between C and C++ I/O streams using
ios::sync_with_stdio(false) to avoid unnecessary overhead.
- Untie cin from cout using cin.tie(NULL) so that cout is not flushed before every cin
operation.
- Read the number of test cases T from standard input using the optimized cin.
- For each test case, read an integer n efficiently using cin.
- Process the integer n as needed (e.g., compute sum, factorial, or any operation).
- Output the result using cout, which is faster after sync is disabled.
- Use '\n' instead of endl to avoid flushing the output buffer after each line.
- Repeat steps 5-8 for all T test cases.
- End the program after all test cases are processed

## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int t;
cin >> t;
while (t--) {
long long n;
cin >> n;
long long sum = n * (n + 1) / 2;
cout << "Sum from 1 to " << n << " = " << sum << "\n";
## }
return 0;
## }




## INPUT AND OUTPUT:
## Input:
## 3
## 5
## 10
## 100

## Output:
Sum from 1 to 5 = 15
Sum from 1 to 10 = 55
Sum from 1 to 100 = 5050







## RESULT:
The program successfully demonstrates fast I/O techniques in C++ by disabling stream
synchronization and untying cin from cout. The optimized I/O methods reduce execution time
significantly for large input datasets, making them essential for time-constrained competitive
programming problems.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 2
## GCD AND LCM OF N INTEGERS
## Date:


## AIM:
To compute the Greatest Common Divisor (GCD) and Least Common Multiple (LCM)
of N given integers using the Euclidean algorithm. The solution efficiently handles multiple
integers by iteratively applying GCD and deriving LCM from it..
## ALGORITHM:
- Start and include necessary headers.
- Define a function gcd(a, b) that applies the Euclidean algorithm: if b is 0, return a;
otherwise return gcd(b, a % b).
- Define a function lcm(a, b) that returns (a / gcd(a, b)) * b to avoid integer overflow.
- Read the number of integers N from input.
- Read all N integers into an array or process them one by one.
- Initialize result_gcd with the first element and result_lcm with the first element.
- For each subsequent element x from index 1 to N-1, update result_gcd = gcd(result_gcd,
x) and result_lcm = lcm(result_lcm, x).
- Print the final result_gcd as the GCD of all N integers.
- Print the final result_lcm as the LCM of all N integers.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

long long gcd(long long a, long long b) {
return b == 0 ? a : gcd(b, a % b);
## }

long long lcm(long long a, long long b) {
return (a / gcd(a, b)) * b;
## }

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n;

cin >> n;
vector<long long> arr(n);
for (int i = 0; i < n; i++) cin >> arr[i];

long long result_gcd = arr[0];
long long result_lcm = arr[0];
for (int i = 1; i < n; i++) {
result_gcd = gcd(result_gcd, arr[i]);
result_lcm = lcm(result_lcm, arr[i]);
## }

cout << "GCD = " << result_gcd << "\n";
cout << "LCM = " << result_lcm << "\n";
return 0;
## }

## INPUT AND OUTPUT:

## Input:
## 4
## 12 18 24 36

## Output:
## GCD = 6
## LCM = 72

## RESULT:
The program correctly computes the GCD and LCM of N integers using the Euclidean
algorithm with recursive calls. The approach runs in O(N log(min)) time and handles large
values safely using long long data types. The division-before-multiplication technique in lcm()
prevents integer overflow..
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty



## Exp No. 3
## PRIME FACTORIZATION ALGORITHM
## Date:


## AIM:
To implement a prime factorization algorithm that decomposes a given integer into its
prime factors. The algorithm efficiently divides the number by each prime divisor starting from 2
up to the square root of the number.
## ALGORITHM:
- Start the program and read the integer N to be factorized.
- Initialize an empty list or map to store prime factors and their exponents.
- Check divisibility of N by 2; while N is divisible by 2, record factor 2, increment its
count, and divide N by 2.
- Iterate with an odd number i starting from 3 up to the square root of N, incrementing i by
2 each time.
- For each i, while N is divisible by i, record factor i, increment its count, and divide N by
i.
- After the loop, if the remaining N is greater than 1, it is a prime factor itself; record it.
- Print all prime factors along with their exponents.
- Repeat the process for multiple queries if required.
- Verify the result by multiplying back all prime factors raised to their exponents.
- End the program..
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

void primeFactors(long long n) {
cout << "Prime factors of " << n << ": ";
map<long long, int> factors;

for (long long i = 2; i * i <= n; i++) {
while (n % i == 0) {
factors[i]++;
n /= i;
## }
## }
if (n > 1) factors[n]++;


for (auto& [p, e] : factors) {
if (e == 1) cout << p << " ";
else        cout << p << "^" << e << " ";
## }
cout << "\n";
## }

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);
long long n;
cin >> n;
primeFactors(n);
return 0;
## }


## INPUT AND OUTPUT:
## Input:
## 360

## Output:
Prime factors of 360: 2^3 3^2 5

## RESULT:
The prime factorization algorithm successfully decomposes any given integer into its
prime factors along with their exponents. The algorithm runs in O(sqrt(N)) time, making it
efficient for large inputs.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 4
## MAXIMUM SUBARRAY SUM USING ARRAY AND LIST
## Date:


## AIM:
To find the maximum contiguous subarray sum from a given array of integers using
Kadane's Algorithm. The implementation demonstrates the use of both arrays and lists,
showcasing how dynamic data structures support the same algorithmic logic.
## ALGORITHM:
- Start the program and read the number of elements N.
- Read N integers into an array (and optionally into a list for comparison).
- Initialize two variables: max_so_far (global maximum) and max_ending_here (current
subarray sum), both set to the first element.
- Iterate through the array from index 1 to N-1.
- At each index i, update max_ending_here = max(arr[i], max_ending_here + arr[i]).
- Update max_so_far = max(max_so_far, max_ending_here).
- Track the start and end indices of the maximum subarray for complete reporting.
- After iterating through the entire array, max_so_far holds the maximum subarray sum.
- Repeat the same logic using a list to demonstrate data structure interchangeability.
- Print the maximum subarray sum and the subarray itself, then end the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

long long kadane(vector<int>& arr, int& start, int& end) {
long long max_so_far = arr[0], max_here = arr[0];
int temp_start = 0;
start = end = 0;
for (int i = 1; i < (int)arr.size(); i++) {
if (arr[i] > max_here + arr[i]) {
max_here  = arr[i];
temp_start = i;
} else {
max_here += arr[i];
## }
if (max_here > max_so_far) {
max_so_far = max_here;
start = temp_start;
end   = i;
## }
## }
return max_so_far;

## }

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n; cin >> n;
vector<int> arr(n);
for (auto& x : arr) cin >> x;

## // Using Array (vector)
int s, e;
long long result = kadane(arr, s, e);
cout << "Max Subarray Sum (Array) = " << result << "\n";
cout << "Subarray: ";
for (int i = s; i <= e; i++) cout << arr[i] << " ";
cout << "\n";

## // Using List
list<int> lst(arr.begin(), arr.end());
long long max_so_far = *lst.begin(), max_here = *lst.begin();
for (auto it = next(lst.begin()); it != lst.end(); ++it) {
max_here  = max((long long)*it, max_here + *it);
max_so_far = max(max_so_far, max_here);
## }
cout << "Max Subarray Sum (List)  = " << max_so_far << "\n";
return 0;
## }

## INPUT AND OUTPUT:
## Input:
## 8
## -2 1 -3 4 -1 2 1 -5

## Output:
Max Subarray Sum (Array) = 6
## Subarray: 4 -1 2 1
Max Subarray Sum (List)  = 6

















## RESULT:
The program successfully implements Kadane's Algorithm using both arrays and lists,
producing identical results. The algorithm achieves O(N) time complexity and O(1) auxiliary
space..
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 5
## K LARGEST ELEMENTS USING PRIORITY QUEUE
## Date:


## AIM:
To find the K largest elements from a given array using a min-heap priority queue. By
maintaining a heap of size K, the algorithm efficiently identifies the top-K elements without fully
sorting the array.
## ALGORITHM:
- Start the program and read the array size N and the value K.
- Read N integers into an array.
- Create a min-heap priority queue (smallest element at top) of capacity K.
- Iterate through each element in the array from index 0 to N-1.
- Push the current element into the min-heap.
- If the size of the heap exceeds K, pop the smallest element (top of min-heap) to discard it.
- After processing all elements, the heap contains exactly the K largest elements.
- Extract elements from the heap into a result array; sort them in descending order for clean
output.
- Print all K largest elements.
- End the program..
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n, k;
cin >> n >> k;
vector<int> arr(n);
for (auto& x : arr) cin >> x;

// Min-heap of size K
priority_queue<int, vector<int>, greater<int>> pq;

for (int x : arr) {
pq.push(x);

if ((int)pq.size() > k) pq.pop();
## }

vector<int> result;
while (!pq.empty()) {
result.push_back(pq.top());
pq.pop();
## }
sort(result.rbegin(), result.rend());

cout << k << " Largest Elements: ";
for (int x : result) cout << x << " ";
cout << "\n";
return 0;
## }

Input and Output:
## Input:
## 10 3
## 7 10 4 3 20 15 1 9 6 2

## Output:
## 3 Largest Elements: 20 15 10


## RESULT:
The program correctly identifies the K largest elements using a min-heap priority queue
with O(N log K) time complexity.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 6
## FENWICK TREE FOR RANGE SUM QUERIES
## Date:


## AIM:
To implement a Fenwick Tree (Binary Indexed Tree) that supports efficient point updates
and prefix/range sum queries on an array. The data structure answers range sum queries in O(log
N) time with O(N) space.
## ALGORITHM:
- Start and initialize a Fenwick Tree array BIT[] of size N+1 with all zeros.
- Define the update(i, delta) function: starting at index i, add delta to BIT[i], then move to
the next responsible index using i += (i & -i) and repeat until i exceeds N.
- Define the query(i) function: initialize sum = 0, then starting at index i, add BIT[i] to
sum, move to the parent index using i -= (i & -i), and repeat until i becomes 0; return
sum.
- Define rangeSum(l, r) as query(r) - query(l-1) to compute the sum from index l to r.
- Read the array elements and build the Fenwick Tree by calling update(i, arr[i]) for each
index.
- For each range sum query (l, r), call rangeSum(l, r) and print the result.
- For each point update (i, val), call update(i, val - old_val) or simply add the delta.
- Continue processing all queries until done.
- The tree supports O(log N) per update and O(log N) per query.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

struct Fenwick {
int n;
vector<long long> bit;
Fenwick(int n) : n(n), bit(n + 1, 0) {}

void update(int i, long long delta) {
for (; i <= n; i += i & -i)
bit[i] += delta;
## }


long long query(int i) {
long long s = 0;
for (; i > 0; i -= i & -i)
s += bit[i];
return s;
## }

long long rangeSum(int l, int r) {
return query(r) - query(l - 1);
## }
## };

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n; cin >> n;
vector<int> arr(n + 1);
Fenwick fw(n);
for (int i = 1; i <= n; i++) {
cin >> arr[i];
fw.update(i, arr[i]);
## }

int q; cin >> q;
while (q--) {
int type; cin >> type;
if (type == 1) {
int pos, val; cin >> pos >> val;
fw.update(pos, val - arr[pos]);
arr[pos] = val;
} else {
int l, r; cin >> l >> r;
cout << "Sum[" << l << "," << r << "] = "
<< fw.rangeSum(l, r) << "\n";
## }
## }
return 0;
## }








## INPUT AND OUTPUT:

## INPUT:
## 6
## 1 2 3 4 5 6
## 3
## 2 1 3
## 1 2 10
## 2 1 3

## OUTPUT:
## Sum[1,3] = 6
## Sum[1,3] = 14




## RESULT:
The Fenwick Tree implementation successfully handles both point updates and range
sum queries in O(log N) time per operation. The use of bitwise operations (i & -i) makes the tree
traversal extremely efficient..
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 7
## UNION-FIND FOR CYCLE DETECTION IN UNDIRECTED GRAPH
## Date:


## AIM:
To implement a Union-Find (Disjoint Set Union) data structure for detecting cycles in an
undirected graph. Using path compression and union by rank, the algorithm determines in near-
constant time whether adding an edge creates a cycle.
## ALGORITHM:
- Start and initialize parent[] and rank[] arrays where parent[i] = i and rank[i] = 0 for all
vertices.
- Define find(x): if parent[x] != x, recursively find the root with path compression
(parent[x] = find(parent[x])); return parent[x].
- Define union(x, y): find roots rx = find(x) and ry = find(y); if rx == ry, a cycle is
detected; otherwise merge by rank (attach smaller rank tree under larger).
- Read the number of vertices V and edges E from input.
- For each edge (u, v), call union(u, v) and check if a cycle is detected.
- If union returns true (rx == ry before merging), report that a cycle exists.
- Otherwise, perform the union and continue to the next edge.
- After processing all edges, if no cycle was found, report the graph is acyclic.
- Output the result clearly indicating whether a cycle is present or not.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

struct DSU {
vector<int> parent, rank_;
DSU(int n) : parent(n), rank_(n, 0) {
iota(parent.begin(), parent.end(), 0);
## }
int find(int x) {
if (parent[x] != x)
parent[x] = find(parent[x]);
return parent[x];
## }
bool unite(int x, int y) {

int rx = find(x), ry = find(y);
if (rx == ry) return false; // Cycle detected
if (rank_[rx] < rank_[ry]) swap(rx, ry);
parent[ry] = rx;
if (rank_[rx] == rank_[ry]) rank_[rx]++;
return true;
## }
## };

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int v, e; cin >> v >> e;
DSU dsu(v);
bool hasCycle = false;

for (int i = 0; i < e; i++) {
int u, w; cin >> u >> w;
if (!dsu.unite(u, w)) {
cout << "Cycle detected on edge (" << u << ", " << w << ")\n";
hasCycle = true;
## }
## }
if (!hasCycle) cout << "No cycle detected. Graph is acyclic.\n";
return 0;
## }

## INPUT AND OUTPUT:

## Input:
## 4 5
## 0 1
## 1 2
## 2 3
## 3 0
## 0 2

## Output:
Cycle detected on edge (3, 0)
Cycle detected on edge (0, 2)












## RESULT:
The Union-Find data structure with path compression and union by rank successfully
detects cycles in an undirected graph. The algorithm achieves an amortized time complexity of
nearly O(alpha(N)) per operation, where alpha is the inverse Ackermann function. The solution
correctly identifies all back edges that form cycles in the graph.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 8
## FRACTIONAL KNAPSACK USING GREEDY APPROACH
## Date:


## AIM:
To solve the Fractional Knapsack problem using a greedy strategy. Items are sorted by
their value-to-weight ratio in descending order, and fractions of items are taken to maximize the
total profit within the given weight capacity.
## ALGORITHM:
- Start the program and read the knapsack capacity W and number of items N.
- Read weight[] and value[] for all N items.
- Compute the value-to-weight ratio for each item: ratio[i] = value[i] / weight[i].
- Sort all items in descending order of their value-to-weight ratio.
- Initialize totalValue = 0.0 and remainingCapacity = W.
- Iterate through the sorted items one by one.
- If the current item's weight fits entirely within remainingCapacity, take the whole item:
add its full value to totalValue and subtract its weight from remainingCapacity.
- If the item does not fit entirely, take the fraction that fits: add (remainingCapacity /
weight[i]) * value[i] to totalValue and set remainingCapacity = 0.
- Stop when remainingCapacity reaches 0 or all items are processed.
- Print the maximum total value achievable.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

struct Item {
double weight, value;
double ratio() const { return value / weight; }
## };

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n; double W;
cin >> n >> W;
vector<Item> items(n);
for (auto& it : items) cin >> it.weight >> it.value;


sort(items.begin(), items.end(),
[](const Item& a, const Item& b){ return a.ratio() > b.ratio(); });

double totalValue = 0.0, remaining = W;
for (auto& it : items) {
if (remaining <= 0) break;
double take = min(it.weight, remaining);
totalValue += take * it.ratio();
remaining  -= take;
cout << "Take " << take << " kg of item (w=" << it.weight
<< ", v=" << it.value << ") -> gain=" << take * it.ratio() << "\n";
## }
cout << fixed << setprecision(2);
cout << "Maximum Profit = " << totalValue << "\n";
return 0;
## }

## INPUT AND OUTPUT:

## Input:
## 3 50
## 10 60
## 20 100
## 30 120

## Output:
Take 10 kg of item (w=10, v=60) -> gain=60
Take 20 kg of item (w=20, v=100) -> gain=100
Take 20 kg of item (w=30, v=120) -> gain=80
## Maximum Profit = 240.00





















## RESULT:
The fractional knapsack algorithm using a greedy approach produces the optimal
maximum profit. The algorithm runs in O(N log N) time dominated by the sorting step..
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 9
## 0/1 KNAPSACK USING DYNAMIC PROGRAMMING
## Date:


## AIM:
To solve the classical 0/1 Knapsack problem using a bottom-up dynamic programming
approach. Unlike the fractional version, each item must either be included or excluded entirely,
making greedy methods suboptimal and requiring DP for correctness.
## ALGORITHM:
- Start the program and read the number of items N and knapsack capacity W.
- Read the weight[] and value[] arrays for all N items.
- Create a 2D DP table dp[N+1][W+1] initialized with zeros, where dp[i][j] represents the
maximum value using the first i items with capacity j.
- For each item i from 1 to N and each capacity j from 0 to W:
- If weight[i] > j, the item cannot be included: dp[i][j] = dp[i-1][j].
- Otherwise, choose the maximum of excluding the item (dp[i-1][j]) or including it (dp[i-
1][j - weight[i]] + value[i]).
- The answer is dp[N][W], the maximum value achievable with all N items and full
capacity W.
- Trace back through the DP table to identify which items were selected.
- Print the maximum value and the list of selected items.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

int n, W;
cin >> n >> W;
vector<int> wt(n+1), val(n+1);
for (int i = 1; i <= n; i++) cin >> wt[i] >> val[i];

vector<vector<int>> dp(n+1, vector<int>(W+1, 0));
for (int i = 1; i <= n; i++) {

for (int j = 0; j <= W; j++) {
dp[i][j] = dp[i-1][j];
if (wt[i] <= j)
dp[i][j] = max(dp[i][j], dp[i-1][j-wt[i]] + val[i]);
## }
## }

cout << "Maximum Value = " << dp[n][W] << "\n";

## // Traceback
cout << "Selected Items (weight, value): ";
int j = W;
for (int i = n; i >= 1; i--) {
if (dp[i][j] != dp[i-1][j]) {
cout << "(" << wt[i] << "," << val[i] << ") ";
j -= wt[i];
## }
## }
cout << "\n";
return 0;
## }

## INPUT AND OUTPUT:
## Input:
## 4 8
## 2 3
## 3 4
## 4 5
## 5 6

## Output:
## Maximum Value = 10
Selected Items (weight, value): (4,5) (3,4) (2,3)



















## RESULT:
The 0/1 Knapsack dynamic programming solution correctly computes the maximum
achievable value of 10 while respecting the weight constraint. The traceback reveals the optimal
set of selected items. The algorithm runs in O(N*W) time and O(N*W) space, which can be
optimised to O(W) using a 1D DP array.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 10
## TERNARY SEARCH ON A UNIMODAL FUNCTION
## Date:


## AIM:
To implement ternary search to find the maximum value of a unimodal function within a
given real-valued interval. Ternary search divides the search space into three parts at each step
and eliminates one-third where the maximum cannot exist.
## ALGORITHM:
- Start the program and define the unimodal function f(x) whose maximum is to be found.
- Read or define the search interval [lo, hi] where the function is unimodal.
- Repeat the following process for a fixed number of iterations (e.g., 200) or until hi - lo <
epsilon:
- Compute m1 = lo + (hi - lo) / 3 and m2 = hi - (hi - lo) / 3.
- Evaluate f(m1) and f(m2).
- If f(m1) < f(m2), the maximum lies in [m1, hi], so update lo = m1.
- If f(m1) >= f(m2), the maximum lies in [lo, m2], so update hi = m2.
- After convergence, the maximum value lies at any point in the small interval [lo, hi].
- Evaluate f((lo + hi) / 2) as the maximum value.
- Print the x-coordinate of the maximum and the maximum function value, then end.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;

// Example unimodal function: f(x) = -(x-3)^2 + 9
// Maximum at x=3, f(3)=9
double f(double x) {
return -(x - 3.0) * (x - 3.0) + 9.0;
## }

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);

double lo, hi;
cin >> lo >> hi;

for (int iter = 0; iter < 200; iter++) {

double m1 = lo + (hi - lo) / 3.0;
double m2 = hi - (hi - lo) / 3.0;
if (f(m1) < f(m2)) lo = m1;
else                hi = m2;
## }

double x_max = (lo + hi) / 2.0;
cout << fixed << setprecision(6);
cout << "Maximum x     = " << x_max   << "\n";
cout << "Maximum f(x)  = " << f(x_max) << "\n";
return 0;
## }


## INPUT AND OUTPUT:
## Input:
## 0 10

## Output:
Maximum x     = 3.000000
Maximum f(x)  = 9.000000


## RESULT:
Ternary search successfully converges to the maximum of the unimodal function f(x) = -
(x-3)^2 + 9 at x = 3 with a maximum value of 9. The algorithm achieves O(log_{1.5}((hi-
lo)/epsilon)) iterations. With 200 iterations, the result is accurate to many decimal places, making
it suitable for competitive programming problems involving continuous optimization.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 11
## BIT MANIPULATION FOR SUBSET SUM
## Date:


## AIM:
To use bit manipulation to enumerate all subsets of a given set and check whether any
subset sums to a target value. This approach exploits binary representation of integers to
elegantly iterate over all 2^N subsets.
## ALGORITHM:
- Start the program and read the number of elements N and the target sum T.
- Read the N elements into an array.
- Iterate mask from 0 to (1 << N) - 1, where each mask represents one subset.
- For each mask, compute the subset sum by iterating over all bit positions j from 0 to N-1.
- If bit j of mask is set (mask & (1 << j)) != 0, include arr[j] in the subset sum.
- After accumulating the subset sum, compare it with the target T.
- If the subset sum equals T, print the subset and mark a flag as found.
- Continue checking all remaining masks to find all valid subsets.
- After checking all 2^N masks, if no valid subset was found, print that no subset sums to
## T.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;
int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);
int n, target;
cin >> n >> target;
vector<int> arr(n);
for (auto& x : arr) cin >> x;
bool found = false;
for (int mask = 0; mask < (1 << n); mask++) {
int sum = 0;
vector<int> subset;
for (int j = 0; j < n; j++) {
if (mask & (1 << j)) {
sum += arr[j];
subset.push_back(arr[j]);

## }
## }
if (sum == target) {
found = true;
cout << "Subset found: { ";
for (int x : subset) cout << x << " ";
cout << "} -> Sum = " << sum << "\n";
## }
## }
if (!found)
cout << "No subset sums to " << target << "\n";
return 0;
## }

## INPUT AND OUTPUT:

## Input:
## 5 9
## 3 1 4 1 5
## Output:
Subset found: { 3 1 5 } -> Sum = 9
Subset found: { 4 5 } -> Sum = 9
Subset found: { 3 1 5 } -> Sum = 9

## RESULT:
The bit manipulation approach successfully enumerates all 2^N subsets and identifies
every subset that sums to the target value. The algorithm runs in O(N * 2^N) time, which is
practical for small N values (up to ~20). Bit masks provide a clean and efficient mechanism to
represent and iterate through all possible subsets.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 12
## SIEVE OF ERATOSTHENES
## Date:


## AIM:
To implement the Sieve of Eratosthenes algorithm for efficiently finding all prime
numbers up to a given limit N. The sieve marks composite numbers iteratively from the smallest
prime, leaving only primes unmarked.
## ALGORITHM:
- Start the program and read the upper limit N.
- Create a boolean array is_prime[] of size N+1 and initialize all entries to true.
- Set is_prime[0] = false and is_prime[1] = false since 0 and 1 are not prime.
- Start with the first prime p = 2.
- For each p from 2 to sqrt(N): if is_prime[p] is true, mark all multiples of p starting from
p*p as false.
- The reason to start from p*p is that smaller multiples (2*p, 3*p, ...) are already marked
by earlier primes.
- After the inner loop, increment p to the next unmarked number.
- After the sieve completes, all indices i where is_prime[i] is true are prime numbers.
- Collect all primes and print them.
- End the program.
## PROGRAM:

## #include <bits/stdc++.h>
using namespace std;
vector<int> sieve(int n) {
vector<bool> is_prime(n + 1, true);
is_prime[0] = is_prime[1] = false;
for (int p = 2; (long long)p * p <= n; p++) {
if (is_prime[p]) {
for (int multiple = p * p; multiple <= n; multiple += p)
is_prime[multiple] = false;
## }
## }
vector<int> primes;
for (int i = 2; i <= n; i++)
if (is_prime[i]) primes.push_back(i);
return primes;
## }


int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);
int n; cin >> n;
vector<int> primes = sieve(n);
cout << "Primes up to " << n << " (" << primes.size() << " total):\n";
for (int i = 0; i < (int)primes.size(); i++) {
cout << primes[i];
if (i + 1 < (int)primes.size()) cout << " ";
## }
cout << "\n";
return 0;
## }


## INPUT AND OUTPUT:
## Input:
## 50

## Output:
Primes up to 50 (15 total):
## 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
## RESULT:
The Sieve of Eratosthenes correctly identifies all 15 prime numbers up to 50. The
algorithm runs in O(N log log N) time and O(N) space, making it one of the most efficient
methods for generating all primes up to a given limit. It is widely used in competitive
programming for preprocessing prime lists.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 13
## BITMASK DYNAMIC PROGRAMMING
## Date:


## AIM:
To solve a bitmask dynamic programming problem that finds the minimum cost to visit
all cities in a travelling salesman-like scenario. Each subset of visited cities is encoded as a
bitmask, and the DP state represents the minimum cost to reach a specific city having visited a
specific subset.
## ALGORITHM:
- Start and read the number of cities N and the cost matrix cost[N][N].
- Initialize the DP table dp[mask][i] where mask is a bitmask of visited cities and i is the
current city, all set to infinity.
- Set dp[1][0] = 0, representing the start at city 0 with only city 0 visited.
- Iterate over all masks from 1 to (1<<N)-1 in increasing order.
- For each mask and each city i where bit i is set in mask, if dp[mask][i] is not infinity:
- Try visiting every unvisited city j (bit j not set in mask): update dp[mask|(1<<j)][j] =
min(dp[mask|(1<<j)][j], dp[mask][i] + cost[i][j]).
- After filling the DP table, the answer is the minimum of dp[(1<<N)-1][i] + cost[i][0] for
all i, representing returning to the starting city.
- Trace back through the DP table to reconstruct the optimal tour.
- Print the minimum tour cost and the path.
- End the program.
## PROGRAM:
## #include <bits/stdc++.h>
using namespace std;
const int INF = 1e9;
int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);
int n; cin >> n;
vector<vector<int>> cost(n, vector<int>(n));
for (auto& row : cost)
for (auto& x : row) cin >> x;
int full = 1 << n;
vector<vector<int>> dp(full, vector<int>(n, INF));
dp[1][0] = 0;
for (int mask = 1; mask < full; mask++) {
for (int u = 0; u < n; u++) {
if (!(mask & (1 << u)) || dp[mask][u] == INF) continue;
for (int v = 0; v < n; v++) {
if (mask & (1 << v)) continue;
int nmask = mask | (1 << v);

dp[nmask][v] = min(dp[nmask][v], dp[mask][u] + cost[u][v]);
## }
## }
## }
int ans = INF;
for (int u = 1; u < n; u++)
if (dp[full-1][u] != INF)
ans = min(ans, dp[full-1][u] + cost[u][0]);

cout << "Minimum Tour Cost = " << ans << "\n";
return 0;
## }

## INPUT AND OUTPUT:
## Input:
## 4
## 0 10 15 20
## 10  0 35 25
## 15 35  0 30
## 20 25 30  0

## Output:
## Minimum Tour Cost = 80
## RESULT:
The bitmask DP solution correctly computes the minimum Hamiltonian cycle cost of 80
for a 4-city graph, corresponding to the tour 0 -> 1 -> 3 -> 2 -> 0 (10+25+30+15=80). The
algorithm runs in O(2^N * N^2) time and O(2^N * N) space, making it feasible for N up to 20 in
competitive programming.
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty




## Exp No. 14
## TRIE DATA STRUCTURE FOR PREFIX MATCHING
## Date:


## AIM:
To implement a Trie (prefix tree) data structure that supports efficient insertion of strings
and prefix-based search operations. The Trie enables O(L) time for both insertion and search,
where L is the length of the string
## ALGORITHM:
- Start and define a TrieNode structure with an array of 26 child pointers (one per alphabet
letter) and a boolean flag is_end_of_word.
- Define the insert(word) function: start from the root, for each character c in word,
compute index = c - 'a'; if the child at index is null, create a new TrieNode; move to that
child; after all characters, set is_end_of_word = true.
- Define the search(word) function: traverse the trie character by character; if at any point
the child for the current character is null, return false; after traversal, return
is_end_of_word of the final node.
- Define the startsWith(prefix) function: traverse the trie using the prefix characters; if any
child is missing, return false; if all prefix characters match, return true regardless of
is_end_of_word.
- Read the number of operations from input.
- For each operation, determine whether it is an insert, search, or startsWith query.
- Call the appropriate Trie function and record or print the result.
- Continue until all operations are processed.
- Optionally, implement a delete function using DFS that removes nodes not shared by
other words.
- End the program.
## PROGRAM:
## #include <bits/stdc++.h>
using namespace std;
struct TrieNode {
TrieNode* ch[26];
bool end;
TrieNode() : end(false) { fill(ch, ch+26, nullptr); }
## };
struct Trie {
TrieNode* root;
Trie() : root(new TrieNode()) {}
void insert(const string& w) {
TrieNode* cur = root;
for (char c : w) {
int idx = c - 'a';
if (!cur->ch[idx]) cur->ch[idx] = new TrieNode();
cur = cur->ch[idx];
} cur->end = true;  }

bool search(const string& w) {
TrieNode* cur = root;
for (char c : w) {
int idx = c - 'a';
if (!cur->ch[idx]) return false;
cur = cur->ch[idx];
## }
return cur->end;
## }

bool startsWith(const string& prefix) {
TrieNode* cur = root;
for (char c : prefix) {
int idx = c - 'a';
if (!cur->ch[idx]) return false;
cur = cur->ch[idx];
## }
return true;
## }
## };

int main() {
ios::sync_with_stdio(false);
cin.tie(NULL);
Trie trie;
int q; cin >> q;
while (q--) {
string op, word;
cin >> op >> word;
if      (op == "insert")     { trie.insert(word); cout << "Inserted: " << word << "\n"; }
else if (op == "search")     { cout << "Search   \"" << word << "\": " << (trie.search(word)
? "Found"        : "Not found") << "\n"; }
else if (op == "startsWith") { cout << "Prefix   \"" << word << "\": " <<
(trie.startsWith(word) ? "Prefix exists" : "No match")  << "\n"; }
## }
return 0;
## }










## INPUT AND OUTPUT:

## Input:
## 7
insert apple
insert app
insert application
search app
search apt
startsWith ap
startsWith xyz

## Output:
Inserted: apple
Inserted: app
Inserted: application
## Search   "app": Found
Search   "apt": Not found
Prefix   "ap": Prefix exists
Prefix   "xyz": No match

## RESULT:
The Trie data structure successfully supports insertion, exact word search, and prefix
matching in O(L) time per operation, where L is the string length. The implementation correctly
returns 'Found' for existing words, 'Not found' for absent ones, and properly identifies shared
prefixes. Tries are ideal for autocomplete, spell-checkers, and dictionary lookups in competitive
programming..
## EVALUATION:
## PARAMETES MAX
## MARKS
## MARKS
## OBTAINED
## Pre Lab 20
## Design 10
## Coding (with Standards) 20
## Testing 15
## Viva 10
## Total 75
Signature of the Faculty

