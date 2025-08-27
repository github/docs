You'll need to add the following IP ranges to your IP allow list(s):

* 192.30.252.0/22
* 185.199.108.0/22
* 140.82.112.0/20
* 143.55.64.0/20
* 135.234.59.224/28 (Note: Introduced July 28, 2025)
* 2a0a:a440::/29
* 2606:50c0::/32
* 20.99.172.64/28 (Note: Introduced July 28, 2025)

You can get an up-to-date list of IP ranges used by {% data variables.product.prodname_importer_proper_name %} at any time with the "Get {% data variables.product.prodname_dotcom %} meta information" endpoint of the REST API.

The `github_enterprise_importer` key in the response contains a list of IP ranges used for migrations.

For more information, see [AUTOTITLE](/rest/meta#get-github-meta-information).
