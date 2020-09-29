---
title: セキュリティアドバイザリを公開する
intro: プロジェクト内のセキュリティ脆弱性についてコミュニティにアラートするため、セキュリティアドバイザリを公開できます。
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリを公開できます。

### 必要な環境

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. 詳しい情報については、「[セキュリティアドバイザリを作成する](/github/managing-security-vulnerabilities/creating-a-security-advisory)」を参照してください。

セキュリティアドバイザリを作成したが、セキュリティの脆弱性が影響を与えるプロジェクトのバージョンに関する詳細をまだ入力していない場合は、セキュリティアドバイザリを編集できます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。

### セキュリティアドバイザリの公開について

When you publish a security advisory, you notify your community about the security vulnerability that the security advisory addresses. Publishing a security advisory makes it easier for your community to update package dependencies and research the impact of the security vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

Before you publish a security advisory, you can privately collaborate to fix the vulnerability in a temporary private fork. 詳細は「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照してください。

When you publish a draft advisory from a public repository, everyone is able to see:

- The current version of the advisory data.
- Any advisory credits that the credited users have accepted.

{% note %}

**Note**: The general public will never have access to the edit history of the advisory, and will only see the published version.

{% endnote %}

セキュリティアドバイザリの URL は、セキュリティアドバイザリの公開後も公開前と同じままです。 リポジトリへの読み取りアクセス権を持つユーザは、セキュリティアドバイザリを閲覧することができます。 Collaborators on the security advisory can continue to view past conversations, including the full comment stream, in the security advisory unless someone with admin permissions removes the collaborator from the security advisory.

公開したセキュリティアドバイザリの情報をアップデートまたは修正する必要がある場合は、セキュリティアドバイザリを編集できます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。

### CVE 識別番号をリクエストする

Anyone with admin permissions to a security advisory can request a CVE identification number for the security advisory.

{% data reusables.repositories.request-security-advisory-cve-id %} For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、CVE 識別番号をリクエストするセキュリティアドバイザリをクリックします。 ![リスト内のセキュリティアドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. [**Edit**] ドロップダウンメニューを使用して、[**Request CVE**] をクリックします。 ![ドロップダウンの [Request CVE]](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. [**Request CVE**] をクリックします。 ![[Request CVE] ボタン](/assets/images/help/security/security-advisory-request-cve-button.png)

### セキュリティアドバイザリを公開する

Publishing a security advisory deletes the temporary private fork for the security advisory.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、公開するセキュリティアドバイザリをクリックします。 ![リスト内のセキュリティアドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. ページの下部で、[**Publish advisory**] をクリックします。 ![[Publish advisory] ボタン](/assets/images/help/security/publish-advisory-button.png)

### 公開されたセキュリティアドバイザリの {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}

### 参考リンク

- 「[セキュリティアドバイザリを撤回する](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)」
