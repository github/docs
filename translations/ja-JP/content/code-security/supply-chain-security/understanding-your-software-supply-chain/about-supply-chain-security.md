---
title: サプライ チェーンのセキュリティについて
intro: '{% data variables.product.product_name %} は、環境内の依存関係の理解から、それらの依存関係の脆弱性の把握{% ifversion fpt or ghec or ghes %}やパッチの適用{% endif %}まで、サプライ チェーンをセキュリティで保護するのに役立ちます。'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7c059876a27969b4664d5c8d94dec357a135c2de
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106502'
---
## GitHub でのサプライ チェーンのセキュリティについて

オープン ソースの使用が急速に進んでおり、ほとんどのプロジェクトは数百ものオープンソース依存関係を利用しています。 これにより、セキュリティ上の問題が浮上します。もしも、使用している依存関係に脆弱性があるとしたら、どうなるでしょうか、 ユーザーをサプライ チェーン攻撃のリスクにさらす可能性があります。 サプライ チェーンを保護するために行うことができる最も重要なことの 1 つは、脆弱な依存関係にパッチを適用{% ifversion GH-advisory-db-supports-malware %}したり、マルウェアを置き換えたり{% endif %}することです。

依存関係をサプライ チェーンに直接追加するときは、マニフェスト ファイルまたはロックファイルで指定します。 依存関係は推移的に含めることもできます。つまり、特定の依存関係を指定しなくても、使用している依存関係が別の依存関係を使用している場合は、その依存関係にも依存することになります。

{% data variables.product.product_name %} には、環境内の依存関係を理解し{% ifversion ghae %}、それらの依存関係の脆弱性を把握{% endif %}{% ifversion fpt or ghec or ghes %}、それらの依存関係の脆弱性を把握してパッチを適用{% endif %}できるように、さまざまな機能が用意されています。 

{% data variables.product.product_name %} のサプライ チェーン機能は次のとおりです。
- **依存関係グラフ**
- **依存関係レビュー**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

依存関係グラフは、サプライ チェーンのセキュリティの中心です。 依存関係グラフによって、リポジトリまたはパッケージについて、すべてのアップストリーム依存関係とパブリック ダウンストリーム依存関係が識別されます。 リポジトリの依存関係とそのプロパティの一部 (脆弱性情報など) を、そのリポジトリの依存関係グラフで確認できます。 

{% data variables.product.prodname_dotcom %} の他のサプライ チェーン機能は、依存関係グラフで提供される情報を利用します。

- 依存関係レビューは、依存関係グラフを使用して依存関係の変更を特定し、ユーザーが pull request を確認するときにそれらの変更がセキュリティに及ぼす影響を理解するのに役立ちます。
- {% data variables.product.prodname_dependabot %} は、依存関係グラフによって提供される依存関係データと {% data variables.product.prodname_advisory_database %} で公開されるアドバイザリの一覧を相互参照し、依存関係をスキャンして、潜在的な脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}が検出されると {% data variables.product.prodname_dependabot_alerts %}を生成します。
{% ifversion fpt or ghec or ghes %}- {% data variables.product.prodname_dependabot_security_updates %}は、依存関係グラフと {% data variables.product.prodname_dependabot_alerts %}を使用して、リポジトリ内の既知の脆弱性を含む依存関係をユーザーが更新できるように役立ちます。

{% data variables.product.prodname_dependabot_version_updates %} では、依存関係グラフは使用されません。代わりに依存関係のセマンティック バージョン管理が利用されます。 {% data variables.product.prodname_dependabot_version_updates %} は、依存関係に脆弱性が含まれない場合でも、依存関係を最新状態に保つために役立ちます。
{% endif %}

