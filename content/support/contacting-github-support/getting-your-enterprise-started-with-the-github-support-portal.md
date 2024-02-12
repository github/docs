---
title: Getting your enterprise started with the GitHub Support portal
intro: 'Learn how to start using the {% data variables.contact.enterprise_portal %} for issues related to your enterprise.'
shortTitle: Get started for enterprises
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
  - Support
redirect_from:
  - /support/contacting-github-support/getting-started-with-the-github-support-portal
---

## About the {% data variables.contact.enterprise_portal %} for enterprises

{% ifversion ghec %}

Anyone can use the {% data variables.contact.contact_landing_page_portal %} to view and manage support tickets about {% data variables.product.prodname_dotcom %}, but there are special steps to follow before using the {% data variables.contact.contact_landing_page_portal %} to create tickets about an enterprise account.

The {% data variables.contact.enterprise_portal %} offers single sign-on (SSO) connected to your {% data variables.product.prodname_dotcom_the_website %} account.

{% else %}

You can use the {% data variables.contact.contact_landing_page_portal %} to create and manage support tickets about {% data variables.location.product_location %}.

To benefit from Premium Support SLAs and ticket collaboration features, you must associate your ticket with {% data variables.location.product_location %} in one of two ways.

1. If your institution has an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you have a user account on {% data variables.product.prodname_dotcom_the_website %}, and that user account has been granted support entitlements for the enterprise account, you can select the enterprise account when creating a ticket. For more information about enterprise accounts, see "[About enterprise accounts](/admin/overview/about-enterprise-accounts)."

   - The majority of {% data variables.product.prodname_ghe_server %} customers already have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}. If you're not sure whether you do, first check with your team.
   - If your team confirms that you do not have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you can [submit a request](https://support.github.com/contact?comments=%3E+Please+provide+the+following+information+and+someone+will+be+in+touch+to+help+you+setup+your+enterprise+account.%0A%0A%23%23%23%23+Company+name+%28required%29%0A%0A%23%23%23%23+Email+address+or+GitHub+login+of+the+person+who+should+be+the+initial+owner+of+the+enterprise+account+%28required%29%0A%0A%23%23%23%23+Is+there+anything+else+we+should+know+to+help+us+identify+your+account%3F+%28optional%29%0A%3E+Attaching+a+GitHub+Enterprise+Server+diagnostics+file+here+can+help+us+identify+your+account+by+license+reference+number%0A%0A&subject=Enterprise+Account+Request&tags=new-ea) for a new one.
   - Then, for the best experience, follow the steps below before using the {% data variables.contact.contact_landing_page_portal %} to create tickets about the enterprise account.

1. If you're sure you do not have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you have not been configured as a support-entitled member by an enterprise owner, or you cannot sign in with to your {% data variables.product.prodname_dotcom_the_website %} account, you can provide a copy of your license key or diagnostics file by using the [Get help with {% data variables.product.prodname_ghe_server %}](https://support.github.com/contact/enterprise-by-license) form.

{% endif %}

## Getting started with the {% data variables.contact.enterprise_portal %}

Before you start creating tickets associated with your enterprise account on {% data variables.product.prodname_dotcom_the_website %}, we recommend completing the following steps.

1. Identify the user on {% data variables.product.prodname_dotcom_the_website %} who is an owner of your enterprise account.
1. Configure a verified domain. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."
1. Add owners, billing managers, or support-entitled members to your enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."
