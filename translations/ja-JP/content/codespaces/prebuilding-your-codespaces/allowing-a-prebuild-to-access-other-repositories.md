---
title: プレビルドで他のリポジトリにアクセスできるようにする
shortTitle: Allow external repo access
intro: '正常にビルドできるように、プレビルドが他の {% data variables.product.prodname_dotcom %} リポジトリにアクセスすることを許可できます。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158790'
---
既定では、事前ビルド構成の {% data variables.product.prodname_actions %} ワークフローは、それ自身のリポジトリ コンテンツにのみアクセスできます。 プロジェクトで、他の場所にある追加のリソースを使って、開発環境を構築できます。

## プレビルドに外部リソースの読み取りアクセスを許可する

プレビルド構成で使われる `devcontainer.json` ファイルにアクセス許可を指定すると、リポジトリ所有者が同じである他の {% data variables.product.prodname_dotcom %} リポジトリへの読み取りアクセスを構成できます。 詳しくは、「[codespace 内の他のリポジトリへのアクセスの管理](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」をご覧ください。

{% note %}

**注**: 読み取りアクセス許可は、この方法でのみ認可でき、ターゲット リポジトリの所有者は、プレビルドを作るリポジトリの所有者と同じである必要があります。 たとえば、`octo-org/octocat` リポジトリにプレビルド構成を作る場合は、これが `devcontainer.json` ファイルに指定されていて、そのアクセス許可が自分にあれば、他の `octo-org/*` リポジトリに対する読み取りアクセス許可を付与できます。

{% endnote %}

リポジトリ所有者が同じである他のリポジトリへの読み取りアクセスを設定する `devcontainer.json` ファイルに対してプレビルド構成を作成または編集するとき、 **[作成]** または **[更新]** をクリックすると、これらのアクセス許可を付与するように求められます。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。

## プレビルドに外部リソースの書き込みアクセスを許可する

プロジェクトでリソースへの書き込みアクセスが必要な場合、または外部リソースが、事前ビルド構成を作っているリポジトリとは所有者が異なるリポジトリに存在する場合は、{% data variables.product.pat_generic %}を使ってこのアクセス権を付与できます。

新しい個人アカウントを作り、このアカウントを使って、適切なスコープを持つ{% data variables.product.pat_v1 %} を作る必要があります。

1. {% data variables.product.prodname_dotcom %} に新しい個人アカウントを作成します。 
   
   {% warning %}
   
   **警告**: 既存の個人アカウントを使用して{% data variables.product.pat_v1 %} を生成することはできますが、ご自分のシナリオに必要なターゲット リポジトリにのみアクセスできる新しいアカウントを作成することを強くお勧めします。 これは、アクセス トークンの `repository` アクセス許可によって、そのアカウントからアクセスできるすべてのリポジトリへのアクセス権が付与されるからです。 詳細については、「[新しい GitHub アカウントへのサインアップ](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)」および「[ {% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。
   
   {% endwarning %}
1. 新しいアカウントに、必要なリポジトリへの読み取りアクセス権を付与します。 詳細については、「[Organization のリポジトリへの個人のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)」を参照してください。
1. 新しいアカウントにサインインしている間に、`repo` スコープを持つ{% data variables.product.pat_v1 %} を作成します。 必要に応じて、事前ビルドで {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} からパッケージをダウンロードする必要がある場合は、`read:packages` スコープも選択します。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

   ![{% data variables.product.pat_v1 %} に対して選ばれた 'repo' スコープと 'packages' スコープ](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   事前ビルドで {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} のパッケージを使用する場合は、新しいアカウントにパッケージへのアクセス権を付与するか、事前ビルドするリポジトリのアクセス許可を継承するようにパッケージを構成する必要があります。 詳細については、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。   
{% ifversion ghec %}1. シングル サインオン (SSO) が有効になっている Organization が所有するリポジトリにアクセスできるように、SAML SSO で使用するトークンを認可します。 詳細については、「[SAML シングル サインオンで利用するために{% data variables.product.pat_generic %}を承認する](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。

   ![{% data variables.product.pat_v1 %} の SSO を構成するためのボタン](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. トークン文字列をコピーします。 これを {% data variables.product.prodname_codespaces %} リポジトリ シークレットに割り当てます。
1. リポジトリへの管理者アクセス権を持つアカウントにもう一度サインインします。 
1. {% data variables.product.prodname_github_codespaces %} 事前ビルドを作成するリポジトリで、`CODESPACES_PREBUILD_TOKEN` という名前の新しい {% data variables.product.prodname_codespaces %} リポジトリ シークレットを作成して、作成してコピーしたトークンの値を指定します。 詳しくは、「[リポジトリの暗号化されたシークレットと {% data variables.product.prodname_github_codespaces %} の Organization を管理する](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)」をご覧ください。

この{% data variables.product.pat_generic %}は、リポジトリ用に作成された後続のすべての事前ビルドに使用されます。 他の {% data variables.product.prodname_codespaces %} リポジトリ シークレットとは異なり、`CODESPACES_PREBUILD_TOKEN` シークレットは事前ビルドにのみ使用され、リポジトリから作成される codespace では使用できません。

## 参考資料

- [プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [プレビルドに関するトラブルシューティング](/codespaces/troubleshooting/troubleshooting-prebuilds)
