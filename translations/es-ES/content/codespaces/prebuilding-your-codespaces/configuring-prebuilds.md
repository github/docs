---
title: Configuring prebuilds
shortTitle: Configure prebuilds
intro: Puedes configurar tu proyecto para que pre-configure un codespace automáticamente cada que subes un cambio a tu repositorio.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

{% data reusables.codespaces.prebuilds-beta-note %}

You can set up a prebuild configuration for a specific branch of your repository.

Any branch created from a prebuild-enabled base branch will typically also get assigned a prebuild during codespace creation. This is true if the dev container on the branch is the same as on the base branch. This is because the majority of the prebuild configuration for branches with the same dev container configuration are identical, so developers can benefit from faster codespace creation times on those branches also. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Typically, when you configure prebuilds for a branch, prebuilds will be available for {% data variables.product.prodname_codespaces %} machine types for that branch. However, if your repository is greater than 32 GB, prebuilds won't be available for 2-core and 4-core machine types, since the storage these provide is limited to 32 GB.

{% data reusables.codespaces.prebuilds-not-available %}

## Prerrequisitos

Before you can configure prebuilds for your project the following must be true:
* {% data variables.product.prodname_github_codespaces %} must be enabled for your organization. For more information, see "[Enabling {% data variables.product.prodname_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)."
* {% data variables.product.prodname_actions %} must be enabled for your repository. Each prebuild configuration needs to be able to trigger an associated Actions workflow. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configuring a prebuild

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. Under "Prebuild configuration", click **Set up prebuild**.

   ![The 'Set up prebuilds' button](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Choose the branch for which you want to set up a prebuild.

   ![The Branch drop-down menu](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds. For example, if you enable prebuilds for the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds.

   {% endnote %}

1. Choose the regions in which you want to set up a prebuild. Developers must be located in a region you select to be able to create codespaces from a prebuild. Alternatively, select **All regions**.

   ![The region selection options](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Notas**:
   * The prebuild template for each region will incur individual charges. You should, therefore, only enable prebuilds for regions in which you know they'll be used. For more information, see "[About {% data variables.product.prodname_codespaces %} prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)."
   * Developers can set their default region for {% data variables.product.prodname_codespaces %}, which can allow you to enable prebuilds for fewer regions. For more information, see "[Setting your default region for {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-codespaces)."

   {% endnote %}

1. Choose how you want to automatically trigger updates of the prebuild template.

   * **Every push** (the default setting) - With this setting, prebuild configurations will be updated on every push made to the given branch. This will ensure that codespaces generated from a prebuild template always contain the latest codespace configuration, including any recently added or updated dependencies.
   * **On configuration change** - With this setting, prebuild configurations will be updated every time associated configuration files for a given repo and branch are updated. This ensures that changes to the dev container configuration files for the repository are used when a codespace is generated from a prebuild template. The Actions workflow that updates the prebuild template will run less often, so this option will use fewer Actions minutes. However, this option will not guarantee that codespaces always include recently added or updated dependencies, so these may have to be added or updated manually after a codespace has been created.
   * **Scheduled** - With this setting, you can have your prebuild configurations update on a custom schedule that's defined by you. This can reduce consumption of Actions minutes, and reduce the amount of time during which prebuilds are unavailable because they are being updated. However, with this option, codespaces may be created that do not use the latest dev container configuration changes.

   ![The prebuild trigger options](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Da clic en **Crear**.

   The prebuild configuration is listed on the {% data variables.product.prodname_codespaces %} page of your repository settings. A {% data variables.product.prodname_actions %} workflow is queued and then run to create prebuild templates, based on the branch you selected, in the regions you specified.

   {% note %}

   **Note**: By default, the {% data variables.product.prodname_actions %} workflow for a prebuild configuration can only access resources in its own repository. If your project uses resources from outside of the repository, you'll need to set the `CODESPACES_PREBUILD_TOKEN` secret to grant the required access. For more information, see "[Allowing a prebuild to access external resources](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)."

   {% endnote %}

## Configuring access to resources that are not in the repository

Predeterminadamente, el flujo de trabajo de {% data variables.product.prodname_actions %} para una configuración de compilación previa solo puede acceder al contenido de su propio repositorio. If your project needs to access external resources to build the development environment, you will need to set up a personal access token (PAT) with the appropriate access scopes.

Para obtener más información, consulta la sección "[Permitir que una compilación previa acceda a recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configurar variables de ambiente

To allow the prebuild process to access environment variables required to create your development environment, you can set these either as {% data variables.product.prodname_codespaces %} repository secrets or as {% data variables.product.prodname_codespaces %} organization secrets. Para obtener más información, consulta las secciones "[Agregar secretos para un repositorio](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)" y "[Agregar secretos para una organización](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-an-organization)".

Prebuilds do not use any user-level secrets while building your environment, because these are not added until after the codespace has been created.

{% data variables.product.prodname_codespaces %} secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. If you do not want this, you can alternatively set the `CODESPACES_PREBUILD_TOKEN` secret. The `CODESPACES_PREBUILD_TOKEN` secret is only used for prebuilding and its value is not accessible in users' codespaces. Para obtener más información, consulta la sección "[Permitir que una compilación previa acceda a recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configuring time-consuming tasks to be included in the prebuild

You can use the `onCreateCommand` and `updateContentCommand` commands in your `devcontainer.json` to include time-consuming processes as part of the prebuild template creation. For more information, see the Visual Studio Code documentation, "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)."

`onCreateCommand` is run only once, when the prebuild template is created, whereas `updateContentCommand` is run at template creation and at subsequent template updates. Incremental builds should be included in `updateContentCommand` since they represent the source of your project and need to be included for every prebuild template update.

## Leer más

- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
