{% ifversion ghas-products %}

{% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} are available for {% ifversion fpt or ghec %}accounts on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}accounts on {% data variables.product.prodname_ghe_server %}{% endif %}.

{% else %}

{% data variables.product.prodname_GHAS %} is available for enterprise accounts on {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% ifversion fpt or ghec %} Some features are also available for free for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %} For more information, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans).

{% data reusables.advanced-security.ghas-for-azdo-link %}
