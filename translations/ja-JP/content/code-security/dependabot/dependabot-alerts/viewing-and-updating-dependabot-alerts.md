---
title: Dependabot アラートの表示と更新
intro: '{% data variables.product.product_name %} がプロジェクト内の安全ではない依存関係を発見した場合は、詳細をリポジトリの [Dependabot アラート] タブで確認できます。 その後、プロジェクトを更新してこのアラートを解決することができます。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185552'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

リポジトリの [{% data variables.product.prodname_dependabot_alerts %}] タブには、オープンおよびクローズされたすべての {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} および対応する {% data variables.product.prodname_dependabot_security_updates %}{% endif %} が一覧表示されます。 {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}パッケージ、エコシステム、マニフェストごとにアラートをフィルター処理できます。 {% endif %} アラートの一覧を並べ替えたり、特定のアラートをクリックしてその詳細を表示したりすることができます。 {% ifversion dependabot-bulk-alerts %}アラートを 1 つずつ、または一度に複数のアラートを無視したり、もう一度開いたりすることもできます。{% else %}アラートを無視したり、もう一度開いたりすることもできます。 {% endif %} 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 

{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes %}
## リポジトリ内の脆弱性のある依存関係の更新について

コードベースで既知のセキュリティ リスクのある依存関係が検出されると、{% data variables.product.product_name %} によって {% data variables.product.prodname_dependabot_alerts %} が生成されます。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、{% data variables.product.product_name %} がデフォルトのブランチで脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} はそれを修正するためのプルリクエストを作成します。 プルリクエストは、脆弱性を回避するために必要最低限の安全なバージョンに依存関係をアップグレードします。

各 {% data variables.product.prodname_dependabot %} アラートには一意の数値識別子があり、[{% data variables.product.prodname_dependabot_alerts %}] タブには、検出された各脆弱性に対するアラートが一覧表示されます。 従来の {% data variables.product.prodname_dependabot_alerts %}では、依存関係ごとに脆弱性がグループ化され、依存関係ごとに 1 つのアラートが生成されていました。 従来の {% data variables.product.prodname_dependabot %} アラートに移動すると、そのパッケージに対してフィルター処理された [{% data variables.product.prodname_dependabot_alerts %}] タブにリダイレクトされます。 {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}ユーザー インターフェイスで使用できるさまざまなフィルターと並べ替えオプションを使って、{% data variables.product.prodname_dependabot_alerts %} をフィルター処理して並べ替えることができます。 詳しい情報については、以下の「[{% data variables.product.prodname_dependabot_alerts %}の優先順位付け](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)」を参照してください。

## {% data variables.product.prodname_dependabot_alerts %}の優先順位付け

{% data variables.product.company_short %} は、{% data variables.product.prodname_dependabot_alerts %}の修正の優先順位を付けるのに役立ちます。 {% ifversion dependabot-most-important-sort-option %} 既定では、{% data variables.product.prodname_dependabot_alerts %}は重要度で並べ替えられています。 "最重要" 並べ替え順序は、最初に注目する {% data variables.product.prodname_dependabot_alerts %}の優先順位を付けるのに役立ちます。 アラートは、潜在的な影響、実用性、関連性に基づいてランク付けされます。 Github の優先順位付けの計算は常に改善されており、CVSS スコア、依存関係スコープ、アラートに対して脆弱な関数呼び出しが見つかるかどうかなどの要因が含まれています。

