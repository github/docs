{% data variables.product.prodname_secret_risk_assessment_caps %} is available for all organizations owned by {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %}. Additional views are available for:

{% ifversion fpt %}
* Organizations owned by a {% data variables.product.prodname_team %} account with {% data variables.product.prodname_GH_cs_or_sp %}
* Organizations owned by a {% data variables.product.prodname_enterprise %} account
{% elsif ghec %}
* Enterprises and their organizations
{% elsif ghes %}
* Organizations
{% endif %}
