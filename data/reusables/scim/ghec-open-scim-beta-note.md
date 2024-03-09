{% ifversion ghec %}

{% note %}

**Notes**:

- Support for provisioning users with {% data variables.product.company_short %}'s public SCIM schema is in private beta and subject to change. To request access to the beta, contact your account manager on {% data variables.contact.contact_enterprise_sales %}.
- This operation allows you to provision user accounts for your enterprise on {% data variables.product.prodname_ghe_cloud %} using SCIM. The operation is only available for use with {% data variables.product.prodname_emus %}. If you don't use {% data variables.product.prodname_emus %} and want to provision access to your organizations using SCIM, see "[AUTOTITLE](/rest/scim/scim)."
- {% data variables.product.company_short %} recommends that you test provisioning in an environment that's isolated from the production data on your IdP and {% data variables.location.product_location %}.

{% endnote %}

{% endif %}
