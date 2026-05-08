#include <bits/stdc++.h>
using namespace std;

struct DSU {
    vector<int> parent, rank_;
    DSU(int n) : parent(n), rank_(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank_[rx] < rank_[ry]) swap(rx, ry);
        parent[ry] = rx;
        if (rank_[rx] == rank_[ry]) rank_[rx]++;
        return true;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int v, e;
    cin >> v >> e;
    DSU dsu(v);
    bool hasCycle = false;

    for (int i = 0; i < e; i++) {
        int u, w;
        cin >> u >> w;
        if (!dsu.unite(u, w)) {
            cout << "Cycle detected on edge (" << u << ", " << w << ")\n";
            hasCycle = true;
        }
    }
    if (!hasCycle) cout << "No cycle detected. Graph is acyclic.\n";
    return 0;
}
