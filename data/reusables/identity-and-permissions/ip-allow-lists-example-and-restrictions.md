For example, you can allow access from only the IP address of your office network. The allow list for IP addresses will block access to private resources via the web, API, and Git from any IP addresses that are not on the allow list.

Any navigation to resources protected by an IP allow list will be filtered by the list, including through:

* Username and password with {% data variables.product.prodname_dotcom %} authentication or SAML SSO
* {% data variables.product.pat_generic_caps %}
* SSH keys

All user credentials, including those belonging to administrators, are subject to IP allow list checks.

Only organization-owned repositories are subject to IP allow list checks. IP allow list restrictions are not enforced for repositories owned by a {% data variables.enterprise.prodname_managed_user %}. 

IP allow lists are not enforced on traffic directed to public repositories.
