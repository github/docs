---
title: Usage limits for GitHub Copilot
shortTitle: Usage limits
allowTitleToDifferFromFilename: true
intro: 'Learn about {% data variables.product.prodname_copilot %} usage limits and what to do if you hit a limit.'
versions:
  feature: copilot
redirect_from:
  - /copilot/troubleshooting-github-copilot/rate-limits-for-github-copilot
  - /copilot/how-tos/troubleshoot/rate-limits-for-github-copilot
  - /copilot/concepts/rate-limits
contentType: concepts
category: 
  - Learn about Copilot
---

## Rate limits

Rate limiting is a mechanism used to control the number of requests a user or application can make in a given time period. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to {% data variables.product.prodname_copilot %} and to protect against abuse.

{% data variables.product.github %} enforces rate limits for several reasons.

* **Capacity:** There is a limited amount of computing power available to serve all {% data variables.product.prodname_copilot_short %} users. Rate limiting helps prevent the system from being overloaded.
* **High usage:** Popular features and models may receive bursts of requests. Rate limits ensure no single user or group can monopolize these resources.
* **Fairness:** Rate limits ensure that all users have equitable access to {% data variables.product.prodname_copilot_short %}.
* **Abuse mitigation:** Without rate limits, malicious actors could exploit {% data variables.product.prodname_copilot_short %}, leading to degraded service for everyone or even denial of service.

## Additional usage limits

Your {% data variables.product.prodname_copilot_short %} plan includes an allowance of {% data variables.product.prodname_ai_credits_short %}. If you exhaust these included credits, you can continue working by either upgrading your plan or setting a budget for **Additional usage** to access more {% data variables.product.prodname_ai_credits_short %}. If you exceed the allowed additional usage, you can pay for the additional usage you've already consumed to unlock more and continue.

For more information, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals#what-happens-if-i-exceed-my-included-ai-credits).

## What to do if you hit a limit

If you receive a limit error when using {% data variables.product.prodname_copilot_short %}, you should:

* **Wait and try again.** Rate limits are temporary. Often, waiting a short period and trying again resolves the issue.
* **Check your usage.** If you’re making frequent or automated requests (for example, rapid-fire completions or large-scale usage), consider adjusting your usage pattern.
* **Upgrade your plan.** If you are on an individual {% data variables.product.prodname_copilot_short %} plan, upgrading your plan will allow for additional usage.
