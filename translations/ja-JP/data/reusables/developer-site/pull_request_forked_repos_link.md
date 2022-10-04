---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145138068"
---
#### フォークされたリポジトリのワークフロー

デフォルトでは、フォークされたリポジトリではワークフローは実行されません。 GitHub アクションは、フォークされたリポジトリの **[アクション]** タブで有効にする必要があります。

{% data reusables.actions.forked-secrets %} `GITHUB_TOKEN` には、フォークされたリポジトリの読み取り専用アクセス許可があります。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

#### フォークしたリポジトリのプルリクエストイベント

フォークされたリポジトリからベースリポジトリへの pull request の場合、{% data variables.product.product_name %} は、ベースリポジトリに `pull_request`、`issue_comment`、`pull_request_review_comment`、`pull_request_review`、`pull_request_target` イベントを送信します。 フォークされたリポジトリでは、pull request イベントは発生しません。

{% ifversion fpt or ghec %} 初めてのコントリビューターがパブリックリポジトリに pull request をサブミットした場合、書き込み権限を持つメンテナがその pull request に対するワークフローの実行を承認しなければならないことがあります。 詳しくは、「[パブリックフォークからワークフロー実行を承認する](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)」を参照してください。
{% endif %}

{% note %}

**注:** フォークされたリポジトリで pull request をオープンした場合には、プライベートのベースリポジトリではワークフローは実行されません。

{% endnote %}

{% note %}

**注:** {% data variables.product.prodname_dependabot %} の pull request によってトリガーされたワークフローは、フォークされたリポジトリからのもののように扱われ、これらの制約を受けます。

{% endnote %}
