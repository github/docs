---
title: パブリックフォークで実行されるワークフローの実行を承認する
intro: 外部の共同作成者が pull request をパブリック リポジトリに送信するとき、書き込みアクセスを持つメンテナはワークフローの実行を承認する必要がある場合があります。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: b995362f67d97a3e2ee6d1029cbe24227867f58a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088452'
---
## パブリック フォークからのワークフロー実行について

{% data reusables.actions.workflow-run-approve-public-fork %}

[リポジトリ](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)、[Organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks)、または [Enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise) のワークフロー承認要件を構成できます。

30 日を超えて承認を待っているワークフローの実行は自動的に削除されます。

## パブリック フォークからの pull request でワークフロー実行を承認する

リポジトリへの書き込みアクセスを持つ保守担当者は、次の手順を使用して、承認を必要とする共同作成者からの pull request でワークフローをレビューして実行できます。

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. プルリクエストで提案された変更を調べて、プルリクエストブランチでワークフローを快適に実行できることを確認します。 ワークフロー ファイルに影響を与える `.github/workflows/` ディレクトリで提案された変更には特に注意する必要があります。
1. pull request ブランチでワークフローを実行することに慣れている場合は、{% octicon "comment-discussion" aria-label="The discussion icon" %} **[会話]** タブに戻り、[承認を待っているワークフロー] で **[承認して実行]** をクリックします。

   ![ワークフローを承認して実行する](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
