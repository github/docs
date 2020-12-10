---
title: プルリクエストのマージについて
intro: 'フィーチャブランチにすべてのコミットを保ち、すべてのコミットを単一のコミットにsquashするか、個々のコミットを`head`ブランチから`base`ブランチにリベースすることによって、[プルリクエストをマージ](/articles/merging-a-pull-request)できます。'
redirect_from:
  - /articles/about-pull-request-merge-squashing/
  - /articles/about-pull-request-merges
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.default_merge_option %}

### プルリクエストのコミットのsquashとマージ

{% data reusables.pull_requests.squash_and_merge_summary %}

#### squash マージのマージメッセージ

squash してマージすると、{% data variables.product.prodname_dotcom %} はコミットメッセージを生成します。メッセージは必要に応じて変更できます。 メッセージのデフォルトは、プルリクエストに複数のコミットが含まれているか、1 つだけ含まれているかによって異なります。

| コミット数   | 概要                                      | 説明                                   |
| ------- | --------------------------------------- | ------------------------------------ |
| 単一のコミット | 単一のコミットのコミットメッセージのタイトルと、その後に続くプルリクエスト番号 | 単一のコミットのコミットメッセージの本文テキスト             |
| 複数のコミット | プルリクエストのタイトルと、その後に続くプルリクエスト番号           | squash されたすべてのコミットのコミットメッセージの日付順のリスト |

#### 長時間にわたるブランチを squash してマージする

プルリクエストがマージされた後、プルリクエストの [head ブランチ](/github/getting-started-with-github/github-glossary#head-branch)で作業を継続する場合は、プルリクエストを squash してマージしないことをお勧めします。

プルリクエストを作成すると、{% data variables.product.prodname_dotcom %} は、head ブランチと[ベースブランチ](/github/getting-started-with-github/github-glossary#base-branch)の両方にある最新のコミット、つまり共通の先祖のコミットを識別します。 プルリクエストを squash してマージすると、{% data variables.product.prodname_dotcom %} は、共通の先祖のコミット以降に head ブランチで行ったすべての変更を含むコミットをベースブランチに作成します。

このコミットはベースブランチのみで行われ、head ブランチでは行われないため、2 つのブランチの共通の先祖は変更されません。 head ブランチでの作業を続行し、2 つのブランチ間に新しいプルリクエストを作成すると、プルリクエストには、共通の先祖以降のすべてのコミットが含まれます。これには、前のプルリクエストで squash してマージしたコミットも含まれます。 コンフリクトがない場合は、これらのコミットを安全にマージできます。 ただし、このワークフローでは高確率でマージコンフリクトが発生します。 長時間にわたる head ブランチのプルリクエストを squash してマージし続ける場合は、同じコンフリクトを繰り返し解決する必要があります。

### プルリクエストコミットのリベースとマージ

{% data reusables.pull_requests.rebase_and_merge_summary %}

以下の場合、{% data variables.product.product_location %}上で自動的にリベースおよびマージすることはできません:
- プルリクエストにマージコンフリクトがある。
- ベースブランチからヘッドブランチへのコミットのリベースでコンフリクトが生じる。
- たとえば、マージコンフリクトなしにリベースできるものの、マージとは異なる結果が生成されるような場合、コミットのリベースは「安全ではない」と考えられます。

それでもコミットをリベースしたいにもかかわらず、{% data variables.product.product_location %} 上で自動的にリベースとマージが行えない場合、以下のようにしなければなりません:
- トピックブランチ (あるいは head ブランチ) をベースブランチにローカルでコマンドラインからリベースする
- [コマンドライン上でマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-using-the-command-line/)
- リベースされたコミットをプルリクエストのトピックブランチ (あるいはリモートの head ブランチ) にフォースプッシュする。

リポジトリに書き込み権限を持つ人は、続いて{% data variables.product.product_location %}上のリベース及びマージボタンを使って[変更をマージ](/articles/merging-a-pull-request/)できます。

### 参考リンク

- [プルリクエストについて](/articles/about-pull-requests/)
- [マージコンフリクトへの対処](/articles/addressing-merge-conflicts)
