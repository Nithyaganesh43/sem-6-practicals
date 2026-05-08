#include <bits/stdc++.h>
using namespace std;

struct Fenwick {
    int n;
    vector<long long> bit;
    Fenwick(int n) : n(n), bit(n + 1, 0) {}

    void update(int i, long long delta) {
        for (; i <= n; i += i & -i)
            bit[i] += delta;
    }

    long long query(int i) {
        long long s = 0;
        for (; i > 0; i -= i & -i)
            s += bit[i];
        return s;
    }

    long long rangeSum(int l, int r) {
        return query(r) - query(l - 1);
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> arr(n + 1);
    Fenwick fw(n);
    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
        fw.update(i, arr[i]);
    }

    int q;
    cin >> q;
    while (q--) {
        int type;
        cin >> type;
        if (type == 1) {
            int pos, val;
            cin >> pos >> val;
            fw.update(pos, val - arr[pos]);
            arr[pos] = val;
        } else {
            int l, r;
            cin >> l >> r;
            cout << "Sum[" << l << "," << r << "] = "
                 << fw.rangeSum(l, r) << "\n";
        }
    }
    return 0;
}
