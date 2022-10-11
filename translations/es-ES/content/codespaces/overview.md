---
title: Resumen de GitHub Codespaces
shortTitle: Resumen
product: '{% data reusables.gated-features.codespaces %}'
intro: 'Esta guía te presenta a {% data variables.product.prodname_codespaces %} y te proporciona detalles de cómo funciona y cómo utilizarlo.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
---

## ¿Qué es un codespace?

Un codespace es un ambiente de desarrollo que se hospeda en la nube. Puedes personalizar tu proyecto para los {% data variables.product.prodname_codespaces %} si confirmas los [archivos de configuración](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) a tu repositorio (lo cual se conoce habitualmente como Configuración-como-código), lo cual crea una configuración de codespace repetible para todos los usuarios de tu proyecto.

Los {% data variables.product.prodname_codespaces %} se ejecutan en diversas opciones de cómputo basadas en MV hospedadas en {% data variables.product.product_location %}, las cuales puedes configurar desde máquinas de 2 núcleos hasta de 32 núcleos. Puedes conectar tus codespaces desde el buscador o localmente utilizando {% data variables.product.prodname_vscode %}.

![Un diagrama que muestra cómo funciona {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Utilizar Codespaces

Puedes crear un codespace desde cualquier rama o confirmación en tu repositorio y comenzar a desarrollar utilizando recursos de cómputo basados en la nube.

Pra personalizar los tiempos de ejecución y herramientas en tu codespace, puedes crear una configuración personalizada para definir un ambiente (o _contenedor dev_) que sea específico para tu repositorio. El utilizar un contenedor dev te permite especificar un ambiente de desarrollo de Docker con una combinación de herramienta y tiempo de ejecución bien definidos que pueden referenciar una imagen, Dockerfile o docker-compose. Esto significa que, cualquiera que utilice el repositorio, tendrá las mismas herramientas disponibles para ellos cuando creen un codespace.

Si no hiciste ninguna configuración personalizada, {% data variables.product.prodname_codespaces %} clonará tu repositorio en un ambiente con la imagen predeterminada del codespace, la cual incluye muchas herramientas, lenguajes y ambientes de tiempo de ejecución. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

También puedes personalizar aspectos de tu ambiente de codespace utilizando un repositorio público de [dotfiles](https://dotfiles.github.io/tutorials/) y la [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync). Esta personalización puede incluir preferencias de shell, herramientas adicionales, configuración de editores y extensiones de VS Code. Para obtener más información, consulta la sección "[Personalizar tu codespace](/codespaces/customizing-your-codespace)".

## Acerca de la facturación para {% data variables.product.prodname_codespaces %}

Para obtener más información sobre la facturación de los {% data variables.product.prodname_codespaces %}, consulta la sección "[Administrar la facturación para los {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} Para obtener más información sobre cómo los propietarios de las organizaciones y los gerentes de facturación pueden administrar el límite de gastos de {% data variables.product.prodname_codespaces %} para una organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
