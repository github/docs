---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109121"
---
Web UI を使用して、プッシュ保護が有効になっているシークレット スキャンを使用して、サポートされているシークレットをリポジトリまたは organization にコミットすると、{% data variables.product.prodname_dotcom %} によってプッシュがブロックされます。 

ページ上部にシークレットの場所の情報を示すバナーが表示され、シークレットもファイルで下線が引かれるので、簡単に見つけることができます。

{% ifversion push-protection-custom-link-orgs %}

  ![シークレット スキャンのプッシュ保護のためにブロックされた Web UI でのコミットを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![シークレット スキャンのプッシュ保護のためにブロックされた Web UI でのコミットを示すスクリーンショット](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
