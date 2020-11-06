---
title: クエリパラメータ付きのIssule及びプルリクエストの自動化について
intro: クエリパラメータを使って、カスタマイズされた情報を持つURLを共有できます。
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

クエリパラメータはカスタマイズ可能なURLのオプション部分で、{% data variables.product.prodname_dotcom %}上の検索フィルタの結果やIssueテンプレートといった特定のWebページビューを共有できます。 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**ヒント:** デフォルトのラベル、割り当て、Issue のタイトルを持ってオープンされる Issue テンプレートを作成することもできます。 詳細は「[リポジトリ用に Issue テンプレートを設定する](/articles/configuring-issue-templates-for-your-repository)」または「[リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 たとえばクエリパラメータの`labels`を使うには、Issueにラベルを追加する権限を持っていなければなりません。

クエリパラメータを使うのに不正なURLを作成したり、適切な権限を持っていなかったりした場合には、そのURLに対して404エラーページが返されます。

### サポートされているクエリパラメータ

| クエリパラメータ    | サンプル                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `body`      | `https://github.com/octo-org/octo-repo/compare/master...pull-request-test?quick_pull=1&body=Fixes+the+problem.` は、`master` と `pull-request-test` のブランチを比較して、ボディに "Fixes the problem" というコメントを付けてプルリクエストを作成します。 |
| `title`     | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` は、"bug" というラベルと "New bug report" というタイトルを付けて Issue を作成します。                                                                  |
| `labels`    | `https://github.com/octo-org/octo-repo/compare/master...pull-request-test?quick_pull=1&labels=bug` は、`master` ブランチと `pull-request-test` ブランチを比較して、"bug" というラベルを付けてプルリクエストを作成します。                               |
| `template`  | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` は、ボディにテンプレートを付けて Issue を作成します。                                                                                                       |
| `milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` は、"testing milestones" というマイルストーンを持たせて Issue を作成します。                                                                               |
| `assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` は、Issue を作成して @octocat に割り当てます。                                                                                                               |
| `projects`  | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` は、"Bug fix" というタイトルを付けて Issue を作成し、それを Organization のプロジェクトボード 1 に追加します。                                                  |

### カスタムテンプレートでIssueやプルリクエストを記入する

{% data reusables.repositories.legacy-issue-template-tip %}

`template`クエリパラメータを使い、テンプレートを指定して自動的にIssueやプルリクエストのボディに記入することができます。 `template`クエリパラメータは、`ISSUE_TEMPLATE`あるいはルート内の`PULL_REQUEST_TEMPLATE`サブディレクトリ、リポジトリ内の`docs/`あるいは`.github/`ディレクトリに保存されたテンプレートで動作します。

リポジトリにデフォルトのプルリクエストあるいはIssueのテンプレートしかない場合、新しいIssueやプルリクエストはボディ中にデフォルトのテンプレートを持つことになります。

詳しい情報については[リポジトリ中でのプルリクエストテンプレートの作成](/articles/creating-a-pull-request-template-for-your-repository)あるいは[リポジトリ用の単一Issueテンプレートの手動での作成](/articles/manually-creating-a-single-issue-template-for-your-repository)を参照してください。

### 参考リンク

- [クエリパラメータを使ったリリースフォームの自動化](/articles/automation-for-release-forms-with-query-parameters)
