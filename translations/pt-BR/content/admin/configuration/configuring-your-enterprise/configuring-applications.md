---
title: Configurando aplicativos
intro: 'É possível definir as configurações de aplicativos internos para o {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: bcc51bdabb5dc0b5ecdd4f77db9246a60c8df496
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095980'
---
## Ajustar cache de imagem

Você pode escolher por quanto tempo a {% data variables.product.product_location %} armazena avatares em cache. Ao aumentar o tempo do cache, você aumenta o tempo que o avatar do usuário levará para carregar. Configurar o tempo de cache com um valor muito baixo pode sobrecarregar os processos de trabalho da {% data variables.product.product_location %}. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. Na barra lateral esquerda, clique em **Aplicativos**.
![Guia Applications (Aplicativos) na barra lateral Settings (Configurações)](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Em "Avatar image cache time (seconds)" (Tempo de cache para imagem do avatar [segundos]), digite por quantos segundos você gostaria que a {% data variables.product.product_location %} armazenasse as imagens do avatar em cache.
![Campo de formulário de cache de imagem de avatar](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
