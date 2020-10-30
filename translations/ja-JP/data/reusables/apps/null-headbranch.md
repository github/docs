The Checks API only looks for pushes in the repository where the check suite or check run were created. フォークされたリポジトリ内のブランチへのプッシュは検出されず、空の`pull_requests`配列と、`head_branch`に`null`値が返されます。
