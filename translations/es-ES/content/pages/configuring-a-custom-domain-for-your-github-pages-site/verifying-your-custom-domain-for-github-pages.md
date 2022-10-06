---
title: Verificar tu dominio personalizado para GitHub Pages
intro: Puedes incrementar la seguridad de tu dominio personalizado y evitar los ataques de adquisición si verificas tu dominio.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529675'
---
## Acerca de la verificación de dominios para GitHub pages

Cuando verificas tu dominio personalizado para tu cuenta personal u organización, solo podrán utilizarse los repositorios que le pertenezcan a estos para publicar un sitio de {% data variables.product.prodname_pages %} en el dominio personalizado verificado o en los subdominios inmediatos de los dominios.

El verificar tu dominio impide que otros usuarios de GitHub lo reclamen y lo utilicen para publicar su propio sitio de {% data variables.product.prodname_pages %}. Puede haber robo de dominio cuando borras tu repositorio, cuando bajas de categoría tu plan de facturación o después de cualquier otro cambio que desenlace al dominio personalizado o inhabilite a {% data variables.product.prodname_pages %} mientras el dominio sigue configurado para {% data variables.product.prodname_pages %} y no esté verificado.

Cuando verificas un dominio, cualquier subdominio inmediato también se incluye en dicha verificación. Por ejemplo, si se comprueba el dominio personalizado `github.com`, `docs.github.com`, `support.github.com` y cualquier otro subdominio inmediato también se protegerá de las adquisiciones.

{% data reusables.pages.wildcard-dns-warning %}

También se puede verificar un dominio para tu organización{% ifversion ghec %} o empresa{% endif %}, el cual muestre una insignia de "Verificado" en el perfil de la misma{% ifversion ghec %}{% endif %}{% ifversion ghec %} y, que en {% data variables.product.prodname_ghe_cloud %}, te permita restringir las notificaciones a las direcciones de correo electrónico utilizando el dominio verificado{% endif %}. Para obtener más información, consulte "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}" y "[Comprobación o aprobación de un dominio para la empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}".

## Verificar un dominio para tu sitio de usuario

{% data reusables.user-settings.access_settings %}
1. En la sección "Code, planning, and automation" de la barra lateral, haga clic en **{% octicon "browser" aria-label="The pages icon" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Espera a que cambie tu configuración de DNS, esto podría suceder de inmediato o tomar hasta 24 horas. Puede confirmar el cambio a su configuración de DNS mediante la ejecución del comando `dig` en la línea de comandos. En el comando siguiente, reemplace `USERNAME` por el nombre de usuario y `example.com` por el dominio que está comprobando. Si se actualizó tu configuración de DNS, deberías ver tu registro de TXT nuevo en la salida.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Verificar un dominio para tu sitio de organización

Los propietarios de organización pueden verificar los dominios personalizados para su organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Code, planning, and automation" de la barra lateral, haga clic en **{% octicon "browser" aria-label="The browser icon" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Espera a que cambie tu configuración de DNS, esto podría suceder de inmediato o tomar hasta 24 horas. Puede confirmar el cambio a su configuración de DNS mediante la ejecución del comando `dig` en la línea de comandos. En el comando siguiente, reemplace `ORGANIZATION` por el nombre de la organización y `example.com` por el dominio que está comprobando. Si se actualizó tu configuración de DNS, deberías ver tu registro de TXT nuevo en la salida.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
