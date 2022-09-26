---
title: プルリクエストのマージについて
intro: 'フィーチャー ブランチにすべてのコミットを保持して、すべてのコミットを単一のコミットに squash するか、個々のコミットを `head` ブランチから `base` ブランチにリベースして、[pull request をマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)できます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 512a32eb3f918653eab1127aecb70a2fbc220571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580440'
---
## コミットをマージする

{% data reusables.pull_requests.default_merge_option %}

## コミットをスカッシュしてマージする

{% data reusables.pull_requests.squash_and_merge_summary %}

### squash マージのマージメッセージ

{% ifversion default-merge-squash-commit-message %} スカッシュしてしてマージすると、{% data variables.product.prodname_dotcom %} によって既定のコミット メッセージが生成されます。これを編集することができます。 リポジトリの構成方法と pull request 内のコミット数 (マージ コミットを除く) にもよりますが、このメッセージには pull request のタイトル、pull request の説明、コミットに関する情報などが含まれます。
{% else %}スカッシュしてマージすると、{% data variables.product.prodname_dotcom %} によって既定のコミット メッセージが生成されます。これを編集することができます。 既定のメッセージは、pull request 内のコミットの数によって異なります (マージ コミットは含まれません)。

コミット数 | まとめ | 説明 |
----------------- | ------- | ----------- | 
単一のコミット | 単一のコミットのコミットメッセージのタイトルと、その後に続くプルリクエスト番号 | 単一のコミットのコミットメッセージの本文テキスト
複数のコミット | プルリクエストのタイトルと、その後に続くプルリクエスト番号 | squash されたすべてのコミットのコミットメッセージの日付順のリスト
{% endif %}

コミット数 | まとめ | 説明 |
----------------- | ------- | ----------- |
単一のコミット | 単一のコミットのコミットメッセージのタイトルと、その後に続くプルリクエスト番号 | 単一のコミットのコミットメッセージの本文テキスト
複数のコミット | プルリクエストのタイトルと、その後に続くプルリクエスト番号 | squash されたすべてのコミットのコミットメッセージの日付順のリスト

{% ifversion default-merge-squash-commit-message %}リポジトリに対してメンテナーまたは管理者のアクセス権を持つユーザーは、スカッシュされたすべてのコミットについて、pull request のタイトル、pull request のタイトルとコミットの詳細、または pull request のタイトルと説明を使うようにリポジトリの既定のマージ メッセージを構成できます。 詳細については、[コミットのスカッシュの構成](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)に関する記事を参照してください。{% endif %}

{% ifversion ghes = 3.6 %}リポジトリに対して管理者アクセス権を持つユーザーは、スカッシュされたすべてのコミットについて、pull request のタイトルを既定のマージ メッセージとして使用するようにリポジトリを構成できます。 詳細については、[コミットの squash の構成](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)に関するページを参照してください。
{% endif %}

### 長時間にわたるブランチを squash してマージする

pull request のマージ後、pull request の[ヘッド ブランチ](/github/getting-started-with-github/github-glossary#head-branch)での作業を続ける場合、pull request はスカッシュしてマージしないことをお勧めします。

pull request を作成すると、{% data variables.product.prodname_dotcom %} によって、ヘッド ブランチと[ベース ブランチ](/github/getting-started-with-github/github-glossary#base-branch)の両方での最近のコミットが特定されます。共通の先祖のコミットです。 プルリクエストを squash してマージすると、{% data variables.product.prodname_dotcom %} は、共通の先祖のコミット以降に head ブランチで行ったすべての変更を含むコミットをベースブランチに作成します。

このコミットはベースブランチのみで行われ、head ブランチでは行われないため、2 つのブランチの共通の先祖は変更されません。 head ブランチでの作業を続行し、2 つのブランチ間に新しいプルリクエストを作成すると、プルリクエストには、共通の先祖以降のすべてのコミットが含まれます。これには、前のプルリクエストで squash してマージしたコミットも含まれます。 コンフリクトがない場合は、これらのコミットを安全にマージできます。 ただし、このワークフローでは高確率でマージコンフリクトが発生します。 長時間にわたる head ブランチのプルリクエストを squash してマージし続ける場合は、同じコンフリクトを繰り返し解決する必要があります。

## コミットをリベースしてマージする

{% data reusables.pull_requests.rebase_and_merge_summary %}

以下の場合、{% data variables.product.product_location %}上で自動的にリベースおよびマージすることはできません:
- プルリクエストにマージコンフリクトがある。
- ベースブランチからヘッドブランチへのコミットのリベースでコンフリクトが生じる。
- たとえば、マージコンフリクトなしにリベースできるものの、マージとは異なる結果が生成されるような場合、コミットのリベースは「安全ではない」と考えられます。

それでもコミットをリベースしたいにもかかわらず、{% data variables.product.product_location %} 上で自動的にリベースとマージが行えない場合、以下のようにしなければなりません:
- トピックブランチ (あるいは head ブランチ) をベースブランチにローカルでコマンドラインからリベースする
- [コマンド ラインでマージの競合を解決します](/articles/resolving-a-merge-conflict-using-the-command-line/)。
- リベースされたコミットをプルリクエストのトピックブランチ (あるいはリモートの head ブランチ) にフォースプッシュする。

リポジトリに書き込み権限を持つ人は、続いて{% data variables.product.product_location %} 上のリベース及びマージボタンを使って[変更をマージ](/articles/merging-a-pull-request/)できます。

## 参考資料

- "[pull request について](/articles/about-pull-requests/)"
- "[マージコンフリクトへの対処](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
