---
title: セキュリティアドバイザリを編集する
intro: 詳細を更新したりエラーを修正したりする必要がある場合は、セキュリティアドバイザリのメタデータと説明を編集できます。
versions:
  free-pro-team: '*'
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリを編集できます。

### セキュリティアドバイザリのクレジットについて

セキュリティの脆弱性の発見、報告、修正を支援してくれたユーザにクレジットを付与することができます。 ユーザにクレジットを付与すると、相手はそのクレジットを受け入れるか拒否するかを選択できます。

相手がクレジットを受け入れると、そのユーザのユーザ名がセキュリティアドバイザリの [Credits] セクションに表示されます。 リポジトリへの読み取りアクセスを持つユーザは、アドバイザリとそれに対するクレジットを受け入れたユーザを確認することができます。

### セキュリティアドバイザリを編集する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、編集するセキュリティアドバイザリをクリックします。
5. In the upper-right corner of the details for the security advisory, click
{% octicon "pencil" aria-label="The edit icon" %}.
  ![セキュリティアドバイザリの [Edit] ボタン](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. 必要に応じて、セキュリティアドバイザリの [Credits] を編集します。 ![セキュリティアドバイザリのクレジット](/assets/images/help/security/security-advisory-credits.png)
9. [**Update security advisory**] をクリックします。 ![[Add] ボタン](/assets/images/help/security/update-advisory-button.png)
10. [Credits] セクションに記載されているユーザは、クレジットを受け入れるように勧めるメールまたは Web 通知を受信します。 受け入れた場合、セキュリティアドバイザリが公開されると、そのユーザ名が公開されます。

### 参考リンク

- 「[セキュリティアドバイザリを撤回する](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)」
