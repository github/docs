---
title: Rate limits for GitHub Copilot
shortTitle: Rate limits
allowTitleToDifferFromFilename: true
intro: 'Learn about {% data variables.product.prodname_copilot %} rate limits and what to do if you are rate limited.'
versions:
  feature: copilot
redirect_from:
  - /copilot/troubleshooting-github-copilot/rate-limits-for-github-copilot
  - /copilot/how-tos/troubleshoot/rate-limits-for-github-copilot
contentType: concepts
category: 
  - Learn about Copilot
---

Rate limiting is a mechanism used to control the number of requests a user or application can make in a given time period. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to {% data variables.product.prodname_copilot %} and to protect against abuse.

When you hit a rate limit, you may temporarily lose access to certain {% data variables.product.prodname_copilot %} features or models, and you’ll see an error message informing you that you’ve been rate limited.

## Why does {% data variables.product.github %} use rate limits?

{% data variables.product.github %} enforces rate limits for several reasons.

* **Capacity:** There is a limited amount of computing power available to serve all {% data variables.product.prodname_copilot_short %} users. Rate limiting helps prevent the system from being overloaded.
* **High usage:** Popular features and models may receive bursts of requests. Rate limits ensure no single user or group can monopolize these resources.
* **Fairness:** Rate limits ensure that all users have equitable access to {% data variables.product.prodname_copilot_short %}.
* **Abuse mitigation:** Without rate limits, malicious actors could exploit {% data variables.product.prodname_copilot_short %}, leading to degraded service for everyone or even denial of service.

## Types of rate limits
* **Limits for overall service reliability:** Temporary protections that {% data variables.product.github %} applies to keep {% data variables.product.prodname_copilot %} reliable and fair for everyone. You may see these represented as **global** or **weekly** rate limits.
* **Limits for specific models or model family capacity:** Plan-based limits that reflect the {% data variables.product.prodname_copilot %} usage you've consumed for a particular model or model family.

## What to do if you are rate limited

If you receive a rate limit error when using {% data variables.product.prodname_copilot_short %}, you should:

* **Wait and try again.** Rate limits are temporary. Often, waiting a short period and trying again resolves the issue.
* **Check your usage.** If you’re making frequent or automated requests (for example, rapid-fire completions or large-scale usage), consider adjusting your usage pattern.
* **Change your model.** Select models may have stricter rate limits due to limited capacity.
* **Switch to {% data variables.copilot.copilot_auto_model_selection %}.** If you hit a **weekly** rate limit, you can continue using {% data variables.product.prodname_copilot_short %} with {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} until exhausting your premium requests.
* **Upgrade your plan.** If you are on an individual {% data variables.product.prodname_copilot_short %} plan, upgrading your plan will allow for additional usage. 
* **Contact Support.** If you’re repeatedly rate limited and believe it’s impacting legitimate use, contact {% data variables.contact.contact_support_page %} for assistance.

>[!NOTE] Service-level rate limits should not affect typical {% data variables.product.prodname_copilot_short %} usage. However, if you’re heavily using select models, you may encounter rate limits more frequently.
