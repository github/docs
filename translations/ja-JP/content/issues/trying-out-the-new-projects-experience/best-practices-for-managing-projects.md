---
title: プロジェクト（ベータ）の管理のベストプラクティス
intro: '{% data variables.product.company_short %}でプロジェクトを管理するためのヒントを学びましょう。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Projects
- Issues
- Project management
ms.openlocfilehash: 70c50bf58f99575759b91fb520fa3275127d9a49
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130972"
---
{% data reusables.projects.projects-beta %}

プロジェクトを使って、IssueやPull Requestがある{% data variables.product.company_short %}上での作業を管理できます。 プロジェクトを効率的かつ効果的に管理するためのヒントを読んでください。 プロジェクトについて詳しくは、「[プロジェクトについて](/issues/trying-out-the-new-projects-experience/about-projects)」を参照してください。

## <a name="break-down-large-issues-into-smaller-issues"></a>大きなIssueを小さなIssueに分割する

大きなIssueを小さなIssueに分割すると、作業が管理しやすくなり、Teamのメンバーが並列に作業できるようになります。 そうすることでPull Requestも小さくなり、レビューしやすくなります。

小さなIssueが大きなゴールに収まる様子を追跡するには、タスクリスト、マイルストーン、ラベルを使ってください。 詳しくは、「[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」、「[ラベルの管理](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。

## <a name="communicate"></a>コミュニケーション

IssueとPull Requestには、コラボレータと容易にコミュニケーションが取れるようにする組み込みの機能があります。 @mentions を使い、個人や Team 全体に対してコメントに関するアラートを発します。 責任を伝えるために、Issueにコラボレータをアサインしてください。 関連性を伝えるために、関連するIssueやPull Requestにリンクしてください。

## <a name="make-use-of-the-description-and-readme"></a>説明とREADMEの利用

プロジェクトの説明とREADMEを使って、プロジェクトに関する情報を共有してください。

たとえば次のような点です。

- プロジェクトの目的の説明。
- プロジェクトのビューとその利用方法の説明。
- 関連するリンクや、詳細情報のための連絡先を含める。

プロジェクトのREADMEはMarkdownをサポートしており、画像や、リンク、リスト、ヘッダといった高度なフォーマットを使用できます。 

詳細については、「[プロジェクト (ベータ) の作成](/issues/trying-out-the-new-projects-experience/creating-a-project#updating-your-project-description-and-readme)」を参照してください。

## <a name="use-views"></a>ビューの利用

プロジェクトビューを使って、プロジェクトを様々な角度から見てください。

たとえば次のような点です。

- 開始していないすべてのアイテムを見るためにステータスでフィルタ
- カスタムの優先度フィールドでグループ化して、高優先度のアイテムの量をモニター
- 最短の出荷ターゲット日でアイテムを見るために、カスタムの日付フィールドでソート

詳細については、「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

## <a name="have-a-single-source-of-truth"></a>信頼できる唯一の情報源を持つ

情報がずれてしまわないようにするために、信頼できる唯一の情報源を管理してください。 たとえば、ターゲットの出荷日は複数のフィールドに分散させず、一カ所で追跡してください。 そうすれば、ターゲットの出荷日が変更された場合、一カ所で日付を更新するだけでよくなります。

{% data variables.product.company_short %}のプロジェクトは、アサインされた人、マイルストーン、ラベルといった{% data variables.product.company_short %}のデータと、自動的に最新の状態に同期します。 これらのフィールドのいずれかがIssueあるいはPull Requestで変更されると、その変更は自動的にプロジェクトにも反映されます。

## <a name="use-automation"></a>自動化の利用

意味の無い作業に費やす時間を減らし、プロジェクト自体にかける時間を増やすために、タスクを自動化できます。 手動でやることを覚えておく必要が減れば、それだけプロジェクトは最新の状態に保たれるようになります。

プロジェクト（ベータ）は、組み込みのワークフローを提供します。 たとえば、Issueがクローズされると自動的にステータスを「Done」に設定できます。

加えて、{% data variables.product.prodname_actions %}とGraphQL APIでルーチンのプロジェクト管理タスクを自動化できます。 たとえば、レビュー待ちのPull Requestを追跡するために、Pull Requestをプロジェクトに追加し、そのステータスを"needs review"に設定するようなワークフローを作成できます。このプロセスは、Pull Requestが"ready for review"としてマークされたときに自動的にトリガーできます。

- ワークフローの例については、「[プロジェクトの自動化](/issues/trying-out-the-new-projects-experience/automating-projects)」を参照してください。
- API について詳しくは、「[API を使用してプロジェクトを管理する](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)」を参照してください。
- {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %}](/actions)」を参照してください。

## <a name="use-different-field-types"></a>様々なフィールドタイプの利用

様々なフィールドタイプを活用して、要求を満たしてください。

繰り返しフィールドを使って、作業をスケジュールしたり、タイムラインを作成したりしてください。 繰り返しをグループ化して、アイテムが繰り返し間でバランスしているかを見たり、あるいは繰り返しの1つに焦点を当てるためにフィルタリングできます。 繰り返しフィールドを使えば、過去の繰り返しで完了した作業を見ることもでき、それを速度の計画とチームの成果への反映に役立てられます。 繰り返しフィールドは、あなたとあなたのチームが繰り返しから離れる時間を取っている時を示す休憩もサポートします。 詳細については、「[プロジェクトでの繰り返し管理」](/issues/trying-out-the-new-projects-experience/managing-iterations)を参照してください。

単一の選択フィールドを利用して、事前設定された値のリストに基づき、タスクに関する情報を追跡してください。 たとえば、優先度やプロジェクトのフェーズを追跡してください。 値は事前設定されたリストから選択されるので、グループ化や特定の値のアイテムに集中するためのフィルタリングが容易です。

さまざまなフィールドの種類について詳しくは、「[プロジェクトの作成 (ベータ版)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)」を参照してください。
