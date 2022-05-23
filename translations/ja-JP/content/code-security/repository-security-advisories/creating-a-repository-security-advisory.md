---
title: リポジトリセキュリティアドバイザリの作成
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
shortTitle: リポジトリアドバイザリの作成
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
- セキュリティアドバイザリにコラボレータを追加します。 詳細は「[リポジトリセキュリティアドバイザリにコラボレータを追加する](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください。
- 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。 詳細は「[一時的なプライベートフォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください。
- セキュリティアドバイザリへの貢献に対してクレジットを受け取る必要がある個人を追加します。 詳しい情報については、「[リポジトリのセキュリティアドバイザリの編集](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)」を参照してください。
- コミュニティにセキュリティの脆弱性を知らせるため、セキュリティアドバイザリを公開します。 詳しい情報については、「[リポジトリのセキュリティアドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください。
