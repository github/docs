---
title: Solución de problemas de dotfiles para los Codespaces
intro: Pasos de solución de problemas para los problemas comunes con los dotfiles.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
---

Si tu codespace falla en tomar ajustes de configuración de dotfiles, debes trabajar con los siguientes pasos de depuración.

1. Habilita los dotfiles seleccionando **Instalar los dotfiles automáticamente** en [los ajustes de tus Codespaces personales](https://github.com/settings/codespaces).

   ![La opción de 'Automatically install dotfiles'](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Verifica `/workspaces/.codespaces/.persistedshare/dotfiles` para ver si se clonaron tus dotfiles.
   - Si se clonaron tus dotfiles, intenta volver a ejecutar tu script de instalación manualmente para verificar que sea ejecutable.
   - Si tus dotfiles no se clonaron, revisa `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver si hubo un problema al clonarlos.
1. Verifica `/workspaces/.codespaces/.persistedshare/creation.log` para encontrar problemas posibles. Para obtener más información, consulta las [bitácoras de creación](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Si la configuración de tus dotfiles se tomó correctamente, pero parte de esta es incompatible con los codespaces, utiliza la variable de ambiente `$CODESPACES` para agregar una lógica condicional para los ajustes de configuración específicos de los codespaces.
