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

Rate limiting is a mechanism used to control the number of requests a user or application can make in a given time period. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to {% data variables.product.prodname_copilot %} and to protect against abuse.

## Why does {% data variables.product.github %} use rate limits?

{% data variables.product.github %} enforces rate limits for several reasons.

* **Capacity:** There is a limited amount of computing power available to serve all {% data variables.product.prodname_copilot_short %} users. Rate limiting helps prevent the system from being overloaded.
* **High usage:** Popular features and models may receive bursts of requests. Rate limits ensure no single user or group can monopolize these resources.
* **Fairness:** Rate limits ensure that all users have equitable access to {% data variables.product.prodname_copilot_short %}.
* **Abuse mitigation:** Without rate limits, malicious actors could exploit {% data variables.product.prodname_copilot_short %}, leading to degraded service for everyone or even denial of service.

## Types of usage limits

{% data variables.product.prodname_copilot %} has two limits: a **session** and a **weekly (7-day) limit**.

* **Session limit.** If you hit the session limit, you must wait until it resets before you can resume using {% data variables.product.prodname_copilot_short %}.
* **Weekly limit.** This limit caps the total number of tokens you can consume during a 7-day period. If you hit a weekly limit and you have {% data variables.product.prodname_prus %} remaining, you can continue using {% data variables.product.prodname_copilot_short %} with {% data variables.copilot.copilot_auto_model_selection_short_cap_a %}. Model choice will be re-enabled when the weekly period resets.

## What you will see when approaching a limit

{% data variables.product.prodname_vscode_shortname %} and {% data variables.copilot.copilot_cli %} both display a warning when you are approaching a limit. These indicators are designed to help you avoid hitting a limit unexpectedly.

## What to do if you approach a limit

If you are approaching a limit, the following steps can help reduce the chances of hitting it.

* **Use a model with a smaller multiplier for simpler tasks.** The larger the multiplier, the faster you will reach the limit.
* **Use plan mode.** In {% data variables.product.prodname_vscode_shortname %} and {% data variables.copilot.copilot_cli_short %}, plan mode can improve task efficiency and task success, reducing overall token consumption.
* **Reduce parallel workflows.** Parallelized tools result in higher token consumption. Use them sparingly if you are nearing your limits.
* **Upgrade your plan.** If you are on a {% data variables.copilot.copilot_pro_short %} plan, upgrading to {% data variables.copilot.copilot_pro_plus_short %} provides significantly higher usage limits.

## What to do if you hit a limit

If you receive a usage limit error when using {% data variables.product.prodname_copilot_short %}, you should:

* **Wait until your limit time resets.** 
* **Switch to {% data variables.copilot.copilot_auto_model_selection %}.** If you hit a **weekly** usage limit, you can continue using {% data variables.product.prodname_copilot_short %} with {% data variables.copilot.copilot_auto_model_selection_short_cap_a %} until exhausting your premium requests.
* **Upgrade your plan.** If you are on an individual {% data variables.product.prodname_copilot_short %} plan, upgrading your plan will allow for additional usage. 
* **Contact Support.** If you repeatedly hit usage limits and believe it’s impacting legitimate use, contact {% data variables.contact.contact_support_page %} for assistance.
