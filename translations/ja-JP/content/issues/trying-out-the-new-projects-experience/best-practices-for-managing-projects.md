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
---

{% data reusables.projects.projects-beta %}

プロジェクトを使って、IssueやPull Requestがある{% data variables.product.company_short %}上での作業を管理できます。 プロジェクトを効率的かつ効果的に管理するためのヒントを読んでください。 プロジェクトに関する詳しい情報については「[プロジェクトについて](/issues/trying-out-the-new-projects-experience/about-projects)」を参照してください。

## 大きなIssueを小さなIssueに分割する

大きなIssueを小さなIssueに分割すると、作業が管理しやすくなり、Teamのメンバーが並列に作業できるようになります。 そうすることでPull Requestも小さくなり、レビューしやすくなります。

小さなIssueが大きなゴールに収まる様子を追跡するには、タスクリスト、マイルストーン、ラベルを使ってください。 詳しい情報については「[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」、「[ラベルの管理](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。

## コミュニケーション

IssueとPull Requestには、コラボレータと容易にコミュニケーションが取れるようにする組み込みの機能があります。 @メンションを使って、個人やTeam全体に対しコメントに関するアラートを発してください。 責任を伝えるために、Issueにコラボレータをアサインしてください。 関連性を伝えるために、関連するIssueやPull Requestにリンクしてください。

## ビューの利用

プロジェクトビューを使って、プロジェクトを様々な角度から見てください。

例:

- 開始していないすべてのアイテムを見るためにステータスでフィルタ
- Group by a custom priority field to monitor the volume of high priority items
- 最短の出荷ターゲット日でアイテムを見るために、カスタムの日付フィールドでソート

詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

## 信頼できる唯一の情報源を持つ

情報がずれてしまわないようにするために、信頼できる唯一の情報源を管理してください。 たとえば、ターゲットの出荷日は複数のフィールドに分散させず、一カ所で追跡してください。 そうすれば、ターゲットの出荷日が変更された場合、一カ所で日付を更新するだけでよくなります。

{% data variables.product.company_short %}のプロジェクトは、アサインされた人、マイルストーン、ラベルといった{% data variables.product.company_short %}のデータと、自動的に最新の状態に同期します。 これらのフィールドのいずれかがIssueあるいはPull Requestで変更されると、その変更は自動的にプロジェクトにも反映されます。

## 自動化の利用

You can automate tasks to spend less time on busy work and more time on the project itself. 手動でやることを覚えておく必要が減れば、それだけプロジェクトは耐震の状態に保たれるようになります。

Projects (beta) offers built-in workflows. For example, when an issue is closed, you can automatically set the status to "Done."

Additionally, {% data variables.product.prodname_actions %} and the GraphQL API enable you to automate routine project management tasks. For example, to keep track of pull requests awaiting review, you can create a workflow that adds a pull request to a project and sets the status to "needs review"; this process can be automatically triggered when a pull request is marked as "ready for review."

- ワークフローの例については「[プロジェクトの自動化](/issues/trying-out-the-new-projects-experience/automating-projects)」を参照してください。
- APIに関する詳しい情報については「[プロジェクトを管理するためのAPIの利用](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)」を参照してください。
- {% data variables.product.prodname_actions %}に関する詳しい情報については「[{% data variables.product.prodname_actions %}](/actions)」を参照してください。

## Use different field types

Take advantage of the various field types to meet your needs.

Use an iteration field to schedule work or create a timeline. You can group by iteration to see if items are balanced between iterations, or you can filter to focus on a single iteration. Iteration fields also let you view work that you completed in past iterations, which can help with velocity planning and reflecting on your team's accomplishments.

Use a single select field to track information about a task based on a preset list of values. For example, track priority or project phase. Since the values are selected from a preset list, you can easily group or filter to focus on items with a specific value.

For more information about the different field types, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)."
