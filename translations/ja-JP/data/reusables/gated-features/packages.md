{% ifversion fpt or ghec or ghes < 3.5 %}
{% data variables.product.prodname_registry %}は、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、Organizationの{% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}、{% data variables.product.prodname_ghe_cloud %}、{% data variables.product.prodname_ghe_server %} 3.0以降、{% data variables.product.prodname_ghe_managed %}で利用できます。{% ifversion ghes %}{% data variables.product.prodname_ghe_server %}インスタンスのアップグレードに関する詳しい情報については「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」を参照し、現在のリリースバージョンからのアップグレードパスを探すことについては[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)を参照してください。{% endif %}
{% ifversion fpt or ghec %}
<br>
{% data variables.product.prodname_registry %}は、レガシーのリポジトリごとのプランを使っているアカウントが所有しているプライベートリポジトリでは利用できません。 また、レガシーのリポジトリごとのプランを使っているアカウントは、リポジトリごとに課金されるため、{% data variables.product.prodname_container_registry %}にはアクセスできません。 {% data reusables.gated-features.more-info %}
{% endif %}
{% endif %}
