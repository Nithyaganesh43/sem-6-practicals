#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n, target;
    cin >> n >> target;
    vector<int> arr(n);
    for (auto &x : arr) cin >> x;

    bool found = false;
    for (int mask = 0; mask < (1 << n); mask++) {
        int sum = 0;
        vector<int> subset;
        for (int j = 0; j < n; j++) {
            if (mask & (1 << j)) {
                sum += arr[j];
                subset.push_back(arr[j]);
            }
        }
        if (sum == target) {
            found = true;
            cout << "Subset found: { ";
            for (int x : subset) cout << x << " ";
            cout << "} -> Sum = " << sum << "\n";
        }
    }
    if (!found)
        cout << "No subset sums to " << target << "\n";
    return 0;
}
