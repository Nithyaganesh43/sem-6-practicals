#include <bits/stdc++.h>
using namespace std;

const int INF = 1000000000;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto &row : cost)
        for (auto &x : row) cin >> x;

    int full = 1 << n;
    vector<vector<int>> dp(full, vector<int>(n, INF));
    dp[1][0] = 0;

    for (int mask = 1; mask < full; mask++) {
        for (int u = 0; u < n; u++) {
            if (!(mask & (1 << u)) || dp[mask][u] == INF) continue;
            for (int v = 0; v < n; v++) {
                if (mask & (1 << v)) continue;
                int nmask = mask | (1 << v);
                dp[nmask][v] = min(dp[nmask][v], dp[mask][u] + cost[u][v]);
            }
        }
    }

    int ans = INF;
    for (int u = 1; u < n; u++)
        if (dp[full - 1][u] != INF)
            ans = min(ans, dp[full - 1][u] + cost[u][0]);

    cout << "Minimum Tour Cost = " << ans << "\n";
    return 0;
}
