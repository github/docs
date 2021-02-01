---
title: Fusionar un repositorio ascendente dentro de tu bifurcación
intro: 'Si no tienes acceso de subida (escritura) en un repositorio ascendente, entonces puedes extraer confirmaciones de cambios de ese repositorio dentro tu propia bifurcación.'
redirect_from:
  - /articles/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Revisa la rama a la que deseas fusionar. Habitualmente, fusionarás en la rama predeterminada.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Extrae la rama deseada del repositorio ascendente. Este método conservará el historial de confirmación de cambios sin modificación.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Si hay conflictos, resuélvelos. Para obtener más información, consulta "[Abordar conflictos de fusión](/articles/addressing-merge-conflicts)".
6. Confirma la fusión.
7. Revisa los cambios y asegúrate que sean correctos.
8. Sube la fusión en tu repositorio de GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
