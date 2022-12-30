---
title: インテグレーションについて
intro: 'インテグレーションは、ワークフローを補い、拡張するために{% data variables.product.product_name %}と接続されるツールとサービスです。'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145119494'
---
インテグレーションは、個人アカウントおよび自分が所有する Organization にインストールできます。 また、自分が管理者アクセス許可を持っているか、自分の組織が所有している特定のリポジトリに、サードパーティー製の {% data variables.product.prodname_github_apps %} をインストールすることもできます。

## {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} の違い

統合には、{% data variables.product.prodname_github_apps %}、{% data variables.product.prodname_oauth_apps %}、または {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API または Webhook を利用するものがあります。

{% data variables.product.prodname_github_apps %} は、詳細なアクセス許可を提供し、アプリに必要なものにのみアクセスを要求します。 {% data variables.product.prodname_github_apps %} には、アプリがインストールされたとき、またはインテグレーターがアプリによって要求されたアクセス許可を変更したときに、各ユーザーが個別に承認する必要がある特定のユーザー レベルのアクセス許可も提供されます。

詳細については、次を参照してください。
- 「[{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} の違い](/apps/differences-between-apps/)」
- 「[アプリについて](/apps/about-apps/)」
- 「[ユーザー レベルの権限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)」
- 「[{% data variables.product.prodname_oauth_apps %} の承認](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)」
- 「[{% data variables.product.prodname_github_apps %} の承認](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)」
- 「[許可されたインテグレーションをレビューする](/articles/reviewing-your-authorized-integrations/)」

インテグレーターあるいはアプリケーションの作者が {% data variables.product.prodname_github_app %} マニフェストフローでアプリケーションを作成している場合、事前設定された {% data variables.product.prodname_github_app %} をインストールできます。 自動化された設定で {% data variables.product.prodname_github_app %} を動作させる方法に関する詳しい情報については、インテグレーターもしくはアプリケーションの作者に問い合わせてください。

Probot でアプリケーションをビルドしたなら、単純化された設定で {% data variables.product.prodname_github_app %} を作成できます。 詳細については、「[Probot docs (Probot のドキュメント)](https://probot.github.io/docs/)」サイトを参照してください。

## {% data variables.product.prodname_marketplace %}でインテグレーションを見つける

{% data variables.product.prodname_marketplace %}では、インストールするインテグレーションを見つけたり、独自のインテグレーションを公開したりできます。

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) には {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} が含まれます。 統合の検索または独自の統合の作成の詳細については、「[{% data variables.product.prodname_marketplace %} について](/articles/about-github-marketplace)」を参照してください。

## インテグレータから直接購入したインテグレーション

インテグレーターから直接購入できるインテグレーションもあります。 Organization のメンバーとして、使いたい {% data variables.product.prodname_github_app %} を見つけた場合は、Organization の承認をリクエストして、そのアプリケーションを Organization にインストールできます。

アプリがインストールされているすべての組織所有リポジトリに対する管理者アクセス許可がある場合は、組織の所有者にアプリの承認を求めることなく、リポジトリ レベルの権限で {% data variables.product.prodname_github_apps %} をインストールできます。 インテグレーターがアプリケーションの権限を変更した場合、その権限がリポジトリ専用であれば、Organization のオーナーとアプリケーションがインストールされているリポジトリへの管理者権限を持っている人は、新しい権限をレビューして受諾することができます。
