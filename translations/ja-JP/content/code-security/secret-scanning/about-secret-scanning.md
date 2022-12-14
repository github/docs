---
title: シークレット スキャンについて
intro: '{% data variables.product.product_name %} はリポジトリをスキャンして既知のシークレットのタイプを探し、誤ってコミットされたシークレットの不正使用を防止します。'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192946'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## {% data variables.product.prodname_secret_scanning %}について

プロジェクトを外部サービスと通信させる場合、認証にトークンまたは秘密鍵を使用できます。 トークンや秘密鍵は、サービスプロバイダが発行できるシークレットです。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 シークレットは、プロジェクトのリポジトリの外の、安全な専用の場所に保存することをお勧めします。

{% data variables.product.prodname_secret_scanning_caps %}では、シークレットの {% data variables.product.prodname_dotcom %} リポジトリ{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} (リポジトリがアーカイブされている場合も含む) {% endif %}に存在するすべてのブランチ上の Git 履歴全体がスキャンされます。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %}は、{% data variables.product.prodname_dotcom_the_website %} で次の 2 つの形式で使用できます。

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}。** すべてのパブリック リポジトリで自動的に実行されます。 シークレット スキャン パートナーによって指定されたパターンと一致するすべての文字列が、関連するパートナーに直接報告されます。

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}。** {% ifversion fpt %}{% data variables.product.prodname_GH_advanced_security %} のライセンスで {% data variables.product.prodname_ghe_cloud %} を使っている Organization は、Organization が所有するリポジトリの追加スキャンを有効にして構成できます。{% elsif ghec %}{% data variables.product.prodname_ghe_cloud %} を使用し、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Organization が所有するリポジトリに対し、追加のスキャンを有効にして構成できます。{% endif %}secret scanning パートナーや他のサービス プロバイダーによって提供されるパターン、または Organization で定義したパターンと一致する文字列は、リポジトリの [セキュリティ] タブでアラートとして報告されます。 パブリック リポジトリ内の文字列がパートナーのパターンと一致する場合は、パートナーにも報告されます。{% endif %}{% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security)をご覧ください。{% endif %}

サービス プロバイダーは {% data variables.product.company_short %} と提携して、スキャンのためのシークレット フォーマットを指定することができます。 {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

また、リポジトリまたは組織のプッシュ保護として{% data variables.product.prodname_secret_scanning %}を有効にすることもできます。 この機能を有効にすると、{% data variables.product.prodname_secret_scanning %}では、共同作成者が検出済みのシークレットを含むコードをプッシュできなくなります。 続行するには、共同作成者がプッシュからシークレットを削除するか、必要に応じて保護をバイパスします。 {% ifversion push-protection-custom-link-orgs %}また、管理者は、push がブロックされると共同作成者に表示されるカスタム リンクを指定することもできます。このリンクには、共同作成者を支援するための Organization 固有のリソースが含まれています。 {% endif %}詳しくは、「[{% data variables.product.prodname_secret_scanning %} を使って push を保護する](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_secret_scanning_partner %}について

リポジトリをパブリックにするか、パブリック リポジトリに変更をプッシュすると、{% data variables.product.product_name %} では常にコードがスキャンされて、パートナー パターンと一致するシークレットがないか確認されます。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% data variables.product.prodname_secret_scanning %} によって潜在的シークレットが検出された場合、シークレットを発行したサービス プロバイダーに通知します。 サービス プロバイダーは文字列を検証してから、シークレットを取り消すか、新しいシークレットを発行するか、または直接連絡するかを決定します。 その対応は、ユーザーまたはプロバイダーに関連するリスクによって決まります。 詳細については、「[Supported secrets for partner patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)」(パートナー パターンでサポートされるシークレット) を参照してください。

パブリック リポジトリの{% data variables.product.prodname_secret_scanning %}の構成を変更することはできません。

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## {% data variables.product.prodname_secret_scanning_GHAS %}について
{% elsif ghes or ghae %}
## {% data variables.product.product_name %} の {% data variables.product.prodname_secret_scanning %} について
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %}は、{% data variables.product.prodname_GH_advanced_security %} の一環として、組織が所有するすべてのリポジトリで使用できます。 ユーザ所有のリポジトリでは使用できません。 リポジトリに対して{% data variables.product.prodname_secret_scanning %}を有効にすると、{% data variables.product.prodname_dotcom %} ではコードがスキャンされて、多くのサービス プロバイダーによって使用されるシークレットと一致するパターンがないか確認されます。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_secret_scanning %} が有効になっている {% data variables.product.prodname_GH_advanced_security %} リポジトリ内の既存のコンテンツの完全な Git 履歴スキャンも定期的に実行され、{% data variables.product.prodname_secret_scanning %} アラート通知設定に従ってアラート通知が送信されます。 {% endif %}詳細については、{% ifversion ghec %}「[高度なセキュリティに対してサポートされているシークレット](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)」{% else %}「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」{% endif %} を参照してください。

