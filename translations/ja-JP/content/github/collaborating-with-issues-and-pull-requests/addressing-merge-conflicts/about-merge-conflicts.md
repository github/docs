---
title: マージコンフリクトについて
intro: マージコンフリクトは、競合するコミットを持つブランチをマージしようとしたときに生じるもので、最終のマージにどちらの変更を取り入れるかを Git が判断するのに手助けが必要になります。
redirect_from:
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Git がブランチ間の差異を自動的に解決してマージできる場合もあります。 通常、変更は異なる行にあったり、さらには異なるファイルにあったりするので、コンピュータにとってマージの理解がシンプルになります。 一方、Git が自力では差異を解決できず、あなたの介入が必要となることもあります。 しばしば、人々が同じファイルの同じ行に異なる変更をした場合や、ある人が編集したファイルを他の人が削除していた場合にマージコンフリクトが生じます。

{% data variables.product.product_name %}上でプルリクエストをマージできるようにするには、すべてのマージコンフリクトを解決しなければなりません。 プルリクエスト中の比較ブランチとベースブランチ間でマージコンフリクトがある場合、[**Merge pull request**] ボタンの上に、競合する変更を持つファイルのリストが表示されます。 [**Merge pull request**] ボタンは、比較ブランチとベースブランチ間のすべての競合が解決されるまで、非アクティブになっています。

![マージコンフリクトのエラーメッセージ](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

### マージコンフリクトを解決する

マージコンフリクトを解決するには、競合しているファイルを手作業で編集し、最終のマージに残したい変更を選択しなければなりません。 マージコンフリクトを解決するにはいくつかの方法があります。

- マージコンフリクトが、Git リポジトリ中の異なるブランチ上で同じファイルの同じ行に異なる変更をしたといったような、競合する行の変更から生じた場合には、コンフリクトエディタを使って {% data variables.product.product_name %} 上で解決できます。 詳細は「[{% data variables.product.prodname_dotcom %} でマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-on-github)」を参照してください。
- 他のすべての種類のマージコンフリクトについては、リポジトリのローカルクローン中でマージコンフリクトを解決し、変更を {% data variables.product.product_name %} 上のブランチにプッシュしなければなりません。 変更のプッシュには、コマンドラインや [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) のようなツールが利用できます。 詳細は「[コマンドライン上でマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-using-the-command-line)」を参照してください。

コマンドライン上にマージコンフリクトがあるなら、自分のコンピュータ上でローカルにマージコンフリクトを解決するまでは、ローカルの変更を {% data variables.product.product_name %} にプッシュできません。 マージコンフリクトのあるコマンドライン上のブランチをマージしようとすると、エラーメッセージが返されます。 詳細は「[コマンド ラインを使用してマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-using-the-command-line)」を参照してください。
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

### 参考リンク

- [プルリクエストのマージについて](/articles/about-pull-request-merges/)
- [プルリクエストについて](/articles/about-pull-requests/)
- [コマンドラインを使ったマージコンフリクトの解決](/articles/resolving-a-merge-conflict-using-the-command-line)
- [GitHub上でのマージコンフリクトの解決](/articles/resolving-a-merge-conflict-on-github)
