#include <bits/stdc++.h>
using namespace std;

vector<int> sieve(int n) {
    vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; (long long)p * p <= n; p++) {
        if (is_prime[p]) {
            for (int multiple = p * p; multiple <= n; multiple += p)
                is_prime[multiple] = false;
        }
    }
    vector<int> primes;
    for (int i = 2; i <= n; i++)
        if (is_prime[i]) primes.push_back(i);
    return primes;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> primes = sieve(n);
    cout << "Primes up to " << n << " (" << primes.size() << " total):\n";
    for (int i = 0; i < (int)primes.size(); i++) {
        cout << primes[i];
        if (i + 1 < (int)primes.size()) cout << " ";
    }
    cout << "\n";
    return 0;
}
