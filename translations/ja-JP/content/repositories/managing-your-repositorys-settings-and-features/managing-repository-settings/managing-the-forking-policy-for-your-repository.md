---
title: リポジトリのフォークポリシーを管理する
intro: '組織が所有する特定のプライベート リポジトリ{% ifversion ghae or ghes or ghec %}、または内部{% endif %}リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132120'
---
Organization のオーナーは、特定のリポジトリのフォークを許可または禁止する前に、Organization レベルでプライベート{% ifversion ghae or ghes or ghec %}および内部{% endif %}のリポジトリのフォークを許可する必要があります。 詳細については、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で、 **[フォークを許可]** を選択します。
  ![プライベート リポジトリのフォークの許可あるいは禁止のチェックボックス](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## 参考資料

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
