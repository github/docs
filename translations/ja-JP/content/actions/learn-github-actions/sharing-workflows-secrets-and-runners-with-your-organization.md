---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: ワークフローを Organization と共有する
intro: ワークフローテンプレート、シークレット、およびセルフホストランナーを共有することで、Organization 機能を使用して Team とコラボレーションする方法を学びます。
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

ワークフローやその他の {% data variables.product.prodname_actions %} 機能を Team と共有する必要がある場合は、{% data variables.product.prodname_dotcom %} Organization 内でのコラボレーションを検討します。 Organization を使用すると、シークレット、成果物、およびセルフホストランナーを一元的に保存および管理できます。 `.github` リポジトリにワークフローテンプレートを作成して、Organization 内の他のユーザと共有することもできます。

## Using workflow templates

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."

{% data reusables.actions.reusable-workflows %}

## Organization 内でシークレットを共有する

Organization 内でシークレットを一元管理し、選択したリポジトリで使用できるようにすることができます。 これは、1 つの場所でシークレットを更新し、その変更をシークレットを使用するすべてのリポジトリワークフローに適用できるということを示します。

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. [**New secret（新しいシークレット）**] をクリックします。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。
1. [**Add secret（シークレットの追加）**] をクリックします。

## Organization 内でセルフホストランナーを共有する

Organization の管理者は、セルフホストランナーをグループに追加してから、グループにアクセスできるリポジトリを制御するポリシーを作成できます。

詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。


## 次のステップ

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."
