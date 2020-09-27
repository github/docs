---
title: インテグレーションについて
intro: 'インテグレーションは、ワークフローを補い、拡張するために{{ site.data.variables.product.product_name }}と接続されるツールとサービスです。'
redirect_from:
  - /articles/about-integrations
versions:
  free-pro-team: '*'
---

インテグレーションは、個人アカウントおよび自分が所有する Organization にインストールできます。 サードパーティの {{ site.data.variables.product.prodname_github_app }} を、自分が管理者権限を持っているか、自分の Organization が所有している特定のリポジトリに対してインストールすることもできます。

### {{ site.data.variables.product.prodname_github_app }}と{{ site.data.variables.product.prodname_oauth_app }}の違い

インテグレーションは、{{ site.data.variables.product.prodname_github_app }}、{{ site.data.variables.product.prodname_oauth_app }}、あるいは{{ site.data.variables.product.product_name }}APIあるいはwebhookを使うものです。

{{ site.data.variables.product.prodname_github_app }} は精細な権限を提示し、アプリケーションが必要とするものへのアクセスだけをリクエストします。 {{ site.data.variables.product.prodname_github_app }} は、アプリケーションがインストールされた際や、アプリケーションがリクエストする権限をインテグレーターが変更した場合に、個別に各ユーザが認証しなければならない特定のユーザレベルの権限を提供します。

詳しい情報については、以下を参照してください。
- 「[{{ site.data.variables.product.prodname_github_app }} と {{ site.data.variables.product.prodname_oauth_app }} の違い](/apps/differences-between-apps/)」
- [アプリケーションについて](/apps/about-apps/)
- 「[ユーザレベルの権限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)」
- [{{ site.data.variables.product.prodname_oauth_app }} を認可する](/articles/authorizing-oauth-apps/)
- 「[認可されたインテグレーションをレビューする](/articles/reviewing-your-authorized-integrations)」

インテグレーターあるいはアプリケーションの作者が {{ site.data.variables.product.prodname_github_app }} マニフェストフローでアプリケーションを作成している場合、事前設定された {{ site.data.variables.product.prodname_github_app }} をインストールできます。 自動化された設定で {{ site.data.variables.product.prodname_github_app }} を動作させる方法に関する詳しい情報については、インテグレーターもしくはアプリケーションの作者に問い合わせてください。

Probot でアプリケーションをビルドしたなら、単純化された設定で {{ site.data.variables.product.prodname_github_app }} を作成できます。 詳細は [Probot docs](https://probot.github.io/docs/) を参照してください。

### {{ site.data.variables.product.prodname_marketplace }}でインテグレーションを見つける

{{ site.data.variables.product.prodname_marketplace }}では、インストールするインテグレーションを見つけたり、独自のインテグレーションを公開したりできます。

[{{ site.data.variables.product.prodname_marketplace }}](https://github.com/marketplace)には{{ site.data.variables.product.prodname_github_app }}と{{ site.data.variables.product.prodname_oauth_app }}が含まれます。 インテグレーションを探したり、独自のインテグレーションを作成することについて、詳しい情報は[{{ site.data.variables.product.prodname_marketplace }}について](/articles/about-github-marketplace)を参照してください。

### インテグレータから直接購入したインテグレーション

インテグレーターから直接購入できるインテグレーションもあります。 Organization のメンバーとして、使いたい {{ site.data.variables.product.prodname_github_app }} を見つけた場合は、Organization の承認をリクエストして、そのアプリケーションを Organization にインストールできます。

アプリケーションがインストールされる Organization が所有するすべてのリポジトリで、あなたが管理者権限を持っている場合、Organization のオーナーにアプリケーションを承認してもらわなくても、リポジトリレベルの権限で {{ site.data.variables.product.prodname_github_app }} をインストールできます。 インテグレーターがアプリケーションの権限を変更した場合、その権限がリポジトリ専用であれば、Organization のオーナーとアプリケーションがインストールされているリポジトリへの管理者権限を持っている人は、新しい権限をレビューして受諾することができます。