{% ifversion fpt or ghec or ghes %} 個人アカウント、コード、ビルド プロセスの保護など、エンド ツー エンドのサプライ チェーンのセキュリティに関するベスト プラクティス ガイドについては、「[エンド ツー エンドのサプライ チェーンのセキュリティ保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」を参照してください。
{% endif %}

## 機能の概要

### 依存関係グラフとは

依存関係グラフを生成するために、{% data variables.product.company_short %} は、マニフェストやロックファイルで宣言されているリポジトリの明示的な依存関係を調べます。 有効にすると、依存関係グラフはリポジトリ内のすべての既知のパッケージ マニフェスト ファイルを自動的に解析し、これを使用して既知の依存関係の名前とバージョンを含むグラフを作成します。

- 依存関係グラフには、"_直接_" 依存関係と "_推移的_" 依存関係の情報が含まれます。 
- 依存関係グラフが自動的に更新されるのは、サポートされるマニフェストまたはロック ファイルを既定ブランチに対して変更または追加するプッシュを {% data variables.product.company_short %} にコミットするとき、およびご使用の依存関係のいずれかのリポジトリに対して任意のユーザーが変更をプッシュするときです。
- 依存関係グラフを表示するには、{% data variables.product.product_name %} 上でリポジトリのメイン ページを開いて **[Insights]\(分析情報\)** タブに移動します。

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

依存関係グラフの詳細については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

### 依存関係レビューとは

依存関係レビューは、レビュー担当者と共同作成者が、すべての pull request における依存関係の変更とそのセキュリティへの影響を理解するのに役立ちます。 

- 依存関係レビューでは、pull request で追加、削除、または更新された依存関係がわかります。 リリース日、依存関係の評判、脆弱性情報を使用して、変更を受け入れるかどうかを判断できます。
- pull request の依存関係レビューは、 **[Files Changed]\(変更されたファイル\)** タブの詳しい差分を表示すると確認できます。

依存関係レビューの詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。

### Dependabot とは

{% data variables.product.prodname_dependabot %} は、依存関係のセキュリティ脆弱性をユーザーに通知しすることで、ご使用の依存関係を最新状態に保ちます{% ifversion fpt or ghec or ghes %}。また、自動的に pull request を開き、依存関係を次に使用可能なセキュア バージョン ({% data variables.product.prodname_dependabot %} アラートがトリガーされたとき) または最新バージョン (リリースが公開されたとき) にアップグレードします{% else %}。こうしてユーザーが依存関係を更新できるようにします{% endif %}。

{% ifversion fpt or ghec or ghes %} "{% data variables.product.prodname_dependabot %}" という用語には、次の機能が含まれます。
- {% data variables.product.prodname_dependabot_alerts %}— リポジトリの **[セキュリティ]** タブとリポジトリの依存関係グラフに表示される通知。 アラートには、プロジェクト内で影響を受けるファイルへのリンクと、修正バージョンに関する情報が含まれています。
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}— アラートがトリガーされたときに、更新プログラムをトリガーし、依存関係をセキュアなバージョンにアップグレードします。
   - {% data variables.product.prodname_dependabot_version_updates %}— 更新プログラムをスケジュールして、ご使用の依存関係を最新バージョンに保ちます。

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}、{% data variables.product.prodname_dependabot_security_updates %}、{% data variables.product.prodname_dependabot_version_updates %} は、{% data variables.product.product_name %} で実行するときに {% data variables.product.prodname_actions %} を使用しません。 ただし、{% data variables.product.prodname_dependabot %} によって開かれた pull request は、アクションを実行するワークフローをトリガーできます。 詳細については、「[{% data variables.product.prodname_actions %} による {% data variables.product.prodname_dependabot %} の自動化](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)」を参照してください。

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %}、{% data variables.product.prodname_dependabot_version_updates %} は、{% data variables.product.product_name %} で実行するために {% data variables.product.prodname_actions %} が必要です。 {% data variables.product.prodname_dependabot_alerts %}では、{% data variables.product.prodname_actions %} は必要ありません。 詳細については、「[企業に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% elsif ghae %}

{% data variables.product.prodname_actions %} では、{% data variables.product.product_name %} で実行するために {% data variables.product.prodname_dependabot_alerts %}は必要ありません。

{% endif %}

#### Dependabot アラートとは

{% data variables.product.prodname_dependabot_alerts %}は、依存関係グラフと {% data variables.product.prodname_advisory_database %} (既知の脆弱性{% ifversion GH-advisory-db-supports-malware %}とマルウェア{% endif %}に関するアドバイザリを含む) に基づいて、新しく検出された脆弱性の影響を受けるリポジトリを強調表示します。 

- {% data variables.product.prodname_dependabot %} は、次の場合に、スキャンを実行して安全ではない依存関係を検出し、{% data variables.product.prodname_dependabot_alerts %}を送信します。{% ifversion fpt or ghec %}
   - {% data variables.product.prodname_advisory_database %} に新しいアドバイザリが追加されたとき。{% else %}
   - 新しいアドバイザリ データが {% data variables.product.prodname_dotcom_the_website %} から 1 時間ごとに {% data variables.location.product_location %} に同期されたとき。 {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - リポジトリの依存関係グラフが変更されたとき。 
- {% data variables.product.prodname_dependabot_alerts %}が、{% ifversion fpt or ghec or ghes %}リポジトリの **[セキュリティ]** タブと{% endif %}リポジトリの依存関係グラフに表示されたとき。 アラートには、{% ifversion fpt or ghec or ghes %}プロジェクト内の影響を受けるファイルへのリンクと、{% endif %}固定バージョンに関する情報が含まれます。

詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% ifversion fpt or ghec or ghes %}
#### Dependabot 更新プログラムとは

2 種類の {% data variables.product.prodname_dependabot_updates %}があります。{% data variables.product.prodname_dependabot %} "_セキュリティ_" 更新プログラムと "_バージョン_" 更新プログラムです。 {% data variables.product.prodname_dependabot %} は、どちらのケースでも依存関係を更新するために自動 pull request を生成しますが、いくつかの違いがあります。

