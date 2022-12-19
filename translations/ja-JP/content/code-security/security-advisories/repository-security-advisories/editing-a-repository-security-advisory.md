---
title: リポジトリ セキュリティ アドバイザリの編集
intro: 詳細を更新したりエラーを修正したりする必要がある場合は、リポジトリ セキュリティ アドバイザリのメタデータと説明を編集できます。
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: db25b39285c65cd1ba83e1a2b6e76e7ec0d6e3e4
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114128'
---
リポジトリ セキュリティ アドバイザリの管理者権限を持つユーザーは、セキュリティ アドバイザリを編集することができます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリのクレジットについて

セキュリティの脆弱性の発見、報告、修正を支援してくれたユーザにクレジットを付与することができます。 ユーザにクレジットを付与すると、相手はそのクレジットを受け入れるか拒否するかを選択できます。

相手がクレジットを受け入れると、そのユーザのユーザ名がセキュリティアドバイザリの [Credits] セクションに表示されます。 リポジトリへの読み取りアクセスを持つユーザは、アドバイザリとそれに対するクレジットを受け入れたユーザを確認することができます。

セキュリティアドバイザリに自分がクレジットされるべきだと信じるなら、そのアドバイザリを作成した人物に連絡し、そのアドバイザリを編集してあなたへのクレジットを含めてもらうように頼んでください。 あなたをクレジットできるのはアドバイザリの作者だけなので、セキュリティアドバイザリでのクレジットについてはGitHub Supportに問い合わせないでください。

## セキュリティアドバイザリを編集する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、編集するセキュリティアドバイザリをクリックします。
5. セキュリティ アドバイザリの詳細の右上隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 セキュリティ アドバイザリ フォームが編集モードで開きます。
  ![セキュリティ アドバイザリの [編集] ボタン](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. 必要に応じて、セキュリティアドバイザリの [Credits] を編集します。
  ![セキュリティ アドバイザリのクレジット](/assets/images/help/security/security-advisory-credits.png)
12. **[セキュリティ アドバイザリの更新]** をクリックします。
  ![[セキュリティ アドバイザリの更新] ボタン](/assets/images/help/security/update-advisory-button.png)
13. [Credits] セクションに記載されているユーザは、クレジットを受け入れるように勧めるメールまたは Web 通知を受信します。 受け入れた場合、セキュリティアドバイザリが公開されると、そのユーザ名が公開されます。

## 参考資料

- 「[リポジトリ セキュリティ アドバイザリの撤回](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)」
