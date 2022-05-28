---
title: Importar un repositorio con el Importador GitHub
intro: 'Si tienes un proyecto alojado en otro sistema de control de versión, puedes importarlo automáticamente a GitHub usando la herramienta Importador GitHub.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Utilizar el importador de GitHub
---

{% tip %}

**Sugerencia:** El Importador GitHub no útil para todas las importaciones. Por ejemplo, si tu código existente está alojado en una red privada, nuestra herramienta no podrá acceder a él. En estos casos, recomendamos [importar usando la línea de comando](/articles/importing-a-git-repository-using-the-command-line) para los repositorios de Git o una [herramienta de migración de código fuente](/articles/source-code-migration-tools) externa para los proyectos importados desde otros sistemas de control de versión.

{% endtip %}

Si quieres empatar las confirmaciones en tu repositorio con las cuentas personales de GitHub de los autores durante la importación, asegúrate de que cada contribuyente de tu repositorio tenga una cuenta de GitHub antes de que comiences a hacerla.

{% data reusables.repositories.repo-size-limit %}

1. En la esquina superior derecha de cada página, haz clic en {% octicon "plus" aria-label="Plus symbol" %} y luego haz clic en **Import repository** (Importar repositorio). ![Opción de Importar repositorio en el menú del nuevo repositorio](/assets/images/help/importer/import-repository.png)
2. En "La URL del clon de tu repositorio antiguo", escribe la URL del proyecto que quieres importar. ![Campo de texto para la URL del repositorio importado](/assets/images/help/importer/import-url.png)
3. Elige tu cuenta personal o una organización para que sea propietaria del repositorio y luego escribe un nombre para este en GitHub. ![Menú del propietario del repositorio y campo del nombre del repositorio](/assets/images/help/importer/import-repo-owner-name.png)
4. Especifica si el repositorio nuevo debe ser *público* o *privado*. Para obtener más información, consulta "[Configurar la visibilidad de un repositorio](/articles/setting-repository-visibility)". ![Botones Radio para el repositorio público o privado](/assets/images/help/importer/import-public-or-private.png)
5. Revisa la información que ingresaste, luego haz clic en **Begin import** (Comenzar importación). ![Botón Begin import (Comenzar importación)](/assets/images/help/importer/begin-import-button.png)
6. Si tu proyecto antiguo requiere credenciales, escribe tu información de inicio de sesión para este y luego haz clic en **Enviar**. Si están habilitados el SSO de SAML o la 2FA para tu cuenta de usuario en el proyecto antiguo, ingresa un token de acceso personal con permisos de lectura al repositorio en el campo de "Contraseña" en vez de tu propia contraseña. ![Formulario de contraseña y botón Submit (Enviar) para proyecto protegido con contraseña](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Si hay múltiples proyectos alojados en la URL del clon de tu proyecto antiguo, elige el proyecto que quieras importar, luego haz clic en **Submit** (Enviar). ![Lista de proyectos para importar y botón Submit (Enviar)](/assets/images/help/importer/choose-project-importer.png)
8. Si tu proyecto contiene archivos mayores a 100 MB, elige si importarás los archivos grandes usando [Git Large File Storage](/articles/versioning-large-files), luego haz clic en **Continue** (Continuar). ![Menú de Git Large File Storage y botón Continue (Continuar)](/assets/images/help/importer/select-gitlfs-importer.png)

Recibirás un correo electrónico cuando se haya importado todo el repositorio.

## Leer más

- "[Actualizar la atribución del autor de la confirmación con Importador GitHub ](/articles/updating-commit-author-attribution-with-github-importer)"
