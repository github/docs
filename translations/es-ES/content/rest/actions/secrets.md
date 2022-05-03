---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: Secretos
intro: 'The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Secrets API

The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows. {% data reusables.actions.about-secrets %} Para obtener más información, consulta la sección "[Crear y utilizar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_apps %} debe contar con el permiso de `secrets` para utilizar esta API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.
