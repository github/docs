トラブルシューティングするために、まずGitプロジェクト内のGitプロジェクトであるサブモジュールを本当に使いたいかを判断してください。サブモジュールは偶然作られてしまうことがあります。

サブモジュールを使いたくないなら、サブモジュールを削除してください。以下の<em>PATH-TO-SUBMODULE</em>はサブモジュールへのパスで置き換えてください。
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
