---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116974"
---
1. Azure 発行プロファイルを構成し、`AZURE_WEBAPP_PUBLISH_PROFILE` シークレットを作成します。

   公開されたプロフィールを使って、Azureのデプロイ資格情報を生成してください。 詳細については、Azure ドキュメントの「[デプロイ資格情報の生成](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)」を参照してください。

   {% data variables.product.prodname_dotcom %} リポジトリで、発行プロファイルの内容を含む `AZURE_WEBAPP_PUBLISH_PROFILE` という名前のシークレットを作成してください。 シークレットの作成の詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。
