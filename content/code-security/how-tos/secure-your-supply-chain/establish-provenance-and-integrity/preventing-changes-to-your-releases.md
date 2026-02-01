---
title: Preventing changes to your releases
shortTitle: Prevent release changes
intro: You can enforce immutable releases for a repository or organization to prevent potential vulnerabilities.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Code Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/preventing-changes-to-your-releases
contentType: how-tos
---

## Enforcing immutable releases for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Scroll down to the "Releases" section, then select **Enable release immutability**. Be aware that immutability will only apply to future releases.

## Enforcing immutable releases for your organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select the {% octicon "repo" aria-hidden="true" %} **Repository** dropdown menu, then click **General**.
1. In the "Releases" section of the page, select the **No policy** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click either **All repositories** or **Selected repositories**. Be aware that immutability will only apply to future releases.
1. If you chose **Selected repositories**, to the right of the dropdown menu, click {% octicon "gear" aria-label="Select repositories" %}. Select the repositories you want to include, then click **Select repositories**.
