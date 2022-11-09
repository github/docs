---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110733"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} は、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、Organization の {% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}、{% data variables.product.prodname_ghe_cloud %}、{% data variables.product.prodname_ghe_server %} 3.0 以降、{% data variables.product.prodname_ghe_managed %} で利用できます。{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} インスタンスのアップグレードについて詳しくは、「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」を参照してください。また、現在のリリース バージョンからのアップグレード パスについては、[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) を参照してください。{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %}は、レガシーのリポジトリごとのプランを使っているアカウントが所有しているプライベートリポジトリでは利用できません。 また、レガシーのリポジトリごとのプランを使っているアカウントは、リポジトリごとに課金される {% data variables.product.prodname_container_registry %} にはアクセスできません。 {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
