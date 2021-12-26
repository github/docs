{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**ノート:** {% data variables.product.prodname_github_connect %}が有効化されていると、{% data variables.product.prodname_actions %}はまず{% data variables.product.prodname_ghe_server %}インスタンス上でリポジトリを見つけようとして、それから{% data variables.product.prodname_dotcom %}にフォールバックします。 ユーザが、{% data variables.product.prodname_dotcom %}上のOrganization及びリポジトリの名前に一致するOrganizationとリポジトリをEnterprise上に作成すると、{% data variables.product.prodname_dotcom %}リポジトリのところではEnterprise上のリポジトリが使用されます。 悪意あるユーザは、ワークフローの一部としてコードを実行するのに、この動作を利用できるかもしれません。

{% endnote %}
{% endif %}
