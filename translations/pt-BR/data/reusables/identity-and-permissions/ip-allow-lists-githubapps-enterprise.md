---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180100"
---
Se você estiver usando uma lista de permissões, você também pode optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que estão instalados na sua empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para obter mais informações sobre como criar uma lista de permissões para um {% data variables.product.prodname_github_app %} criado por você, confira "[Como gerenciar os endereços IP permitidos para um Aplicativo do GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar a adição automática de endereço IP para {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Selecione **Habilitar configuração da lista de permissões de IP para Aplicativos do GitHub instalados**. Se você estiver usando {% data variables.product.prodname_emus %} com o OIDC, primeiro selecione **GitHub** como sua configuração de lista de permissões de IP, depois selecione **Habilitar configuração de lista de permissões de IP para Aplicativos do GitHub instalados**.
  ![Caixa de seleção usada para permitir endereços IP do Aplicativo do GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Clique em **Save** (Salvar).
