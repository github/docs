---
title: Blocking GitHub Copilot cloud agent in your enterprise
intro: 'Disable use of {% data variables.copilot.copilot_cloud_agent %} for all users and repositories.'
permissions: Enterprise owners and AI managers
versions:
  feature: copilot
shortTitle: 'Block {% data variables.copilot.copilot_cloud_agent %}'
contentType: how-tos
category:
  - Manage Copilot for a team
allowTitleToDifferFromFilename: true
---

Most {% data variables.product.prodname_copilot_short %} policies, including "Enable {% data variables.copilot.copilot_cloud_agent %}", only affect users who receive a {% data variables.product.prodname_copilot_short %} license from your enterprise or organizations.

If you want to disable {% data variables.copilot.copilot_cloud_agent %} in repositories completely, including for users who get access to {% data variables.product.prodname_copilot_short %} from a personal plan or another enterprise, you can use the "Block {% data variables.copilot.copilot_cloud_agent %}" policy.

## Blocking {% data variables.copilot.copilot_cloud_agent %}

>[!NOTE] This enterprise-level policy is a blanket restriction. Organization owners can block {% data variables.copilot.copilot_cloud_agent %} in specific repositories. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.cca-policies %}
1. Next to **Block {% data variables.copilot.copilot_cloud_agent %} in all repositories owned by ENTERPRISE-NAME**, click the toggle.
