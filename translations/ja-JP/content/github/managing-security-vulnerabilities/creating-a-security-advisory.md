---
title: セキュリティアドバイザリを作成する
intro: セキュリティアドバイザリのドラフトを作成して、オープンソースプロジェクトのセキュリティ脆弱性について非公開で議論して修正することができます。
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

リポジトリに対する管理者権限があるユーザなら誰でも、セキュリティアドバイザリを作成できます。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### セキュリティアドバイザリを作成する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [**New draft security advisory**] をクリックします。 ![[Open draft advisory] ボタン](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. セキュリティアドバイザリのタイトルを入力します。 ![Title フィールド](/assets/images/help/security/security-advisory-title.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Click **Create security advisory**. ![Create security advisory button](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### 次のステップ

- セキュリティアドバイザリのドラフトにコメントして、チームと脆弱性について話し合います。
- セキュリティアドバイザリにコラボレータを追加します。 詳しい情報については、「[セキュリティアドバイザリにコラボレータを追加する](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory)」を参照してください。
- 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。 詳細は「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照してください。
- セキュリティアドバイザリへの貢献に対してクレジットを受け取る必要がある個人を追加します。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)」を参照してください。
- コミュニティにセキュリティの脆弱性を知らせるため、セキュリティアドバイザリを公開します。 詳しい情報については、「[セキュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory)」を参照してください。
