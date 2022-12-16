---
title: GitHub 上のアクセス権限
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'ロールを使うと、{% data variables.product.product_name %} 上のアカウントとリソースにアクセスできるユーザーと、各ユーザーのアクセス レベルを制御することができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
ms.openlocfilehash: 32db1949cbc110559023f719682caed0319aae9e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131204'
---
## {% data variables.product.prodname_dotcom %} に対するアクセス許可について

{% data reusables.organizations.about-roles %} 

ロールは、アカウントの種類によって動作が異なります。 アカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

## 個人用アカウント

個人アカウントが所有するリポジトリには、*リポジトリ所有者* と *コラボレーター* という 2 つのアクセス許可レベルがあります。 詳しい情報については、「[個人アカウントのリポジトリのアクセス許可レベル](/articles/permission-levels-for-a-user-account-repository)」を参照してください。

## Organization アカウント

組織のメンバーは、*所有者*{% ifversion fpt or ghec %}、*支払いマネージャー*、{% endif %} または *メンバー* ロールを持つことができます。 所有者は、組織に対する完全な管理者アクセス権を持ち{% ifversion fpt or ghec %}、支払いマネージャーは課金の設定を管理できます{% endif %}。 メンバーは、その他の人のデフォルトのロールです。 Team を使って、複数のメンバーのアクセス権限を一度に管理できます。 詳細については、次を参照してください。
- 「[組織のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」
- 「[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)」
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- 「[Team について](/articles/about-teams)」

## Enterprise アカウント

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Enterprise アカウントのアクセス許可の詳細については、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github)を参照してください。
{% else %}*Enterprise 所有者* は Enterprise アカウントに対して最終的な権限を持ち、Enterprise アカウントのすべてのアクションを実行できます。{% ifversion ghec or ghes %}*支払いマネージャー* は、Enterprise アカウントの課金設定を管理できます。{% endif %}Enterprise アカウントが所有する組織のメンバーと外部コラボレーターは、Enterprise アカウント自体またはその設定にアクセスすることはできませんが、Enterprise アカウントのメンバーは自動的にメンバーになります。 詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

{% ifversion ghec %} エンタープライズが {% data variables.product.prodname_emus %} を使っている場合、メンバーは {% data variables.product.prodname_dotcom %} に新しい個人アカウントとしてプロビジョニングされ、ID プロバイダーによって完全に管理されます。 {% data variables.product.prodname_managed_users %}には、エンタープライズの一部ではないリポジトリへの読み取り専用アクセス権があり、エンタープライズのメンバーではないユーザーと対話することはできません。 エンタープライズが所有する組織内では、{% data variables.product.prodname_managed_users %}には、通常の組織で使用できるのと同じ詳細なアクセス レベルを付与できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
{% endif %} {% endif %}

## 参考資料

- "[{% data variables.product.prodname_dotcom %} アカウントの種類](/articles/types-of-github-accounts)"
