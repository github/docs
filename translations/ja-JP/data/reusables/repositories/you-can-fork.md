{% ifversion ghae %}Enterpriseのポリシーでインターナル及びプライベートのリポジトリのフォークが許されているなら、{% else %}{% endif %}ユーザアカウントあるいはリポジトリの作成権限を持つOrganizationにリポジトリをフォークできます。 For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes or ghec %}

プライベートリポジトリにアクセスでき、オーナーがフォークを許可しているなら、そのリポジトリを自分のアカウントあるいはリポジトリの作成権限を持っている{% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %}上のOrganizationにフォークできます。 {% ifversion fpt or ghec %}ぷらいべーとリポジトリは、{% data variables.product.prodname_free_team %}を使っているOrganizationにはフォークできません。 詳しい情報については「[GitHubの製品](/articles/githubs-products)」を参照してください。{% endif %}

{% endif %}
