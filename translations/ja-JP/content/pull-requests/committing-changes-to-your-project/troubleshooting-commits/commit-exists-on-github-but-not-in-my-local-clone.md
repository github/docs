---
title: コミットが GitHub にはありますが、ローカルにはありません
intro: '特定のコミットが、{% data variables.product.product_name %}上では見えるにもかかわらず、リポジトリのローカルクローンの中には存在しない、という場合があります。'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132529'
---
特定のコミットを表示するため、コマンド ラインで `git show` を使うと、致命的エラーが発生することがあります。

たとえば、ローカルで `bad object` エラーが発生する場合があります。

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

しかし、以下のように {% data variables.product.product_location %}でコミットを表示すると、問題が発生しません。

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

この場合、以下の原因が考えられます:

* ローカルのリポジトリが古い。
* そのコミットが属するブランチが削除されたため、コミットが参照できなくなっている。
* 誰かがコミットをフォースプッシュで上書きした。

## ローカルのリポジトリが古い

ローカルのリポジトリがまだコミットを取得していないことも考えられます。 リモート リポジトリからローカル クローンに情報を取得するには、以下のように `git fetch` を使用します。

```shell
$ git fetch <em>remote</em>
```

これにより、チェックアウトしたファイルに変更が加えられることなく、リモート リポジトリからローカル クローンに、情報が安全にコピーされます。フォーク元のリポジトリから情報を取得するには `git fetch upstream` を使用します。また、クローンのみを行ったリポジトリから情報を取得するには `git fetch origin` を使用します。

{% tip %}

**ヒント**: 詳細については、[Pro Git](https://git-scm.com/book) ブックの [リモートの管理とデータのフェッチ](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)に関するページを参照してください。

{% endtip %}

## コミットのあるブランチが削除された

リポジトリのコラボレーターが、そのコミットを含むブランチを削除した、あるいはブランチにフォース プッシュした場合、見つからないコミットは孤立している (つまり、どの参照からもたどり着けなくなっている) ため、ローカル クローンにフェッチできません。

幸いコラボレーターの誰かが、見つからないコミットを含むリポジトリのローカル クローンを持っている場合は、それを {% data variables.product.product_name %} にプッシュして戻してもらうことができます。  コミットがローカル ブランチによって参照されていることを確認してから {% data variables.product.product_name %} に新しいブランチとしてプッシュする必要があります。

たとえば、コラボレーターの 1 人が、コミットを含むローカル ブランチ (`B` と呼ぶ) をまだ持っているとします。  これが、フォース プッシュまたは削除されたブランチをトラッキングしている可能性がありますが、まだ更新されていません。  そのコミットを保持するために、そのローカル ブランチを {% data variables.product.product_name %} の新しいブランチ (`recover-B` と呼ぶ) にプッシュすることができます。  この例では、`upstream` という名前のリモートがあり、それを介して `github.com/$account/$repository` へのプッシュ アクセスがあると仮定します。

コミットを持つローカルブランチを持っている人が、以下のコマンドを実行します:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

これで、"*あなた*" が次を実行できます。

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## フォースプッシュは避けましょう

絶対に必要でない限り、フォースプッシュは避けましょう。 特に、リポジトリにプッシュできる人が 2 人以上いる場合は避けるべきです。 誰かがリポジトリにフォース プッシュした場合、フォース プッシュによって、他のユーザーがそれに基づいて作業しているコミットを上書きする可能性があります。 フォース プッシュによってリポジトリの履歴が変更され、pull request が破損する可能性あります。

## 参考資料

- [_Pro Git_ ブックの「リモートでの作業」](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [_Pro Git_ ブックの「データの復旧」](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
