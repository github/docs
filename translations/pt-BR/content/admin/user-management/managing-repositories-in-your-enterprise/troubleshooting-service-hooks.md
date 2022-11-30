---
title: Solução de problemas com hooks de serviço
intro: 'Se as cargas não estiverem sendo entregues, verifique se há problemas comuns.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094868'
---
## Obter informações nas entregas

Você pode encontrar informações sobre a resposta mais recente de todas as entregas de hooks de serviço em qualquer repositório.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Ganchos** na barra lateral de navegação.
  ![Barra lateral de Ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Entrega mais recente** no gancho de serviço com problemas.
  ![Detalhes do hook](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Em **Chamadas Remotas**, você verá os cabeçalhos que foram usados durante o POST para o servidor remoto, com a resposta que o servidor remoto enviou de novo à sua instalação.

## Exibir a carga

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Ganchos** na barra lateral de navegação.
  ![Barra lateral de Ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Entrega mais recente** no gancho de serviço com problemas.
5. Clique em **Entrega**.
  ![Como ver a carga](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Exibir entregas anteriores

As entregas ficam armazenadas por 15 dias.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Ganchos** na barra lateral de navegação.
  ![Barra lateral de Ganchos](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Entrega mais recente** no gancho de serviço com problemas.
5. Para ver outras entregas nesse gancho específico, clique em **Mais para esta ID de Gancho**: ![Como ver mais entregas](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
