---
title: リポジトリ セキュリティ アドバイザリからのコラボレータの削除
intro: リポジトリ セキュリティ アドバイザリからコラボレーターを削除すると、そのコラボレーターはセキュリティ アドバイザリのディスカッションとメタデータへの読み取りおよび書き込みアクセス権を失います。
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114123'
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
