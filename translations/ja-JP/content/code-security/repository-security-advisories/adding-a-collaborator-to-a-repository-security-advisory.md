---
title: Adding a collaborator to a repository security advisory
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
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリにコラボレータを追加できます。

{% data reusables.security-advisory.repository-level-advisory-note %}

## セキュリティアドバイザリにコラボレータを追加する

コラボレータは、セキュリティアドバイザリへの書き込み権限を持ちます。 For more information, see "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)."

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} For more information about removing a collaborator on a security advisory, see "[Removing a collaborator from a repository security advisory](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、コラボレータとして追加するセキュリティアドバイザリをクリックします。
5. ページの右側にある、[Collaborators] の下で、セキュリティアドバイザリとして追加するユーザまたは Team の名前を入力します。 ![ユーザまたは Team 名を入力するフィールド](/assets/images/help/security/add-collaborator-field.png)
6. [**Add**] をクリックします。 ![[Add] ボタン](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## 参考リンク

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Collaborating in a temporary private fork to resolve a repository security vulnerability](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Removing a collaborator from a repository security advisory](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."
