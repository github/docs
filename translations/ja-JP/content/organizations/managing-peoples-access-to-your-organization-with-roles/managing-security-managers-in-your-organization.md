---
title: Organizationでのセキュリティマネージャーの管理
intro: セキュリティマネージャーのロールを割り当てることで、セキュリティのTeamにOrganizationに対する必要最小限のアクセスを付与できます。
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068302'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## セキュリティマネージャーのロールの権限

セキュリティマネージャーのロールを持つTeamのメンバーは、Organizationのセキュリティを効率的に管理するのに必要な権限だけを持ちます。

- 既存のすべてのリポジトリへのアクセスに加えて、Organization内のすべてのリポジトリへの読み取りアクセス
- Organization内のすべてのセキュリティアラートに対する書き込みアクセス{% ifversion not fpt %}
- Organizationのセキュリティの概要へのアクセス{% endif %}
- {% ifversion not fpt %}{% data variables.product.prodname_GH_advanced_security %}の有効化や無効化を含む{% endif %}Organizatonレベルでのセキュリティ設定ができる
- {% ifversion not fpt %}{% data variables.product.prodname_GH_advanced_security %}の有効化や無効化を含む{% endif %}リポジトリレベルでのセキュリティ設定ができる

{% ifversion fpt %} Organization のセキュリティの概要を含む追加機能は、{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_advanced_security %} を使用する Organization で利用できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)を参照してください。
{% endif %}

あるTeamがセキュリティマネージャーのロールを持っているなら、そのTeamと特定のリポジトリに管理アクセスを持つ人は、そのリポジトリへのTeamのアクセスレベルを変更できますが、アクセスを削除することはできません。 詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}および「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」{% else %}{% endif %}を参照してください。

  ![セキュリティマネージャーのリポジトリアクセスUIの管理](/assets/images/help/organizations/repo-access-security-managers.png)

## OrganizationのTeamへのセキュリティマネージャーロールの割り当て
セキュリティマネージャーのロールは、最大でOrganization内の10のTeamに割り当てることができます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. **[セキュリティ マネージャー]** で、ロールを付与するチームを検索して選択します。 選択した各Teamは、検索バーの下にリストされます。 
  ![セキュリティ マネージャーの追加](/assets/images/help/organizations/add-security-managers.png)
## OrganizatoinのTeamからセキュリティマネージャーロールを削除する

{% warning %}

**警告:** Team からセキュリティ マネージャーのロールを削除すると、その Team はセキュリティ アラートの管理や Organization 全体にわたる設定ができなくなります。ただし、ロールが割り当てられたときに付与されたリポジトリへの Team の読み取りアクセスはそのまま残ります。 不要な読み取りアクセスは手動で削除しなければなりません。 詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)」を参照してください。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. **[セキュリティ マネージャー]** で、セキュリティ マネージャーから削除する Team の右にある {% octicon "x" aria-label="The X icon" %} をクリックします。
  ![セキュリティ マネージャーの削除](/assets/images/help/organizations/remove-security-managers.png)
