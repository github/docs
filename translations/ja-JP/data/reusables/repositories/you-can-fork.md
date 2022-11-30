{% if currentVersion == "github-ae@latest" %}Enterpriseのポリシーでインターナル及びプライベートのリポジトリのフォークが許されているなら、{% endif %}ユーザアカウントあるいはリポジトリの作成権限を持つOrganizationにリポジトリをフォークできます。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

プライベートリポジトリにアクセスでき、オーナーがフォークを許可しているなら、そのリポジトリを自分のアカウントあるいはリポジトリの作成権限を持っている{% if currentVersion == "free-pro-team@latest"%}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %}上のOrganizationにフォークできます。 {% if currentVersion == "free-pro-team@latest" %}ぷらいべーとリポジトリは、{% data variables.product.prodname_free_team %}を使っているOrganizationにはフォークできません。 詳しい情報については「[GitHubの製品](/articles/githubs-products)」を参照してください。{% endif %}

{% endif %}