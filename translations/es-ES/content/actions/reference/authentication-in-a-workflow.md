---
title: Autenticación en un flujo de trabajo
intro: '{% data variables.product.prodname_dotcom %} proporciona un token que puedes usar para autenticar en nombre de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca del secreto del `GITHUB_TOKEN`

{% data variables.product.prodname_dotcom %} automáticamente crea un secreto de `GITHUB_TOKEN` para utilizar en tu flujo de trabajo. Puedes usar el `GITHUB_TOKEN` para autenticarte en una ejecución de flujo de trabajo.

Cuando habilitas {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala una {% data variables.product.prodname_github_app %} en tu repositorio. El secreto del `GITHUB_TOKEN` es un token de acceso de instalación de {% data variables.product.prodname_github_app %}. Puedes usar el token de acceso de instalación para autenticarte en nombre de la {% data variables.product.prodname_github_app %} instalado en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para obtener más información, consulta "[Permisos para el `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Antes de que comience cada job, {% data variables.product.prodname_dotcom %} extrae un token de acceso de instalación para éste. El token expira cuando el trabajo termina.

El token también está disponible en el contexto `github.token`. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

### Usar el `GITHUB_TOKEN` en un flujo de trabajo

Para usar el secreto del `GITHUB_TOKEN`, debes hacer referencia a él en tu archivo de flujo de trabajo. Usar un token puede incluir pasar el token como entrada a una acción que lo requiere o hacer llamadas autenticadas de la API {% data variables.product.prodname_dotcom %}.

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Ejemplo de pase de `GITHUB_TOKEN` como una entrada

Este flujo de trabajo de ejemplo usa la [acción de etiquetadora](https://github.com/actions/labeler), que necesita el `GITHUB_TOKEN` como el valor para el parámetro de entrada `repo-token`:

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### Ejemplo de llamada a la API REST

Puedes usar el `GITHUB_TOKEN` para realizar llamadas API autenticadas. Este flujo de trabajo de ejemplo crea una propuesta mediante la API REST del {% data variables.product.prodname_dotcom %}:

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }'
  ```
  {% endraw %}

### Permisos para el `GITHUB_TOKEN`

Para obtener información sobre los puntos finales de la API a los que {% data variables.product.prodname_github_apps %} puede acceder con cada permiso, consulta la sección "[ Permisos de {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)".

| Permiso                   | Tipo de acceso    | Acceso por repositorios bifurcados |
| ------------------------- | ----------------- | ---------------------------------- |
| acciones                  | lectura/escritura | lectura                            |
| verificaciones            | lectura/escritura | lectura                            |
| contenidos                | lectura/escritura | lectura                            |
| implementaciones          | lectura/escritura | lectura                            |
| propuestas                | lectura/escritura | lectura                            |
| metadatos                 | lectura           | lectura                            |
| paquetes                  | lectura/escritura | lectura                            |
| solicitudes de extracción | lectura/escritura | lectura                            |
| proyectos de repositorio  | lectura/escritura | lectura                            |
| estados                   | lectura/escritura | lectura                            |

Si necesitas un token que requiere permisos que no están disponibles en el `GITHUB_TOKEN`, puedes crear un token de acceso personal y establecerlo como un secreto en tu repositorio:

1. Usa o crea un token con los permisos adecuados para ese repositorio. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
1. Añade el token como un secreto en el repositorio de tu flujo de trabajo y haz referencia a él mediante la sintaxis {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
