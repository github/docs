---
title: Autenticación automática de tokens
intro: '{% data variables.product.prodname_dotcom %} proporciona un token que puedes usar para autenticar en nombre de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107041'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del secreto `GITHUB_TOKEN`

Al inicio de cada ejecución de flujo de trabajo, {% data variables.product.prodname_dotcom %} crea automáticamente un secreto `GITHUB_TOKEN` único para usarlo en el flujo de trabajo. Puede usar `GITHUB_TOKEN` para autenticarse en una ejecución de flujo de trabajo.

Cuando habilitas {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} instala una {% data variables.product.prodname_github_app %} en tu repositorio. El secreto `GITHUB_TOKEN` es un token de acceso de instalación de {% data variables.product.prodname_github_app %}. Puedes usar el token de acceso de instalación para autenticarte en nombre de la {% data variables.product.prodname_github_app %} instalado en tu repositorio. Los permisos del token están limitados al repositorio que contiene tu flujo de trabajo. Para más información, vea "[Permisos para `GITHUB_TOKEN`](#permissions-for-the-github_token)".

Antes de que comience cada job, {% data variables.product.prodname_dotcom %} extrae un token de acceso de instalación para éste. {% data reusables.actions.github-token-expiration %}

El token también está disponible en el contexto `github.token`. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts#github-context)".

## Uso de `GITHUB_TOKEN` en un flujo de trabajo

Puede usar `GITHUB_TOKEN` mediante la sintaxis estándar para hacer referencia a secretos: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Los ejemplos de uso de `GITHUB_TOKEN` incluyen pasar el token como entrada a una acción, o bien usarlo para realizar una solicitud autenticada a la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.

{% note %}

**Importante:** Una acción puede acceder a `GITHUB_TOKEN` mediante el contexto `github.token` incluso si el flujo de trabajo no pasa explícitamente `GITHUB_TOKEN` a la acción. Como procedimiento de seguridad correcto, siempre debe asegurarse de que las acciones solo tengan el acceso mínimo necesario para limitar los permisos que se conceden a `GITHUB_TOKEN`. Para más información, vea "[Permisos para `GITHUB_TOKEN`](#permissions-for-the-github_token)".

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### Ejemplo 1: Pasar `GITHUB_TOKEN` como entrada

{% data reusables.actions.github_token-input-example %}

### Ejemplo 2: llamar a la API de REST

Puede usar `GITHUB_TOKEN` para realizar llamadas API autenticadas. Este flujo de trabajo de ejemplo crea una propuesta mediante la API REST del {% data variables.product.prodname_dotcom %}:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Permisos para `GITHUB_TOKEN`

Para obtener información sobre los puntos de conexión de la API a los que {% data variables.product.prodname_github_apps %} puede acceder con cada permiso, vea "[Permisos de {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)".

En la tabla siguiente, se muestran los permisos concedidos al `GITHUB_TOKEN` de manera predeterminada. Las personas con permisos administrativos en una {% ifversion not ghes %}empresa, organización o repositorio{% else %}organización o repositorio{% endif %} pueden configurar los permisos predeterminados para que sean permisivos o restringidos. Para obtener información sobre cómo establecer los permisos predeterminados para `GITHUB_TOKEN` en la empresa, la organización o el repositorio, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)", "[Deshabilitación o limitación de {% data variables.product.prodname_actions %} para la organización](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)" o "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)".

| Ámbito         | Acceso predeterminado<br>(permisivo) | Acceso predeterminado<br>(restringido) | Acceso máximo<br>por repositorios bifurcados |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | lectura/escritura  | ninguno | leer |
| checks        | lectura/escritura  | ninguno | leer |
| contenido      | lectura/escritura  | leer | leer |
| deployments   | lectura/escritura  | ninguno | leer |{% ifversion fpt or ghec %}
| id-token      | ninguno        | ninguno | leer |{% endif %}
| issues        | lectura/escritura  | ninguno | leer |
| metadata      | leer        | leer | leer |
| packages      | lectura/escritura  | ninguno | leer |
| páginas         | lectura/escritura  | ninguno | leer |
| pull-requests | lectura/escritura  | ninguno | leer |
| repository-projects | lectura/escritura | ninguno | leer |
| security-events     | lectura/escritura | ninguno | leer |
| statuses      | lectura/escritura  | ninguno | leer |

