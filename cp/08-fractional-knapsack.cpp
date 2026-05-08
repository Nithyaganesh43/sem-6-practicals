#include <bits/stdc++.h>
using namespace std;

struct Item {
    double weight, value;
    double ratio() const { return value / weight; }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    double W;
    cin >> n >> W;
    vector<Item> items(n);
    for (auto &it : items) cin >> it.weight >> it.value;

    sort(items.begin(), items.end(),
         [](const Item &a, const Item &b) { return a.ratio() > b.ratio(); });

    double totalValue = 0.0, remaining = W;
    for (auto &it : items) {
        if (remaining <= 0) break;
        double take = min(it.weight, remaining);
        totalValue += take * it.ratio();
        remaining -= take;
        cout << "Take " << take << " kg of item (w=" << it.weight
             << ", v=" << it.value << ") -> gain=" << take * it.ratio() << "\n";
    }
    cout << fixed << setprecision(2);
    cout << "Maximum Profit = " << totalValue << "\n";
    return 0;
}
