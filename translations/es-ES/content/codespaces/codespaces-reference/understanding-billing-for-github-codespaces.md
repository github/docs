---
title: Understanding billing for GitHub Codespaces
intro: 'Aprende cómo se factura tu uso de {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
  - Codespaces
  - Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Entender la facturación
---

Este artículo te explica cómo funciona la facturación para tus codespaces y cómo el gerente de facturación de tu empresa puede ayudar.

## Obtener acceso a {% data variables.product.prodname_github_codespaces %}

Tu administrador de organización podría limitar el uso de los {% data variables.product.prodname_github_codespaces %} a solo cuentas personales específicas. Para obtener acceso, necesitarás contactar a tu gerente de facturación. Para obtener más información, consulta la sección "[Administrar el acceso y la seguridad para tus codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## Cuánto cuesta utilizar {% data variables.product.prodname_codespaces %}

Para ver los precios de uso de {% data variables.product.prodname_codespaces %}, consulta la sección de "[Precios de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

## Cómo se factura tu uso de codespaces

Tu codespace se cobra de acuerdo con sus minutos de cálculo y con la cantidad de almacenamiento que utiliza en disco.

Si habilitas la precompilación de los codespaces, esto ameritará cargos adicionales. Para obtener más información, consulta la sección "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### Entender qué son los minutos de cálculo
Tu codespace se cobra de acuerdo con la cantidad de minutos durante los cuales está activo. Si tu ventana de codespaces está inactiva durante 30 minutos, se cerrará automáticamente y la facturación por cálculo terminará hasta que lo inicies nuevamente.

### Entender cómo se factura el almacenamiento de un codespace
Para los {% data variables.product.prodname_github_codespaces %}, el almacenamiento se define para incluir cualquier archivo que se relacione con tu codespace, tal como el repositorio clonado, los archivos de configuración y las extensiones, entre otros. Este almacenamiento se factura mientras tu codespace está cerrado. La facturación de almacenamiento de un codespace termina cuando lo borras manualmente de https://github.com/codespaces.

## Cómo funcionan los límites de gastos

Antes de que tu organización pueda utilizar los {% data variables.product.prodname_codespaces %}, tu gerente de facturación necesitará configurar un límite de gastos. Para obtener más información, consulta la sección "[Administrar los límites de gastos para los {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

## Exportar cambios cuando llegaste a tu límite de gastos

{% data reusables.codespaces.exporting-changes %}

## Verificar tu uso y límites actuales
Si necesitas verificar tu uso o límite de gastos actuales, contacta al gerente de facturación de tu organización. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Los codespaces pueden borrarse automáticamente

Tu codespace se borrará automáticamente cuando lo elimines de un repositorio u organización.

## Borrar tus codespaces sin utilizar

Puedes borrar tus codespaces manualmente en https://github.com/codespaces y desde dentro de {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, puedes borrar los archivos manualmente utilizando la terminal o desde dentro de {% data variables.product.prodname_vscode %}.

## Leer más

- "[Managing billing for {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
