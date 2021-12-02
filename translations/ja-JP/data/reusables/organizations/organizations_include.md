Organizationには以下が含まれます。
- [Organizationとそのデータへの様々なレベルでのアクセス](/articles/permission-levels-for-an-organization)を許可する様々なロールを持つ無制限のメンバーシップ。
- [Organizationのリポジトリに対する様々なアクセス権限](/articles/repository-permission-levels-for-an-organization)をユーザに与える機能。
- カスケードになったアクセス権限やメンションを持つ[会社やグループの構造を反映した入れ子のTeam](/articles/about-teams)。{% ifversion not ghae %}
- Organizationのオーナーがメンバーの[２要素認証（2FA）のステータス](/articles/about-two-factor-authentication)を見る機能。
- [Organizationの全メンバーが２要素認証を使うことを要求する](/articles/requiring-two-factor-authentication-in-your-organization)オプション。{% endif %}

{% ifversion fpt or ghec %}
You can use organizations for free, with
{% data variables.product.prodname_free_team %}, which includes unlimited collaborators on unlimited public repositories with full features, and unlimited private repositories with limited features.

For additional features, including sophisticated user authentication and management, and improved support coverage, you can upgrade to {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

If you use {% data variables.product.prodname_ghe_cloud %}, you have the option to purchase a license for {% data variables.product.prodname_GH_advanced_security %} and use the features on private repositories. {% data reusables.advanced-security.more-info-ghas %}

{% ifversion fpt %}
{% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}
{% endif %}
