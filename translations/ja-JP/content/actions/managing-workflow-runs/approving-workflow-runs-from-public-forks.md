---
title: パブリックフォークで実行されるワークフローの実行を承認する
intro: 外部の共同作成者が pull request をパブリック リポジトリに送信するとき、書き込みアクセスを持つメンテナはワークフローの実行を承認する必要がある場合があります。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164124'
---
## パブリック フォークからのワークフロー実行について

{% data reusables.actions.workflow-run-approve-public-fork %}

[リポジトリ](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)、[Organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks)、または [Enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise) のワークフロー承認要件を構成できます。

30 日を超えて承認を待っているワークフローの実行は自動的に削除されます。

## パブリック フォークからの pull request でワークフロー実行を承認する

{% data reusables.actions.workflows.approve-workflow-runs %}
