---
title: Rate limits for GitHub Copilot
shortTitle: Rate limits
intro: 'Learn about {% data variables.product.prodname_copilot %} rate limits and what to do if you are rate limited.'
versions:
  feature: copilot
topics:
  - Copilot
---

Rate limiting is a mechanism used to control the number of requests a user or application can make in a given time period. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to {% data variables.product.prodname_copilot %} and to protect against abuse.

When you hit a rate limit, you may temporarily lose access to certain {% data variables.product.prodname_copilot %} features or models, and you’ll see an error message informing you that you’ve been rate limited.

## Why does {% data variables.product.github %} use rate limits?

{% data variables.product.github %} enforces rate limits for several reasons.

* **Capacity:** There is a limited amount of computing power available to serve all {% data variables.product.prodname_copilot_short %} users. Rate limiting helps prevent the system from being overloaded.
* **High usage:** Popular features and models may receive bursts of requests. Rate limits ensure no single user or group can monopolize these resources.
* **Fairness:** Rate limits ensure that all users have equitable access to {% data variables.product.prodname_copilot_short %}.
* **Abuse mitigation:** Without rate limits, malicious actors could exploit {% data variables.product.prodname_copilot_short %}, leading to degraded service for everyone or even denial of service.

## What to do if you are rate limited

If you receive a rate limit error when using {% data variables.product.prodname_copilot_short %}, you should:

* **Wait and try again.** Rate limits are temporary. Often, waiting a short period and trying again resolves the issue.
* **Check your usage.** If you’re making frequent or automated requests (for example, rapid-fire completions or large-scale usage), consider adjusting your usage pattern.
* **Change your model.** Preview models may have stricter rate limits due to limited capacity.
* **Contact Support.** If you’re repeatedly rate limited and believe it’s impacting legitimate use, contact {% data variables.contact.contact_support_page %} for assistance.

>[!NOTE] Service-level rate limits should not affect typical {% data variables.product.prodname_copilot_short %} usage. However, if you’re heavily using preview models, you may encounter rate limits more frequently.
