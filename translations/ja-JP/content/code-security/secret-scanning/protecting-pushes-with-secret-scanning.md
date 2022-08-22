---
title: Secret scanningでのプッシュの保護
intro: '{% data variables.product.prodname_secret_scanning %}を使い、プッシュ保護を有効化することによって、サポートされているシークレットがOrganizationもしくはリポジトリにプッシュされるのを避けることができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: プッシュ保護の有効化
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## シークレットのプッシュ保護について

これまでのところ、{% data variables.product.prodname_secret_scanning_GHAS %}はプッシュの_後に_シークレットをチェックし、公開されたシークレットについてユーザにアラートします。 {% data reusables.secret-scanning.push-protection-overview %}

コントリビューターがシークレットに対するプッシュ保護のブロックをバイパスした場合、{% data variables.product.prodname_dotcom %}は:
- アラートを生成します。
- リポジトリの "Security"タブにアラートを生成します。
- Audit logにバイパスイベントを追加します。{% ifversion secret-scanning-push-protection-email %}
- Organizationのオーナー、セキュリティ管理者、リポジトリ管理者に、関連するシークレットへのリンクと、プッシュが許可された理由を付けてメールアラートを送信します。{% endif %}

プッシュ保護でサポートされているシークレットとサービスプロバイダに関する情報については「[{% data variables.product.prodname_secret_scanning_caps %}パターン](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)」を参照してください。

## プッシュ保護としての{% data variables.product.prodname_secret_scanning %}の有効化

{% data variables.product.prodname_secret_scanning %}をプッシュ保護として使うには、Organizationもしくはリポジトリで{% data variables.product.prodname_GH_advanced_security %}と{% data variables.product.prodname_secret_scanning %}がどちらも有効化されていなければなりません。 詳しい情報については「[Organizationのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」、「[リポジトリのセキュリティ及び分析設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」、「[{% data variables.product.prodname_GH_advanced_security %}について](/get-started/learning-about-github/about-github-advanced-security)」を参照してください。

組織の所有者、セキュリティマネージャー、およびリポジトリ管理者は、UI と API を介して {% data variables.product.prodname_secret_scanning %} のプッシュ保護を有効にできます。 詳しい情報については「[リポジトリ](/rest/reference/repos#update-a-repository)」を参照し、REST APIドキュメンテーションの「`security_and_analysis`のプロパティ」セクションを展開してください。

### Organizationでのプッシュ保護としての{% data variables.product.prodname_secret_scanning %}の有効化

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### リポジトリでのプッシュ保護としての{% data variables.product.prodname_secret_scanning %}の有効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## プッシュ保護としてのSecret scanningのコマンドラインからの利用

{% data reusables.secret-scanning.push-protection-command-line-choice %}

コマンドラインでは、一度に最大で5つの検出されたシークレットが表示されます。 特定のシークレットが既にリポジトリ中で検出されており、アラートが既に存在するなら、{% data variables.product.prodname_dotcom %}はそのシークレットをブロックしません。

![ユーザがシークレットをリポジトリにプッシュしようとしたときにプッシュがブロックされたことを示しているスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% data reusables.secret-scanning.push-protection-remove-secret %} ブロックされたシークレットの修復に関する詳しい情報については「[プッシュ保護によってブロックされたブランチのプッシュ](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)」を参照してください。

シークレットが本物であることが確認され、後で修復しようと考えているなら、できるかぎり早くそのシークレットを修復すべきです。 たとえば、そのシークレットを取り消して、リポジトリのコミット履歴から削除することになるでしょう。 露出してしまった実際のシークレットは、不正アクセスを避けるために取り消さなければなりません。 取り消す前にシークレットをまずローテートすることを検討すべきかもしれません。 詳しい情報については「[センシティブなデータをリポジトリから削除する](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)」を参照してください。

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### ブロックされたシークレットのプッシュの許可

プッシュしても安全だと信じられるシークレットを{% data variables.product.prodname_dotcom %}がブロックした場合、そのシークレットを許可し、許可されるべき理由を指定できます。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. プッシュがブロックされたときに{% data variables.product.prodname_dotcom %}が返したURLにアクセスしてください。 ![シークレットのプッシュのブロック解除の選択肢を持つフォームが表示されているスクリーンショット](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. **Allow me to push this secret（このシークレットのプッシュを許可）**をクリックしてください。
2. 3時間以内のコマンドラインからプッシュを再試行してください。 3時間以内にプッシュをしなかった場合には、このプロセスを繰り返す必要があります。

{% ifversion secret-scanning-push-protection-web-ui %}
## Web UIからのプッシュ保護としてのSecret scanningの利用

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Web UIでは、{% data variables.product.prodname_dotcom %}は検出されたシークレットを一度に1つだけしか表示しません。 特定のシークレットが既にリポジトリ中で検出されており、アラートが既に存在するなら、{% data variables.product.prodname_dotcom %}はそのシークレットをブロックしません。

Web UIを使って、シークレットをファイルから削除できます。 シークレットを削除すると、ページ上部のバナーは変化し、変更をコミットできるようになったことを知らせてくれます。

  ![シークレットの修正後にコミットが許可されたことをWeb Uiで表示しているスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### シークレットに対するプッシュ保護のバイパス

{% data reusables.secret-scanning.push-protection-remove-secret %} ブロックされたシークレットの修復に関する詳しい情報については「[プッシュ保護によってブロックされたブランチのプッシュ](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)」を参照してください。

シークレットが本物であることが確認され、後で修復しようと考えているなら、できるかぎり早くそのシークレットを修復すべきです。 詳しい情報については「[センシティブなデータをリポジトリから削除する](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)」を参照してください。

プッシュしても安全だと信じられるシークレットを{% data variables.product.prodname_dotcom %}がブロックした場合、そのシークレットを許可し、許可されるべき理由を指定できます。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

シークレットが本物であることが確認され、後で修復しようと考えているなら、できるかぎり早くそのシークレットを修復すべきです。

1. {% data variables.product.prodname_dotcom %}がコミットをブロックした際にページの上部に表示されるバナー内で、**Bypass protection（保護のバイパス）**をクリックしてください。
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![シークレットのプッシュのブロック解除の選択肢を持つフォームが表示されているスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. **Allow secret（シークレットの許可）**をクリックしてください。

{% endif %}
