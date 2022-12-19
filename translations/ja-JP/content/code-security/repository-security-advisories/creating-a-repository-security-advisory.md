---
title: リポジトリ セキュリティ アドバイザリの作成
intro: セキュリティアドバイザリのドラフトを作成して、オープンソースプロジェクトのセキュリティ脆弱性について非公開で議論して修正することができます。
redirect_from:
- /articles/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-security-advisory
- /code-security/security-advisories/creating-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: d4b47f84b20873e97b18106448b768288fff3039
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145119397"
---
リポジトリに対する管理者権限があるユーザなら誰でも、セキュリティアドバイザリを作成できます。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## セキュリティ アドバイザリの作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. **[セキュリティ アドバイザリの新しいドラフト]** をクリックします。
  ![[アドバイザリのドラフトを開く] ボタン](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. セキュリティアドバイザリのタイトルを入力します。
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. **[セキュリティ アドバイザリのドラフトの作成]** をクリックします。
  ![[セキュリティ アドバイザリの作成] ボタン](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## 次の手順

- セキュリティアドバイザリのドラフトにコメントして、チームと脆弱性について話し合います。
- セキュリティアドバイザリにコラボレータを追加します。 詳細については、「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください。
- 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。 詳細については、「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください。
- セキュリティアドバイザリへの貢献に対してクレジットを受け取る必要がある個人を追加します。 詳細については、「[リポジトリ セキュリティ アドバイザリの編集](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)」を参照してください。
- コミュニティにセキュリティの脆弱性を知らせるため、セキュリティアドバイザリを公開します。 詳細については、「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください。
