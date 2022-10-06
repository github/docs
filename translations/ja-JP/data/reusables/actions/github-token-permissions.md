---
ms.openlocfilehash: dcca3d0170e92663336865f43ddc4e7ac5204702
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060315"
---
ワークフロー内のジョブが開始されるたびに、`GITHUB_TOKEN` シークレットはそのリポジトリのアクセス トークンに設定されます。 ワークフロー ファイルでこのアクセス トークンにアクセス許可を設定して、`contents` スコープに対する読み取りアクセス権と、`packages` スコープに対する書き込みアクセス権を付与する必要があります。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。
