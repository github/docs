{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**ノート:** {% data variables.product.prodname_actions %}は、{% data variables.product.prodname_ghe_server %} 2.22で限定ベータとして利用可能でした。 ベータは終了しました。 {% data variables.product.prodname_actions %}は、{% data variables.product.prodname_ghe_server %} 3.0以降で一般に利用可能になりました。 詳しい情報については、[{% data variables.product.prodname_ghe_server %} 3.0 のリリースノート](/enterprise-server@3.0/admin/release-notes)を参照してください。

<br/>

- {% data variables.product.prodname_ghe_server %} 3.0以降へのアップグレードに関する詳しい情報については「[{% data variables.product.prodname_ghe_server %}のアップグレード](/admin/enterprise-management/upgrading-github-enterprise-server)」を参照してください。
- アップグレード後の{% data variables.product.prodname_actions %}の設定に関する詳しい情報については、[{% data variables.product.prodname_ghe_server %} 3.0のドキュメンテーション](/enterprise-server@3.0/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)を参照してください。

{% endnote %}
{% endif %}
