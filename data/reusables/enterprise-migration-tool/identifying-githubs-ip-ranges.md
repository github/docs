You'll need to add the following IP ranges to your IP allow list(s):

{% data reusables.enterprise-migration-tool.gei-ip-list %}

You can get an up-to-date list of IP ranges used by {% data variables.product.prodname_importer_proper_name %} at any time with the "Get {% data variables.product.prodname_dotcom %} meta information" endpoint of the REST API.

The `github_enterprise_importer` key in the response contains a list of IP ranges used for migrations.

For more information, see [AUTOTITLE](/rest/meta#get-github-meta-information).
