---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145111438"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>{% data variables.product.prodname_ghe_server %} 3.0 以降の最小要件について

{% data variables.product.prodname_ghe_server %} 3.0 以降にアップグレードする前に、インスタンスにプロビジョニングしたハードウェアリソースを確認してください。 {% data variables.product.prodname_ghe_server %} 3.0 は、{% data variables.product.prodname_actions %} や {% data variables.product.prodname_registry %} などの新機能を導入しているため、バージョン 2.22 以前よりも多くのリソースが必要となります。 詳細については、[{% data variables.product.prodname_ghe_server %} 3.0 リリース ノート](/enterprise-server@3.0/admin/release-notes)を参照してください。

次の表では、{% data variables.product.prodname_ghe_server %} 3.0 以降の要件の増加を **太字** で示しています。

| ユーザー ライセンス | vCPU 数 | メモリ | ストレージの接続 | ルート ストレージ |
| :- | -: | -: | -: | -: |
| トライアル、デモ、あるいは10人の軽量ユーザ | **4**<br/>_2 以上_ | **32 GB**<br/>_16 GB 以上_ | **150 GB**<br/>_100 GB 以上_ | 200 GB |
| 10-3000  | **8**<br/>_4 以上_ | **48 GB**<br/>_32 GB 以上_ | **300 GB**<br/>_250 GB 以上_ | 200 GB |
| 3000-5000 | **12**<br/>_8 以上_ | 64 GB | 500 GB | 200 GB |
| 5000-8000 | **16**<br/>_12 以上_ | 96 GB | 750 GB | 200 GB |
| 8000-10000+ | **20**<br/>_16 以上_ | **160 GB**<br/>_128 GB 以上_ | 1000 GB | 200 GB |

{% ifversion ghes %}

{% data variables.product.prodname_actions %} のハードウェア要件の詳細については、「[{% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
