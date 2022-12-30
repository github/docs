---
ms.openlocfilehash: 9c9f3713944a20dcdac639249d10c0ab8a4f7baf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114542"
---
* {% data variables.product.prodname_actions %}のためのハードウェア要件をレビューしてください。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。
* {% data variables.product.product_location %}のドメインに合わせてTLSを設定しなければなりません。 詳細については、「[TLS の構成](/admin/configuration/configuring-tls)」を参照してください。

  {% note %}
  
  **注:** {% data reusables.actions.enterprise-self-signed-cert %}

  {% endnote %}
* {% data reusables.actions.enterprise-http-proxy %}
