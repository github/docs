{% ifversion ghae %}Enterpriseのポリシーでインターナル及びプライベートのリポジトリのフォークが許されているなら、{% else %}{% endif %}ユーザアカウントあるいはリポジトリの作成権限を持つOrganizationにリポジトリをフォークできます。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

{% ifversion fpt or ghes %}

プライベートリポジトリにアクセスでき、オーナーがフォークを許可しているなら、そのリポジトリを自分のアカウントあるいはリポジトリの作成権限を持っている{% ifversion fpt %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %}上のOrganizationにフォークできます。 {% ifversion fpt %}ぷらいべーとリポジトリは、{% data variables.product.prodname_free_team %}を使っているOrganizationにはフォークできません。 詳しい情報については「[GitHubの製品](/articles/githubs-products)」を参照してください。{% endif %}

{% endif %}
