---
title: リポジトリ セキュリティ アドバイザリの作成
intro: セキュリティアドバイザリのドラフトを作成して、オープンソースプロジェクトのセキュリティ脆弱性について非公開で議論して修正することができます。
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: 5c78a8b0c0a2d5085a876de2b0788ef093c4c6b1
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186156'
---
リポジトリに対する管理者権限があるユーザなら誰でも、セキュリティアドバイザリを作成できます。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## セキュリティ アドバイザリの作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. **[新しいドラフト セキュリティ アドバイザリ]** をクリックし、ドラフト アドバイザリ フォームを開きます。 アスタリスクが付いているフィールドは必須です。
  ![[アドバイザリのドラフトを開く] ボタン](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
1. セキュリティアドバイザリのタイトルを入力します。
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
1. **[セキュリティ アドバイザリのドラフトの作成]** をクリックします。
  ![[セキュリティ アドバイザリの作成] ボタン](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## 次の手順

- セキュリティアドバイザリのドラフトにコメントして、チームと脆弱性について話し合います。
- セキュリティアドバイザリにコラボレータを追加します。 詳細については、「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください。
- 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。 詳細については、「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください。
- セキュリティアドバイザリへの貢献に対してクレジットを受け取る必要がある個人を追加します。 詳細については、「[リポジトリ セキュリティ アドバイザリの編集](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)」を参照してください。
- コミュニティにセキュリティの脆弱性を知らせるため、セキュリティアドバイザリを公開します。 詳細については、「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください。
