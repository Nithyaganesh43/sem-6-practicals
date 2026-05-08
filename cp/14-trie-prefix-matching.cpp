#include <bits/stdc++.h>
using namespace std;

struct TrieNode {
    TrieNode *ch[26];
    bool end;
    TrieNode() : end(false) { fill(ch, ch + 26, nullptr); }
};

struct Trie {
    TrieNode *root;
    Trie() : root(new TrieNode()) {}

    void insert(const string &w) {
        TrieNode *cur = root;
        for (char c : w) {
            int idx = c - 'a';
            if (!cur->ch[idx]) cur->ch[idx] = new TrieNode();
            cur = cur->ch[idx];
        }
        cur->end = true;
    }

    bool search(const string &w) {
        TrieNode *cur = root;
        for (char c : w) {
            int idx = c - 'a';
            if (!cur->ch[idx]) return false;
            cur = cur->ch[idx];
        }
        return cur->end;
    }

    bool startsWith(const string &prefix) {
        TrieNode *cur = root;
        for (char c : prefix) {
            int idx = c - 'a';
            if (!cur->ch[idx]) return false;
            cur = cur->ch[idx];
        }
        return true;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    Trie trie;
    int q;
    cin >> q;
    while (q--) {
        string op, word;
        cin >> op >> word;
        if (op == "insert") {
            trie.insert(word);
            cout << "Inserted: " << word << "\n";
        } else if (op == "search") {
            cout << "Search   \"" << word << "\": "
                 << (trie.search(word) ? "Found" : "Not found") << "\n";
        } else if (op == "startsWith") {
            cout << "Prefix   \"" << word << "\": "
                 << (trie.startsWith(word) ? "Prefix exists" : "No match") << "\n";
        }
    }
    return 0;
}
