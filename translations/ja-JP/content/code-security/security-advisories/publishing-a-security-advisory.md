---
title: セキュリティアドバイザリを公開する
intro: プロジェクト内のセキュリティ脆弱性についてコミュニティにアラートするため、セキュリティアドバイザリを公開できます。
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

セキュリティアドバイザリの管理者権限を持つユーザは、セキュリティアドバイザリを公開できます。

### 必要な環境

セキュリティアドバイザリを公開したり、CVE の ID 番号をリクエストしたりする前に、セキュリティアドバイザリのドラフトを作成し、セキュリティの脆弱性の影響を受けるプロジェクトのバージョンに関する情報を提供する必要があります。 詳しい情報については、「[セキュリティアドバイザリを作成する](/github/managing-security-vulnerabilities/creating-a-security-advisory)」を参照してください。

セキュリティアドバイザリを作成したが、セキュリティの脆弱性が影響を与えるプロジェクトのバージョンに関する詳細をまだ入力していない場合は、セキュリティアドバイザリを編集できます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。

### セキュリティアドバイザリの公開について

セキュリティアドバイザリを公開すると、セキュリティアドバイザリが指定するセキュリティの脆弱性についてコミュニティに通知します。 セキュリティアドバイザリを公開すると、コミュニティがパッケージの依存関係を更新し、セキュリティの脆弱性の影響を調査しやすくなります。

{% data reusables.repositories.security-advisories-republishing %}

セキュリティアドバイザリを公開する前に、一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートできます。 詳細は「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照してください。

{% warning %}

**警告**: 可能な限り、アドバイザリを公開する前に、セキュリティアドバイザリに修正バージョンを追加する必要があります。 そうしない場合、アドバイザリは修正バージョンなしで公開され、{% data variables.product.prodname_dependabot %} は、更新する安全なバージョンを提供することなく、問題についてユーザに警告します。

このような状況では、次のステップを行うことをお勧めします。

- 修正バージョンが利用可能な場合、可能であれば、修正の準備ができたときに問題を開示するのを待ちます。
- 修正バージョンが開発中でまだ利用できない場合は、アドバイザリにその旨を記載し、公開後にアドバイザリを編集します。
- 問題を修正する予定がない場合は、ユーザが修正時期を問い合わせることがないよう、アドバイザリに明示します。 この場合、ユーザが問題を軽減するときに使えるステップを含めると便利です。

{% endwarning %}

パブリックリポジトリからドラフトアドバイザリを公開すると、すべてのユーザが次のことを確認できます。

- アドバイザリデータの現在のバージョン。
- クレジットされたユーザが受け入れたアドバイザリクレジット。

{% note %}

**注釈**: 一般ユーザは、アドバイザリの編集履歴にアクセスすることはできず、公開されたバージョンのみを見ることができます。

{% endnote %}

セキュリティアドバイザリの URL は、セキュリティアドバイザリの公開後も公開前と同じままです。 リポジトリへの読み取りアクセス権を持つユーザは、セキュリティアドバイザリを閲覧することができます。 セキュリティアドバイザリのコラボレータは、管理者権限を持つユーザがコラボレータをセキュリティアドバイザリから削除しない限り、セキュリティアドバイザリでコメントストリーム全体を含む過去の会話を引き続き表示できます。

公開したセキュリティアドバイザリの情報をアップデートまたは修正する必要がある場合は、セキュリティアドバイザリを編集できます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。

### CVE 識別番号をリクエストする

セキュリティアドバイザリの管理者権限を持っているすべてのユーザは、セキュリティアドバイザリの CVE 識別番号をリクエストできます。

{% data reusables.repositories.request-security-advisory-cve-id %} 詳しい情報については、「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、CVE 識別番号をリクエストするセキュリティアドバイザリをクリックします。 ![リスト内のセキュリティアドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. [**Edit**] ドロップダウンメニューを使用して、[**Request CVE**] をクリックします。 ![ドロップダウンの [Request CVE]](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. [**Request CVE**] をクリックします。 ![[Request CVE] ボタン](/assets/images/help/security/security-advisory-request-cve-button.png)

### セキュリティアドバイザリを公開する

セキュリティアドバイザリを公開すると、セキュリティアドバイザリの一時的なプライベートフォークが削除されます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. [Security Advisories] のリストから、公開するセキュリティアドバイザリをクリックします。 ![リスト内のセキュリティアドバイザリ](/assets/images/help/security/security-advisory-in-list.png)
5. ページの下部で、[**Publish advisory**] をクリックします。 ![[Publish advisory] ボタン](/assets/images/help/security/publish-advisory-button.png)

### 公開されたセキュリティアドバイザリの {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}

### 参考リンク

- 「[セキュリティアドバイザリを撤回する](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)」
