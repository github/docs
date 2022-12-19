---
title: GitHub Copilot の課金について
intro: '{% data variables.product.prodname_copilot %} を使用する場合は、個人アカウントで {% data variables.product.prodname_copilot_for_individuals %} のサブスクリプションが必要です。または、{% data variables.product.prodname_copilot_for_business %} のサブスクリプションを持つ {% data variables.product.prodname_ghe_cloud %} の Organization によってシートが割り当てられている必要があります。'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193436'
---
## {% data variables.product.prodname_copilot %} の課金について

{% data variables.product.prodname_copilot %} を使用する場合は、{% data variables.product.prodname_dotcom %} の個人アカウントのサブスクリプションが必要です。または、{% data variables.product.prodname_copilot_business_short %} のサブスクリプションを持つ {% data variables.product.prodname_ghe_cloud %} Organization のメンバーである場合は、組織管理者によってシートが割り当てられている必要があります。{% data variables.product.prodname_copilot %} について詳しくは、「[{% data variables.product.prodname_copilot %} について](/en/copilot/overview-of-github-copilot/about-github-copilot)」を参照してください。 

{% data variables.product.prodname_ghe_cloud %} を使用した {% data variables.product.prodname_copilot %} の管理について詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Enterprise で {% data variables.product.prodname_copilot %} のポリシーを適用する](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}.{% endif %}」{% ifversion fpt %}を参照してください。{% endif %}

個人アカウントで有料サブスクリプションを開始する前に、{% data variables.product.prodname_copilot %} を評価するための 60 日間の 1 回限りの試用版を設定できます。 試用版を開始するには、月単位または年単位の請求期間を選び、支払い方法を指定する必要があります。 60 日以内に試用版をキャンセルしない場合、試用版は自動的に有料サブスクリプションに変換されます。 {% data variables.product.prodname_copilot %} 試用版は、60 日間いつでもキャンセルすることができます。料金は発生しません。 試用期間が終了する前にキャンセルした場合、60 日間の試用期間が終了するまで、{% data variables.product.prodname_copilot %} に引き続きアクセスできます。 詳しくは、「[{% data variables.product.prodname_copilot_for_individuals %} のサブスクリプションを管理する](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription)」を参照してください。

## {% data variables.product.prodname_copilot_for_individuals %} の価格


{% data variables.product.prodname_copilot %} サブスクリプションは、月単位または年単位のサイクルで利用できます。 月単位の請求期間を選ぶと、1 か月あたり 10 ドルが課金されます。 年単位の請求期間を選ぶと、1 年あたり 100 ドルが課金されます。 請求期間はいつでも変更でき、変更は次の請求期間の開始時から反映されます。

アクティブな {% data variables.product.prodname_copilot %} のサブスクリプションがあり、{% data variables.product.prodname_ghe_cloud %} の {% data variables.product.prodname_copilot_for_business %} サブスクリプションの一部としてシートが割り当てられている場合、個人の {% data variables.product.prodname_copilot %} サブスクリプションは自動的に取り消されます。 個人サブスクリプションの現在の請求期間の残りの部分に対しては、日割り計算での返金があります。 その後、Enterprise または Organization レベルで設定されたポリシーに従って、{% data variables.product.prodname_copilot %} を引き続き使用できます。

{% data variables.product.prodname_copilot %} の無料サブスクリプションは、検証済みの学生、教師、および {% data variables.product.company_short %} の一般的なオープンソース リポジトリの保守担当者が利用できます。 オープンソースの保守担当者として条件を満たしている場合、{% data variables.product.prodname_copilot %} サブスクリプション ページにアクセスすると、自動的に通知されます。 学生として、現在 {% data variables.product.prodname_student_pack %} を受け取っている場合は、{% data variables.product.prodname_copilot %} サブスクリプション ページにアクセスすると、無料のサブスクリプションも提供されます。 {% data variables.product.prodname_student_pack %} について詳しくは、「[学生として {% data variables.product.prodname_global_campus %} に応募する](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)」を参照してください。

{% ifversion ghec %}
## {% data variables.product.prodname_copilot_for_business %} の価格

{% data variables.product.prodname_copilot_for_business %} のサブスクリプションは月単位の期間で利用でき、ユーザーあたり 1 か月 $19 が請求されます。 {% data variables.product.prodname_ghe_cloud %} の {% data variables.product.prodname_copilot %} の請求は、各請求期間の終了時に処理されます。 

請求対象ユーザーは、請求期間の開始時に割り当てられた、または請求期間中に割り当てられた {% data variables.product.prodname_copilot %} シートの数に基づいて計算されます。 請求期間の途中で割り当てられたシートは、期間の残りの日数に基づいて日割り計算されます。 請求期間中に削除されたシートの割り当ては、次の期間の初めから有効になります。

{% data variables.product.prodname_ghe_cloud %} の {% data variables.product.prodname_copilot %} のシート割り当ては、Enterprise レベルで {% data variables.product.prodname_copilot %} へのアクセスが許可されている Organization の管理者によって管理されます。 同じ Enterprise の複数の Organization のメンバーである場合は、複数の Organization に {% data variables.product.prodname_copilot %} シートを割り当てることができますが、Enterprise の請求は 1 回だけです。 詳しくは、「[Organization で {% data variables.product.prodname_copilot %} の設定を構成する](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)」を参照してください。

{% data variables.product.prodname_ghe_cloud %} の {% data variables.product.prodname_copilot %} のポリシー設定と使用状況の概要は、Enterprise レベルで確認できます。 詳しくは、「[Enterprise で {% data variables.product.prodname_copilot %} のポリシーを適用する](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)」および「[{% data variables.product.prodname_copilot %} の使用状況を表示する](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)」を参照してください。

{% endif %}
