After you create an IP allow list, you can enable allowed IP addresses. When you enable allowed IP addresses, {% data variables.product.company_short %} immediately enforces any enabled entries in your IP allow list.

{% ifversion ghec %}
{% note %}

**Note:**

After you enable an IP allow list for your organization you won't be able to use {% data variables.product.prodname_github_codespaces %} for repositories owned by the organization.

{% endnote %}
{% endif %}

Before you enable your IP allow list, you can check whether your allow list will permit a connection from a particular IP address. For more information, see "[Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted)."
