#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n, W;
    cin >> n >> W;
    vector<int> wt(n + 1), val(n + 1);
    for (int i = 1; i <= n; i++) cin >> wt[i] >> val[i];

    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= W; j++) {
            dp[i][j] = dp[i - 1][j];
            if (wt[i] <= j)
                dp[i][j] = max(dp[i][j], dp[i - 1][j - wt[i]] + val[i]);
        }
    }

    cout << "Maximum Value = " << dp[n][W] << "\n";

    cout << "Selected Items (weight, value): ";
    int j = W;
    for (int i = n; i >= 1; i--) {
        if (dp[i][j] != dp[i - 1][j]) {
            cout << "(" << wt[i] << "," << val[i] << ") ";
            j -= wt[i];
        }
    }
    cout << "\n";
    return 0;
}
