---
title: Gerenciando endereços IP permitidos para um aplicativo GitHub
intro: 'Você pode adicionar uma lista de permissões IP ao seu {% data variables.product.prodname_github_app %} para evitar que seu aplicativo seja bloqueado pela própria lista de permissões da organização.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
ms.openlocfilehash: 2206f42dbf5ead57cd12d7c3c52c71def5b9f54f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145095112'
---
## <a name="about-ip-address-allow-lists-for--data-variablesproductprodname_github_apps-"></a>Sobre listas de endereços IP permitidos para {% data variables.product.prodname_github_apps %}

Os proprietários da empresa e da organização podem restringir o acesso aos ativos configurando uma lista de endereços IP permitidos. Esta lista especifica os endereços IP autorizados a se conectar. Para obter mais informações, confira "[Como impor políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

Quando uma organização tem uma lista de autorizações, aplicativos de terceiros que se conectam por meio de {% data variables.product.prodname_github_app %}, terá acesso negado, a menos que ambos os pontos a seguir sejam verdadeiros:

* O criador do {% data variables.product.prodname_github_app %} configurou uma lista de permissões para o aplicativo que especifica os endereços IP em que o aplicativo é executado. Veja abaixo detalhes de como fazer isso.
* O proprietário da organização escolheu permitir que os endereços na lista de permitidos do {% data variables.product.prodname_github_app %} sejam adicionados à sua própria lista de permissões. Para obter mais informações, confira "[Como gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## <a name="adding-an-ip-address-allow-list-to-a--data-variablesproductprodname_github_app-"></a>Adicionando uma lista de endereços IP permitidos para {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
1. Role para baixo até a seção "Lista de permissão de IP".
![Seção Informações básicas do Aplicativo do GitHub](/assets/images/github-apps/github-apps-allow-list-empty.png) {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} A descrição serve para sua referência e não é usada na lista de permissões de organizações em que o {% data variables.product.prodname_github_app %} está instalado. Em vez disso, a organização permite que as listas incluam "Gerenciado pelo Nome do aplicativo Github" como descrição.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
