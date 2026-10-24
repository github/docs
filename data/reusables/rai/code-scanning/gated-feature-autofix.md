{% data variables.copilot.agentic_autofix_caps %} has narrower eligibility requirements than {% data variables.copilot.copilot_autofix_short %}, and isn't available for user-owned repositories in an enterprise that uses {% data variables.product.prodname_emus %}. For details, see [AUTOTITLE](/code-security/concepts/code-scanning/autofix-for-code-scanning#where-is-autofix-available).

{% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} is available for the following repository types:

{% ifversion fpt %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% data variables.product.prodname_team %} with {% data variables.product.prodname_GH_code_security %} enabled{% endif %}

{% ifversion ghec %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_code_security %} enabled{% endif %}

For more information about eligible products, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).
