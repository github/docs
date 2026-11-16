---
title: Managing requests for additional Copilot budget
shortTitle: Manage budget requests
intro: 'Approve, adjust, or deny requests from members who have used all the {% data variables.product.prodname_ai_credits_short %} in their budget.'
permissions: 'Organization owners, enterprise owners, and billing managers'
versions:
  feature: enhanced-billing-platform
contentType: how-tos
category:
  - Manage Copilot for a team
---

When a member uses all the {% data variables.product.prodname_ai_credits_short %} available to them, they are blocked from {% data variables.product.prodname_copilot_short %} features that consume {% data variables.product.prodname_ai_credits_short %}, and they can request an increase.

Requests go to whichever account pays for the budget. Requests against an organization-owned budget are reviewed in the organization's settings, and requests against an enterprise-owned budget are reviewed in the enterprise's settings.

## Reviewing requests

1. Navigate to your organization or enterprise. For example, from the [Organizations](https://github.com/settings/organizations?ref_product=copilot&ref_type=engagement&ref_style=text) or [Enterprises](https://github.com/settings/enterprises?ref_product=copilot&ref_type=engagement&ref_style=text) pages on {% data variables.product.prodname_dotcom_the_website %}.
1. In the settings for the account, click **{% octicon "bell" aria-hidden="true" aria-label="bell" %} Requests from members**, then review the pending requests for additional {% data variables.product.prodname_copilot_short %} budget.
1. To approve requests, set a new amount for each one, select the requests, then click **Approve and increase**.

Approving a request sets the member's budget to the amount you entered and restores their access to {% data variables.product.prodname_ai_credits_short %}.
