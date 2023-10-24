---
title: About per-user pricing
intro: '{% ifversion fpt or ghec %}For organizations{% ifversion ghec %} and enterprises{% endif %}, your {% else %}Your {% endif %}bill begins with the number of licensed seats you choose.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
  - /github/billing/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## About per-user pricing

{% ifversion fpt %}

{% data reusables.billing.about-billing %} For organizations, the "plan" component of the bill is based on the number of licensed seats you choose to purchase.

New organizations on {% data variables.product.prodname_dotcom_the_website %} can build public and open-source projects with {% data variables.product.prodname_free_team %}, or upgrade to a paid plan. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)" and "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan)."

{% note %}

**Note:** Organizations who upgraded to a paid plan before May 11, 2016 can choose to stay on their existing per-repository plan or switch to per-user pricing. {% data variables.product.company_short %} will notify you twelve months before any mandated change to your subscription. For more information on switching your subscription, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan)."

{% endnote %}

{% else %}

The foundation of your bill is the number of standard licensed seats that you choose for your{% ifversion ghec %} organization or{% endif %} enterprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

In addition to licensed seats, your bill may include other charges, such as {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)."
{% endif %}

## People that consume a license

{% ifversion fpt %}

{% data variables.product.company_short %} bills for the following people:

- Organization members, including owners
- Outside collaborators on private repositories owned by your organization, excluding forks
- Anyone with a pending invitation to become an outside collaborator on private or internal repositories owned by your organization, excluding forks
- Dormant users

{% note %}

**Notes:**
- {% data variables.product.company_short %} counts each outside collaborator once for billing purposes, even if the user account has access to multiple repositories owned by your organization.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} does not bill for the following people:

- Billing managers
- Anyone with a pending invitation to become a billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization

{% else %}

{% data variables.product.company_short %} bills for the following accounts for each deployment of {% data variables.product.prodname_enterprise %}.

### Accounts that consume a license on {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.company_short %} bills for each of the following accounts on {% data variables.product.prodname_ghe_cloud %}:

- Enterprise owners who are a member or owner of at least one organization in the enterprise
- Organization members, including owners
- Outside collaborators on private or internal repositories owned by your organization, excluding forks
- Dormant users

If your enterprise does not use {% data variables.product.prodname_emus %}, you will also be billed for each of the following accounts:

- Anyone with a pending invitation to become an organization owner or member
- Anyone with a pending invitation to become an outside collaborator on private or internal repositories owned by your organization, excluding forks

{% note %}

**Notes:**
- {% data variables.product.company_short %} counts each member or outside collaborator once for billing purposes, even if the user account has membership in multiple organizations in an enterprise or access to multiple repositories owned by your organization.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} does not bill for any of the following accounts:

- {% data variables.enterprise.prodname_managed_users_caps %} that are suspended
- Enterprise owners who are not a member or owner of at least one organization in the enterprise
- Enterprise billing managers
- Billing managers for individual organizations
- Anyone with a pending invitation to become a billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization
- Users of {% data variables.visual_studio.prodname_vss_ghe %} whose accounts on {% data variables.product.prodname_dotcom_the_website %} are not linked, and who do not meet any of the other criteria for per-user pricing

### Accounts that consume a license on {% data variables.product.prodname_ghe_server %}

Each user account on {% data variables.product.prodname_ghe_server %} consumes a seat.

Suspended users are not counted when calculating the number of licensed users consuming seats. For more information, see "[Suspending and unsuspending users]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}."{% endif %}

Dormant users do occupy a seat license. As such, you can choose to suspend dormant users to release user licenses. For more information, see "[Managing dormant users]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}."{% endif %}

{% endif %}

## About changes to your subscription

{% ifversion fpt %}

You can change your {% data variables.product.prodname_dotcom %} subscription at any time.

### About changes for organizations on per-user plans

{% endif %}

You can add more licensed seats to your {% ifversion fpt or ghec %} organization{% endif %}{% ifversion ghec %} or{% endif %}{% ifversion ghec or ghes %} enterprise{% endif %} at any time. If you pay for more seats than are being used, you can also reduce the number of seats.{% ifversion fpt %} For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan)" and "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan)."

If you have questions about your subscription, you can contact {% data variables.contact.contact_support %}.

To further support your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like SAML single sign-on and advanced auditing. {% data reusables.enterprise.link-to-ghec-trial %}

For more information about per-user pricing for {% data variables.product.prodname_ghe_cloud %}, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/about-per-user-pricing).

{% else %}

If you use an enterprise account on {% data variables.product.prodname_dotcom_the_website %} and have questions about changes to your subscription, contact {% data variables.contact.contact_enterprise_sales %}.

{% endif %}
{% ifversion ghec %}

If you use an individual organization on {% data variables.product.prodname_ghe_cloud %}, you can upgrade or downgrade your subscription. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan)" or "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan)." If you have questions about your subscription, you can contact {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### About changes for organizations on per-repository plans

You can upgrade or downgrade between legacy paid plans in your organization's billing settings. When you upgrade to a plan with more private repositories, {% data variables.product.company_short %} immediately moves your account to your new plan and bills you for the difference in price, prorated for the number of days left in your billing cycle.

When you downgrade to a legacy paid plan with fewer private repositories, your new plan will take effect on your next billing date. If you have more private repositories than your new plan allows for, your private repositories will be locked when your new plan takes effect. To reduce your number of private repositories, you can make some of your private repositories public, or you can clone your private repositories locally and delete the copies on {% data variables.product.prodname_dotcom %}.

{% endif %}

## Further reading

{%- ifversion not fpt %}
- "[AUTOTITLE](/admin/overview/about-enterprise-accounts)"
- "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
{%- endif %}
- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)"
