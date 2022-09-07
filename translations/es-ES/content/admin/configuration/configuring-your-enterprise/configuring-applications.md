---
title: Configuración de aplicaciones
intro: 'Puedes establecer configuraciones de aplicación interna para {% data variables.product.product_location %}.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120729'
---
## Ajustar el almacenamiento en caché de las imágenes

Puedes elegir la cantidad de tiempo que {% data variables.product.product_location %} almacena en caché los avatares. Cuando aumentas el tiempo de almacenamiento en caché, aumentas la cantidad de tiempo que tardará en cargar el avatar de un usuario. Configurar el tiempo de almacenamiento en caché con un valor demasiado bajo puede sobrecargar los procesos de trabajo de {% data variables.product.product_location %}. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. En la barra lateral izquierda, haga clic en **Applications** (Aplicaciones).
![Pestaña Aplicaciones de la barra lateral de configuraciones](/assets/images/enterprise/management-console/sidebar-applications.png)
4. En "Tiempo de almacenamiento en caché del avatar (en segundos)", escribe la cantidad de segundos que quieres que {% data variables.product.product_location %} almacene en caché las imágenes de avatar.
![Campo de formulario de almacenamiento en caché de imagen de avatar](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