{% data variables.product.prodname_dependabot_security_updates %}:
 - {% data variables.product.prodname_dependabot %} アラートによってトリガーされます。
 - 既知の脆弱性を解決する最小バージョンに依存関係を更新します。
 - 依存関係グラフがサポートするエコシステムでサポートされます。
 - 構成ファイルは必要ありませんが、既定の動作をオーバーライドするために使用できます
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - 構成ファイルが必要です
 - 構成したスケジュールに従って実行します。
 - 構成と一致する最新バージョンに依存関係を更新します。
 - さまざまな一連のエコシステムでサポートされます。

{% data variables.product.prodname_dependabot_updates %}の詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)について」および「[{% data variables.product.prodname_dependabot_version_updates %}について](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)」を参照してください。
{% endif %}

## 使用可能な機能

{% ifversion fpt or ghec %}

パブリック リポジトリ:
- **依存関係グラフ**— 既定で有効になっており、無効にすることはできません。
- **依存関係レビュー**— 既定で有効になっており、無効にすることはできません。
- **{% data variables.product.prodname_dependabot_alerts %}** — 既定で有効になっていません。 {% data variables.product.prodname_dotcom %} は、安全ではない依存関係を検出して依存関係グラフに情報を表示しますが、{% data variables.product.prodname_dependabot_alerts %}は既定では生成されません。 リポジトリの所有者または管理者アクセス権を持つユーザーは、{% data variables.product.prodname_dependabot_alerts %}を有効にすることができます。 
  また、ユーザーは自らのユーザー アカウントまたは組織が所有するすべてのリポジトリでも、Dependabot アラートを有効化または無効化できます。 詳細については、「[ユーザー アカウントのセキュリティと分析の設定の管理](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)」または「[組織のセキュリティと分析の設定の管理](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

プライベート リポジトリ:
- **依存関係グラフ**— 既定では有効になっていません。 この機能は、リポジトリ管理者が有効にすることができます。 詳細については、「[ポジトリの依存関係を調べる](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」を参照してください。
{% ifversion fpt %}
- **依存関係レビュー**— {% data variables.product.prodname_ghe_cloud %} を使用し、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ組織が所有するプライベート リポジトリでも利用できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)を参照してください。
{% elsif ghec %}
- **依存関係レビュー**— ユーザーに {% data variables.product.prodname_GH_advanced_security %} のライセンスがあり、依存関係グラフが有効になっていれば、組織が所有するプライベート リポジトリでも利用できます。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %}について](/get-started/learning-about-github/about-github-advanced-security)」および「[リポジトリの依存関係を調べる](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」を参照してください。 {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}** — 既定で有効になっていません。 プライベートリポジトリの所有者、または管理アクセス権を持つユーザは、リポジトリの依存関係グラフと {% data variables.product.prodname_dependabot_alerts %} を有効にすることで、{% data variables.product.prodname_dependabot_alerts %} を有効化できます。
  また、ユーザーは自らのユーザー アカウントまたは組織が所有するすべてのリポジトリでも、Dependabot アラートを有効化または無効化できます。 詳細については、「[ユーザー アカウントのセキュリティと分析の設定の管理](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)」または「[組織のセキュリティと分析の設定の管理](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

すべての種類のリポジトリ:
- **{% data variables.product.prodname_dependabot_security_updates %}** — 既定で有効になっていません。 {% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 セキュリティ更新プログラムの有効化の詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}の構成](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)」を参照してください。
- **{% data variables.product.prodname_dependabot_version_updates %}** — 既定で有効になっていません。 リポジトリへの書き込みアクセス許可を持つユーザーは、{% data variables.product.prodname_dependabot_version_updates %}を有効にすることができます。 セキュリティ更新プログラムの有効化の詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} の構成](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)」を参照してください。
{% endif %}

{% ifversion ghes or ghae %}
- **依存関係グラフ** および **{% data variables.product.prodname_dependabot_alerts %}** — 既定で有効になっていません。 どちらの機能も、エンタープライズ所有者によってエンタープライズ レベルで構成されます。 詳細については、{% ifversion ghes %}「[エンタープライズの依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」および{% endif %}「[エンタープライズの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
- **依存関係レビュー**— {% data variables.location.product_location %}に対して依存関係グラフが有効になっており、{% data variables.product.prodname_advanced_security %} が組織またはリポジトリで有効になっている場合に使用できます。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」を参照してください。
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}** — 既定で有効になっていません。 {% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 セキュリティ更新プログラムの有効化の詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}の構成](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)」を参照してください。
- **{% data variables.product.prodname_dependabot_version_updates %}** — 既定で有効になっていません。 リポジトリへの書き込みアクセス許可を持つユーザーは、{% data variables.product.prodname_dependabot_version_updates %}を有効にすることができます。 セキュリティ更新プログラムの有効化の詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} の構成](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)」を参照してください。
{% endif %}