!["最も重要" の並べ替えが表示されている [並べ替え] ドロップダウンのスクリーンショット。](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

検索バーで使用できるフィルターに加えて、アラート一覧の上部にあるドロップダウン メニューを使用して、{% data variables.product.prodname_dependabot_alerts %}を並べ替えたりフィルター処理したりできます。 検索バーでは、アラートと関連するセキュリティ アドバイザリのフルテキスト検索も可能です。 セキュリティ アドバイザリの名前または説明の一部を検索して、そのセキュリティ アドバイザリに関連するリポジトリのアラートを返すことができます。 たとえば、`yaml.load() API could execute arbitrary code` の検索では、アドバイザリの説明に検索文字列が表示されるので、"[PyYAML によって安全でない方法で YAML 文字列が逆シリアル化され、任意のコード実行につながります](https://github.com/advisories/GHSA-rprw-h62v-c2w7)" にリンクされた {% data variables.product.prodname_dependabot_alerts %}が返されます。

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![[{% data variables.product.prodname_dependabot_alerts %}] タブのフィルターと並べ替えメニューのスクリーンショット。](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} 一覧の上部にあるドロップダウン メニューでフィルターを選び、適用するフィルターをクリックできます。
   ![[{% data variables.product.prodname_dependabot_alerts %}] タブのフィルターと並べ替えメニューのスクリーンショット](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## 依存関係スコープでサポートされるエコシステムとマニフェスト

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

開発時の依存関係として一覧表示されるパッケージに対するアラートは、{% data variables.product.prodname_dependabot_alerts %} ページに `Development` ラベルでマークされて表示され、`scope` フィルターでフィルター処理することもできます。

![アラートの一覧の "Development" ラベルを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-development-label.png)

開発スコープ パッケージに対するアラートのアラート詳細ページには、`Development` ラベルを含む [タグ] セクションが表示されます。

![アラート詳細ページの [タグ] セクションを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## 脆弱性のある関数の呼び出しの検出について

{% data reusables.dependabot.vulnerable-calls-beta %}

{% data variables.product.prodname_dependabot %} により、リポジトリで脆弱性のある依存関係を使用していることが示される場合は、脆弱性のある関数が何であるかを判断し、それらを使用しているかどうかを確認する必要があります。 この情報を取得したら、セキュリティで保護されたバージョンの依存関係へのアップグレードをどの程度早急に行う必要があるかを判断できます。 

サポートされている言語では、{% data variables.product.prodname_dependabot %} により、脆弱性のある関数を使用しているかどうかが自動的に検出され、影響を受けるアラートに "脆弱性のある呼び出し" というラベルが追加されます。 {% data variables.product.prodname_dependabot_alerts %} ビューでこの情報を使用して、修復作業をより効果的にトリアージし、優先順位を付けることができます。

{% note %}

**メモ:** ベータ リリース中、この機能は、2022 年 4 月 14 日 *より後* に作成された新しい Python アドバイザリと、履歴 Python アドバイザリのサブセットでのみ使用できます。 {% data variables.product.prodname_dotcom %} では、追加の履歴 Python アドバイザリ間でデータをバックフィルする作業を行っています。このアドバイザリは、ローリング ベースで追加されます。 脆弱性のある呼び出しは、{% data variables.product.prodname_dependabot_alerts %} ページでのみ強調表示されます。

{% endnote %}

!["脆弱性のある呼び出し" ラベルを持つアラートを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

検索フィールドで `has:vulnerable-calls` フィルターを使用して、{% data variables.product.prodname_dependabot %} で脆弱性のある関数の呼び出しが少なくとも 1 回検出されたアラートのみを表示するように、ビューをフィルター処理できます。

脆弱性のある呼び出しが検出されたアラートについて、アラートの詳細ページに追加情報が表示されます。

- 関数が使用される場所を示す 1 つ以上のコード ブロック。
- 関数自体を一覧表示する注釈。関数が呼び出される行へのリンクを含みます。

!["脆弱性のある呼び出し" ラベルを持つアラートの詳細ページを示すスクリーンショット](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

詳しい情報については、以下の「[アラートの確認と修正](#reviewing-and-fixing-alerts)」を参照してください。

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} の表示

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 必要に応じて、アラートをフィルター処理するには、ドロップダウン メニューでフィルターを選び、適用するフィルターをクリックします。 検索バーにフィルターを入力することもできます。 アラートのフィルター処理と並べ替えについて詳しくは、「[{% data variables.product.prodname_dependabot_alerts %}の優先順位付け](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)」を参照してください。
{%- ifversion dependabot-bulk-alerts %} ![[{% data variables.product.prodname_dependabot_alerts %}] タブの [フィルター] および [並べ替え] メニューのスクリーンショット。](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![[{% data variables.product.prodname_dependabot_alerts %}] タブの [フィルター] および [並べ替え] メニューのスクリーンショット。](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. 表示するアラートをクリックします。{% ifversion dependabot-bulk-alerts %} ![アラートの一覧で選ばれたアラート](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![アラートの一覧で選ばれたアラート](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。
  ![アラート リストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## アラートの確認と修正

すべての依存関係にセキュリティ上の弱点がないことを確認することが重要です。 {% data variables.product.prodname_dependabot %} によって依存関係で脆弱性 {% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %} が検出された場合、プロジェクトの露出レベルを評価し、アプリケーションをセキュリティで保護するための修復手順を決定する必要があります。

依存関係の修正プログラムが適用されたバージョンを利用できる場合は、{% data variables.product.prodname_dependabot %} pull request を生成して、{% data variables.product.prodname_dependabot %} アラートからこの依存関係を直接更新できます。 {% data variables.product.prodname_dependabot_security_updates %}が有効になっている場合は、Dependabot アラートで Pull Request がリンクされている可能性があります。 

修正プログラムが適用されたバージョンが利用できない場合や、セキュリティで保護されたバージョンに更新できない場合は、{% data variables.product.prodname_dependabot %} によって追加情報が共有され、次の手順を決定できます。 {% data variables.product.prodname_dependabot %} アラートをクリックして表示すると、影響を受ける関数を含め、依存関係に関するセキュリティ アドバイザリの詳細情報を確認できます。 これにより、自分のコードが、影響を受ける関数を呼び出すかどうかを確認できます。 この情報は、リスク レベルをさらに厳密に評価し、回避策を決定したり、セキュリティ アドバイザリによって表されるリスクを受け入れられるかどうかを判断したりするのに役立ちます。

{% ifversion dependabot-alerts-vulnerable-calls %}

サポートされている言語では、{% data variables.product.prodname_dependabot %} によって脆弱性のある関数の呼び出しが検出されます。 "脆弱性のある呼び出し" ラベルを持つアラートを表示すると、詳細情報には関数の名前と、それを呼び出すコードへのリンクが含まれます。 多くの場合、さらに詳細を確認せずに、この情報に基づいて決定を下すことができます。

{% endif %}

### 脆弱性のある依存関係を修正する

1. アラートの詳細を表示します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} の表示](#viewing-dependabot-alerts)」 (上記) を参照してください。
{% ifversion fpt or ghec or ghes %}
1. {% data variables.product.prodname_dependabot_security_updates %}が有効になっている場合は、依存関係を修正する Pull Request へのリンクが存在する可能性があります。 または、アラートの詳細ページの上部にある **[{% data variables.product.prodname_dependabot %} セキュリティ更新プログラムを作成する]** をクリックして Pull Request を作成することもできます。
  ![[Create {% data variables.product.prodname_dependabot %} security update] ボタン](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. {% data variables.product.prodname_dependabot_security_updates %}を使用しない場合は、必要に応じて、ページの情報を使用してアップグレード先の依存関係のバージョンを決定し、セキュリティで保護されたバージョンに依存関係を更新する Pull Request を作成することができます。
{% elsif ghae %}
1. ページの情報を使用してアップグレード先の依存関係のバージョンを決定し、マニフェストへの Pull Request、またはセキュリティで保護されたバージョンへのロック ファイルを作成することができます。
{% endif %}
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。 

{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot %} によって発行される各 pull request には、{% data variables.product.prodname_dependabot %} の制御に使用できるコマンドの情報が含まれています。 詳細については、「[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)」(依存関係の更新に対するプル リクエストの管理) を参照してください。
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}を無視する

{% tip %}

**ヒント:** 無視できるのは、オープン アラートのみです。
{% endtip %}

依存関係をアップグレードするための広範な作業をスケジュールする場合や、アラートを修正する必要がないと判断した場合は、アラートを無視できます。 既に評価済みのアラートを無視すると、新しいアラートが表示されたときに簡単にトリアージできます。

1. アラートの詳細を表示します。 詳細については、「[脆弱性のある依存関係を表示する](#viewing-dependabot-alerts)」(上記) を参照してください。
1. [無視] ドロップダウンを選び、アラートを無視する理由をクリックします。{% ifversion reopen-dependabot-alerts %} 無視された未修正のアラートは、後でもう一度開くことができます。{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. 必要に応じて、無視のコメントを追加します。 無視のコメントはアラート タイムラインに追加され、監査と報告の間に正当な理由として使用できます。 GraphQL API を使用して、コメントを取得または設定できます。 コメントは `dismissComment` フィールドに含まれています。 詳しくは、GraphQL API ドキュメントの「[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)」を参照してください。
![[無視] ドロップダウンでアラートを無視する方法と、無視コメントを追加するオプションを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. **[アラートを無視]** をクリックします。
{% else %} ![[無視] ドロップダウンを使用してアラートを無視する理由を選ぶ](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### 複数のアラートを一度に却下する

1. オープンの {% data variables.product.prodname_dependabot_alerts %} を表示します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} の表示](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)」を参照してください。
2. 必要に応じて、ドロップダウン メニューを選び、適用するフィルターをクリックして、アラートの一覧をフィルター処理します。 検索バーにフィルターを入力することもできます。
3. 各アラートのタイトルの左側で、無視するアラートを選びます。
   ![チェックボックスが強調表示されているオープン アラートのスクリーンショット](/assets/images/help/graphs/select-multiple-alerts.png)
4. 必要に応じて、アラートの一覧の上部で、ページ上のすべてのアラートを選びます。
   ![オープン アラートがすべて選ばれているスクリーンショット](/assets/images/help/graphs/select-all-alerts.png)
5. [アラートを無視する] ドロップダウンを選び、アラートを無視する理由をクリックします。
   ![[アラートを無視する] ドロップダウンが強調表示されているオープン アラートのページのスクリーンショット](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## クローズされたアラートの表示と更新

開いているすべてのアラートを表示し、以前に却下したアラートをもう一度開くことができます。 既に修復済みのクローズされたアラートをもう一度開くことはできません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. クローズされたアラートのみを表示するには、 **[Closed]** をクリックします。

   {%- ifversion dependabot-bulk-alerts %}![[Closed]\(クローズ済み\) オプションを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){%- else %}![[Closed]\(クローズ済み\) オプションを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-closed.png){%- endif %}
1. 表示または更新するアラートをクリックします。

   {%- ifversion dependabot-bulk-alerts %}![強調表示された dependabot アラートを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){%- else %}![強調表示された dependabot アラートを示すスクリーンショット](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){%- endif %}
2. 必要に応じて、却下されたアラートを再度開く場合は、 **[Reopen]** をクリックします。 既に修正されたアラートをもう一度開くことはできません。

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %}![[Reopen]\(もう一度開く\) ボタンを示すスクリーンショット](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### 一度に複数のアラートをもう一度開く

1. クローズされた {% data variables.product.prodname_dependabot_alerts %} を表示します。 詳しい情報については、「[クローズされたアラートの表示と更新](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)」 (上記) を参照してください。
2. 各アラートのタイトルの左側で、もう一度開くアラートを選びます。
   ![チェックボックスが強調表示されている、クローズされたアラートのスクリーンショット](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. 必要に応じて、アラートの一覧の上部で、ページ上のすべてのクローズされたアラートを選びます。
   ![すべてのアラートが選択された、クローズされたアラートのスクリーンショット](/assets/images/help/graphs/select-all-closed-alerts.png)
4. **[再度開く]** をクリックして、アラートをもう一度開きます。 既に修正されたアラートをもう一度開くことはできません。
   ![[再度開く] ボタンが強調表示されている、クローズされたアラートのスクリーンショット](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## {% data variables.product.prodname_dependabot_alerts %} の監査ログの確認

組織{% ifversion not fpt %}またはエンタープライズ{% endif %}のメンバーが {% data variables.product.prodname_dependabot_alerts %} に関連するアクションを実行した場合は、監査ログでそのアクションを確認できます。 ログへのアクセスについて詳しくは、[組織の監査ログの確認](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)に関するページ{% ifversion not fpt %}と「[エンタープライズの監査ログにアクセスする](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)」を参照してください。{% else %}。{% endif %} {% ifversion dependabot-alerts-audit-log %}

![Dependabot アラートを示す監査ログのスクリーンショット](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

{% data variables.product.prodname_dependabot_alerts %} に関する監査ログのイベントには、だれがアクションを実行したか、何のアクションか、いつアクションを実行したか、などの詳細が含まれます。 {% ifversion dependabot-alerts-audit-log %}イベントには、アラート自体へのリンクも含まれます。 組織のメンバーがアラートを無視すると、イベントには無視の理由とコメントが表示されます。{% endif %}{% data variables.product.prodname_dependabot_alerts %} アクションについて詳しくは、「[組織の監査ログの確認](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions)」{% ifversion not fpt %}と「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)」{% else %}{% endif %}の `repository_vulnerability_alert` カテゴリを参照してください。
