---
title: Git リベース後のマージコンフリクトを解決する
intro: '`git rebase` 操作を実行するときに、通常ではコミットを移動しています。 このため、マージコンフリクトが発生する状況に陥る可能性があります。 つまり、同じファイルで 2 つのコミットにより同じ行が変更されたため、Git はどちらの変更を適用するのかわからないということです。'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
`git rebase` を使用してコミットを並べ替えて操作した後に、マージ コンフリクトが発生した場合、Git は次のメッセージを端末に表示してその旨をお知らせします:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

ここで、Git はどのコミットがコンフリクトを引き起こしているかを知らせています (`fa39187`)。 次の 3 つの選択肢が与えられています:

* `git rebase --abort` を実行すれば、リベースを完全に取り消すことができます。 Git はブランチの状態を `git rebase` を実行する前の状態に戻します。
* `git rebase --skip` を実行すれば、コミットを完全に省略できます。 つまり、問題のあるコミットにより引き起された変更はすべて除外されます。 このオプションを選択することはほとんどありません。
* コンフリクトを解決できます。

[コマンド ラインからマージ コンフリクトを解決するための標準的な手順](/articles/resolving-a-merge-conflict-using-the-command-line)に従うことで、コンフリクトを修正できます。 終了したら、Git がリベースの残りの処理を続けるために、`git rebase --continue` を呼び出す必要があります。
