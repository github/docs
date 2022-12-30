---
title: マージ競合について
intro: マージコンフリクトは、競合するコミットを持つブランチをマージしようとしたときに生じるもので、最終のマージにどちらの変更を取り入れるかを Git が判断するのに手助けが必要になります。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 5902f74a9c51772dc3f1d8883b60723ffec3e1d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137844'
---
Git がブランチ間の差異を自動的に解決してマージできる場合もあります。 通常、変更は異なる行にあったり、さらには異なるファイルにあったりするので、コンピュータにとってマージの理解がシンプルになります。 一方、Git が自力では差異を解決できず、あなたの介入が必要となることもあります。 しばしば、人々が同じファイルの同じ行に異なる変更をした場合や、ある人が編集したファイルを他の人が削除していた場合にマージコンフリクトが生じます。

{% data variables.product.product_name %}上でプルリクエストをマージできるようにするには、すべてのマージコンフリクトを解決しなければなりません。 pull request 中の比較ブランチとベース ブランチ間でマージ競合がある場合、 **[pull request のマージ]** ボタンの上に、競合する変更を持つファイルのリストが表示されます。 **[Merge pull request]** ボタンは、比較ブランチとベースブランチ間のすべての競合が解決されるまで、非アクティブになっています。

![マージコンフリクトのエラーメッセージ](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## マージ競合の解決

マージコンフリクトを解決するには、競合しているファイルを手作業で編集し、最終のマージに残したい変更を選択しなければなりません。 マージコンフリクトを解決するにはいくつかの方法があります。

- マージコンフリクトが、Git リポジトリ中の異なるブランチ上で同じファイルの同じ行に異なる変更をしたといったような、競合する行の変更から生じた場合には、コンフリクトエディタを使って {% data variables.product.product_name %} 上で解決できます。 詳細については、[ {% data variables.product.prodname_dotcom %} でマージ競合を解決する](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)方法に関するページを参照してください。
- 他のすべての種類のマージコンフリクトについては、リポジトリのローカルクローン中でマージコンフリクトを解決し、変更を {% data variables.product.product_name %} 上のブランチにプッシュしなければなりません。 コマンド ラインを使用するか、[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) などのツールを使用し、変更をプッシュできます。 詳細については、[コマンド ラインでマージ競合を解決する](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)方法に関するページを参照してください。

コマンドライン上にマージコンフリクトがあるなら、自分のコンピュータ上でローカルにマージコンフリクトを解決するまでは、ローカルの変更を {% data variables.product.product_name %} にプッシュできません。 マージコンフリクトのあるコマンドライン上のブランチをマージしようとすると、エラーメッセージが返されます。 詳細については、「[コマンド ラインを使用してマージ コンフリクトを解決する](/articles/resolving-a-merge-conflict-using-the-command-line/)」を参照してください。
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## 参考資料

- "[pull request のマージについて](/articles/about-pull-request-merges/)"
- "[pull request について](/articles/about-pull-requests/)"
- "[コマンド ラインを使用してマージ コンフリクトを解決する](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)"
- "[GitHub でのマージ コンフリクトを解決する](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)"
