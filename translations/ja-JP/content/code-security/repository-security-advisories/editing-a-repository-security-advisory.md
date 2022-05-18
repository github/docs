---
title: リポジトリセキュリティアドバイザリの編集
intro: 詳細を更新したり、間違いを修正したりする必要がある場合、リポジトリセキュリティアドバイザリのメタデータと説明を編集できます。
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: リポジトリアドバイザリの編集
---

リポジトリセキュリティアドバイザリの管理権限を持つ人は、そのセキュリティアドバイザリを編集できます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリのクレジットについて

セキュリティの脆弱性の発見、報告、修正を支援してくれたユーザにクレジットを付与することができます。 ユーザにクレジットを付与すると、相手はそのクレジットを受け入れるか拒否するかを選択できます。

相手がクレジットを受け入れると、そのユーザのユーザ名がセキュリティアドバイザリの [Credits] セクションに表示されます。 リポジトリへの読み取りアクセスを持つユーザは、アドバイザリとそれに対するクレジットを受け入れたユーザを確認することができます。

セキュリティアドバイザリに自分がクレジットされるべきだと信じるなら、そのアドバイザリを作成した人物に連絡し、そのアドバイザリを編集してあなたへのクレジットを含めてもらうように頼んでください。 あなたをクレジットできるのはアドバイザリの作者だけなので、セキュリティアドバイザリでのクレジットについてはGitHub Supportに問い合わせないでください。

## セキュリティアドバイザリを編集する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、編集するセキュリティアドバイザリをクリックします。
5. セキュリティアドバイザリの詳細の右上隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 ![セキュリティアドバイザリの [Edit] ボタン](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. 必要に応じて、セキュリティアドバイザリの [Credits] を編集します。 ![セキュリティアドバイザリのクレジット](/assets/images/help/security/security-advisory-credits.png)
12. [**Update security advisory**] をクリックします。 !["セキュリティアドバイザリの更新"ボタン](/assets/images/help/security/update-advisory-button.png)
13. [Credits] セクションに記載されているユーザは、クレジットを受け入れるように勧めるメールまたは Web 通知を受信します。 受け入れた場合、セキュリティアドバイザリが公開されると、そのユーザ名が公開されます。

## 参考リンク

- 「[リポジトリセキュリティアドバイザリの撤回](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)」
