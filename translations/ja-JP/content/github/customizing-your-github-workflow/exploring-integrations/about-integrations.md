---
title: インテグレーションについて
intro: 'インテグレーションは、ワークフローを補い、拡張するために{% data variables.product.product_name %}と接続されるツールとサービスです。'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---

インテグレーションは、個人アカウントおよび自分が所有する Organization にインストールできます。 You can also install {% data variables.product.prodname_github_apps %} from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

Integrations can be {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, or anything that utilizes {% data variables.product.product_name %} APIs or webhooks.

{% data variables.product.prodname_github_apps %} offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_apps %} also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

詳しい情報については、以下を参照してください。
- "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- [アプリケーションについて](/apps/about-apps/)
- 「[ユーザレベルの権限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)」
- 「[{% data variables.product.prodname_oauth_apps %} を認可する](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)」
- 「[{% data variables.product.prodname_github_apps %} を認可する](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)」
- 「[認可されたインテグレーションをレビューする](/articles/reviewing-your-authorized-integrations)」

インテグレーターあるいはアプリケーションの作者が {% data variables.product.prodname_github_app %} マニフェストフローでアプリケーションを作成している場合、事前設定された {% data variables.product.prodname_github_app %} をインストールできます。 自動化された設定で {% data variables.product.prodname_github_app %} を動作させる方法に関する詳しい情報については、インテグレーターもしくはアプリケーションの作者に問い合わせてください。

Probot でアプリケーションをビルドしたなら、単純化された設定で {% data variables.product.prodname_github_app %} を作成できます。 詳細は [Probot docs](https://probot.github.io/docs/) を参照してください。

## {% data variables.product.prodname_marketplace %}でインテグレーションを見つける

{% data variables.product.prodname_marketplace %}では、インストールするインテグレーションを見つけたり、独自のインテグレーションを公開したりできます。

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. インテグレーションを探したり、独自のインテグレーションを作成することについて、詳しい情報は[{% data variables.product.prodname_marketplace %}について](/articles/about-github-marketplace)を参照してください。

## インテグレータから直接購入したインテグレーション

インテグレーターから直接購入できるインテグレーションもあります。 Organization のメンバーとして、使いたい {% data variables.product.prodname_github_app %} を見つけた場合は、Organization の承認をリクエストして、そのアプリケーションを Organization にインストールできます。

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_apps %} with repository-level permissions without having to ask an organization owner to approve the app. インテグレーターがアプリケーションの権限を変更した場合、その権限がリポジトリ専用であれば、Organization のオーナーとアプリケーションがインストールされているリポジトリへの管理者権限を持っている人は、新しい権限をレビューして受諾することができます。
