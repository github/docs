---
title: セキュリティアドバイザリにコラボレータを追加する
intro: あなたと協力するセキュリティアドバイザリとして、ユーザや Team を追加できます。
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリにコラボレータを追加できます。

### セキュリティアドバイザリにコラボレータを追加する

コラボレータは、セキュリティアドバイザリへの書き込み権限を持ちます。 詳しい情報については、「[セキュリティアドバイザリの権限レベル](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)」を参照してください。

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} セキュリティアドバイザリでのコラボレータの削除の詳細については、「[セキュリティアドバイザリからコラボレータを削除する](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、コラボレータとして追加するセキュリティアドバイザリをクリックします。
5. ページの右側にある、[Collaborators] の下で、セキュリティアドバイザリとして追加するユーザまたは Team の名前を入力します。 ![ユーザまたは Team 名を入力するフィールド](/assets/images/help/security/add-collaborator-field.png)
6. [**Add**] をクリックします。 ![[Add] ボタン](/assets/images/help/security/security-advisory-add-collaborator-button.png)

### 参考リンク

- 「[セキュリティアドバイザリの権限レベル](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)」
- 「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」
- 「[セキュリティアドバイザリからコラボレータを削除する](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)」
