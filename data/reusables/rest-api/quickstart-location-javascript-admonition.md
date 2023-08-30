{% ifversion ghes or ghae %}
{% note %}

**Note:** The following example is intended for {% data variables.product.prodname_dotcom_the_website %}. If you'd prefer to try the example using {% data variables.product.product_name %}, you must replace `octocat/Spoon-Knife` with a repository on {% ifversion ghes %}your instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Alternatively, you can create a new `Octokit` instance without specifying `baseURL`.

{% endnote %}
{% endif %}
