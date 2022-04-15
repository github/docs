---
title: Configurar una especificación mínima para las máquinas de los codespaces
shortTitle: Configurar una especificación de máquina mínima
intro: 'Puedes evitar que los tipos de máquina con recursos insuficientes se utilicen en los {% data variables.product.prodname_codespaces %} de tu repositorio.'
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

Each codespace that you create is hosted on a separate virtual machine, and you can usually choose from different types of virtual machines. Each machine type has different resources (CPUs, memory, storage) and, by default, the machine type with the least resources is used. Para obtener más información, consulta la sección "[Cambiar el tipo de máquina de tu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

If your project needs a certain level of compute power, you can configure {% data variables.product.prodname_github_codespaces %} so that only machine types that meet these requirements can be used by default, or selected by users. You configure this in a `devcontainer.json` file.

{% note %}

**Importante:** Puede que el acceso a algunos tipos de máquinas esté restringido a nivel organizacional. Habitualmente, esto se hace para prevenir que las personas elijan máquinas con recursos superiores, las cuales se cobran en tazas más altas. Si tu repositorio se ve afectado por la política de tipos de máquina a nivel organizacional, debes asegurarte de que no configures una especificación mínima que impida que las personas seleccionen los tipos de máquina disponibles que necesitan. Para obtener más información, consulta la sección "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Configurar una especificación de máquina mínima

1. {% data variables.product.prodname_codespaces %} for your repository are configured in a `devcontainer.json` file. Si tu repositorio no contiene ya un archivo `devcontainer.json`, agrégalo ahora. See "[Add a dev container configuration to your repository](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."
1. Edita el archivo `devcontainer.json` agregando una propiedad de `hostRequirements` tal como esta:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Puedes especificar todas o cualquiera de las opciones: `cpus`, `memory` y `storage`.

   Para verificar las especificaciones de los tipos de máquina de {% data variables.product.prodname_codespaces %} que actualmente están disponibles para tu repositorio, realiza el proceso de crear un codespace hasta que veas la elección de tipos de máquina. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

1. Guarda el archivo y confirma tus cambios a la rama requerida del repositorio.

   Now when you create a codespace for that branch of the repository, and you go to the creation configuration options, you will only be able to select machine types that match or exceed the resources you've specified.

   ![Caja de diálogo que muestra una selección limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Leer más

- "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
