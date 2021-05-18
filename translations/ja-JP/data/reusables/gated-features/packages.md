{% data variables.product.prodname_registry %}は{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、{% data variables.product.prodname_free_team %}のOrganization、{% data variables.product.prodname_team %}、{% data variables.product.prodname_ghe_cloud %}、{% data variables.product.prodname_ghe_server %}、{% data variables.product.prodname_ghe_managed %}で利用できます。
{% if currentVersion == "free-pro-team@latest" %}
<br>
{% data variables.product.prodname_registry %}は、レガシーのリポジトリごとのプランを使っているアカウントが所有しているプライベートリポジトリでは利用できません。 また、レガシーのリポジトリごとのプランを使っているアカウントは、リポジトリごとに課金されるため、{% data variables.product.prodname_container_registry %}にはアクセスできません。 {% data reusables.gated-features.more-info %}
{% endif %}
