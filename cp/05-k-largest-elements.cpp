#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin >> n >> k;
    vector<int> arr(n);
    for (auto &x : arr) cin >> x;

    priority_queue<int, vector<int>, greater<int>> pq;

    for (int x : arr) {
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();
    }

    vector<int> result;
    while (!pq.empty()) {
        result.push_back(pq.top());
        pq.pop();
    }
    sort(result.rbegin(), result.rend());

    cout << k << " Largest Elements: ";
    for (int x : result) cout << x << " ";
    cout << "\n";
    return 0;
}
