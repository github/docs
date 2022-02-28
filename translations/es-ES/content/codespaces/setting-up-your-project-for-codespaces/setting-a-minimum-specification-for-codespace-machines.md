---
title: Setting a minimum specification for codespace machines
shortTitle: Set a minimum machine spec
intro: 'You can avoid under-resourced machine types being used for {% data variables.product.prodname_codespaces %} for your repository.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
---

## Resumen

When you create a codespace for a repository you are typically offered a choice of available machine types. Each machine type has a different level of resources. Para obtener más información, consulta la sección "[Cambiar el tipo de máquina de tu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

If your project needs a certain level of compute power, you can configure {% data variables.product.prodname_github_codespaces %} so that only machine types that meet these requirements are available for people to select. You configure this in the `devcontainer.json` file.

{% note %}

**Important:** Access to some machine types may be restricted at the organization level. Typically this is done to prevent people choosing higher resourced machines that are billed at a higher rate. If your repository is affected by an organization-level policy for machine types you should make sure you don't set a minimum specification that would leave no available machine types for people to choose. Para obtener más información, consulta la sección "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Setting a minimum machine specification

1. {% data variables.product.prodname_codespaces %} for your repository are configured in the `devcontainer.json` file. If your repository does not already contain a `devcontainer.json` file, add one now. See "[Add a dev container to your project](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."
1. Edit the `devcontainer.json` file, adding a `hostRequirements` property such as this:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   You can specify any or all of the options: `cpus`, `memory`, and `storage`.

   Para verificar las especificaciones de los tipos de máquina de {% data variables.product.prodname_codespaces %} que actualmente están disponibles para tu repositorio, realiza el proceso de crear un codespace hasta que veas la elección de tipos de máquina. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

1. Save the file and commit your changes to the required branch of the repository.

   Now when you create a codespace for that branch of the repository you will only be able to select machine types that match or exceed the resources you've specified.

   ![Dialog box showing a limited choice of machine types](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Leer más

- "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project)"
