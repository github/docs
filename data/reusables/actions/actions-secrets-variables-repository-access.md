
{% ifversion fpt %}
{% note %}

**Note:** Organization-level secrets and variables are not accessible by private repositories for {% data variables.product.prodname_free_user %}. For more information about upgrading your {% data variables.product.company_short %} subscription, see "[AUTOTITLE](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% endnote %}
{% endif %}

When creating a secret or variable in an organization, you can use a policy to limit access by repository. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.
