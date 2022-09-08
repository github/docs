---
ms.openlocfilehash: 55bc7e2bd09fe50c60377a90473bfc36697d0ca5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068212"
---
{% data reusables.actions.registry-credentials %}

#### 例: コンテナー レジストリの資格情報の定義 

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```
{% endraw %}
