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

1. Asegúrate que tu repositorio de dotfiles sea público. Si tienes secretos o datos sensibles que quieras utilizar en tu codespace, utiliza los [Secretos de codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) en vez de los dotfiles privados.
2. Enable dotfiles by selecting **Automatically install dotfiles** in [your personal Codespaces settings](https://github.com/settings/codespaces).

   ![The 'Automatically install dotfiles' option](/assets/images/help/codespaces/automatically-install-dotfiles.png)

3. Verifica `/workspaces/.codespaces/.persistedshare/dotfiles` para ver si se clonaron tus dotfiles.
   - Si se clonaron tus dotfiles, intenta volver a ejecutar tu script de instalación manualmente para verificar que sea ejecutable.
   - Si tus dotfiles no se clonaron, revisa `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver si hubo un problema al clonarlos.
4. Verifica `/workspaces/.codespaces/.persistedshare/creation.log` para encontrar problemas posibles. Para obtener más información, consulta las [bitácoras de creación](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Si la configuración de tus dotfiles se tomó correctamente, pero parte de esta es incompatible con los codespaces, utiliza la variable de ambiente `$CODESPACES` para agregar una lógica condicional para los ajustes de configuración específicos de los codespaces.
