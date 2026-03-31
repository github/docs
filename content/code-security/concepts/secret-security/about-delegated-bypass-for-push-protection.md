---
title: About delegated bypass for push protection
intro: Maintain your secret security while unblocking trusted actors with delegated bypass for push protection.
product: '{% data reusables.gated-features.delegated-bypass %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Delegated bypass
redirect_from:
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection
contentType: concepts
category:
  - Protect your secrets
---

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

## About delegated bypass for push protection

With delegated bypass for push protection, you can:

* **Grant bypass permissions** to select individuals, roles, and teams, allowing them to push commits that are initially blocked by push protection.{% ifversion push-protection-org-enterprise-exemptions %}
* **Grant exemptions** to select actors, skipping push protection entirely for all of their commits. Exemptions should be granted to trusted automation like migration bots or service accounts that need to push frequent commits with minimal friction.{% endif %}
* **Introduce a review cycle** for bypass requests from all other contributors. Requests expire after 7 days.

{% ifversion push-protection-delegated-bypass-file-upload-support %}Delegated bypass applies to files created, edited, and uploaded on {% data variables.product.prodname_dotcom %}.{% endif %}

## Users with bypass privileges

The following types of users can always bypass push protection:
* Organization owners
* Security managers
* Users in teams, default roles, or custom roles that have been added to the bypass list{% ifversion push-protection-bypass-fine-grained-permissions %}
* Users who are assigned (either directly or via a team) a custom role with the "review and manage secret scanning bypass requests" fine-grained permission{% endif %}

## Next steps

To start managing bypass privileges, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection).
