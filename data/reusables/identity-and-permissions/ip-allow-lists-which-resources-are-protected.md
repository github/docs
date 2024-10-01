## Which resources are protected?

IP allow lists **do** restrict access to:

* Organization-owned repositories
* Private and internal repositories
* Public resources, when a user is signed into {% data variables.product.prodname_dotcom %}
* Raw URLs for files in repositories, such as `https://raw.githubusercontent.com/octo-org/octo-repo/main/README.md?token=ABC10001`

IP allow lists do **not** restrict access to:

* Repositories, including forks, owned by {% data variables.enterprise.prodname_managed_users %}
* Public resources, when accessed anonymously
* {% data variables.product.prodname_copilot %} features that do not require directly fetching private or organizational data from {% data variables.product.prodname_dotcom %}
* Anonymized URLs for images and videos uploaded to issues or pull requests, such as `https://private-user-images.githubusercontent.com/10001/20002.png?jwt=ABC10001`
