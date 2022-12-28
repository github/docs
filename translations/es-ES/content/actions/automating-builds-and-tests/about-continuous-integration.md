---
title: Acerca de la integración continua
intro: 'Con {% data variables.product.prodname_actions %}, puedes crear flujos de trabajo de integración continua (IC) directamente en tu repositorio de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: 26b9088133ad561900d06a0c885d6b06b9b55861
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880665'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la integración continua

La integración continua (CI) es una práctica de software que requiere la confirmación de código de forma periódica en un repositorio compartido. La confirmación de código con mayor frecuencia detecta errores más rápido y reduce la cantidad de código que un desarrollador necesita depurar al encontrar la fuente de un error. Las actualizaciones frecuentes de código facilitan también la fusión de cambios de diferentes miembros de un equipo de desarrollo de software. Esto es excelente para los desarrolladores, que pueden dedicar más tiempo a escribir el código y menos tiempo a depurar errores o resolver conflictos de fusión.

Al confirmar el código en tu repositorio, puedes crear y probar el código continuamente para asegurarte de que la confirmación no introduzca errores. Tus pruebas pueden incluir limpiadores de código (que verifican el formato de estilo), verificaciones de seguridad, cobertura de código, pruebas funcionales y otras verificaciones personalizadas.

Para crear y probar tu código es necesario un servidor. Puedes crear y probar las actualizaciones localmente antes de subir un código a un repositorio o puedes usar un servidor CI que verifique las nuevas confirmaciones de código en un repositorio.

## Acerca de la integración continua utilizando {% data variables.product.prodname_actions %}

{% ifversion ghae %}La CI con {% data variables.product.prodname_actions %} ofrece flujos de trabajo que pueden compilar el código del repositorio y ejecutar las pruebas. Los flujos de trabajo pueden ejecutarse en sistemas de ejecutores que almacenes. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).
{% else %} Tener una IC utilizando {% data variables.product.prodname_actions %} ofrece flujos de trabajo que pueden compilar el código de tu repositorio y ejecutar tus pruebas. Los flujos de trabajo pueden ejecutarse en máquinas virtuales hospedadas en {% data variables.product.prodname_dotcom %}, o en máquinas que hospedes tú mismo. Para obtener más información, consulta "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" y "[Acerca de los ejecutores autohospedados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".
{% endif %}

Puede configurar el flujo de trabajo de CI para que se ejecute cuando se produzca un evento de {% data variables.product.prodname_dotcom %} (por ejemplo, cuando se inserta código nuevo en el repositorio), en una programación establecida o cuando se produce un evento externo mediante el webhook de envío de un repositorio.

{% data variables.product.product_name %} ejecuta tus pruebas de CI y entrega los resultados de cada prueba en la solicitud de extracción, de modo que puedas ver si el cambio en tu rama introduce un error. Cuando se superan todas las pruebas de CI en un flujo de trabajo, los cambios que subiste están listos para su revisión por parte de un miembro del equipo o para su fusión. Cuando una prueba falla, es posible que uno de tus cambios haya causado la falla.

Al configurar la CI en tu repositorio, {% data variables.product.product_name %} analiza el código en tu repositorio y recomienda flujos de trabajo de CI n función del lenguaje y el encuadre en tu repositorio. Por ejemplo, si usa [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} sugerirá un flujo de trabajo inicial que instala los paquetes de Node.js y ejecuta las pruebas. Puedes utilizar el flujo de trabajo inicial de IC que sugiere {% data variables.product.product_name %}, personalizarlo o crear tu propio archivo de flujo de trabajo para ejecutar tus pruebas de IC.

![Captura de pantalla de los flujos de trabajo iniciales de integración continua sugeridos](/assets/images/help/repository/ci-with-actions-template-picker.png)

Además de ayudarte a configurar flujos de trabajo de CI para tu proyecto, puedes usar {% data variables.product.prodname_actions %} para crear flujos de trabajo durante todo el ciclo de vida de desarrollo de software. Por ejemplo, puedes usar acciones para implementar, empaquetar o lanzar tu proyecto. Para más información, vea "[Acerca de {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Para obtener una definición de términos comunes, vea "[Conceptos básicos para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)".

## Flujo de trabajo inicial

{% data variables.product.product_name %} ofrece un flujo inicial de IC para diversos lenguajes y marcos de trabajo.

Examine la lista completa del flujo de trabajo de inicio de CI ofrecido por {% data variables.product.company_short %} en el repositorio {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` en {% data variables.product.product_location %}{% endif %}.

## Lecturas adicionales

{% ifversion fpt or ghec %}
- "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)" {% endif %}
