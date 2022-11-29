---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114797"
---
| アクション | 説明
|------------------|-------------------
| `remove_self_hosted_runner` | セルフホストランナーが削除されたときにトリガーされます。
| `register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳細については、「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。
| `runner_group_created` | セルフホストランナーグループが作成されたときにトリガーされます。 詳細については、「[セルフホストランナーのグループについて](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups)」を参照してください。
| `runner_group_removed` | セルフホストランナーグループが削除されたときにトリガーされます。 詳細については、「[セルフホストランナーグループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
| `runner_group_runner_removed` | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。
| `runner_group_runners_added` | セルフホストランナーがグループに追加されたときにトリガーされます。 詳細については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `runner_group_runners_updated` | ランナーグループのメンバーリストが更新されたときにトリガーされます。 詳細については、「[組織のグループにセルフホストランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
| `runner_group_updated` | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳細については、「[セルフホストランナーグループのアクセスポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `self_hosted_runner_updated` | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `self_hosted_runner_offline` | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。{% endif %}
