---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145117813"
---
{% data variables.product.prodname_actions %}に対するメールあるいはWeb通知を有効化すると、あなたが起動したワークフローの実行が完了すると通知されます。 この通知には、ワークフローの実行のステータス（成功、失敗、ニュートラル、キャンセルされた実行が含まれます）が含まれます。 ワークフローの実行が失敗したときにだけ通知を受けるようにすることもできます。 通知を有効または無効にする方法の詳細については、「[通知について](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。

スケジュールされたワークフローに関する通知は、最初にワークフローを作成したユーザに送信されます。 ワークフロー ファイルの cron 構文を他のユーザーが更新した場合、それ以降の通知はそのユーザーに送られるようになります。{% ifversion fpt or ghes or ghec %}スケジュールされたワークフローが無効化され、その後に有効化されると、通知は最後に cron 構文を変更したユーザーではなく、ワークフローを再有効化したユーザーに送られるようになります。{% endif %}

また、リポジトリの [アクション] タブでワークフロー実行の状態を確認することもできます。詳細については、「[ワークフロー実行を管理する](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)」を参照してください。
