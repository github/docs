---
title: Secretos del Dependabot
shortTitle: Secretos
intro: 'Con la API de secretos del {% data variables.product.prodname_dependabot %}, puedes administrar y controlar los secretos del {% data variables.product.prodname_dependabot %} de una organización o repositorio.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## Acerca de la API de secretos del {% data variables.product.prodname_dependabot %}

La API de secretos del {% data variables.product.prodname_dependabot %} te permite crear, actualizar, borrar y recuperar información sobre los secretos cifrados. {% data reusables.actions.about-secrets %} Para obtener más información, consulta "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_apps %} debe contar con el permiso de `dependabot_secrets` para utilizar esta API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.
