---
title: About billing for GitHub Copilot
intro: 'If you want to use {% data variables.product.prodname_copilot %}, you either need a subscription for {% data variables.product.prodname_copilot_for_individuals %} in your personal account, or you need to be assigned a seat by an organization on {% data variables.product.prodname_ghe_cloud %} with a subscription for {% data variables.product.prodname_copilot_for_business %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
---
## About billing for {% data variables.product.prodname_copilot %}

If you want to use {% data variables.product.prodname_copilot %}, you will need a subscription for your {% data variables.product.prodname_dotcom %} personal account, or if you are a member of a {% data variables.product.prodname_ghe_cloud %} organization with a {% data variables.product.prodname_copilot_business_short %} subscription, you will need to be assigned a seat by an organization admin. For more information about {% data variables.product.prodname_copilot %}, see "[About {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot)." 

For more information about managing {% data variables.product.prodname_copilot %} through {% data variables.product.prodname_ghe_cloud %}, see "[Enforcing policies for {% data variables.product.prodname_copilot %} in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}.{% endif %}"{% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

Before starting a paid subscription for a personal account, you can set up a one-time 60-day trial to evaluate {% data variables.product.prodname_copilot %}. To begin a trial, you will need to choose a monthly or yearly billing cycle, and provide a payment method. If you do not cancel the trial before the end of the 60 days, the trial will automatically convert to a paid subscription. You can cancel your {% data variables.product.prodname_copilot %} trial at any time during the 60 days and you won't be charged. If you cancel before the end of the trial, you will continue to have access to {% data variables.product.prodname_copilot %} until the 60-day trial period ends. For more information, see "[Managing your {% data variables.product.prodname_copilot_for_individuals %} subscription](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription)."

## Pricing for {% data variables.product.prodname_copilot_for_individuals %}


The {% data variables.product.prodname_copilot %} subscription is available on a monthly or yearly cycle. If you choose a monthly billing cycle, you will be billed $10 per calendar month. If you choose a yearly billing cycle, you will be billed $100 per year. You can modify your billing cycle at any time, and the modification will be reflected from the start of your next billing cycle.

If you have an active {% data variables.product.prodname_copilot %} subscription, and are then assigned a seat as part of a {% data variables.product.prodname_copilot_for_business %} subscription in {% data variables.product.prodname_ghe_cloud %}, your personal {% data variables.product.prodname_copilot %} subscription will be automatically canceled. You will receive a prorated refund for any remaining portion of your personal subscription's current billing cycle. You will then be able to continue using {% data variables.product.prodname_copilot %} according to the policies set at the enterprise or organization level.

A free subscription for {% data variables.product.prodname_copilot %} is available to verified students, teachers, and maintainers of popular open-source repositories on {% data variables.product.company_short %}. If you meet the criteria as an open source maintainer, you will be automatically notified when you visit the {% data variables.product.prodname_copilot %} subscription page. As a student, if you currently receive the {% data variables.product.prodname_student_pack %}, you will also be offered a free subscription when you visit the {% data variables.product.prodname_copilot %} subscription page. For more information about the {% data variables.product.prodname_student_pack %}, see "[Apply to {% data variables.product.prodname_global_campus %} as a student](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)."

{% ifversion ghec %}
## Pricing for {% data variables.product.prodname_copilot_for_business %}

The {% data variables.product.prodname_copilot_for_business %} subscription is available on a monthly cycle, and is billed at $19 per user per month. Billing for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} is processed at the end of each billing cycle. 

Billed users are calculated based on the number of {% data variables.product.prodname_copilot %} seats assigned at the beginning of a billing cycle, or assigned during the billing cycle. Any seat assigned part way through the billing cycle will be prorated based on the number of days remaining in the cycle. Any seat assignment removed during a billing cycle will take effect from the beginning of the next cycle.

Seat assignment for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} is managed by admins of organizations which have been granted access to {% data variables.product.prodname_copilot %} at the enterprise level. If you are a member of multiple organizations under the same enterprise, you can be assigned {% data variables.product.prodname_copilot %} seats in more than one organization, but your enterprise will only be billed once. For more information, see "[Configuring {% data variables.product.prodname_copilot %} settings in your organization](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

Policy settings and the usage overview for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} are available at the enterprise level. For more information, see "[Enforcing policies for {% data variables.product.prodname_copilot %} in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)" and "[Viewing your {% data variables.product.prodname_copilot %} usage](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)."

{% endif %}