{% ifversion secret-scanning-issue-body-comments %} {% note %}

**注:** Issue の説明とコメントの {% data variables.product.prodname_secret_scanning_caps %} はパブリック ベータ版であり、変更される可能性があります。

{% endnote %} {% endif %}

リポジトリ管理者は、任意のリポジトリ{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} (アーカイブされたリポジトリを含む) {% endif %}に対して{% data variables.product.prodname_secret_scanning_GHAS %}を有効にすることができます。 組織の所有者は、すべてのリポジトリまたは組織内のすべての新しいリポジトリに対して{% data variables.product.prodname_secret_scanning_GHAS %}を有効にすることもできます。 詳細については、「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」および「[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」(組織のセキュリティと分析設定を管理する) を参照してください。

{% ifversion ghes or ghae or ghec %}リポジトリ、Organization、または Enterprise のカスタム {% data variables.product.prodname_secret_scanning %} パターンを定義することもできます。 詳細については、「[{% data variables.product.prodname_secret_scanning %}のカスタム パターンの定義](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)」を参照してください。
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} は、転送中と保存時の両方で対称暗号化を使用して検出されたシークレットを格納します。{% endif %}{% ifversion ghes > 3.7 %} 検出されたシークレットの格納に使用される暗号化キーをローテーションするには、{% data variables.contact.contact_ent_support %} に問い合わせてください。{% endif %}

### {% data variables.product.prodname_secret_scanning %} アラートについて

リポジトリの {% data variables.product.prodname_secret_scanning %}を有効にする、または {% data variables.product.prodname_secret_scanning %}が有効になっているリポジトリにコミットをプッシュすると、{% data variables.product.prodname_dotcom %} によってそれらのコミットの内容がスキャンされて、サービス プロバイダーで定義されているパターン{% ifversion ghes or ghae or ghec %}、および Enterprise、Organization、またはリポジトリで定義されているカスタム パターン{% endif %}と一致するシークレットが確認されます。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_secret_scanning %}が有効になっているリポジトリ内のすべての履歴コンテンツのスキャンも定期的に実行されます。{% endif%}

{% data variables.product.prodname_secret_scanning %}でシークレットが検出されると、{% data variables.product.prodname_dotcom %} によってアラートが送信されます。

- {% data variables.product.prodname_dotcom %} は、リポジトリ管理者と Organizationのオーナーにメールアラートを送信します。 あなたがリポジトリを監視しており、セキュリティ アラートまたはリポジトリ上のすべてのアクティビティの通知を有効にしている場合、アラートが通知されます。
{% ifversion ghes or ghae or ghec %}
- シークレットをコミットしたコントリビューターがリポジトリを無視していない場合も、{% data variables.product.prodname_dotcom %} によってコントリビューターにメール アラートが送信されます。 メールには、関連する {% data variables.product.prodname_secret_scanning %} アラートへのリンクが含まれています。 コミット作者は、リポジトリでこのアラートを表示して、アラートを解決できます。
{% endif %}
- {% data variables.product.prodname_dotcom %} のリポジトリの [セキュリティ] タブに、アラートが表示されます。

{% ifversion ghes or ghae or ghec %}{% data variables.product.prodname_secret_scanning %} アラートの表示と解決の詳細については、「[{% data variables.product.prodname_secret_scanning %}からアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。{% endif %}

リポジトリ管理者と Organization のオーナーは、ユーザおよび Team に {% data variables.product.prodname_secret_scanning %} アラートへのアクセスを許可できます。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。

{% ifversion ghec or ghes or ghae > 3.4 %} セキュリティの概要を使用して、{% data variables.product.prodname_secret_scanning %} が有効になっているリポジトリと検出されたアラートの組織レベルのビューを表示できます。 詳細については、「[Viewing the security overview](/code-security/security-overview/viewing-the-security-overview)」(セキュリティの概要の表示) を参照してください。
{% endif %}

{%- ifversion ghec or ghes or ghae %}また、REST API を使って、{% ifversion ghec %}プライベート {% endif %}リポジトリ{% ifversion ghes %}または Organization {% endif %}全体で{% data variables.product.prodname_secret_scanning %}からの結果を監視できます。 API エンドポイントの詳細については、「[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)」を参照してください。{% endif %}

{% endif %}

## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」
- 「[アカウントとデータを安全に保つ](/github/authenticating-to-github/keeping-your-account-and-data-secure)」{%- ifversion fpt or ghec %}
- 「[コードスペースの暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」{% endif %} {%- ifversion fpt or ghec or ghes %}
- 「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」{% endif %}
- 「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」
