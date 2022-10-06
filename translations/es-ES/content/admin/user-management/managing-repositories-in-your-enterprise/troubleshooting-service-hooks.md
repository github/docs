---
title: Solución de problemas con ganchos de servicio
intro: 'Si las cargar no se están entregando, comprueba estos problemas comunes.'
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
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145116281'
---
## Obtener información sobre las entregas

Puedes buscar información para la última respuesta de todas las entregas de ganchos de servicio en cualquier repositorio.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haga clic en el vínculo **Enlaces** de la barra lateral de navegación.
  ![Barra lateral Enlaces](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haga clic en el vínculo **Entrega más reciente** en el enlace de servicio que tiene problemas.
  ![Detalles del enlace](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. En **Llamadas remotas**, verá los encabezados que se han usado al realizar la publicación en el servidor remoto junto con la respuesta que el servidor remoto ha devuelto a la instalación.

## Ver la carga

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haga clic en el vínculo **Enlaces** de la barra lateral de navegación.
  ![Barra lateral Enlaces](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haga clic en el vínculo **Entrega más reciente** en el enlace de servicio que tiene problemas.
5. Haga clic en **Entrega**.
  ![Visualización de la carga](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Ver entregas anteriores

Las entregas se almacenan durante 15 días.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Explorar en el repositorio que estás investigando.
3. Haga clic en el vínculo **Enlaces** de la barra lateral de navegación.
  ![Barra lateral Enlaces](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Haga clic en el vínculo **Entrega más reciente** en el enlace de servicio que tiene problemas.
5. Para ver otras entregas a ese enlace específico, haga clic en **Más para este id. de enlace**: ![Ver más entregas](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
