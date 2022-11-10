---
title: GitHub.com からアクションを手動で同期する
intro: '{% data variables.product.prodname_dotcom_the_website %} からのアクションにアクセスする必要があるユーザは、特定のアクションを Enterprise インスタンスに同期できます。'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107270'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

{% data variables.product.prodname_dotcom_the_website %} からのアクションへのアクセスを有効化する際に推奨されるアプローチは、すべてのアクションへの自動アクセスを有効化することです。 これを行うには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.product_name %} と {% data variables.product.prodname_ghe_cloud %} を統合します。 詳細については、「[{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にする](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

ただし、エンタープライズで許可されるアクションをより厳密に制御する場合は、ユーザー{% else %}ユーザー{% endif %}はこのガイドに従って、{% data variables.product.company_short %} のオープンソース [`actions-sync`](https://github.com/actions/actions-sync) ツールを使用して、{% data variables.product.prodname_dotcom_the_website %} からエンタープライズに個々のアクション リポジトリを同期できます。

## `actions-sync` ツールについて

`actions-sync` ツールは、{% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.product_name %} インスタンスの API にアクセスできるコンピューターで実行する必要があります。 両方のマシンに同時に接続する必要はありません。

コンピューターが両方のシステムに同時にアクセスできる場合は、1 回の `actions-sync sync` コマンドで同期を実行できます。 一度に 1 つのシステムにのみアクセスできる場合は、`actions-sync pull` と `push` コマンドを使用できます。

`actions-sync` ツールは、パブリック リポジトリに保存されている {% data variables.product.prodname_dotcom_the_website %} からのみアクションをダウンロードできます。

{% note %}

**注:** `actions-sync` ツールは、{% data variables.product.prodname_github_connect %} が有効になっていないシステムで使用することを目的としています。 {% data variables.product.prodname_github_connect %} が有効になっているシステムでツールを実行すると、エラー `The repository <repo_name> has been retired and cannot be reused` が表示されることがあります。 これは、ワークフローが {% data variables.product.prodname_dotcom_the_website %} に対してそのアクションを直接使用し、名前空間が {% data variables.location.product_location %}で廃止されたことを示します。 詳細については、「[{% data variables.product.prodname_dotcom_the_website%} でアクセスされたアクションの名前空間の自動廃止](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)」を参照してください。 

{% endnote %}

## 前提条件

* `actions-sync` ツールを使用する前に、すべての同期先組織が既にエンタープライズに存在していることを確認する必要があります。 次の例は、アクションを `synced-actions` という名前の組織に同期する方法を示しています。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。
* Enterprise に、宛先 Organization のリポジトリを作成して書き込むことができる{% data variables.product.pat_generic %}を作成する必要があります。 詳しくは、「[{% data variables.product.pat_generic %} の作成](/github/authenticating-to-github/creating-a-personal-access-token)」をご覧ください。{% ifversion ghes %}
* {% data variables.location.product_location %}で `actions` Organization 内のバンドルされたアクションを同期する場合は、`actions` Organization の所有者である必要があります。

  {% note %}
  
  **注:** 既定では、サイト管理者であっても、バンドルされた `actions` 組織の所有者ではありません。
  
  {% endnote %}

  サイト管理者は、管理シェルの `ghe-org-admin-promote` コマンドを使用して、バンドルされた `actions` 組織の所有者にユーザーを昇格させることができます。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」と「[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)」を参照してください。

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   上記のコマンドでは、次の引数を使用しています。

   * `--cache-dir`: コマンドを実行しているコンピューター上のキャッシュ ディレクトリ。
   * `--destination-token`: 同期先 Enterprise インスタンスの {% data variables.product.pat_generic %}。
   * `--destination-url`: 同期先のエンタープライズ インスタンスの URL。
   * `--repo-name`: 同期するアクション リポジトリ。これは `owner/repository:destination_owner/destination_repository` 形式になります。
     
     * 上記の例では [`actions/stale`](https://github.com/actions/stale) リポジトリを、同期先のエンタープライズ インスタンス上の `synced-actions/actions-stale` リポジトリに同期します。 上記のコマンドを実行する前に、エンタープライズに `synced-actions` という名前の組織を作成する必要があります。
     * `:destination_owner/destination_repository` を省略した場合、ツールではエンタープライズの元の所有者とリポジトリ名を使用します。 コマンドを実行する前に、アクションの所有者名と一致する新しい Organization を Enterprise に作成する必要があります。 同期されたアクションを Enterprise に保存するために中枢の Organization を使用することを検討してください。これは、異なる所有者からのアクションを同期する場合、複数の新しい Organization を作成する必要がないということです。
     * `--repo-name` パラメーターを `--repo-name-list` または `--repo-name-list-file` に置き換えることで、複数のアクションを同期できます。 詳細については、[`actions-sync`README](https://github.com/actions/actions-sync#actions-sync) を参照してください。
1. Enterprise でアクションリポジトリが作成された後、Enterprise 内のユーザは、宛先リポジトリを使用してワークフロー内のアクションを参照できます。 上記のアクション例の場合:
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   詳細については、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)」を参照してください。
