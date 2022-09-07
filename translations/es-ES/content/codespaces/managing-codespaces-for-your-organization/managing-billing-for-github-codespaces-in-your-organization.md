---
title: Managing billing for GitHub Codespaces in your organization
shortTitle: Administrar la facturación
intro: 'Puedes verificar tu uso de {% data variables.product.prodname_github_codespaces %} y configurar los límites de uso.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
---

## Resumen

Para aprender más sobre los precios de los {% data variables.product.prodname_github_codespaces %}, consulta la sección "[precios de los {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como propietario de una organización o como administrador de facturación, puedes administrar la facturación de los {% data variables.product.prodname_codespaces %} en tu organización: ["Acerca de la facturación para los Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Hay una guía para los usuarios que explica cómo funciona la facturación: ["Entender la facturación para los Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Límites de uso

Puedes configurar el límite de uso de los codespaces en tu organización o repositorio. Este límite se aplica al uso de cálculo y almacenamiento de {% data variables.product.prodname_github_codespaces %}:

- **Minutos de cálculo:** El uso de cálculo se obtiene con la cantidad actual de minutos que utilizan todas las instancias de {% data variables.product.prodname_codespaces %} mientras están activas. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_codespaces %} en tu organización. Para obtener más información, consulta la sección "[Administrar los límites de gastos para los {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

- **Uso de almacenamiento:**  Para propósitos de facturación de {% data variables.product.prodname_codespaces %}, esto incluye todo el almacenamiento que se utiliza en todos los codespaces de tu cuenta. Esto incluye todos los que utilizan los codespaces, tales como los repositorios clonados, archivos de configuración y extensiones, entre otros. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. To check how many compute minutes and storage GB have been used by {% data variables.product.prodname_codespaces %}, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage"](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Inhabilitar o limitar los {% data variables.product.prodname_codespaces %}

You can disable all use of {% data variables.product.prodname_github_codespaces %} that would be billed to your organization. Alternatively, you can specify which organization members or collaborators can use {% data variables.product.prodname_codespaces %} at your organization's expense. Para obtener más información, consulta la sección "[Habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

You can configure which repositories can be accessed from codespaces created for a particular repository. Si necesitas más información, consulta la sección "[Administrar el acceso a otros repositorios dentro de tu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

You can limit the choice of types of machine that are available for codespaces created from repositories owned by your organization. This allows you to prevent people using overly resourced machines for their codespaces, and incurring unnecessary charges. Para obtener más información, consulta la sección "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

You can also restrict how long a codespace can remain unused before it is automatically deleted. This can help to reduce storage costs for {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Restringir el periodo de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

## Borrar los codespaces sin utilizar

Tus usuarios pueden borrar sus codespaces en https://github.com/codespaces y desde dentro de {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, los usuarios pueden borrar los archivos manualmente utilizando la terminal o desde dentro de {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Note:** Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. Para obtener más información, consulta la sección "[Restringir el periodo de retención para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)". A codespace can only be manually deleted by the person who created the codespace.

{% endnote %}
