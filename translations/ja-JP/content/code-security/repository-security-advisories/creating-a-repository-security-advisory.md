---
title: Creating a repository security advisory
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
---

リポジトリに対する管理者権限があるユーザなら誰でも、セキュリティアドバイザリを作成できます。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## セキュリティアドバイザリを作成する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [**New draft security advisory**] をクリックします。 ![[Open draft advisory] ボタン](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. セキュリティアドバイザリのタイトルを入力します。
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. [**Create draft security advisory**] をクリックします。 ![[Create security advisory] ボタン](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## 次のステップ

- セキュリティアドバイザリのドラフトにコメントして、チームと脆弱性について話し合います。
- セキュリティアドバイザリにコラボレータを追加します。 For more information, see "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)."
- 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。 For more information, see "[Collaborating in a temporary private fork to resolve a repository security vulnerability](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)."
- セキュリティアドバイザリへの貢献に対してクレジットを受け取る必要がある個人を追加します。 For more information, see "[Editing a repository security advisory](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)."
- コミュニティにセキュリティの脆弱性を知らせるため、セキュリティアドバイザリを公開します。 For more information, see "[Publishing a repository security advisory](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)."
