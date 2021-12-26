---
title: Personalizar Codespaces para tu cuenta
intro: 'Puedes personalizar {% data variables.product.prodname_codespaces %} utilizando un repositorio de `dotfiles` en {% data variables.product.product_name %} o utilizando la sincronización de ajustes.'
permissions: 'Anyone can personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### Acerca de personalizar los {% data variables.product.prodname_codespaces %}

Cuando utilizas cualquier ambiente de desarrollo, personalizar las configuraciones y herramientas de acuerdo con tus preferencias y flujos de trabajo es un paso importante. {% data variables.product.prodname_codespaces %} permite dos formas principales de personalizar tus codespaces.

- [Sincronización de ajustes](#settings-sync) - Puedes utilizar y compartir los ajustes de {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} y otras instancias de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – Puedes utilizar un repositorio público de `dotfiles` para especificar scripts, preferencias de shell y otras configuraciones.

La personalización de {% data variables.product.prodname_codespaces %} aplica a cualquier codespace que crees.

Los mantenendores de proyecto también pueden definir una configuración predeterminada que aplique a cada codespace para un repositorio que cree alguien más. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

### Sincronización de ajustes

La configuración de ajustes te permite compartir configuraciones tales como configuraciones, atajos de teclado, fragmentos de código, extensiones y estados de IU entre máquinas e instancias de {% data variables.product.prodname_vscode %}.

La sincronización de ajustes está activada predeterminadamente. Para configurar cualquier ajuste, en la esquina inferior izquierda de la barra de actividad, selecciona el {% octicon "gear" aria-label="The gear icon" %} y haz clic en **La sincronización de ajustes está activa**. Desde el diálogo, puedes elegir configurar, mostrar los ajustes y datos o apagar la sincronización de ajustes.

![La opción de sincronización de ajustes en el menú de administración](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para obtener más información, consulta la [Guía de sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync) en la documentación de {% data variables.product.prodname_vscode %}.

### Dotfiles

Los Dotfiles son archivos y carpetas de sistemas parecidos a Unix que comienzan con `.` y que controlan la configuración de aplicaciones y shells de tu sistema. Puedes alamacenar y administrar tus dotfiles en un repositorio en {% data variables.product.prodname_dotcom %}. Para encontrar consejos y tutoriales sobre qué incluir en tu repositorio de `dotfiles`, consulta la sección [GitHub maneja dotfiles](https://dotfiles.github.io/).

Si tu cuenta de usuario en {% data variables.product.prodname_dotcom %} es propietaria de un repositorio público llamado `dotfiles`, {% data variables.product.prodname_dotcom %} utilizará este repositorio automáticamente para personalizar el ambiente de tu codespace. Actualmente, no son compatibles los repositorios `dotfiles` privados.

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

También puedes configurar los ajustes para que tu cuenta de usuario agregue secretos cifrados, habilite la verificación de GPG y permita a tus codespaces acceder a otros repositorios. Para obtener más información, consulta las secciones "[Administrar los secretos cifrados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Administrar la verificación de GPG para los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)", y "[Ad,omostrar el acceso y la seguridad para los {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)".

### Leer más

* "[Crear un repositorio nuevo](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)".
