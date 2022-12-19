---
title: シークレット スキャンによるプッシュの保護
intro: '{% data variables.product.prodname_secret_scanning %} を使って、プッシュ保護を有効にすることで、サポートされているシークレットが {% ifversion secret-scanning-enterprise-level %}Enterprise、{% endif %}Organization {% ifversion secret-scanning-enterprise-level %}、{% endif %}またはリポジトリにプッシュされないようにすることができます。'
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
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184497'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## シークレットのプッシュ保護について

これまで、{% data variables.product.prodname_secret_scanning_GHAS %}は、プッシュ "_後_" にシークレットをチェックし、公開されたシークレットに対してユーザーに警告します。 {% data reusables.secret-scanning.push-protection-overview %}

共同作成者がシークレットのプッシュ保護ブロックをバイパスする場合、{% data variables.product.prodname_dotcom %} では次のことが行われます。
- リポジトリの [セキュリティ] タブに、以下の表で説明する状態のアラートを作成する。
- バイパス イベントを監査ログに追加する。{% ifversion secret-scanning-push-protection-email %}
- リポジトリを監視している組織の所有者、セキュリティ マネージャー、リポジトリ管理者に、シークレットへのリンクとそれが許可された理由を含むメール アラートを送信する。{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

プッシュ保護に対応しているシークレットとサービス プロバイダーの詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)」を参照してください。

## プッシュ保護としての {% data variables.product.prodname_secret_scanning %} の有効化

プッシュ保護として {% data variables.product.prodname_secret_scanning %} を使うには、{% ifversion secret-scanning-enterprise-level %}Enterprise、{% endif %}Organization {% ifversion secret-scanning-enterprise-level %}、{% endif %}またはリポジトリで {% data variables.product.prodname_GH_advanced_security %} と {% data variables.product.prodname_secret_scanning %} の両方が有効になっている必要があります。 詳しくは、{% ifversion secret-scanning-enterprise-level %}[Enterprise のセキュリティと分析の設定の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)に関する記事、{% endif %}「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」、および「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」をご覧ください。

組織の所有者、セキュリティ マネージャー、リポジトリ管理者は、UI と API を介して {% data variables.product.prodname_secret_scanning %} のプッシュ保護を有効にすることができます。 詳細については、「[リポジトリ](/rest/reference/repos#update-a-repository)」を参照し、REST API ドキュメントの "`security_and_analysis` オブジェクトのプロパティ" セクションを展開します。

{% ifversion secret-scanning-enterprise-level %}
### Eenterprise のプッシュ保護として {% data variables.product.prodname_secret_scanning %} を有効にする
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[コードのセキュリティと分析]** をクリックします。 {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### 組織のプッシュ保護としての {% data variables.product.prodname_secret_scanning %} の有効化

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### リポジトリのプッシュ保護としての {% data variables.product.prodname_secret_scanning %} の有効化

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## コマンド ラインからのプッシュ保護としてシークレット スキャンを使用する

{% data reusables.secret-scanning.push-protection-command-line-choice %}

検出されたシークレットは、コマンド ラインに一度に最大 5 つ表示されます。 リポジトリで特定のシークレットが既に検出されていて、アラートが既に存在する場合、{% data variables.product.prodname_dotcom %} はそのシークレットをブロックしません。 

{% ifversion push-protection-custom-link-orgs %} 

Organization の管理者は、push がブロックされると表示されるカスタム リンクを指定できます。 このカスタム リンクには、推奨されるシークレット コンテナーの使用についての指示や、ブロックされたシークレットに関連する質問を問い合わせるユーザーなど、Organization 固有のリソースやアドバイスを含めることができます。

![ユーザーがリポジトリにシークレットをプッシュしようとしたときにプッシュがブロックされることを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![ユーザーがリポジトリにシークレットをプッシュしようとしたときにプッシュがブロックされることを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} ブロックされたシークレットの修復について詳しくは、「[プッシュ保護によってブロックされたブランチのプッシュ](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)」を参照してください。

シークレットが本物で、後で修正する予定であることを確認する場合は、できるだけ早くシークレットの修復を目指す必要があります。 たとえば、シークレットを取り消し、リポジトリのコミット履歴からシークレットを削除できます。 不正アクセスを回避するために、公開されている実際のシークレットを取り消す必要があります。 取り消す前に、まずシークレットをローテーションすることを検討できます。 詳細については、「[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)」 (リポジトリからの機密データの削除) を参照してください。

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**ヒント:** {% data variables.product.product_name %} バージョン 3.6 以降では、Web UI およびコマンド ラインからのプッシュ保護として {% data variables.product.prodname_secret_scanning %} を使用できます。

{% endtip %}

{% endif %}

### ブロックされたシークレットのプッシュを許可する

{% data variables.product.prodname_dotcom %} が、プッシュしても安全であると思われるシークレットをブロックする場合は、シークレットを許可し、許可する必要がある理由を指定できます。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. プッシュがブロックされたときに {% data variables.product.prodname_dotcom %} から返される URL にアクセスします。
  ![シークレットのプッシュをブロック解除するためのオプションを含むフォームを示すスクリーンショット](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. **[このシークレットをプッシュできるようにする]** をクリックします。
2. 3 時間以内にコマンド ラインでプッシュを再試行します。 3 時間以内にプッシュしていない場合は、このプロセスを繰り返す必要があります。

{% ifversion secret-scanning-push-protection-web-ui %}
## Web UI からのプッシュ保護としてシークレット スキャンを使用する

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} では、Web UI で検出されたシークレットを一度に 1 つのみ表示します。 リポジトリで特定のシークレットが既に検出されていて、アラートが既に存在する場合、{% data variables.product.prodname_dotcom %} はそのシークレットをブロックしません。

{% ifversion push-protection-custom-link-orgs %} 

Organization の管理者は、push がブロックされると表示されるカスタム リンクを指定できます。 このカスタム リンクには、Organization 固有のリソースとアドバイスを含めることができます。 たとえば、Organization のシークレット コンテナー、質問をエスカレートするチームや個人、シークレットの操作とコミット履歴の書き換えに関して Organization で承認されたポリシーに関する情報を含む README ファイルをカスタム リンクが指すようにすることができます。
{% endif %}

Web UI を使用して、ファイルからシークレットを削除できます。 シークレットを削除すると、ページ上部のバナーが変更され、変更をコミットできるようになったことが通知されます。

  ![シークレットの修正後に許可される Web UI でのコミットを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### シークレットのプッシュ保護をバイパスする

{% data reusables.secret-scanning.push-protection-remove-secret %} ブロックされたシークレットの修復について詳しくは、「[プッシュ保護によってブロックされたブランチのプッシュ](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)」を参照してください。 

シークレットが本物で、後で修正する予定であることを確認する場合は、できるだけ早くシークレットの修復を目指す必要があります。 詳細については、「[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)」 (リポジトリからの機密データの削除) を参照してください。

{% data variables.product.prodname_dotcom %} が、プッシュしても安全であると思われるシークレットをブロックする場合は、シークレットを許可し、許可する必要がある理由を指定できます。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

シークレットが本物で、後で修正する予定であることを確認する場合は、できるだけ早くシークレットの修復を目指す必要があります。

1. {% data variables.product.prodname_dotcom %} がコミットをブロックしたときにページの上部に表示されるバナーで、 **[保護のバイパス]** をクリックします。
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![シークレットのプッシュをブロック解除するためのオプションを含むフォームを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. **[シークレットの許可]** をクリックします。


{% endif %}
