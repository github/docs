---
title: Blocking agentic features in your enterprise
intro: Disable features for all users and repositories.
permissions: Enterprise owners and AI managers
versions:
  feature: copilot
shortTitle: Block agentic features
contentType: how-tos
category:
  - Manage Copilot for a team
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/block-copilot-cloud-agent
---

Most {% data variables.product.prodname_copilot_short %} policies only affect users who receive a {% data variables.product.prodname_copilot_short %} license from your enterprise or organizations. However, there are dedicated policies to completely disable features in your repositories, including for users who get access to {% data variables.product.prodname_copilot_short %} from a personal plan or another enterprise.

## Blocking {% data variables.copilot.copilot_cloud_agent %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.cca-policies %}
1. Next to **Block {% data variables.copilot.copilot_cloud_agent %} in all repositories owned by ENTERPRISE-NAME**, click the toggle.

## Blocking {% data variables.copilot.copilot_code-review_short %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the left sidebar, click {% octicon "agent" aria-hidden="true" aria-label="agent" %} **Agents**.
1. Under "Available Agents", click **{% data variables.copilot.copilot_code-review_short %}**.
1. Next to **Block {% data variables.copilot.copilot_code-review_short %} in all enterprise repositories**, click the toggle.
