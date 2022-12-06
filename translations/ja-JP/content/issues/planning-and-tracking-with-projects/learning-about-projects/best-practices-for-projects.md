---
title: '{% data variables.product.prodname_projects_v2 %} のベスト プラクティス'
intro: プロジェクトを管理するためのヒントについて説明します。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106766'
---
{% data variables.product.prodname_projects_v2 %} を使って、issue や pull request がある {% data variables.product.company_short %} 上での作業を管理できます。 プロジェクトを効率的かつ効果的に管理するためのヒントを読んでください。 {% data variables.product.prodname_projects_v2 %} について詳しくは、「[{% data variables.product.prodname_projects_v2 %} について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」を参照してください。

## 大きなIssueを小さなIssueに分割する

大きなIssueを小さなIssueに分割すると、作業が管理しやすくなり、Teamのメンバーが並列に作業できるようになります。 そうすることでPull Requestも小さくなり、レビューしやすくなります。

小さなIssueが大きなゴールに収まる様子を追跡するには、タスクリスト、マイルストーン、ラベルを使ってください。 詳しくは、「[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」、「[ラベルの管理](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。

## コミュニケーション

IssueとPull Requestには、コラボレータと容易にコミュニケーションが取れるようにする組み込みの機能があります。 @mentions を使い、個人や Team 全体に対してコメントに関するアラートを発します。 責任を伝えるために、Issueにコラボレータをアサインしてください。 関連性を伝えるために、関連するIssueやPull Requestにリンクしてください。

## 説明とREADMEの利用

プロジェクトの説明とREADMEを使って、プロジェクトに関する情報を共有してください。

たとえば次のような点です。

- プロジェクトの目的の説明。
- プロジェクトのビューとその利用方法の説明。
- 関連するリンクや、詳細情報のための連絡先を含める。

プロジェクトのREADMEはMarkdownをサポートしており、画像や、リンク、リスト、ヘッダといった高度なフォーマットを使用できます。 

詳しくは、「[{% data variables.projects.project_v2 %}の作成](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)」を参照してください。

## ビューの利用

プロジェクトビューを使って、プロジェクトを様々な角度から見てください。

たとえば次のような点です。

- 開始していないすべてのアイテムを見るためにステータスでフィルタ
- カスタムの優先度フィールドでグループ化して、高優先度のアイテムの量をモニター
- 最短の出荷ターゲット日でアイテムを見るために、カスタムの日付フィールドでソート

詳しくは、「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。

## 信頼できる唯一の情報源を持つ

情報がずれてしまわないようにするために、信頼できる唯一の情報源を管理してください。 たとえば、ターゲットの出荷日は複数のフィールドに分散させず、一カ所で追跡してください。 そうすれば、ターゲットの出荷日が変更された場合、一カ所で日付を更新するだけでよくなります。

{% data variables.product.prodname_projects_v2 %} は、担当者、マイルストーン、ラベルなどの {% data variables.product.company_short %} データと自動的に最新の状態に同期されます。 これらのフィールドのいずれかがIssueあるいはPull Requestで変更されると、その変更は自動的にプロジェクトにも反映されます。

## 自動化の利用

意味の無い作業に費やす時間を減らし、プロジェクト自体にかける時間を増やすために、タスクを自動化できます。 手動でやることを覚えておく必要が減れば、それだけプロジェクトは最新の状態に保たれるようになります。

{% data variables.product.prodname_projects_v2 %} には組み込みのワークフローが用意されています。 たとえば、Issueがクローズされると自動的にステータスを「Done」に設定できます。 {% ifversion projects-v2-auto-archive %}また、特定の条件を満たすアイテムを自動的にアーカイブするように、組み込みワークフローを構成することもできます。{% endif %}

加えて、{% data variables.product.prodname_actions %}とGraphQL APIでルーチンのプロジェクト管理タスクを自動化できます。 たとえば、レビュー待ちのPull Requestを追跡するために、Pull Requestをプロジェクトに追加し、そのステータスを"needs review"に設定するようなワークフローを作成できます。このプロセスは、Pull Requestが"ready for review"としてマークされたときに自動的にトリガーできます。

- 組み込みワークフローについて詳しくは、「[組み込みの自動化の使用](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)」をご覧ください。{% ifversion projects-v2-auto-archive %}
- アイテムの自動アーカイブについて詳しくは、「[アイテムを自動的にアーカイブする](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)」をご覧ください。{% endif %}
- ワークフローの例については、「[Actions を使った {% data variables.product.prodname_projects_v2 %} の自動化](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)」を参照してください。
- API について詳しくは、「[{% data variables.product.prodname_projects_v2 %} の管理のための API の利用](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)」を参照してください。
- {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %}](/actions)」を参照してください。

## 様々なフィールドタイプの利用

様々なフィールドタイプを活用して、要求を満たしてください。

繰り返しフィールドを使って、作業をスケジュールしたり、タイムラインを作成したりしてください。 繰り返しをグループ化して、アイテムが繰り返し間でバランスしているかを見たり、あるいは繰り返しの1つに焦点を当てるためにフィルタリングできます。 繰り返しフィールドを使えば、過去の繰り返しで完了した作業を見ることもでき、それを速度の計画とチームの成果への反映に役立てられます。 繰り返しフィールドは、あなたとあなたのチームが繰り返しから離れる時間を取っている時を示す休憩もサポートします。 詳しくは、「[繰り返しフィールドについて](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields)」を参照してください。

単一の選択フィールドを利用して、事前設定された値のリストに基づき、タスクに関する情報を追跡してください。 たとえば、優先度やプロジェクトのフェーズを追跡してください。 値は事前設定されたリストから選択されるので、グループ化や特定の値のアイテムに集中するためのフィルタリングが容易です。

さまざまなフィールドの種類について詳しくは、「[フィールドの種類について](/issues/planning-and-tracking-with-projects/understanding-field-types)」を参照してください。
