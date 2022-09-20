---
ms.openlocfilehash: 7ebce174e896689b1976b9d43f1f0884ce065229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147683800"
---
Web UI を使用して、プッシュ保護が有効になっているシークレット スキャンを使用して、サポートされているシークレットをリポジトリまたは organization にコミットすると、{% data variables.product.prodname_dotcom %} によってプッシュがブロックされます。 

ページ上部にシークレットの場所の情報を示すバナーが表示され、シークレットもファイルで下線が引かれるので、簡単に見つけることができます。

{% ifversion push-protection-custom-link-orgs %}

  ![シークレット スキャンのプッシュ保護のためにブロックされた Web UI でのコミットを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![シークレット スキャンのプッシュ保護のためにブロックされた Web UI でのコミットを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}