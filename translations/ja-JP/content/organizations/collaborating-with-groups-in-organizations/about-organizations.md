---
title: Organizationについて
intro: Organization は、高度なセキュリティと管理機能を使って、企業とオープンソース プロジェクトが一度に多くのプロジェクト間で共同作業ができる共有アカウントです。
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164332'
---
## Organizationについて

{% data reusables.organizations.about-organizations %} アカウントの種類のについて詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」をご覧ください。

Organization に参加するために招待するユーザーの数に制限はなく、Organization のメンバーには、Organization とそのデータへのさまざまなレベルのアクセス権を許可するさまざまなロールを許可することができます。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

また、Organization 自体へのアクセスを管理するだけでなく、Organization のリポジトリ、プロジェクト ボード、アプリへのアクセスを個別に管理できます。 詳しくは、「[Organization のリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」、「[Organization のプロジェクトボード権限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)」、「[Organization のアプリケーションに対するアクセスを管理する](/organizations/managing-access-to-your-organizations-apps)」をご覧ください。

アクセス管理を簡素化し、コラボレーションを向上するために、連鎖アクセス許可とメンションを使って、グループの構造を反映する入れ子になったチームを作成できます。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

メンバーが作成できるリポジトリの種類を制限するなど、設定を管理して、グループ固有のニーズを満たすように Organization を構成できます。 詳しくは、「[Organization の設定を管理する](/organizations/managing-organization-settings)」をご覧ください。

Organization のセキュリティを強化するために、セキュリティ要件を適用し、Organization の監査ログを確認できます。 詳しくは、「[Organization を安全に保つ](/organizations/keeping-your-organization-secure)」をご覧ください。

組織を最も効果的に使用する方法については、「[組織のベスト プラクティス](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)」を参照してください。

{% ifversion fpt or ghec %}
## 使用できる機能について

{% data reusables.organizations.organization-plans %} {% endif %}

## Organization と Enterprise アカウント

{% ifversion fpt %}Enterprise アカウントは、所有者が複数の Organization のポリシーと支払いを集中管理できるようにする {% data variables.product.prodname_ghe_cloud %} の機能です。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)を参照してください。
{% else %}{% ifversion ghec %}Enterprise アカウントに属する Organization では、支払いは Enterprise アカウントのレベルで管理され、支払い設定は Organization レベルでは利用できません。{% endif %}Enterprise 所有者は Enterprise アカウント内のすべての Organization のポリシーを設定するか、Organization 所有者に Organization レベルでのポリシーの設定を許可することができます。 Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% ifversion ghec %}{% data reusables.enterprise.create-an-enterprise-account %}詳しくは、「[Enterprise アカウントの作成](/admin/overview/creating-an-enterprise-account)」をご覧ください。

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳しくは、「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」をご覧ください。

{% endif %}
