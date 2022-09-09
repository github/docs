---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067274"
---
だれでも、[GitHub アカウント設定ページ](https://github.com/settings/apps/authorizations)から GitHub アプリの承認を取り消すことができます。 GitHub Appの認可を取り消しても、そのGitHub Appはアンインストールされません。 GitHub Appは、このwebhookを受信したら、トークンを取り返した人の代わりにAPIを呼ぶことを止めるようにプログラムしなければなりません。 取り消されたアクセス トークンを使い続けると、GitHub App は `401 Bad Credentials` エラーを受け取ることになります。
