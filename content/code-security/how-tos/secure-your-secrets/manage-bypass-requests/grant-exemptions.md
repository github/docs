---
title: Exempting trusted actors from push protection
intro: Reduce friction for trusted automation by granting exemptions from push protection.
permissions: '{% data reusables.permissions.delegated-bypass %}'
versions:
  feature: push-protection-org-enterprise-exemptions
contentType: how-tos
shortTitle: Grant exemptions
category:
  - Protect your secrets
---

{% data reusables.secret-scanning.push-protection-exemption-warning %}

{% ifversion push-protection-repo-exemptions %}

## Granting exemptions for your repository

{% data reusables.secret-scanning.push-protection-grant-repo-bypass %}
{% data reusables.secret-scanning.push-protection-grant-exemption %}

{% endif %}

## Granting exemptions for your organization

{% data reusables.secret-scanning.push-protection-grant-org-bypass %}

   > [!NOTE]
   > * You can't add secret teams to the bypass list.

{% data reusables.secret-scanning.push-protection-grant-exemption %}
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

## Granting exemptions for your enterprise

{% data reusables.secret-scanning.push-protection-grant-enterprise-bypass %}
{% data reusables.secret-scanning.push-protection-grant-exemption %}
1. Click **Save configuration**.
1. Apply the security configuration to organizations and repositories in your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/applying-a-custom-security-configuration-to-your-enterprise).
