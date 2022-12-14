---
title: タスク リストを使用した issue のコード スキャン アラートの追跡
shortTitle: Track alerts in issues
intro: タスク リストを使用して、コード スキャンのアラートを issue に追加できます。 これにより、アラートの修正を含む開発作業の計画を簡単に作成できます。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116838'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## issue での {% data variables.product.prodname_code_scanning %} アラートの追跡について

{% data reusables.code-scanning.github-issues-integration %}

アラートを追跡する新しい issue を作成することもできます。
- {% data variables.product.prodname_code_scanning %} アラートから、コード スキャン アラートが新しい issue のタスク リストに自動的に追加されます。 詳細については、以下の「[{% data variables.product.prodname_code_scanning %} アラートからの追跡の issue の作成](#creating-a-tracking-issue-from-a-code-scanning-alert)」を参照してください。

- 通常と同様に API を使用し、issue の本文内にコード スキャン リンクを提供します。 追跡対象のリレーションシップを作成するには、タスク リスト構文を使用する必要があります。 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - たとえば、`- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` を issue に追加すると、`octocat-org` 組織内の `octocat-repo` リポジトリの [セキュリティ] タブで ID 番号が 17 のコード スキャン アラートが追跡されます。

複数の issue を使用して、同じ {% data variables.product.prodname_code_scanning %} アラートを追跡できます。issue は、{% data variables.product.prodname_code_scanning %} アラートが見つかったリポジトリとは異なるリポジトリに属している可能性があります。


{% data variables.product.product_name %} では、ユーザー インターフェイスのさまざまな場所で視覚的な手掛かりが提供され、issue の {% data variables.product.prodname_code_scanning %} アラートを追跡するタイミングを示します。

- コード スキャン アラートのリスト ページには、issue のどのアラートが追跡されているかが表示されるため、処理がまだ必要なアラートをひとめで確認できます。

  ![コード スキャンのアラート ページの pill で追跡](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- [追跡対象] セクションは、対応するアラート ページにも表示されます。 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![コード スキャンのアラート ページのセクションで追跡](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![コード スキャンのアラート ページのセクションで追跡](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- 追跡の issue では、{% data variables.product.prodname_dotcom %} には、タスク リストとホバーカードにセキュリティ バッジ アイコンが表示されます。 
  
  {% note %}

  リポジトリへの書き込みアクセス許可を持つユーザーにのみ、issue 内のアラートへの URL とホバーカードが表示されます。 リポジトリに対する読み取りアクセス許可を持つユーザー、またはアクセス許可をまったく持たないユーザーの場合、アラートはプレーン URL として表示されます。

  {% endnote %}
  
  すべてのブランチでアラートの状態が "オープン" または "クローズ" であるため、アイコンの色は灰色になります。 この issue はアラートを追跡するため、アラートは issue で 1 つのオープン/クローズ状態を持つことはできません。 アラートが 1 つのブランチでクローズしている場合、アイコンの色は変更されません。

  ![追跡中のホバーカードの issue](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

issue の対応するタスク リスト アイテムのチェック ボックスの状態 (オン/オフ) を変更しても、追跡対象のアラートの状態は変わりません。

## コード スキャン アラートからの追跡の issue の作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. 必要に応じて、追跡するアラートを見つけるには、フリーテキスト検索またはドロップダウン メニューを使用して、アラートをフィルター処理して検索できます。 詳細については、「[リポジトリの Code Scanning アラートの管理](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)」を参照してください。
{% endif %}
1. ページの上部の右側にある **[issue の作成]** をクリックします。 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![コード スキャン アラートの追跡の issue を作成する](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![コード スキャン アラートの追跡の issue を作成する](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} では、issue が自動的に作成されてアラートが追跡され、アラートがタスク リスト アイテムとして追加されます。
   {% data variables.product.prodname_dotcom %} は、issue を事前に設定します。
   - タイトルには、{% data variables.product.prodname_code_scanning %} アラートの名前が含まれています。
   - 本文には、{% data variables.product.prodname_code_scanning %} アラートへの完全な URL を持つタスク リスト アイテムが含まれています。 
2. 必要に応じて、issue のタイトルと本文を編集します。
   {% warning %}

    **警告:** セキュリティ情報が公開される可能性があるため、issue のタイトルを編集できます。 issue の本文を編集することもできますが、タスク リスト アイテムを編集しないでください。そうしないと、issue がアラートを追跡しなくなります。
   {% endwarning %}

   ![コード スキャン アラートの新しい追跡の issue](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. **[新しい issue の送信]** をクリックします。
