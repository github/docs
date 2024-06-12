If the source or destination of your migration uses an IP allow list (either {% data variables.product.company_short %}'s IP allow list feature or your identity provider's (IdP) IP allow list restrictions, such as Azure CAP), you need to configure IP allow lists on {% data variables.product.prodname_dotcom %}.

- If you use {% data variables.product.company_short %}'s IP allow list feature, you must add the {% data variables.product.prodname_dotcom %} IP ranges below to the allow list for the source and/or destination organizations.
- If you use your IdP's IP allow list to restrict access to your enterprise on {% data variables.product.prodname_dotcom %}, you should disable these restrictions in your enterprise account settings until after your migration is complete.

For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)."
