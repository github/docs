---
title: Configurar una prueba del servidor de GitHub Enterprise
intro: 'Puedes probar {% data variables.product.prodname_ghe_server %} de manera gratuita.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163566'
---
## Acerca de las pruebas de {% data variables.product.prodname_ghe_server %}

Puedes solicitar una prueba de 45 días para evaluar {% data variables.product.prodname_ghe_server %}. La prueba se instalará a modo de aparato virtual, con opciones para la implementación en el entorno local o en la nube. Para más información sobre {% data variables.product.prodname_ghe_server %}, y para obtener una lista de plataformas de virtualización admitidas, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)".

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}Las alertas de seguridad {% endif %} y {% data variables.product.prodname_github_connect %} no están disponibles en este momento en las evaluaciones gratuitas de {% data variables.product.prodname_ghe_server %}. Para obtener una demostración de estas características, contacta a {% data variables.contact.contact_enterprise_sales %}. Para obtener más información sobre estas características, consulte ["Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Conexión de la cuenta empresarial a {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

También hay pruebas disponibles para {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulte "[Configuración de una evaluación gratuita de {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)".

{% data reusables.products.which-product-to-use %}

## Configurar tu prueba de {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} está instalado como aparato virtual. Determine quién es la mejor persona de su organización para configurar una máquina virtual y pida a esa persona que envíe una [solicitud de evaluación gratuita](https://enterprise.github.com/trial). Puedes comenzar tu prueba de forma inmediata después de enviar una solicitud.

Para configurar una cuenta para el {% data variables.product.prodname_enterprise %} portal web, haz clic en el enlace del correo electrónico que recibiste después de enviar tu solicitud de prueba y sigue las instrucciones. A continuación, descarga tu archivo de licencia. Para obtener más información, consulte "[Administración de la licencia de {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)".

Para instalar {% data variables.product.prodname_ghe_server %}, descarga los elementos necesarios y carga tu archivo de licencia. Para obtener más información, consulte las instrucciones de la plataforma de visualización elegida en "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)".

## Pasos siguientes

Para sacar el mejor provecho de tu prueba, sigue los siguientes pasos:

1. [Cree una organización](/enterprise-server@latest/admin/user-management/creating-organizations).
2. Para aprender lo básico para usar {% data variables.product.prodname_dotcom %}, consulta lo siguiente:
   - Webcast [Introducción a {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/)
   - Guías de [descripción del flujo de {% data variables.product.prodname_dotcom %}](https://guides.github.com/introduction/flow/) en {% data variables.product.prodname_dotcom %}
   - Guías de [Hola mundo](https://guides.github.com/activities/hello-world/) en {% data variables.product.prodname_dotcom %}
   - "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)"
3. Para configurar la instancia a fin de satisfacer las necesidades de su organización, consulte "[Configuración de la empresa](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)".
4. Para integrar {% data variables.product.prodname_ghe_server %} con el proveedor de identidades, consulte "[Uso de SAML](/enterprise-server@latest/admin/user-management/using-saml)" y "[Uso de LDAP](/enterprise-server@latest/admin/authentication/using-ldap)".
5. Invita a una cantidad ilimitada de personas a unirse a tu prueba.
   - Agregar usuarios a tu instancia {% data variables.product.prodname_ghe_server %} utilizando la autenticación incorporada o tu proveedor de identidad configurado. Para obtener más información, consulte "[Uso de la autenticación integrada](/enterprise-server@latest/admin/user-management/using-built-in-authentication)".
   - Para invitar a los usuarios a convertirse en administradores de cuentas, visite el [portal web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login).

    {% note %}

    **Nota:** Las personas a las que invite a convertirse en administradores de cuenta recibirán un correo electrónico con un vínculo para aceptar la invitación.

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## Terminar tu prueba

Puede actualizar a licencias completas en el [portal web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login) en cualquier momento durante el periodo de evaluación gratuita.

Si no has subido la categoría para el último día de tu prueba, recibirás un correo electrónico notificando que tu prueba ha terminado. Si necesitas más tiempo para evaluar {% data variables.product.prodname_enterprise %}, contacta a {% data variables.contact.contact_enterprise_sales %} para solicitar una extensión.

## Información adicional

- "[Configuración de una evaluación gratuita de {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)"
