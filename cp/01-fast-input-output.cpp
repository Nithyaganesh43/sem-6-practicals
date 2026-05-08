#include <bits/stdc++.h>
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
    }
    return 0;
}
