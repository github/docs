---
title: Configurar una prueba de la nube de GitHub Enterprise
intro: 'Puedes probar {% data variables.product.prodname_ghe_cloud %} de manera gratuita.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183992'
---
{% data reusables.enterprise.ghec-cta-button %}


## Acerca de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} es un plan para negocios o equipos grandes que colaboran en {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} Para más información sobre los tipos de cuenta, vea "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Puedes utilizar organizaciones gratuitamente con {% data variables.product.prodname_free_team %}, las cuales incluyen características limitadas. Para encontrar características adicionales, tales como el inicio de sesión único (SSO) de SAML, el control de accesos para las {% data variables.product.prodname_pages %} y los minutos incluidos de las {% data variables.product.prodname_actions %}, puedes mejorar a {% data variables.product.prodname_ghe_cloud %}. Para obtener una lista detallada de las características disponibles con {% data variables.product.prodname_ghe_cloud %}, vea nuestra página [Precios](https://github.com/pricing).

Puedes configurar un periodo de prueba para {% data variables.product.prodname_ghe_cloud %} y evaluar estas características adicionales en una cuenta organizacional nueva o existente.

También hay pruebas disponibles para {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Configuración de una versión de prueba de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

{% data reusables.products.which-product-to-use %}

## Acerca de las pruebas de {% data variables.product.prodname_ghe_cloud %}

Puede configurar un periodo de 30 días de prueba para evaluar {% data variables.product.prodname_ghe_cloud %}. No es necesario que proporciones un método de pago durante la prueba a menos que agreges aplicaciones de {% data variables.product.prodname_marketplace %} en tu organización que requieran de un método de pago. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)".

Tu prueba incluye 50 asientos. Si necesitas más plazas para evaluar a {% data variables.product.prodname_ghe_cloud %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Al finalizar la prueba, puedes elegir una cantidad diferente de asientos.

{% data reusables.saml.saml-accounts %}

Para más información, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Las {% data variables.product.prodname_emus %} no son parte de la prueba gratuita de {% data variables.product.prodname_ghe_cloud %}. Si está interesado en {% data variables.product.prodname_emus %}, póngase en contacto con el [equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

## Configurar tu prueba de {% data variables.product.prodname_ghe_cloud %}

Antes de probar {% data variables.product.prodname_ghe_cloud %}, debes haber iniciado sesión en una cuenta personal. Si aún no tienes una cuenta personal en {% data variables.product.prodname_dotcom_the_website %}, debes crear una. Para más información, vea "[Suscripción a una nueva cuenta de {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)"

1. Vaya a [{% data variables.product.prodname_dotcom %} para empresas](https://github.com/enterprise).
1. Haga clic en **Iniciar una evaluación gratuita**.
   ![Botón "Iniciar una evaluación gratuita"](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Haga clic en **Nube de Enterprise**
   ![Botón "Nube de Enterprise"](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Sigue los mensajes para configurar tu prueba.

## Explorar {% data variables.product.prodname_ghe_cloud %}

Después de configurar la versión de prueba, puedes explorar {% data variables.product.prodname_ghe_cloud %} siguiendo las tareas sugeridas en la pestaña "Información general" de la organización. Si has descartado las tareas con anterioridad, puedes volver a acceder a ellas haciendo clic en **Introducción a las tareas sugeridas** en la parte superior de la página.

![Botón "Introducción a las tareas sugeridas"](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## Terminar tu prueba

Puedes comprar {% data variables.product.prodname_enterprise %} en cualquier momento durante tu periodo de prueba. El comprar {% data variables.product.prodname_enterprise %} terminará tu periodo de prueba, eliminando el máximo de 50 plazas e iniciando el periodo de pagos.

Si no compras {% data variables.product.prodname_enterprise %}, la prueba continuará hasta el final del período de 30 días. No puedes finalizar la prueba antes. Cuando finalices la prueba, la organización bajará a un nivel inferior. Si utilzaste una organización existente para la prueba, esta bajará de nivel al producto que estabas utilizando antes de dicho periodo. Si creaste una organización nueva para la prueba, esta bajará de nivel a {% data variables.product.prodname_free_team %}. 

Tu organización perderá el acceso a cualquier funcionalidad que no se incluya en el plan nuevo, tal como las características avanzadas como {% data variables.product.prodname_pages %} para los repositorios privados. Si no planeas mejorar tu plan, evita perder el acceso a las características avanzadas y considera convertir a los repositorios afectados en públicos antes de que termine tu periodo de prueba. Para más información, vea "[Configuración de la visibilidad de un repositorio](/articles/setting-repository-visibility)".

El bajar de categoría también inhabilita los ajustes de SAML que se configuraron durante el periodo de prueba. Si posteriormente compras {% data variables.product.prodname_enterprise %}, tus ajustes de SAML se habilitarán nuevamente para que se autentiquen los usuarios de tu organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. En "Evaluación gratuita de {% data variables.product.prodname_ghe_cloud %}", haga clic en **Comprar Enterprise** o **Cambiar a una versión anterior de equipo**.
  ![Botones Comprar Enterprise y Cambiar a una versión anterior de equipo](/assets/images/help/organizations/finish-trial-buttons.png)
6. Siga las indicaciones para escribir el método de pago y, después, haga clic en **Enviar**.
