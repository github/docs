---
title: About GitHub Codespaces prebuilds
shortTitle: Acerca de las precompilaciones
intro: Las precompilaciones de codespaces te ayudan a acelerar la creación de codespaces nuevos para repositorios grandes o complejos.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
---

## Resumen

El precompilar tus codespaces te permite ser más productivo y acceder a ellos más rápido, particularmente si tu repositorio es grande o complejo y los codespaces nuevos actualmente toman más de 2 minutos en iniciar. Esto es porque cualquier código fuente, extensiones del editor, dependencias de proyecto, comandos y configuraciones ya se han descargado, instalado y aplicado antes de que crees un codespace para tu proyecto. Piensa en la precompilación como una plantilla "lista para utilizarse" para un codespace.

Predeterminadamente, cada que subas cambios a tu repositorio, {% data variables.product.prodname_github_codespaces %} utiliza {% data variables.product.prodname_actions %} para actualizar tus precompilaciones automáticamente.

When prebuilds are available for a particular branch of a repository, a particular dev container configuration file, and for your region, you'll see the "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" label in the list of machine type options when you create a codespace. Si se está creando una precompilación, verás la etiqueta "{% octicon "history" aria-label="The history icon" %} Prebuild in progress". Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

## The prebuild process

To create a prebuild you set up a prebuild configuration. When you save the configuration, a {% data variables.product.prodname_actions %} workflow runs to create each of the required prebuilds; one workflow per prebuild. Workflows also run whenever the prebuilds for your configuration need to be updated. This can happen at scheduled intervals, on pushes to a prebuild-enabled repository, or when you change the dev container configuration. Para obtener más información, consulta la sección "[Configurar las precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

When a prebuild configuration workflow runs, {% data variables.product.prodname_dotcom %} creates a temporary codespace, performing setup operations up to and including any `onCreateCommand` and `updateContentCommand` commands in the `devcontainer.json` file. No `postCreateCommand` commands are run during the creation of a prebuild. For more information about these commands, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the {% data variables.product.prodname_vscode_shortname %} documentation. A snapshot of the generated container is then taken and stored.

When you create a codespace from a prebuild, {% data variables.product.prodname_dotcom %} downloads the existing container snapshot from storage and deploys it on a fresh virtual machine, completing the remaining commands specified in the dev container configuration. Since many operations have already been performed, such as cloning the repository, creating a codespace from a prebuild can be substantially quicker than creating one without a prebuild. This is true where the repository is large and/or `onCreateCommand` commands take a long time to run.

## Acerca de la facturación para las precompilaciones de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds-default %} Para obtener más detalles sobre los precios de almacenamiento de {% data variables.product.prodname_codespaces %}, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.billing-for-prebuilds-reducing %}

El utilizar los codespaces creados utilizando precompilaciones se carga en la misma tasa que los codespaces normales.

## Acerca de subir cambios a las ramas habilitadas con precompilación

By default, each push to a branch that has a prebuild configuration results in a {% data variables.product.prodname_dotcom %}-managed Actions workflow run to update the prebuild. El flujo de trabajo de precompilación tiene un límite de concurrencia de una ejecución de flujo de trabajo a la vez para una configuración de precompilación específica, a menos de que se hayan hecho cambios que afecten la configuración del contenedor dev para el repositorio asociado. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Si una ejecución ya está en curso, la ejecución del flujo de trabajo que se puso en cola más recientemente será la siguiente que se ejecute después de que se complete la ejecución actual.

With the prebuild set to be updated on each push, it means that if there are very frequent pushes to your repository, prebuild updates will occur at least as often as it takes to run the prebuild workflow. Es decir, si la ejecución de tu flujo de trabajo habitualmente toma una hora en completarse, las precompilaciones se crearán para tu repositorio por mucho cada hora, si la ejecución tiene éxito, o más a menudo si fueron subidas que cambiaron la configuración del contenedor dev en la rama.

Pro ejemplo, imaginemos que se realizan 5 subidas, rápidamente una después de la otra, contra una rama que tiene una configuración de precompilación. En esta situación:

* A workflow run is started for the first push, to update the prebuild.
* Si las 4 subidas restantes no afectan la configuración del contenedor dev, las ejecuciones de flujo de trabajo de estas se ponen en cola en un estado "pendiente".

  Si cualquiera de estas 4 subidas restantes cambian la configuración del contenedor dev, entonces el servicio no la omitirá y ejecutará inmediatamente el flujo de trabajo de creación de la precompilación, actualizándola en consecuencia si tiene éxito.

* Once the first run completes, workflow runs for pushes 2, 3, and 4 will be canceled, and the last queued workflow (for push 5) will run and update the prebuild. 
