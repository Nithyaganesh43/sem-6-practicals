#include <bits/stdc++.h>
using namespace std;

long long kadane(vector<int> &arr, int &start, int &end) {
    long long max_so_far = arr[0], max_here = arr[0];
    int temp_start = 0;
    start = end = 0;
    for (int i = 1; i < (int)arr.size(); i++) {
        if (arr[i] > max_here + arr[i]) {
            max_here = arr[i];
            temp_start = i;
        } else {
            max_here += arr[i];
        }
        if (max_here > max_so_far) {
            max_so_far = max_here;
            start = temp_start;
            end = i;
        }
    }
    return max_so_far;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> arr(n);
    for (auto &x : arr) cin >> x;

    int s, e;
    long long result = kadane(arr, s, e);
    cout << "Max Subarray Sum (Array) = " << result << "\n";
    cout << "Subarray: ";
    for (int i = s; i <= e; i++) cout << arr[i] << " ";
    cout << "\n";

    list<int> lst(arr.begin(), arr.end());
    long long max_so_far = *lst.begin(), max_here = *lst.begin();
    for (auto it = next(lst.begin()); it != lst.end(); ++it) {
        max_here = max((long long)*it, max_here + *it);
        max_so_far = max(max_so_far, max_here);
    }
    cout << "Max Subarray Sum (List)  = " << max_so_far << "\n";
    return 0;
}
