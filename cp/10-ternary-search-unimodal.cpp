#include <bits/stdc++.h>
using namespace std;

double f(double x) {
    return -(x - 3.0) * (x - 3.0) + 9.0;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    double lo, hi;
    cin >> lo >> hi;

    for (int iter = 0; iter < 200; iter++) {
        double m1 = lo + (hi - lo) / 3.0;
        double m2 = hi - (hi - lo) / 3.0;
        if (f(m1) < f(m2)) lo = m1;
        else hi = m2;
    }

    double x_max = (lo + hi) / 2.0;
    cout << fixed << setprecision(6);
    cout << "Maximum x     = " << x_max << "\n";
    cout << "Maximum f(x)  = " << f(x_max) << "\n";
    return 0;
}
