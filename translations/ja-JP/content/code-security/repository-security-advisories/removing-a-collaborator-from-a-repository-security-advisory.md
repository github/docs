---
title: リポジトリ セキュリティ アドバイザリからのコラボレータの削除
intro: リポジトリ セキュリティ アドバイザリからコラボレーターを削除すると、そのコラボレーターはセキュリティ アドバイザリのディスカッションとメタデータへの読み取りおよび書き込みアクセス権を失います。
redirect_from:
- /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
- /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: ced0edd0614304c0d33ddd40dce3c6a24a9ffcfd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145119358"
---
セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリからコラボレータを削除できます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリからコラボレータを削除する

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、コラボレータを削除するセキュリティアドバイザリをクリックします。
  ![リスト内のセキュリティ アドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. ページの右側にある、[Collaborators] の下で、セキュリティアドバイザリから削除するユーザまたは Team の名前を探します。
  ![セキュリティ アドバイザリのコラボレータ](/assets/images/help/security/security-advisory-collaborator.png)
6. 削除するコラボレーターの横にある **[X]** アイコンをクリックします。
  ![セキュリティ アドバイザリからコラボレータを削除する [X] アイコン](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## 参考資料

- 「[リポジトリ セキュリティ アドバイザリの権限レベル](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)」
- 「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」
