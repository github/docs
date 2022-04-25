---
title: Secretos
intro: 'With the Dependabot Secrets API, you can manage and control Dependabot secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

The {% data variables.product.prodname_dependabot %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} Para obtener más información, consulta "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `dependabot_secrets` permission to use this API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.
