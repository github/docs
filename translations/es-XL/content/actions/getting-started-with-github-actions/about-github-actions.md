---
title: Acerca de Acciones de GitHub
intro: '{% data variables.product.prodname_actions %} te permite crear flujos de trabajo de ciclo de vida (SDLC) de software personalizados directamente en tu repositorio {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /GitHub/Automating-Your-Workflow-with-GitHub-Actions/about-GitHub-Actions
  - /Actions/Automating-Your-Workflow-with-GitHub-Actions/about-GitHub-Actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de {% data variables.product.prodname_actions %}

Los flujos de trabajo de {% data reusables.repositories.about-github-actions %} son procesos automatizados personalizados que puedes configurar en tu repositorio para crear, probar, empaquetar, lanzar o implementar cualquier proyecto de código en {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.actions-ci-cd %} {% data variables.product.prodname_actions %} potencia el servicio integrado de integración continua de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Acerca de la integración continua](/articles/about-continuous-integration)".

Los flujos de trabajo se ejecutan en Linux, macOS, Windows y contenedores en máquinas hospedadas en {% data variables.product.prodname_dotcom %}, denominadas ' runners ' (ejecutores). Como alternativa, también puedes hospedar tus propios ejecutores para ejecutar flujos de trabajo en las máquinas que posees o administras. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

Puedes crear flujos de trabajo utilizando acciones definidas en tu repositorio, acciones de código abierto en un repositorio público en {% data variables.product.prodname_dotcom %} o una imagen de contenedor Docker publicada. Los flujos de trabajo en repositorios bifurcados no se ejecutan por defecto.

Puedes descubrir acciones para utilizar en tu flujo de trabajo en {% data variables.product.prodname_dotcom %} y crear acciones para compartir con la comunidad de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre cómo crear una acción personalizada, consulta la sección "[Crear acciones](/actions/creating-actions)".

Puedes crear un archivo de flujo de trabajo configurado para ejecutarse en eventos específicos. Para obtener más información, consulta "[Configurar un flujo de trabajo](/articles/configuring-a-workflow)" y "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)".

Para obtener una definición de términos comunes, consulta "[Conceptos básicos para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)."

### Descubrir acciones en la comunidad de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_marketplace %} es una ubicación central para que encuentres, compartas y uses acciones creadas por la comunidad de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Usar acciones desde {% data variables.product.prodname_marketplace %} en tu flujo de trabajo](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)."

También puedes personalizar tu proyecto con acciones de código abierto compartidas en repositorios públicos en {% data variables.product.prodname_dotcom %} y utilizar acciones construidas por {% data variables.product.prodname_dotcom %} en la organización de [acciones](https://github.com/actions).

### Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu repositorio u organización

{% data reusables.github-actions.disabling-github-actions %}

Para obtener más información, consulta la sección "[Inhabilitar o limitar {% data variables.product.prodname_actions %} para un repositorio](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)" o "[Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu organización](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)".

### Notificaciones para ejecuciones de flujo de trabajo

{% data reusables.repositories.workflow-notifications %}

### Límites de uso

{% data reusables.github-actions.github-actions-usage-limits %}

{% if currentVersion == "free-pro-team@latest" %}

### Política de uso

Además de los límites de uso, debes asegurarte de usar las {% data variables.product.prodname_actions %} dentro de los [Términos de servicio de GitHub](/articles/github-terms-of-service/). Para obtener más información sobre los términos específicos de las {% data variables.product.prodname_actions %}, consulta los [Términos adicionales de producto de GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).

### Acerca de la facturación para {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %} Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

### Contactar con soporte técnico

{% data reusables.github-actions.contacting-support %}

{% endif %}

### Leer más

- "[Administrar una ejecución de flujo de trabajo](/articles/managing-a-workflow-run)"
- "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows)"
- "[Entornos virtuales para ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
"[Administrar la facturación de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
