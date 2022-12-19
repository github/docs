---
title: プライベート フォークからのワークフロー実行を承認する
intro: 書き込みアクセス許可を持たない誰かが pull request をプライベート リポジトリに送信したとき、メンテナがワークフローの実行を承認する必要がある場合があります。
permissions: Maintainers with write access to a repository can approve workflow runs.
versions:
  feature: actions-private-fork-workflow-approvals
shortTitle: Approve private fork runs
ms.openlocfilehash: 79b486123b62ee590e833e5c39bb7333a38c49d2
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163832'
---
## プライベート フォークからのワークフロー実行について

{% data reusables.actions.private-repository-forks-overview %} 詳しくは、「[プライベート リポジトリでのフォーク pull request のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories)」を参照してください。

## プライベート フォークからの pull request でワークフロー実行を承認する

{% data reusables.actions.workflows.approve-workflow-runs %}
