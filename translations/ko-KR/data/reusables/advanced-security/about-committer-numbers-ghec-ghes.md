We record and display two numbers of committers for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.product_location %}:

- **Committers** is the number of committers who contributed to at least one {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository in an organization and who use a seat in your enterprise license. That is, they are also an organization member, an external collaborator, or have a pending invitation to join an organization in your enterprise.
- **Unique to this repository/organization** is the number of committers who contributed only to this repository, or to repositories in this organization. This number shows how many license seats you can free up by disabling {% data variables.product.prodname_GH_advanced_security %} for that repository or organization.

If there are no unique committers, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Disabling the feature for that repository or organization would not free any seats on your license.

When you remove a user from your enterprise account, the user's license is freed within 24 hours.

{% note %}

**Note:** Users can contribute to multiple repositories or organizations. Usage is measured across the whole enterprise account to ensure that each member uses one seat regardless of how many repositories or organizations the user contributes to.

{% endnote %}
