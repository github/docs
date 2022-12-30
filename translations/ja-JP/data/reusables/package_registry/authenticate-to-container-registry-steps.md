---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145122006"
---
1. 実行したいタスクに対して適切なスコープを持つ新しい個人アクセストークン（PAT）を作成してください。 OrganizationがSSOを必須としている場合は、新しいトークンでSSOを有効化しなければなりません。
  {% warning %}

  **注:** 既定では、ユーザー インターフェイスで個人用アクセス トークン (PAT) の `write:packages` スコープを選択すると、`repo` スコープも選択されます。 `repo` スコープは不要に広いアクセス権を提供するので、特に GitHub Actions のワークフローでの利用は避けることをお勧めします。 詳細については、「[GitHub Actions のセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。 回避策として、URL `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages` のユーザー インターフェイスで自分の PAT だけの `write:packages` スコープを選択できます。 

  {% endwarning %}

    - `read:packages` スコープを選択すると、コンテナー イメージがダウンロードされ、そのメタデータが読み取られます。
    - `write:packages` スコープを選択すると、コンテナー イメージがダウンロードされ、アップロードされ、そのメタデータが読み書きされます。
    - `delete:packages` スコープを選択すると、コンテナー イメージが削除されます。

  詳細については、[コマンド ライン用の個人アクセス トークンの使用](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)に関するページを参照してください。

2. PATを保存してください。 PATは環境変数として保存することをおすすめします。
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. コンテナーの種類に CLI を使用し、`{% data reusables.package_registry.container-registry-hostname %}` で {% data variables.product.prodname_container_registry %} サービスにサインインします。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
