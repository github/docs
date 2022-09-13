---
title: ワークフローの無効化と有効化
intro: '{% data variables.product.prodname_dotcom %} UI、REST API、または {% data variables.product.prodname_cli %} を使用して、ワークフローを無効化したり再度有効化したりすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125949'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

ワークフローを無効にすると、リポジトリからファイルを削除することなく、ワークフローがトリガーされないようにすることができます。 {% data variables.product.prodname_dotcom %} でワークフローを簡単に再度有効にすることができます。

ワークフローを一時的に無効にすると、多くのシナリオで役立つことがあります。 以下は、ワークフローを無効すると便利な場合の例の一部です。

- リクエストが多すぎるまたは間違っていて、外部サービスに悪影響を与えるワークフローエラー。
- 重要ではないが、アカウントの時間を消費しすぎるワークフロー。
- ダウンしているサービスにリクエストを送信するワークフロー。
- フォークされたリポジトリ上の不要なワークフロー（スケジュールされたワークフローなど）。

{% warning %}

**警告:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

REST API を使用して、ワークフローを無効化または有効化することもできます。 詳しくは、[Actions REST API](/rest/reference/actions#workflows) に関する記事をご覧ください。

## ワークフローの無効化

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 左サイドバーで、無効にするワークフローをクリックします。
![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
![アクション ケバブ メニュー](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. **[Disable workflow]\(ワークフローを無効にする\)** をクリックします。
![アクション無効ワークフロー](/assets/images/help/repository/actions-disable-workflow.png) 無効なワークフローは、その状態を示す {% octicon "stop" aria-label="The stop icon" %} でマークされます。
![無効なワークフローをリストするアクション](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

ワークフローを無効にするには、`workflow disable` サブコマンドを使います。 `workflow` を、無効にするワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、「`"Link Checker"`」、「`1234567`」、「`"link-check-test.yml"`」のように指定します。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## ワークフローの有効化

{% webui %}

以前、無効化したワークフローを再度有効化することができます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 左サイドバーで、有効にするワークフローをクリックします。
![無効なワークフローを選択するアクション](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. **[Enable workflow]\(ワークフローを有効にする\)** をクリックします。
![ワークフローを有効にするアクション](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

ワークフローを有効にするには、`workflow enable` サブコマンドを使います。 `workflow` を、有効にするワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、「`"Link Checker"`」、「`1234567`」、「`"link-check-test.yml"`」のように指定します。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
