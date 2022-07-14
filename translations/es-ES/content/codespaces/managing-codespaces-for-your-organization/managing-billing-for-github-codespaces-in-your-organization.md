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

Puedes inhabilitar el uso de los {% data variables.product.prodname_codespaces %} en tu organización o repositorio. Para obtener más información, consulta la sección "[Administrar el acceso de un repositorio a los codespces de tu organización](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

También puedes limitar a los usuarios individuales que pueden utilizar {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Administrar los permisos de los usuarios para tu organización](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

Puedes limitar la elección de tipos de máquina que se encuentra disponible para los repositorios que pertenecen a tu organización. Esto te permite prevenir que las personas utilicen máquinas con recursos excedidos para sus codespaces. Para obtener más información, consulta la sección "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## Borrar los codespaces sin utilizar

Tus usuarios pueden borrar sus codespaces en https://github.com/codespaces y desde dentro de {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, los usuarios pueden borrar los archivos manualmente utilizando la terminal o desde dentro de {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Nota:** Solo la persona que creó un codespace podrá borrarlo. Actualmente no hay forma de que los propietarios de las organizaciones borren los codespaces que se crearon dentro de su organización.

{% endnote %}
