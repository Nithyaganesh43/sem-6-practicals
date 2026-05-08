#include <bits/stdc++.h>
using namespace std;

void primeFactors(long long n) {
    cout << "Prime factors of " << n << ": ";
    map<long long, int> factors;

    for (long long i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            factors[i]++;
            n /= i;
        }
    }
    if (n > 1) factors[n]++;

    for (auto &entry : factors) {
        long long p = entry.first;
        int e = entry.second;
        if (e == 1) cout << p << " ";
        else cout << p << "^" << e << " ";
    }
    cout << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    long long n;
    cin >> n;
    primeFactors(n);
    return 0;
}
