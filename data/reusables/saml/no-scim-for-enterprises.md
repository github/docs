{% ifversion ghec %}
{% note %}

**Note:** You cannot configure SCIM for your enterprise account unless your account was created for {% data variables.product.prodname_emus %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

If you do not use {% data variables.product.prodname_emus %}, and you want to use SCIM provisioning, you must configure SAML SSO at the organization level, not the enterprise level. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

{% endnote %}
{% endif %}
