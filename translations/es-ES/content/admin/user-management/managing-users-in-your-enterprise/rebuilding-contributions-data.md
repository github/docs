---
title: Reconstruir datos de contribuciones
intro: Es posible que necesites reconstruir los datos de contribuciones para vincular las confirmaciones de cambios a una cuenta de usuario.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116218'
---
Siempre que se sube una confirmación de cambios a {% data variables.product.prodname_enterprise %}, se vincula a una cuenta de usuario, si ambas están asociadas con la misma dirección de correo electrónico. Pero las confirmaciones existentes *no* se vinculan de forma retroactiva cuando un usuario registra una dirección de correo electrónico nueva o crea una cuenta.

1. Visita la página de perfil de usuario.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En el lado izquierdo de la página, haga clic en **Administrador**. ![Pestaña Administrador](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. En **Datos de contribuciones**, haga clic en **Recompilar**.
![Botón Recompilar](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} ahora comenzará jobs en segundo plano para volver a enlazar las confirmaciones con esa cuenta de usuario.
  ![Trabajos de recompilación en cola](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