{% data reusables.actions.workflow-runs-dependabot-note %}

### Modificación de los permisos para `GITHUB_TOKEN`

Puede modificar los permisos de `GITHUB_TOKEN` en archivos de flujo de trabajo individuales. Si los permisos predeterminados para `GITHUB_TOKEN` son restrictivos, es posible que tenga que elevarlos para permitir que algunas acciones y comandos se ejecuten correctamente. Si los permisos predeterminados son permisivos, puede editar el archivo de flujo de trabajo para quitar algunos permisos de `GITHUB_TOKEN`. Como práctica de seguridad recomendada, debe conceder el permiso de acceso menos necesario a `GITHUB_TOKEN`.

Puede ver los permisos que ha tenido `GITHUB_TOKEN` para un trabajo específico en la sección "Configuración del trabajo" del registro de ejecución de flujo de trabajo. Para más información, vea "[Uso de registros de ejecución de flujo de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs)".

También puede usar la clave `permissions` en el archivo de flujo de trabajo a fin de modificar los permisos para `GITHUB_TOKEN` en un flujo de trabajo completo o en trabajos individuales. Esto te permite configurar los permisos mínimos requeridos para un flujo de trabajo o job. Cuando se usa la clave `permissions`, todos los permisos no especificados se establecen en Sin acceso, a excepción del ámbito `metadata`, que siempre obtiene acceso de lectura.

{% data reusables.actions.forked-write-permission %}

En los dos ejemplos de flujo de trabajo mostrados antes en este artículo se muestra cómo se usa la clave `permissions` en el nivel de flujo de trabajo y en el nivel de trabajo. En el [Ejemplo 1](#example-1-passing-the-github_token-as-an-input), se especifican los dos permisos para todo el flujo de trabajo. En el [Ejemplo 2](#example-2-calling-the-rest-api), se concede acceso de escritura para un ámbito de un único trabajo.

Para obtener los detalles completos de la clave `permissions`, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)".

#### Cómo se calculan los permisos para un job de un flujo de trabajo

Los permisos para `GITHUB_TOKEN` se establecen inicialmente con los valores predeterminados para la empresa, organización o repositorio. Si lo predeterminado se configura para los permisos restringidos en cualquiera de estos niveles, esto aplicará a los repositorios relevantes. Por ejemplo, si eliges las restricciones predeterminadas a nivel organizacional, entonces todos los repositorios de la organización utilizarán estos permisos restringidos como los predeterminados. Entonces, los permisos se ajustarán con base en cualquier configuración dentro del archivo de flujo de trabajo, primero a nivel del flujo de trabajo y luego al nivel de los jobs. Por último, si una solicitud de incorporación de cambios ha desencadenado el flujo de trabajo desde un repositorio bifurcado y no se selecciona el valor **Enviar tokens de escritura a los flujos de trabajo desde las solicitudes de incorporación de cambios**, los permisos se ajustarán para cambiar los de escritura a solo lectura.

### Otorgar permisos adicionales

Si necesitas un token que requiere permisos que no están disponibles en `GITHUB_TOKEN`, puedes crear un {% data variables.product.pat_generic %} y configurarlo como un secreto en el repositorio:

1. Usa o crea un token con los permisos adecuados para ese repositorio. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
1. Agregue el token como un secreto en el repositorio del flujo de trabajo y use la sintaxis {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} para hacerle referencia. Para más información, vea ["Creación y uso de secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Información adicional

- "[Recursos en la API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)"
