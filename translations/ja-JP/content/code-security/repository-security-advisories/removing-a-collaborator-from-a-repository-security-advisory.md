---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
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
shortTitle: コラボレータの削除
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリからコラボレータを削除できます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリからコラボレータを削除する

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、コラボレータを削除するセキュリティアドバイザリをクリックします。 ![リスト内のセキュリティアドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. ページの右側にある、[Collaborators] の下で、セキュリティアドバイザリから削除するユーザまたは Team の名前を探します。 ![セキュリティアドバイザリのコラボレータ](/assets/images/help/security/security-advisory-collaborator.png)
6. 削除するコラボレーターの横にある [**X**] アイコンをクリックします。 ![セキュリティアドバイザリからコラボレータを削除する [X] アイコン](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## 参考リンク

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
