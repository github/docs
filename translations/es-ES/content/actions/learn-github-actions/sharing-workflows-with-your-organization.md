---
title: Compartir flujos de trabajo con tu organización
shortTitle: Compartir flujos de trabajo con tu organización
intro: 'Aprende cómo puedes utilizar características de la organización para colaborar con tu equipo al compartir plantillas de flujos de trabajo, secretos y ejecutores auto-hospedados.'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Resumen

Si necesitas compartir flujos de trabajo y otras características de {% data variables.product.prodname_actions %} con tu equipo, entonces considera colaborar dentrod e una organización de {% data variables.product.prodname_dotcom %}. Una organización te permite almacenar centralmente y administrar secretos, artefactos y ejecutores auto-hospedados. También puedes crear plantillas de flujo de trabajo en el repositorio de `.github` y compartirlas con otros usuarios en tu organización.

### Crear una plantilla de flujo de trabajo

Los usuarios con acceso de escritura en el repositorio `.github` de la organización pueden crear plantillas de flujo de trabajo. Los miembros de la organización que tengan permisos para crear flujos de trabajo podrán entonces utilizar estas plantillas. Las plantillas de flujo de trabajo pueden utilizarse para crear flujos de trabajo nuevos en los repositorios públicos de una organización; para utilizar estas plantillas para crear flujos de trabajo en repositorios privados, la organización deberá pertenecer a un plan empresarial.

Este procedimiento muestra cómo crear una plantilla de flujo de trabajo y un archivo de metadatos. El archivo de metadatos describe cómo se presenta la plantilla a los usuarios cuando están creando un flujo de trabajo nuevo.

1. En caso de que no exista previamente, crea en tu organización un repositorio público nuevo que se llame `.github`.
2. Crea un directorio que se llame `workflow-templates`.
3. Crea tu nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

   Si necesitas referirte a la rama predeterminada de un repositorio, puedes utilizar el marcador de posición `$default-branch`. Cuando se crea un flujo de trabajo utilizando tu plantilla, el marcador de posición se reemplazará automáticamente con el nombre de la rama predeterminada del repositorio.

   Por ejemplo, este archivo de nombre `octo-organization-ci.yml` ilustra un flujo de trabajo básico.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Crea un archivo de metadatos dentro del directorio `workflow-templates`. El archivo de metadatos debe tener el mismo nombre que el archivo de flujo de trabajo, pero en vez de tener la extensión `.yml`, este deberá encontrarse adjunto en `.properties.json`. Por ejemplo, este archivo que se llama `octo-organization-ci.properties.json` contiene los metadatos para un archivo de flujo de trabajo de nombre `octo-organization-ci.yml`:
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Requerido.** El nombre de la plantilla de flujo de trabajo. Este se muestra en la lista de plantillas disponibles.
   * `description` - **Requerido.** La descripción de la plantilla de flujo de trabajo. Este se muestra en la lista de plantillas disponibles.
   * `iconName` - **Requerido.** Define un icono en la lista de plantillas para la entrada del flujo de trabajo. El `iconName` debe ser un icono en SVG del mismo nombre y se debe almacenar en el directorio `workflow-templates`. Por ejemplo, un archivo de tipo SVG que se nombre `example-icon.svg` se referenciará como `example-icon`.
   * `categories` - **Opcional.** Define la categoría de lenguaje del flujo de trabajo. Cuando un usuario visualiza las plantillas disponibles, aquellas que empaten con el mismo lenguaje se presentarán con mayor prominencia. Para obtener información sobre las categorías de lenguaje disponibles, consulta https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que se utilice la plantilla si el repositorio del usuario contiene un archivo en su directorio raíz, el cual empate con una expresión regular definida.

Para agregar otra plantilla de flujo de trabajo, agrega tus archivos al mismo directorio de `workflow-templates`. Por ejemplo:

![Archivos de plantilla de flujo de trabajo](/assets/images/help/images/workflow-template-files.png)

### Utilizar una plantilla de flujo de trabajo desde tu organización

Este procedimiento ilustra cómo un miembro de tu organización puede encontrar y utilizar una plantilla de flujo de trabajo para crear un flujo de trabajo nuevo. Cualquiera que sea un miembro de la organización podrá utilizar las plantillas de flujo de trabajo de ésta.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Si tu repositorio ya cuenta con flujos de trabajo: En la esquina superior izquierda, da clic sobre **Flujo de trabajo nuevo**. ![Crear un nuevo flujo de trabajo](/assets/images/help/repository/actions-new-workflow.png)
1. Tus plantillas de flujo de trabajo de la organización se ubican en su propia sección, la cual se titula "Flujos de trabajo creados por _nombre de la organización_". Debajo del nombre de la plantilla que deseas utilizar, da clic en **Configurar este flujo de trabajo**. ![Configurar este flujo de trabajo](/assets/images/help/settings/actions-create-starter-workflow.png)


### Compartir secretos dentro de una organización

Puedes admnistrar tus secretos centralmente dentro de una organización y hacerlos disponibles para repositorios específicos. Esto también significa que púedes actualizar un secreto en una ubicación y hacer que el cambio aplique a todos los flujos de trabajo del repositorio que lo utilicen.

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Da clic en **Secreto nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el **Valor** para tu secreto.
1. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso.
1. Haz clic en **Agregar secreto** (Agregar secreto).

### Compartir ejecutores auto-hospedados dentro de una organización

Los administradores de las organizaciones pueden agregar sus ejecutores auto-hospedados a grupos y luego crear políticas que controlen qué repositorios pueden acceder al grupo.

Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


### Pasos siguientes

Para seguir aprendiendo sobre {% data variables.product.prodname_actions %}, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)".
