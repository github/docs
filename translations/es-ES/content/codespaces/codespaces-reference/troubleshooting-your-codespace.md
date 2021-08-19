---
title: Solucionar problemas de tu codespace
intro: Utiliza esta guía para ayudarte a solucionar los problemas comunes de tu codespace.
redirect_from:
  - /github/developing-online-with-github-codespaces/troubleshooting-your-codespace
  - /github/developing-online-with-codespaces/troubleshooting-your-codespace
  - /codespaces/working-with-your-codespace/troubleshooting-your-codespace
versions:
  free-pro-team: '*'
type: reference
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Limitantes conocidas

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

### Solución de problemas de {% data variables.product.prodname_vscode %}

Utiliza las **Propuestas** en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) para registrar o conocer las propuestas que hay sobre la experiencia con {% data variables.product.prodname_vscode %}.


### Solución de problemas para la configuración

{% data reusables.codespaces.recovery-mode %}

```
Este codespace se ejecuta acutalmente en modo de recuperación debido a un error del contenedor.
```

Revisa las bitácoras de creación, actualiza la configuración como lo requieras y ejecuta **Codespaces: Rebuild Container** en la paleta de comandos para volver a intentarlo. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

### Solución de problemas de dotfiles

- Asegúrate que tu repositorio de dotfiles sea público. Si tienes secretos o datos sensibles que quieras utilizar en tu codespace, utiliza los [Secretos de codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) en vez de los dotfiles privados.
- Verifica `/workspaces/.codespaces/.persistedshare/dotfiles` para ver si se clonaron tus dotfiles.
  - Si se clonaron tus dotfiles, intenta volver a ejecutar tu script de instalación manualmente para verificar si es ejecutable.
  - Si tus dotfiles ni se clonaron, verifica `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver si hubo un problema al clonarlos.
- Verifica `/workspaces/.codespaces/.persistedshare/creation.log` para encontrar problemas posibles. Como alternativa, puedes ver el `creation.log` si navegas a la paleta de comandos e ingresas **Codespaces: View Creation Log**.


### Solución de problemas del buscador

Si encuentras problemas al utilizar un buscador que no se base en Chromium, intenta cambiar a uno que sí se base en él, o revisa los problemas conocidos de tu buscador en el repositorio `microsoft/vscode` buscando los problemas etiquetados con el nombre del buscador, tales como [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) o [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si encuentras problemas al utilizar un buscador basado en Chromium, puedes revisar si estás experimentando otro problema conocido con {% data variables.product.prodname_vscode %} en el repositorio [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).

### Solución de problemas el almacenamiento de contenedores

Cuando creas un codespace, este tiene una cantidad de almacenamiento finita y, con el tiempo, podría que necesites liberar espacio. Intenta cualquiera de los siguientes elementos para liberar espacio de almacenamiento.

- Elimina los paquetes que ya no se utilizan con `sudo apt autoremove`
- Limpia el caché de apt utilizando `sudo apt clean`
- Borra los archivos innecesarios como artefactos de compilación y bitácoras (estos dependen mucho del proyecto)
- Consulta los 10 archivos más grandes en el codespace: `sudo find / -printf '%s %p\n'| sort -nr | head -10`

Más opciones destructivas:
- Elimina las imágenes de Docker, redes y contenedores sin utilizar con `docker system prune` (adjunta una `-a` si quieres eliminar todas las imágenes, y `--volumes` si quieres eliminar todos los volúmenes)
- Elimina los archivos no rastreados del árbol de trabajo: `git clean -i`

### Contáctanos

Si aún necesitas ayuda, puedes contactarnos. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)".
