---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: ワークフローを Organization と共有する
intro: 'Learn how you can use organization features to collaborate with your team, by sharing starter workflows, secrets, and self-hosted runners.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

ワークフローやその他の {% data variables.product.prodname_actions %} 機能を Team と共有する必要がある場合は、{% data variables.product.prodname_dotcom %} Organization 内でのコラボレーションを検討します。 Organization を使用すると、シークレット、成果物、およびセルフホストランナーを一元的に保存および管理できます。 You can also create starter workflows in the `.github` repository and share them with other users in your organization.

## Sharing {% ifversion internal-actions %}actions and {% endif %}workflows

{% ifversion internal-actions %}
You can share both individual actions and entire workflows with your organization, with or without publishing the actions or workflows publicly. You can reuse actions and workflows exactly by referencing them in your workflow file, and you can create starter workflows that provide templates for new workflows.
{% else %}
Your organization can share workflows by reusing the workflows exactly or by creating starter workflows that provide templates for new workflows.
{% endif %}

{% ifversion internal-actions %}
### Sharing actions with your enterprise

{% data reusables.actions.internal-actions-summary %}
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reusing workflows

{% data reusables.actions.reusable-workflows %}
{% endif %}

### Using starter workflows

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Organization 内でシークレットを共有する

Organization 内でシークレットを一元管理し、選択したリポジトリで使用できるようにすることができます。 これは、1 つの場所でシークレットを更新し、その変更をシークレットを使用するすべてのリポジトリワークフローに適用できるということを示します。

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. [**New secret（新しいシークレット）**] をクリックします。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。
1. [**Add secret（シークレットの追加）**] をクリックします。

## Organization 内でセルフホストランナーを共有する

Organization の管理者は、セルフホストランナーをグループに追加してから、グループにアクセスできるリポジトリを制御するポリシーを作成できます。

詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。


## 次のステップ

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."
