1. Crea un token de acceso personal nuevo (PAT) con los alcances adecuados para las tareas que quieres realizar. Si tu organización requiere SSO, debes hablitarlo para tu token nuevo.
  {% warning %}

  **Nota:** Si seleccionas el alcance `write:packages`, deselecciona el alcance `repo` cuando crees el PAT. El agregar un PAT con el alcance `repo` en forma de secreto en tu repositorio permite que todos los colaboradores del repositorio accedan a esta credencial. Esto otorga acceso adicional innecesario cuando un PAT con el alcance `repo` se utiliza dentro de una acción. Para obtener más información acerca de las mejores prácticas de seguridad, consulta la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

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
