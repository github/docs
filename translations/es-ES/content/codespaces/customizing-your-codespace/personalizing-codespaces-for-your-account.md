---
title: Personalizar Codespaces para tu cuenta
intro: 'Puedes personalizar {% data variables.product.prodname_codespaces %} utilizando un repositorio de `dotfiles` en {% data variables.product.product_name %} o utilizando la sincronización de ajustes.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Personalizar tu cuenta
---


## Acerca de personalizar los {% data variables.product.prodname_codespaces %}

Cuando utilizas cualquier ambiente de desarrollo, personalizar las configuraciones y herramientas de acuerdo con tus preferencias y flujos de trabajo es un paso importante. {% data variables.product.prodname_codespaces %} permite dos formas principales de personalizar tus codespaces.

- [Sincronización de ajustes](#settings-sync) - Puedes utilizar y compartir los ajustes de {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} y otras instancias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – Puedes utilizar un repositorio público de `dotfiles` para especificar scripts, preferencias de shell y otras configuraciones.

La personalización de {% data variables.product.prodname_codespaces %} aplica a cualquier codespace que crees.

Los mantenendores de proyecto también pueden definir una configuración predeterminada que aplique a cada codespace para un repositorio que cree alguien más. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## Sincronización de ajustes

La configuración de ajustes te permite compartir configuraciones tales como configuraciones, atajos de teclado, fragmentos de código, extensiones y estados de IU entre máquinas e instancias de {% data variables.product.prodname_vscode %}.

Para habilitar la Sincronización de Ajustes, en la esquina inferior izquierda de la Barra de Actividad, selecciona {% octicon "gear" aria-label="The gear icon" %} y haz clic en **Encender la Sincronización de Ajustes…**. Desde el diálogo, selecciona qué ajustes te gustaría sincronizar.

![La opción de sincronización de ajustes en el menú de administración](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obtener más información, consulta la [Guía de sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync) en la documentación de {% data variables.product.prodname_vscode %}.

## Dotfiles

Los Dotfiles son archivos y carpetas de sistemas parecidos a Unix que comienzan con `.` y que controlan la configuración de aplicaciones y shells de tu sistema. Puedes alamacenar y administrar tus dotfiles en un repositorio en {% data variables.product.prodname_dotcom %}. Para encontrar consejos y tutoriales sobre qué incluir en tu repositorio de `dotfiles`, consulta la sección [GitHub maneja dotfiles](https://dotfiles.github.io/).

Si tu cuenta de usuario en {% data variables.product.prodname_dotcom %} es propietaria de un repositorio público que se llama `dotfiles`, {% data variables.product.prodname_dotcom %} puede utilizarlo automáticamente para personalizar tu ambiente de codespaces, una vez que se habilite desde tus [ajustes personales de Codespaces](https://github.com/settings/codespaces). Actualmente, no son compatibles los repositorios `dotfiles` privados.

Tu repositorio `dotfiles` puede incluir los alias de tu shell y tus preferencias, cualquier herramienta que quieras instalar, o cualquier otra personalización del codespace que quieras hacer.

Cuando creas un codespace nuevo, {% data variables.product.prodname_dotcom %} clona tu repositorio `dotfiles` hacia el ambiente del codespace, y busca uno de los siguientes archivos para configurar el ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Si no encuentra alguno de estos archivos, entonces cualquier archivo o carpeta en `dotfiles` que comience con `.` se enlazará simbólicamente al directorio `~` o `$HOME` del codespace.

Cualquier cambio a tu repositorio `dotfiles` se aplicará únicamente a cada codespace nuevo, y no afectará a ningún codespace existente.

{% note %}

**Nota:** Actualmente, {% data variables.product.prodname_codespaces %} no es compatible con la personalización de la configuración de _Usuario_ para el editor de {% data variables.product.prodname_vscode %} con tu repositorio de `dotfiles`. Puedes configurar ajustes predeterminados de _Workspace_ y _Remote [Codespaces]_ para un proyecto específico en el repositorio de éste. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)".

{% endnote %}

### Habilitar tu repositorio de dotfiles para {% data variables.product.prodname_codespaces %}

Puedes utilizar tu repositorio público de `dotfiles` para personalizar tu ambiente de {% data variables.product.prodname_codespaces %}. Una vez que configuras el repositorio, puedes agregar tus scripts, preferencias y configuraciones a él. Después, necesitarás habilitar tus dotfiles desde tu página personal de ajustes de {% data variables.product.prodname_codespaces %}.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Dotfiles", selecciona "Instalar dotfiles automáticamente" para que {% data variables.product.prodname_codespaces %} instale tus dotfiles automáticamente en cada codespace nuevo que crees. ![Instalar dotfiles](/assets/images/help/codespaces/install-dotfiles.png)

   {% note %}

   **Nota:** Esta opción solo se encuentra disponible si creaste un repositorio público de `dotfiles` para tu cuenta de usuario.

   {% endnote %}

Puedes agregar más scripts, preferencias o archivos de configuración a tu repositorio de dotfiles o editar los archivos existentes cuando lo desees. Solo los codespaces nuevos tomarán los cambios a los ajustes.

## Otros ajustes disponibles

También puedes personalizar los {% data variables.product.prodname_codespaces %} utilizando [Ajustes de codespaces](https://github.com/settings/codespaces) adicionales:

- Para configurar tu región predeterminada, consulta la sección "[Configurar tu región predeterminada para los {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)".
- Para configurar tu editor, consulta la sección "[Configurar tu editor predeterminado para los {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)".
- Para agregar secretos cifrados, consulta la sección "[Administrar secretos cifrados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)".
- Para habilitar la verificación de GPG, consulta la sección "[Administrar la verificación de GPG para los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".
- Para permitir que tus codespaces accedan a otros repositorios, consulta la sección "[Administrar el acceso y la seguridad de los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)".

## Leer más

* "[Crear un repositorio nuevo](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)".
