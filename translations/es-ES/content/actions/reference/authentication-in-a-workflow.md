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
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca del secreto del `GITHUB_TOKEN`

{% data variables.product.prodname_dotcom %} automáticamente crea un secreto de `GITHUB_TOKEN` para utilizar en tu flujo de trabajo. Puedes usar el `GITHUB_TOKEN` para autenticarte en una ejecución de flujo de trabajo.

Cuando habilitas {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala una {% data variables.product.prodname_github_app %} en tu repositorio. El secreto del `GITHUB_TOKEN` es un token de acceso de instalación de {% data variables.product.prodname_github_app %}. Puedes usar el token de acceso de instalación para autenticarte en nombre de la {% data variables.product.prodname_github_app %} instalado en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para obtener más información, consulta "[Permisos para el `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Antes de que comience cada job, {% data variables.product.prodname_dotcom %} extrae un token de acceso de instalación para éste. El token expira cuando el trabajo termina.

El token también está disponible en el contexto `github.token`. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

### Usar el `GITHUB_TOKEN` en un flujo de trabajo

Puedes utilizar el `GITHUB_TOKEN` si utilizas la sintaxis estándar para referenciar secretos: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Los ejemplos de uso del `GITHUB_TOKEN` incluyen pasar el token como entrada a una acción o utilizarlo para hacer una solicitud autenticada a la API de {% data variables.product.prodname_dotcom %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**Importante:** Las acciones pueden acceder al `GITHUB_TOKEN` mediante el contexto `github.token` aún si el flujo de trabajo no pasa el `GITHUB_TOKEN` específicamente a la acción. Como buena práctica de seguridad. siempre deberías asegurarte de que las acciones solo tengan el acceso mínimo que necesitan para limitar los permisos que se le otorgan al `GITHUB_TOKEN`. Para obtener más información, consulta "[Permisos para el `GITHUB_TOKEN`](#permissions-for-the-github_token)."

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Ejemplo 1: pasar el `GITHUB_TOKEN` como entrada

Este flujo de trabajo de ejemplo usa la [acción de etiquetadora](https://github.com/actions/labeler), que necesita el `GITHUB_TOKEN` como el valor para el parámetro de entrada `repo-token`:

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

#### Ejemplo 2: llamar a la API de REST

Puedes usar el `GITHUB_TOKEN` para realizar llamadas API autenticadas. Este flujo de trabajo de ejemplo crea una propuesta mediante la API REST de {% data variables.product.prodname_dotcom %}:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: {% raw %}
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }' \
          --fail{% endraw %}
```

### Permisos para el `GITHUB_TOKEN`

Para obtener mpas información sobre las terminales de la API a los que pueden acceder las {% data variables.product.prodname_github_apps %} con cada permiso, consulta la sección "[ Permisos de las {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
La siguiente tabla muestra los permisos que se otorgan al `GITHUB_TOKEN` predeterminadamente. Las personas con permisos administrativos en una empresa, organización o repositorio pueden configurar los permisos predeterminados para que sean permisivos o restringidos. Para obtener más información sobre cómo configurar los permisos predeterminados del `GITHUB_TOKEN` para tu empresa, organización o repositorio, consulta las secciones "[Requerir políticas de las {% data variables.product.prodname_actions %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)", "[Inhabilitar o limitar a las {% data variables.product.prodname_actions %} en tu organización](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)" o "[Inhabilitar o limitar a las {% data variables.product.prodname_actions %} en tu repositorio](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)".

| Ámbito                    | Acceso predeterminado<br>(permisivo) | Acceso predeterminado<br>(restringido) | Acceso máximo<br>de los repos bifurcados |
| ------------------------- | ------------------------------------------ | -------------------------------------------- | ---------------------------------------------- |
| acciones                  | lectura/escritura                          | ninguno                                      | lectura                                        |
| verificaciones            | lectura/escritura                          | ninguno                                      | lectura                                        |
| contenidos                | lectura/escritura                          | lectura                                      | lectura                                        |
| implementaciones          | lectura/escritura                          | ninguno                                      | lectura                                        |
| propuestas                | lectura/escritura                          | ninguno                                      | lectura                                        |
| metadatos                 | lectura                                    | lectura                                      | lectura                                        |
| paquetes                  | lectura/escritura                          | ninguno                                      | lectura                                        |
| solicitudes de extracción | lectura/escritura                          | ninguno                                      | lectura                                        |
| proyectos de repositorio  | lectura/escritura                          | ninguno                                      | lectura                                        |
| eventos de seguridad      | lectura/escritura                          | ninguno                                      | lectura                                        |
| estados                   | lectura/escritura                          | ninguno                                      | lectura                                        |
{% else %}
| Ámbito                    | Tipo de acceso    | Acceso por repositorios bifurcados |
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
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
#### Modificar los permisos del `GITHUB_TOKEN`

Puedes modificar los permisos del `GITHUB_TOKEN` en archivos de flujo de trabajo individuales. Si los permisos predeterminados del `GITHUB_TOKEN` son restrictivos, podría que necesites elevar los permisos para permitir que las acciones y comandos se ejecuten con éxito. Si los permisos predeterminados son permisivos, puedes editar el archivo de flujo de trabajo para eliminar algunos de ellos del `GITHUB_TOKEN`. Como buena práctica de seguridad, debes otorgar al `GITHUB_TOKEN` el menor acceso requerido.

Puedes ver los permisos que tuvo el `GITHUB_TOKEN` para un job específico en la sección "Configurar job" de la bitácora de la ejecución de flujo de trabajo. Para obtener más información, consulta la sección "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs)".

Puedes utilizar la clave `permissions` en tu archivo de flujo de trabajo para modificar los permisos del `GITHUB_TOKEN` para un flujo de trabajo entero o para jobs individuales. Esto te permite configurar los permisos mínimos requeridos para un flujo de trabajo o job. Cuando se utiliza la clave `permissions`, todos los permisos no especificados se configuran como "sin acceso", con la excepción del alcance `metadata`, el cual siempre obtiene acceso de lectura.

{% data reusables.github-actions.forked-write-permission %}

Los dos ejemplos de flujo de trabajo que se mostraron anteriormente en este artículo muestran como se utiliza la clave `permissions` a nivel de flujo de trabajo y de job. En el [Ejemplo 1](#example-1-passing-the-github_token-as-an-input) se especifican los dos permisos para todo el flujo de trabajo. En el [Ejemplo 2](#example-2-calling-the-rest-api) se otorga acceso de escritura para un alcance para un solo job.

Para conocer todos los detalles de la clave `permissions`, consulta la sección "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)".

##### Cómo se calculan los permisos para un job de un flujo de trabajo

Los permisos para el `GITHUB_TOKEN` se configuran inicialmente con los ajustes predeterminados para la empresa, organización o repositorio. Si lo predeterminado se configura para los permisos restringidos en cualquiera de estos niveles, esto aplicará a los repositorios relevantes. Por ejemplo, si eliges las restricciones predeterminadas a nivel organizacional, entonces todos los repositorios de la organización utilizarán estos permisos restringidos como los predeterminados. Entonces, los permisos se ajustarán con base en cualquier configuración dentro del archivo de flujo de trabajo, primero a nivel del flujo de trabajo y luego al nivel de los jobs. Por último, si una solilcitud de cambios activó el flujo de trabajo desde un repositorio bifurcado y no se selecciona el ajuste de **Enviar tokens de escritura a los flujos de trabajo desde las solicitudes de cambios**, los permisos se ajustarán para cambiar cualquier permiso de escritura a solo lectura.

#### Otorgar permisos adicionales
{% endif %}

Si necesitas un token que requiere permisos que no están disponibles en el `GITHUB_TOKEN`, puedes crear un token de acceso personal y establecerlo como un secreto en tu repositorio:

1. Usa o crea un token con los permisos adecuados para ese repositorio. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
1. Añade el token como un secreto en el repositorio de tu flujo de trabajo y haz referencia a él mediante la sintaxis {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
