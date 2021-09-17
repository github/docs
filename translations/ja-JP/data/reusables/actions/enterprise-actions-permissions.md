1. "Policies（ポリシー）"の下で、オプションを選択してください。

  Enterprise内のどのOrganizationが{% data variables.product.prodname_actions %}を使えるのかを選択でき、パブリックなアクションへのアクセスを制限できます。

  {% if currentVersion ver_gt "enterprise-server@2.21" %}
  {% note %}

  **ノート:** パブリックなアクションへのアクセスを有効化するには、まず{% data variables.product.product_location %}を{% data variables.product.prodname_marketplace %}に接続するように設定しなければなりません。 詳しい情報については「[GitHub Connectを使用したGitHub.comのアクションへの自動アクセスの有効化](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

  {% endnote %}
  {% endif %}
  ![この Enterprise アカウントについてアクションを無効化、無効化、または制限](/assets/images/help/organizations/enterprise-actions-policy.png)
