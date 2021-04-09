1. Crea un token de acceso personal nuevo (PAT) con los alcances adecuados para las tareas que quieres realizar. Si tu organización requiere SSO, debes hablitarlo para tu token nuevo.
  {% warning %}

  **Note:** By default, when you select the `write:packages` scope for your personal access token (PAT) in the user interface, the `repo` scope will also be selected. The `repo` scope offers unnecessary and broad access, which we recommend you avoid using for GitHub Actions workflows in particular. For more information, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)." As a workaround, you can select just the `write:packages` scope for your PAT in the user interface with this url: `https://github.com/settings/tokens/new?scopes=write:packages`.

  {% endwarning %}

    - Selecciona el alcance `read:packages` para descargar imágenes de contenedor y leer sus metadatos.
    - Selecciona el alcance `write:packages` para descargar y cargar imágenes de contenedor y leer y escribir sus metadatos.
    - Selecciona el alcance `delete:packages` para borrar las imágenes de contenedor.

  Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".

2. Guarda tu PAT. Te recomendamos guardar tu PAT como una variable de ambiente.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Utilizando el CLI para tu tipo de contenedor, ingresa en el
servicio del {% data variables.product.prodname_github_container_registry %} en `ghcr.io`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
