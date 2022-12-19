---
title: リポジトリ セキュリティ アドバイザリへのコラボレータの追加
intro: あなたと協力するセキュリティアドバイザリとして、ユーザや Team を追加できます。
redirect_from:
- /articles/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
- /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Add collaborators
ms.openlocfilehash: 6fa4062fab8e4ffc59724ceb0ba3b6b536871df9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879136"
---
セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリにコラボレータを追加できます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリにコラボレータを追加する

コラボレータは、セキュリティアドバイザリへの書き込み権限を持ちます。 詳細については、「[リポジトリ セキュリティ アドバイザリの権限レベル](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)」を参照してください。

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} セキュリティ アドバイザリのコラボレーターの削除に関する詳細については、「[リポジトリ セキュリティ アドバイザリからのコラボレータの削除](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、コラボレータとして追加するセキュリティアドバイザリをクリックします。
5. ページの右側にある、[Collaborators] の下で、セキュリティアドバイザリとして追加するユーザまたは Team の名前を入力します。
  ![ユーザ名または Team 名を入力するフィールド](/assets/images/help/security/add-collaborator-field.png)
6. **[追加]** をクリックします。
  ![[追加] ボタン](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## 参考資料

- 「[リポジトリ セキュリティ アドバイザリの権限レベル](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)」
- 「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」
- 「[リポジトリ セキュリティ アドバイザリからのコラボレータの削除](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)」。
