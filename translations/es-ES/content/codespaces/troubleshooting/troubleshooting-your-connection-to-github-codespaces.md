---
title: Troubleshooting your connection to GitHub Codespaces
intro: 'Ayuda para resolver problemas para conectarse a {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Conexión
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
---

## 503 codespace service unavailable

Los codespaces están configurados para detenerse después de pasar 30 minutos sin actividad. Si intentas interactuar con un codespace después de que se detuvo, podrías ver un error de tipo `503 service unavailable`.

- Si se muestra un botón de **Inicio** en {% data variables.product.prodname_vscode %} o en tu ventana de buscador, haz clic en **Inicio** para volverte a conectar al codespace.
- Restablece tu codespace volviendo a cargar la ventana. Desde la [paleta de comandos](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) en {% data variables.product.prodname_vscode %}, haz clic en **Desarrollador: Recargar Ventana**.

## El buscador no se puede conectar

Es posible que en ocasiones no puedas acceder a un codespace desde tu buscador. Si esto sucede, dirígete a https://github.com/codespaces e intenta conectarte al codespace desde esa página.

  - Si el codespce no se lista en esa página, verifica que seas el propietario del codespace al cual intentas conectarte. Solo puedes abrir un codespace que tú mismo hayas creado. Las URL de tus codespaces siempre incluyen tu manejo de {% data variables.product.company_short %}.
  - Si el codespace se enlista pero no puedes conectarte desde esa página, revisa si puedes conectarte utilizando un buscador diferente.

Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

## La extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %} no puede conectarse

Si no puedes conectarte a un codespace desde la versión de escritorio de {% data variables.product.prodname_vscode %}, utiliza los siguientes pasos de solución de problemas.

1. Verifica que tengas instalada la última versión de {% data variables.product.prodname_github_codespaces %}. La extensión es un lanzamiento de vista previa y se lanzan actualizaciones frecuentemente.
   1. En {% data variables.product.prodname_vscode %}, muestra la pestaña de "Extensiones".
   2. Selecciona la extensión de {% data variables.product.prodname_codespaces %} para mostrar la página de resumen de extensiones.
   3. Si hay alguna actualización disponible, se mostrará un botón. Haz clic en **Actualizar a X.X.X** para actualizar a la versión más reciente.
2. Verifica si estás utilizando la compilación estable de {% data variables.product.prodname_vscode %} o el lanzamiento de [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) (con actualizaciones nocturnas). Si estás utilizando el lanzamiento de insiders, intenta instalar la [compilación estable](https://code.visualstudio.com/).
3. Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

### El codespace tiene problemas de latencia

Si el codespace se ve particularmente lento o tiene problemas de latencia, es posible que se haya creado en una región lejos de ti. Para resolverlo, puedes [configurar manualmente tu región de {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
