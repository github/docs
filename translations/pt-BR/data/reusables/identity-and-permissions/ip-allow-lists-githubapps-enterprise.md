---
ms.openlocfilehash: 130c705dad9367dbecb144ac281e8e58fa6d6cb7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880369"
---
Se você estiver usando uma lista de permissões, você também pode optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que estão instalados na sua empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para obter mais informações sobre como criar uma lista de permissões para um {% data variables.product.prodname_github_app %} criado por você, confira "[Como gerenciar os endereços IP permitidos para um Aplicativo do GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar a adição automática de endereço IP para {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Lista de IPs permitidos", selecione **Habilitar configuração da lista de IPs permitidos para Aplicativos do GitHub instalados**.
  ![Caixa de seleção usada para permitir endereços IP do Aplicativo do GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Clique em **Save** (Salvar).
