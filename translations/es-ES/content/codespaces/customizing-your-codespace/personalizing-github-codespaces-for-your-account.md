---
title: Personalizar GitHub Codespaces para tu cuenta
shortTitle: Personalizar tus codespaces
intro: 'Puedes personalizar {% data variables.product.prodname_github_codespaces %} utilizando un repositorio de `dotfiles` en {% data variables.product.product_name %} o utilizando la sincronización de ajustes.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
---


## Acerca de personalizar los {% data variables.product.prodname_codespaces %}

Cuando utilizas cualquier ambiente de desarrollo, personalizar las configuraciones y herramientas de acuerdo con tus preferencias y flujos de trabajo es un paso importante. {% data variables.product.prodname_codespaces %} permite dos formas principales de personalizar tus codespaces.

- [Sincronización de ajustes](#settings-sync) - Puedes utilizar y compartir los ajustes de {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} y otras instancias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – Puedes utilizar un repositorio de `dotfiles` para especificar scripts, preferencias de shell y otras configuraciones.

La personalización de {% data variables.product.prodname_codespaces %} aplica a cualquier codespace que crees.

Los mantenendores de proyecto también pueden definir una configuración predeterminada que aplique a cada codespace para un repositorio que cree alguien más. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## Sincronización de ajustes

La configuración de ajustes te permite compartir configuraciones tales como configuraciones, atajos de teclado, fragmentos de código, extensiones y estados de IU entre máquinas e instancias de {% data variables.product.prodname_vscode %}.

Para habilitar la Sincronización de Ajustes, en la esquina inferior izquierda de la Barra de Actividad, selecciona {% octicon "gear" aria-label="The gear icon" %} y haz clic en **Encender la Sincronización de Ajustes…**. En la caja de diálogo, selecciona los ajustes que te gustaría sincronizar.

![La opción de sincronización de ajustes en el menú de administración](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obtener más información, consulta la [Guía de sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync) en la documentación de {% data variables.product.prodname_vscode %}.

## Dotfiles

Los Dotfiles son archivos y carpetas de sistemas parecidos a Unix que comienzan con `.` y que controlan la configuración de aplicaciones y shells de tu sistema. Puedes alamacenar y administrar tus dotfiles en un repositorio en {% data variables.product.prodname_dotcom %}. Para obtener consejos y tutoriales sobre qué incluir en tu repositorio de dotfiles, consulta la sección de [GitHub does dotfiles](https://dotfiles.github.io/).

Tu repositorio dotfiles puede incluir los alias de tu shell y tus preferencias, cualquier herramienta que quieras instalar o cualquier otra personalización del codespace que quieras hacer.

Puedes configurar los {% data variables.product.prodname_codespaces %} para que utilicen los dotfiles de cualquier repositorio que te pertenezca si seleccionas el repositorio en tus [ajustes personales de {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces).

Cuando creas un codespace nuevo, {% data variables.product.prodname_dotcom %} clona tu repositorio seleccionado hacia el ambiente del codespace, y busca uno de los siguientes archivos para configurar el ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Si no se encuentra ninguno de estos archivos o carpetas en el repositorio de dotfiles que seleccionaste comenzando con `.`, estos se enlazan simbólicamente al directorio de `~` o `$HOME` de un codespace.

Cualquier cambio al repositorio de dotfiles que seleccionaste se aplicará únicamente a cada codespace nuevo y no afectará a ningún codespace existente.

{% note %}

**Nota:** Actualmente, {% data variables.product.prodname_codespaces %} no es compatible con la personalización de la configuración de _Usuario_ para el editor de {% data variables.product.prodname_vscode %} con tu repositorio de `dotfiles`. Puedes configurar ajustes predeterminados de _Workspace_ y _Remote [Codespaces]_ para un proyecto específico en el repositorio de éste. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)".

{% endnote %}

### Habilitar tu repositorio de dotfiles para {% data variables.product.prodname_codespaces %}

Puedes utilizar tu repositorio de dotfiles seleccionado para personalizar tu ambiente de {% data variables.product.prodname_codespaces %}. Una vez que elijas tu repositorio de dotfiles, puedes agregar tus scripts, preferencias y configuraciones a este. Después, necesitarás habilitar tus dotfiles desde tu página personal de ajustes de {% data variables.product.prodname_codespaces %}.

{% warning %}

**Advertencia:** Dotfiles tiene la capacidad de ejecutar scripts arbitrarios, lo cual podría contener código malicioso inesperado. Antes de instalar un repositorio de dotfiles, te recomendamos verificar los scripts para asegurarte de que no realicen acciones inesperadas.

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Dotfiles"; selecciona **Instalar los dotfiles automáticamente** para que {% data variables.product.prodname_codespaces %} instale tus dotfiles automáticamente en cada codespace nuevo que crees. ![Instalar dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Elige el repositorio desde el cual quieras instalar dotfiles. ![Seleccionar un repositorio de dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Puedes agregar más scripts, preferencias o archivos de configuración a tu repositorio de dotfiles o editar los archivos existentes cuando lo desees. Solo los codespaces nuevos tomarán los cambios a los ajustes.

Si tu codespace no puede recoger los ajustes de configuración de los dotfiles, consulta la sección "[Solucionar problemas de dotfiles para {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)".

## Otros ajustes disponibles

También puedes personalizar los {% data variables.product.prodname_codespaces %} utilizando [ajustes de {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces) adicionales:

- Para configurar tu región predeterminada, consulta la sección "[Configurar tu región predeterminada para los {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".
- Para configurar tu editor, consulta la sección "[Configurar tu editor predeterminado para los {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
- Para agregar secretos cifrados, consulta la sección "[Administrar secretos cifrados para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)".
- Para habilitar la verificación de GPG, consulta la sección "[Administrar la verificación de GPG para los {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".
- To allow your codespaces to access other repositories, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."

## Leer más

* "[Crear un repositorio nuevo](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)".
