---
title: セキュリティアドバイザリを編集する
intro: 詳細を更新したりエラーを修正したりする必要がある場合は、セキュリティアドバイザリのメタデータと説明を編集できます。
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - Security
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリを編集できます。

### セキュリティアドバイザリのクレジットについて

セキュリティの脆弱性の発見、報告、修正を支援してくれたユーザにクレジットを付与することができます。 ユーザにクレジットを付与すると、相手はそのクレジットを受け入れるか拒否するかを選択できます。

相手がクレジットを受け入れると、そのユーザのユーザ名がセキュリティアドバイザリの [Credits] セクションに表示されます。 リポジトリへの読み取りアクセスを持つユーザは、アドバイザリとそれに対するクレジットを受け入れたユーザを確認することができます。

If you believe you should be credited for a security advisory, please contact the person who created the advisory and ask them to edit the advisory to include your credit. Only the creator of the advisory can credit you, so please don't contact GitHub Support about credits for security advisories.

### セキュリティアドバイザリを編集する

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
12. [**Update security advisory**] をクリックします。 ![[Add] ボタン](/assets/images/help/security/update-advisory-button.png)
13. [Credits] セクションに記載されているユーザは、クレジットを受け入れるように勧めるメールまたは Web 通知を受信します。 受け入れた場合、セキュリティアドバイザリが公開されると、そのユーザ名が公開されます。

### 参考リンク

- 「[セキュリティアドバイザリを撤回する](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)」
