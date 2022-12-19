---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184046"
---
Ao habilitar a lista de permissões, os endereços IP que você configurou são imediatamente adicionados às listas de permissões de organizações na sua empresa. Se você desabilitar a lista de autorização, os endereços serão removidos da lista de permissões da organização. 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Para obter mais informações, confira "[Gerenciar endereços IP permitidos para sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

Você pode escolher adicionar automaticamente à sua lista de permissões qualquer endereço IP configurado para {% data variables.product.prodname_github_apps %} instalado na sua empresa. O criador de um {% data variables.product.prodname_github_app %} pode configurar uma lista de permissões para o seu aplicativo, especificando os endereços IP em que o aplicativo é executado. Ao herdar a lista de permissões deles para a sua lista, você evita as solicitações de conexão do aplicativo que está sendo recusado. Para obter mais informações, confira "[Permitir acesso por Aplicativos do GitHub](#allowing-access-by-github-apps)".
