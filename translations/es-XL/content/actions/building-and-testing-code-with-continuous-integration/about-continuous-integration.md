---
title: Acerca de la integración continua
intro: 'Puedes crear flujos de trabajo de intgraciones contínuas (IC) personalizadas y despliegues contínuos (DC) directamente en tu repositorio de {% data variables.product.prodname_dotcom %} con las {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de la integración continua

La integración continua (CI) es una práctica de software que requiere la confirmación de código de forma periódica en un repositorio compartido. La confirmación de código con mayor frecuencia detecta errores más rápido y reduce la cantidad de código que un desarrollador necesita depurar al encontrar la fuente de un error. Las actualizaciones frecuentes de código facilitan también la fusión de cambios de diferentes miembros de un equipo de desarrollo de software. Esto es excelente para los desarrolladores, que pueden dedicar más tiempo a escribir código y menos tiempo a depurar errores o resolver conflictos de fusión.

Al confirmar el código en tu repositorio, puedes crear y probar el código continuamente para asegurarte de que la confirmación no introduzca errores. Tus pruebas pueden incluir limpiadores de código (que verifican el formato de estilo), verificaciones de seguridad, cobertura de código, pruebas funcionales y otras verificaciones personalizadas.

Para crear y probar tu código es necesario un servidor. Puedes crear y probar las actualizaciones localmente antes de subir un código a un repositorio o puedes usar un servidor CI que verifique las nuevas confirmaciones de código en un repositorio.

### Acerca de la integración contínua utilizando {% data variables.product.prodname_actions %}

La IC utilizando {% data variables.product.prodname_actions %} ofrece flujos de trabajo que pueden compilar el código en tu repositorio y ejecutar tus pruebas. Los flujos de trabajo pueden ejecutarse en máquinas virtuales hospedadas en {% data variables.product.prodname_dotcom %}, o en máquinas que hospedes tú mismo. Para obtener más información, consulta las secciones "[Ambientes virtuales para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)", y "[Acerca de los ejecutores auto-programados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

Puedes configurar tu flujo de trabajo de IC para que se ejecute cuando ocurre un evento de {% data variables.product.product_name %} (por ejemplo, cuando se sube código nuevo a tu repositorio), en una programación configurada, o cuando ocurre un evento externo utilizando el webhook de envío del repositorio.

{% data variables.product.product_name %} ejecuta tus pruebas de IC y proporciona los resultados de cada prueba en la solicitud de extracción para que puedas ver si el cambio en tu rama introduce un error. Cuando se aprueban todas las pruebas de CI en un flujo de trabajo, los cambios que subiste están listos para su revisión por parte de un miembro del equipo o para su fusión. Cuando una prueba falla, es posible que uno de tus cambios haya causado la falla.

Cuando configuras la IC en tu repositorio, {% data variables.product.product_name %} analiza el código en el mismo y recomienda flujos de trabajo de IC con base en el lenguaje y marco de trabajo de tu repositorio. Por ejemplo, si utilizas [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} te sugerirá un archivo de plantilla que instala tus paquetes de Node.js y ejecuta tus pruebas. Puedes utilizar la plantilla de flujo de trabajo de IC que {% data variables.product.product_name %} te sugiere, personalizarla, o crear tu propio archivo de flujo de trabajo personalizado para que ejecute tus pruebas de IC.

![Captura de pantalla de plantillas de integración continua sugeridas](/assets/images/help/repository/ci-with-actions-template-picker.png)

Adicionalmente a ayudarte a configurar los flujos de trabajo de IC para tu proyecto, puedes utilizar las {% data variables.product.prodname_actions %} para crear flujos de trabajo através de todo el ciclo de vida de desarrollo de software. Por ejemplo, puedes usar acciones para implementar, empaquetar o lanzar tu proyecto. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Para obtener una definición de los términos comunes, consulta la sección "[Conceptos nucleares para las {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)".

### Lenguajes compatibles

{% data variables.product.product_name %} ofrece plantillas de flujo de trabajo de IC para varios lenguajes y marcos de trabajo.

Para obtener más información, consulta "[ Configuración de flujo de trabajo](/articles/configuring-a-workflow)".

### Notificaciones para ejecuciones de flujo de trabajo

{% data reusables.repositories.workflow-notifications %}

### Distintivos de estado para ejecuciones de flujos de trabajo

{% data reusables.repositories.actions-workflow-status-badge-into %}

Para obtener más información, consulta "[ Configuración de flujo de trabajo](/articles/configuring-a-workflow)".

### Leer más

- "[Configurar la integración contínua utilizando {% data variables.product.prodname_actions %}](/articles/setting-up-continuous-integration-using-github-actions)"
{% if currentVersion == "free-pro-team@latest" %}
- "[Administrar la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
