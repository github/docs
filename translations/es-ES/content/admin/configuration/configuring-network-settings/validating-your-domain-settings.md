---
title: Validar tus parámetros de dominio
intro: 'Asegúrate de que tus parámetros de dominio estén configurados adecuadamente antes de arrancar {% data variables.product.product_location %} por primera vez.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
  - /admin/configuration/validating-your-domain-settings
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Validate domain settings
ms.openlocfilehash: 113f7b3d3f335e73627cebf90a91cbf326c40c99
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120745'
---
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Para probar los parámetros DNS y SSL del dispositivo, haga clic en **Test domain settings** (Probar parámetros de dominio).
  ![Botón para probar la configuración del dominio](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}
