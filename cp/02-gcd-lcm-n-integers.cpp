#include <bits/stdc++.h>
using namespace std;

long long gcd(long long a, long long b) {
    return b == 0 ? a : gcd(b, a % b);
}

long long lcm(long long a, long long b) {
    return (a / gcd(a, b)) * b;
}

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
    }

    cout << "GCD = " << result_gcd << "\n";
    cout << "LCM = " << result_lcm << "\n";
    return 0;
}
