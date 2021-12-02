---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: 与组织共享工作流程
intro: 了解如何通过共享工作流模板、机密和自托管运行器，使用组织功能与团队协作。
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## 概览

如果需要与您的团队共享工作流程和其他 {% data variables.product.prodname_actions %} 功能，则考虑在 {% data variables.product.prodname_dotcom %} 组织内协作。 组织允许您集中存储和管理机密、构件和自托管运行器。 您也可以在 `.github` 仓库中创建工作流程模板，并与您组织中的其他用户共享。

## Using workflow templates

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."

{% data reusables.actions.reusable-workflows %}

## 在组织内共享机密

您可以在组织内集中管理您的机密，然后将其提供给选定的仓库。 这也意味着您可以在一个位置更新机密，并且将更改应用于使用该机密的所有仓库工作流程。

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 单击 **New secret（新建密码）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。
1. 单击 **Add secret（添加密码）**。

## 在组织内共享自托管运行器

组织管理员可以将其自托管的运行器添加到组，然后创建控制哪些仓库可访问该组的策略。

更多信息请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。


## 后续步骤

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."
