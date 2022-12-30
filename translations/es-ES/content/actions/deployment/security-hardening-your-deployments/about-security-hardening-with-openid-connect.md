---
title: Acerca del fortalecimiento de seguridad con OpenID Connect
shortTitle: Security hardening with OpenID Connect
intro: OpenID Connect permite que tus flujos de trabajo intercambien tokens de vida corta directamente desde tu proveedor de servicios en la nube.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192035'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen de OpenID connect

Los flujos de trabajo de las {% data variables.product.prodname_actions %} a menudo se diseñan para acceder a un proveedor de servicios en la nube (tales como AWS, Azure, GCP o HashiCorp Vault) para poder desplegar el software o utilizar los servicios de la nube. Antes de que un flujo de trabajo pueda acceder a estos recursos, este suministrará credenciales, tales como contraseña o token, al proveedor de servicios en la nube. Estas credenciales se almacenan a menudo como un secreto en {% data variables.product.prodname_dotcom %} y el flujo de trabajo presenta este secreto al proveedor de servicios en la nube cada que este se ejecuta. 

Sin embargo, el utilizar secretos preprogramados requiere que crees credenciales en el proveedor de servicios en la nube y luego que los dupliques en {% data variables.product.prodname_dotcom %} como un secreto. 

Con OpenID Connect (OIDC), puedes tomar un enfoque diferente si configuras tu flujo de trabajo para que solicite un token de acceso de vida corta directamente del proveedor de servicios en la nube. Tu proveedor de servicios en la nube también necesita ser compatible con OIDC en su extremo y debes configurar una relación de confianza que controle qué flujos de trabajo pueden solicitar los tokens de acceso. Los proveedores que actualmente son compatibles con OIDC incluyen a Amazon Web Services, Azure, Google Cloud Platform y AshiCorp Vault, entre otros.

### Beneficios de utilizar OIDC

Al actualizar tus flujos de trabajo para que utilicen tokens de OIDC, puedes adoptar las siguientes buenas prácticas de seguridad:

- **Sin secretos en la nube**: no tendrá que duplicar las credenciales de nube como secretos de {% data variables.product.prodname_dotcom %} de larga duración. En vez de esto, puedes configurar la confianza de OIDC en tu proveedor de servicios en la nube y luego actualizar tus flujos de trabajo para que soliciten un token de acceso de vida corta desde dicho proveedor mediante OIDC. 
- **Administración de la autenticación y la autorización**: tiene un control más preciso sobre cómo los flujos de trabajo pueden usar las credenciales, mediante las herramientas de autenticación (authN) y autorización (authZ) del proveedor de servicios en la nube para controlar el acceso a los recursos de nube.
- **Rotación de credenciales**: con OIDC, el proveedor de servicios en la nube emite un token de acceso de duración breve que solo es válido para un trabajo y después expira de forma automática.

### Iniciar con OIDC

El siguiente diagrama otorga un resumen de cómo se integra el proveedor de OIDC de {% data variables.product.prodname_dotcom %} con tus flujos de trabajo y proveedor de servicios en la red:

![Diagrama de OIDC](/assets/images/help/images/oidc-architecture.png)

1. En tu proveedor de servicios en la red, crea una relación de confianza con OIDC entre tu rol en la nube y tus flujos de trabajo de {% data variables.product.prodname_dotcom %} que necesiten acceso a la nube.
2. Cada vez que se ejecuta tu job, el proveedor de ODIC de {% data variables.product.prodname_dotcom %} genera un token de OIDC automáticamente. Este token contiene notificaciones múltiples para establecer una identidad verificable y fortalecida en seguridad sobre el flujo de trabajo específico que está tratando de autenticar.
3. Podrías incluir un paso o acción en tu job para solicitar este token del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y presentarlo al proveedor de servicios en la nube.
4. Una vez que el proveedor de identidad valide con éxito las notificaciones que se presentan en el token, este proporciona un token de acceso a la nube de vida corta que está disponible únicamente por la duración del job.

## Configurar la relación de confianza de OIDC con la nube

Al configurar la nube para que confíe en el proveedor de OIDC de {% data variables.product.prodname_dotcom %}, **tendrá** que agregar condiciones que filtren las solicitudes entrantes para que los flujos de trabajo o repositorios que no sean de confianza no puedan solicitar tokens de acceso para los recursos de nube:

- Antes de conceder un token de acceso, el proveedor de nube comprueba que [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) y otras notificaciones usadas para establecer condiciones en su configuración de confianza coinciden con las del token web JSON (JWT) de la solicitud. Como resultado, debe prestar atención y definir correctamente el _asunto_ y otras condiciones en el proveedor de nube.
- Los pasos de configuración de confianza de OIDC y la sintaxis para definir condiciones para los roles en la nube (mediante el _Asunto_ y otras notificaciones) variarán en función del proveedor de nube que se use. Para obtener algunos ejemplos, vea "[Notificaciones de asunto de ejemplo](#example-subject-claims)".
 
### Entender el token de OIDC

Cada job solicita un token de OIDC del proveedor de ODIC de {% data variables.product.prodname_dotcom %}, el cual responde con un Token Web JSON (JWT) generado automáticamente, el cual es único para cada job de flujo de trabajo en donde se genera. Cuando se ejecuta el job, el token de OIDC se presenta al proveedor de servicios en la nube. Para validar el token, el proveedor de servicios en la nube verifica si el asunto del token de OIDC y otros reclamos empatan con las condiciones que se preconfiguraron en la definición de confianza de OIDC del rol en la nube.

El siguiente token de OIDC de ejemplo usa un asunto (`sub`) que hace referencia a un entorno de trabajo denominado `prod` en el repositorio `octo-org/octo-repo`.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

Para ver todas las reclamaciones admitidas por el proveedor de OIDC de {% data variables.product.prodname_dotcom %}, revisa las entradas `claims_supported` en {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

El token incluye las notificaciones de la audiencia estándar, emisor y asunto:

|    Notificación    | Descripción            |
| ----------- | ---------------------- |
| `aud`| _(Público)_ De manera predeterminada, es la URL del propietario del repositorio, por ejemplo, la organización propietaria del repositorio. Esta es la única notificación que puede personalizarse. Puede establecer un público personalizado con un comando del kit de herramientas: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| _(Emisor)_ Emisor del token de OIDC: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Asunto)_ Define la notificación de asunto que debe validar el proveedor de nube. Este ajuste es esencial para asegurarse de que los tokens de acceso solo se asignan de forma predecible.|

El token de OIDC también incluye notificaciones estándar adicionales:

|    Notificación    | Descripción            |
| ----------- | ---------------------- |
| `alg`| _(Algoritmo)_ El algoritmo que utiliza el proveedor de OIDC.                    | 
| `exp`| _(Expira a las)_ Identifica la hora de expiración del JWT.                    | 
| `iat`| _(Emitido a las)_ Hora a la que se ha emitido el JWT.                   | 
| `jti`| _(Identificador de token JWT)_ Identificador único para el token de OIDC.                   | 
| `kid`| _(Identificador de clave)_ Clave única para el token de OIDC.                   | 
| `nbf`| _(No antes de las)_ El JTW no es válido para utilizarse antes de esta hora.                   | 
| `typ`| _(Tipo)_ Describe el tipo del token. Este es un Token Web de JSON (JWT).                   | 

El token también incluye notificaciones personalizadas que proporciona {% data variables.product.prodname_dotcom %}:

|    Notificación    | Descripción            |
| ----------- | ---------------------- |
| `actor`| La cuenta personal que ha iniciado la ejecución del flujo de trabajo.                   | 
| `actor_id`| El Id. de la cuenta personal que ha iniciado la ejecución del flujo de trabajo.             |
| `base_ref`| La rama destino de la solicitud de cambios en una ejecución de flujo de trabajo.                   | 
| `environment`| El nombre del ambiente que utiliza el job.                    | 
| `event_name`| El nombre del evento que activó la ejecución del flujo de trabajo.                    | 
| `head_ref`| La rama fuente de la solicitud de cambios en una ejecución de flujo de trabajo.                   | 
| `job_workflow_ref`| Esta es la ruta de referencia del flujo de trabajo reutilizable que utiliza este job. Para más información, vea "["Uso de OpenID Connect con flujos de trabajo reutilizables"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)".                  | 
| `ref`| _(Referencia)_ La referencia de Git que ha desencadenado la ejecución del flujo de trabajo.                   | 
| `ref_type`| Tipo de `ref`, por ejemplo: "rama".                  | 
| `repository_visibility` | La visibilidad del repositorio donde se está ejecutando el flujo de trabajo. Acepta uno de los siguientes valores: `internal`, `private` o `public`.                   | 
| `repository`| El repositorio desde donde se está ejecutando el flujo de trabajo.                   | 
| `repository_id`| El Id. del repositorio desde donde se está ejecutando el flujo de trabajo.  |
| `repository_owner`| Nombre de la organización en la que se almacena `repository`.                   | 
| `repository_owner_id`| El Id. de la organización en la que está almacenado `repository`.            |
| `run_id`| La ID de la ejecución de flujo de trabajo que lo activó.                   | 
| `run_number`| La cantidad de veces que se ha ejecutado este flujo de trabajo.                   | 
| `run_attempt`| La cantidad de veces que esta ejecución de flujo de trabajo se ha retirado.                    | 
| `workflow`| El nombre del flujo de trabajo.                   | 

### Definir las condiciones de confianza en los roles de la nube utilizando notificaciones de OIDC

Con OIDC, un flujo de trabajo de {% data variables.product.prodname_actions %} requiere un token para poder acceder a los recursos en tu proveedor de servicios en la nube. El flujo de trabajo solicita un token de acceso desde tu proveedor de servicios en la nube, el cual verifica los detalles que presenta el JWT. Si la configuración de confianza en el JWT es una coincidencia, tu proveedor de servicios en la nube responde emitiendo un token temporal al flujo de trabajo, el cual puede utilizarse después para acceder a los recursos de tu proveedor de servicios en la nube. Puedes configurar tu proveedor de servicios en la nube para que solo responda a las solicitudes que se originan desde un repositorio de organización específico; también puedes especificar condiciones adicionales como se describe a continuación.

Las notificaciones de asunto y audiencia habitualmente se utilizan combinadas mientras se configuran las condiciones en el rol/recursos de la nube para dar el alcance a su acceso a los flujos de trabajo de GitHub.
- **Público**: de manera predeterminada, este valor utiliza la URL del propietario de la organización o el repositorio. Esta puede utilizarse para configurar una condición en la que solo los flujos de trabajo de una organización específica puedan acceder al rol en la nube.
- **Asunto**: de forma predeterminada, tiene un formato predefinido y es una concatenación de algunos de los metadatos clave del flujo de trabajo, como la organización de {% data variables.product.prodname_dotcom %}, el repositorio, la rama o el entorno [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) asociado. Vea "[Notificaciones de asunto de ejemplo](#example-subject-claims)" para ver cómo se crea la notificación del asunto a partir de metadatos concatenados.

Si necesitas condiciones de confianza más pormenorizadas, puedes personalizar las notificaciones de emisor (`iss`) y asunto (`sub`) que se incluyen con el JWT. Para más información, consulta "[Personalización de las notificaciones de token](#customizing-the-token-claims)".

También hay muchas notificaciones adicionales compatibles en el token de OIDC que pueden utilizarse para configurar estas condiciones. Adicionalmente, tu proveedor de servicios en la nube podría permitirte asignar un rol a los tokens de acceso, lo cual te permite especificar permisos aún más granulares.

{% note %}

**Nota**: Para controlar la forma en que el proveedor de nube emite tokens de acceso, **tendrá** que definir al menos una condición, para que los repositorios que no sean de confianza no puedan solicitar tokens de acceso para los recursos de nube.

{% endnote %}

### Ejemplos de notificación de asunto

Los siguientes ejemplos demuestran cómo utilizar el "Asunto" como una condición y explican como este se ensambla desde los metadatos concatenados. El [asunto](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) usa información del [contexto `job`](/actions/learn-github-actions/contexts#job-context) e indica al proveedor de nube que las solicitudes de token de acceso solo se pueden conceder para solicitudes de flujos de trabajo que se ejecutan en ramas y entornos específicos. Las siguientes secciones describen algunos temas comunes que puedes utilizar.

#### Filtrar por un ambiente específico

La notificación de asunto incluye el nombre de ambiente cuando el job hace referencia a uno de ellos.

Puede configurar un asunto que filtre por un nombre de [entorno](/actions/deployment/using-environments-for-deployment) específico. En este ejemplo, la ejecución del flujo de trabajo debe haberse originado en un trabajo con un entorno denominado `Production`, en un repositorio denominado `octo-repo` que sea propiedad de la organización `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxis: | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| Ejemplo:| `repo:octo-org/octo-repo:environment:Production`       |

#### Filtrado de eventos `pull_request`

La solicitud de asunto incluye la cadena `pull_request` cuando el flujo de trabajo se desencadena mediante un evento de solicitud de incorporación de cambios, pero solo si el trabajo no hace referencia a un entorno.

Puede configurar un asunto que filtre por el evento [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request). En este ejemplo, la ejecución del flujo de trabajo debe haberse desencadenado mediante un evento `pull_request` en un repositorio denominado `octo-repo` que pertenece a la organización `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxis: | `repo:<orgName/repoName>:pull_request`      | 
| Ejemplo:| `repo:octo-org/octo-repo:pull_request`      |

#### Filtrar por una rama específica

La reivindicación del asunto incluye el nombre de rama del flujo de trabajo, pero solo si el job no hace referencia a un ambiente y el flujo de trabajo no se activa con un evento de solicitud de cambios.

Puedes configurar un asunto que filtre por un nombre de rama específica. En este ejemplo, la ejecución del flujo de trabajo debe haberse desencadenado desde una rama denominada `demo-branch`, en un repositorio denominado `octo-repo` que pertenece a la organización `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxis: | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| Ejemplo:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtrar por una etiqueta específica

La reivindicación del asunto incluye el nombre de etiqueta del flujo de trabajo, pero únicamente si el job no hace referencia a un ambiente y el flujo de trabajo no se activa con un evento de solicitud de cambios.

Puedes crear un asunte que filtre por una etiqueta específica. En este ejemplo, la ejecución del flujo de trabajo debe haberse desencadenado con una etiqueta denominada `demo-tag`, en un repositorio denominado `octo-repo` que pertenece a la organización `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxis: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| Ejemplo:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### Configurar el asunto en tu proveedor de servicios en la red

Para configurar el asunto en la relación de confianza de tu proveedor de servicios en la nube, debes agregar la secuencia del asunto a su configuración de confianza. En los ejemplos siguientes se muestra cómo varios proveedores de nube pueden aceptar el mismo asunto `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` de maneras diferentes:

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

Para más información, vea las guías enumeradas en "[Habilitación de OpenID Connect para el proveedor de nube](#enabling-openid-connect-for-your-cloud-provider)".

## Actualizar tus acciones para OIDC

A fin de actualizar las acciones personalizadas para que se autentiquen mediante OIDC, puede usar `getIDToken()` del kit de herramientas de acciones para solicitar un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %}. Para más información, vea "Token de OIDC" en la [documentación del paquete npm](https://www.npmjs.com/package/@actions/core/v/1.6.0).

También puede usar un comando `curl` para solicitar el JWT, mediante las variables de entorno siguientes:

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | La URL del proveedor de OIDC de {% data variables.product.prodname_dotcom %}.      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Token portador de la solicitud al proveedor de OIDC.      |


Por ejemplo:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Agregar ajustes de permisos

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Personalización de las notificaciones de token

Puedes mejorar la seguridad de la configuración de OIDC mediante la personalización de las notificaciones que se incluyen con el JWT. Estas personalizaciones permiten definir condiciones de confianza más pormenorizadas en los roles de nube al permitir que tus flujos de trabajo accedan a los recursos hospedados en la nube:

{% ifversion ghec %}: para una capa adicional de seguridad, puedes anexar la dirección URL `issuer` al slug empresarial. Esto permite establecer condiciones en la notificación del emisor (`iss`), configurándola para que solo acepte tokens JWT desde una dirección URL `issuer` única que debe incluir el slug de tu empresa.{% endif %}
- Puedes estandarizar la configuración de OIDC mediante condiciones en la notificación de asunto (`sub`) que requieren que los tokens JWT se originen desde un repositorio específico, un flujo de trabajo reutilizable u otro origen.
- Puedes definir directivas OIDC pormenorizadas mediante notificaciones de token de OIDC adicionales, como `repository_id` y `repository_visibility`. Para obtener más información, consulta «[Descripción del token de OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)».

Para personalizar estos formatos de notificación, los administradores de la organización y del repositorio pueden usar los puntos de conexión de la API de REST que se describen en las secciones siguientes.

{% ifversion ghec %}

### Cambio a una dirección URL de token única

De forma predeterminada, el proveedor de OIDC de {% data variables.product.prodname_dotcom %} emite el JWT en `https://token.actions.githubusercontent.com`. Esta ruta de acceso se presenta a tu proveedor de nube mediante el valor `iss` de JWT.

Los administradores de empresa pueden mejorar la seguridad de su configuración de OIDC configurando su empresa para que reciba tokens de una dirección URL única en `https://token.actions.githubusercontent.com/<enterpriseSlug>`. Sustituye `<enterpriseSlug>` por el valor del slug de tu empresa. 

Esta configuración significa que tu empresa recibirá el token de OIDC de una dirección URL única y que, después, podrás configurar tu proveedor de nube para que sólo acepte tokens de esa dirección URL. Esto ayuda a garantizar que sólo los repositorios de la empresa puedan acceder a tus recursos en la nube mediante OIDC.

Para activar esta configuración para tu empresa, un administrador de empresa debe usar el punto de conexión `/enterprises/{enterprise}/actions/oidc/customization/issuer` y especificar `"include_enterprise_slug": true` en el cuerpo de la solicitud. Para obtener más información, consulta «[Establecer la directiva de emisor personalizada de OIDC de {% data variables.product.prodname_actions %} para una empresa](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)».

Una vez aplicada esta configuración, el JWT contendrá el valor `iss` actualizado. En el ejemplo siguiente, la clave `iss` usa `octocat-inc` como su valor `enterpriseSlug`:

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Personalización de las notificaciones de asunto para una organización o repositorio

Para ayudar a mejorar la seguridad, el cumplimiento y la estandarización de toda la organización, puedes personalizar las notificaciones estándar para que se adapten a las condiciones de acceso necesarias. Si tu proveedor de nube admite condiciones en las notificaciones de asunto, puedes crear una condición que compruebe si el valor `sub` coincide con la ruta de acceso del flujo de trabajo reutilizable, como `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. El formato exacto variará en función de la configuración de OIDC de tu proveedor de nube. Para configurar la condición de coincidencia en {% data variables.product.prodname_dotcom %}, puedes usar la API de REST para exigir que la notificación `sub` incluya siempre una notificación personalizada específica, como `job_workflow_ref`. Puede usar la [API REST de OIDC](/rest/actions/oidc) para aplicar una plantilla de personalización para la notificación del sujeto de OIDC; por ejemplo, puede requerir que la notificación `sub` dentro del token de OIDC siempre incluya una notificación personalizada específica, como `job_workflow_ref`.

{% note %}

**Nota**: Cuando se aplica la plantilla de organización, no afectará a ningún repositorio existente que ya use OIDC. En el caso de los repositorios existentes y de los repositorios nuevos que se han creado después de aplicar la plantilla, el propietario del repositorio deberá participar para recibir esta configuración, o bien, alternativamente, puede aplicar una configuración diferente específica del repositorio. Para obtener más información, consulta "[Establecimiento de la plantilla de personalización de una notificación de asunto de OIDC para un repositorio](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)".

{% endnote %}

La personalización de las notificaciones da como resultado un nuevo formato para toda la notificación `sub`, que sustituye al formato predefinido predeterminado `sub` en el token que se describe en «[Ejemplos de notificaciones de asunto](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)».

En las plantillas de ejemplo siguientes se muestran varias maneras de personalizar la notificación de asunto. Para configurar estas opciones en {% data variables.product.prodname_dotcom %}, los administradores usan la API REST para especificar una lista de notificaciones que se deben incluir en la notificación de asunto (`sub`). 

{% data reusables.actions.use-request-body-api %}

Para personalizar las notificaciones de asunto, debes crear una condición coincidente en la configuración de OIDC de tu proveedor de nube antes de personalizar la configuración mediante la API de REST. Una vez completada la configuración, cada vez que se ejecute un nuevo trabajo, el token de OIDC generado durante ese trabajo seguirá la nueva plantilla de personalización. Si la condición de coincidencia no existe en la configuración de OIDC del proveedor de nube antes de que se ejecute el trabajo, es posible que el proveedor de nube no acepte el token generado, ya que las condiciones de nube podrían no estar sincronizadas.

#### Ejemplo: Permitir el repositorio en función de la visibilidad y el propietario

Esta plantilla de ejemplo permite que la notificación `sub` tenga un nuevo formato, mediante `repository_owner` y `repository_visibility`:

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir que las notificaciones incluyan valores específicos para `repository_owner` y `repository_visibility`. Por ejemplo: `"repository_owner: "monalisa":repository_visibility:private"`. El enfoque permite restringir el acceso de rol en la nube sólo a repositorios privados dentro de una organización o empresa.

#### Ejemplo: Permitir el acceso a todos los repositorios con un propietario específico

Esta plantilla de ejemplo permite que la notificación `sub` tenga un nuevo formato con el valor de `repository_owner` únicamente. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir que las notificaciones incluyan valores específicos para `repository_owner`. Por ejemplo: `"repository_owner: "monalisa""`

#### Ejemplo: Requerir un flujo de trabajo reutilizable

Esta plantilla de ejemplo permite que la notificación `sub` tenga un nuevo formato que contenga el valor de la notificación `job_workflow_ref`. Esto permite a una empresa usar [flujos de trabajo reutilizables](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) para aplicar implementaciones coherentes en sus organizaciones y repositorios.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir que las notificaciones incluyan valores específicos para `job_workflow_ref`. Por ejemplo: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Ejemplo: Requerir un flujo de trabajo reutilizable y otras notificaciones

En la plantilla de ejemplo siguiente se combina el requisito de un flujo de trabajo reutilizable específico con notificaciones adicionales.

{% data reusables.actions.use-request-body-api %}

En este ejemplo también se muestra cómo usar `"context"` para definir tus condiciones. Esta es la parte que sigue el repositorio en el [formato `sub` predeterminado](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims). Por ejemplo, cuando el trabajo hace referencia a un entorno, el contexto contiene: `environment:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir que las notificaciones incluyan valores específicos para `repo`, `context` y `job_workflow_ref`.

Esta plantilla de personalización requiere que `sub` use el siguiente formato: `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. Por ejemplo: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Ejemplo: Conceder acceso a un repositorio específico

Esta plantilla de ejemplo te permite conceder acceso a la nube a todos los flujos de trabajo de un repositorio específico, en todas las ramas o etiquetas y todos los entornos. Para ayudar a mejorar la seguridad, combina esta plantilla con la dirección URL personalizada del emisor descrita en «[Personalización de la dirección URL de token para una empresa](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)». 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir una notificación `repo` que coincida con el valor necesario.

#### Ejemplo: Usar GUID generados por el sistema

En esta plantilla de ejemplo se habilitan notificaciones OIDC predecibles con GUID generados por el sistema que no cambian al modificar el nombre de las entidades (por ejemplo, al modificar el nombre de un repositorio). 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir una notificación `repository_id` que coincida con el valor necesario.

O bien

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir una notificación `repository_owner_id` que coincida con el valor necesario.

#### Restablecimiento de las personalizaciones

En esta plantilla de ejemplo se restablecen las notificaciones de asunto al formato predeterminado. Esta plantilla rechaza eficazmente cualquier directiva de personalización de nivel de organización.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

En la configuración de OIDC de tu proveedor de nube, configura la condición `sub` para exigir que las notificaciones incluyan valores específicos para `repo` y `context`.

#### Uso de las notificaciones de asunto predeterminadas

En el caso de los repositorios que pueden recibir una directiva de notificación de asunto de tu organización, el propietario del repositorio puede optar por no participar y, en su lugar, usar el formato de notificación predeterminado `sub`. Esto significa que el repositorio no usará la plantilla personalizada de la organización. 

Para configurar el repositorio para que use el formato de notificación predeterminado `sub`, el administrador del repositorio debe usar el punto de conexión de la API REST en "[Establecer la plantilla de personalización para una notificación de asunto de OIDC para un repositorio](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)" con el siguiente cuerpo de solicitud:

```json
{
   "use_default": true
}
```

#### Ejemplo: Configuración de un repositorio para usar una plantilla de organización

El administrador del repositorio puede configurar su repositorio para que use la plantilla creada por el administrador de su organización.

Para configurar el repositorio para que use la plantilla de la organización, el administrador del repositorio debe usar el punto de conexión de la API REST en "[Establecer la plantilla de personalización para una notificación de asunto de OIDC para un repositorio](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)" con el siguiente cuerpo de solicitud:

```json
{
   "use_default": false
}
```

{% endif %}

## Actualizar tus flujos de trabajo para OIDC

Ahora puedes actualizar tus flujos de trabajo de YAML para que utilicen tokens de acceso OIDC en vez de secretos. Los proveedores populares de servicios en la nube publicaron sus acciones de inicio de sesión oficiales que te facilitan iniciar con OIDC. Para más información sobre cómo actualizar los flujos de trabajo, vea las guías específicas de la nube que se enumeran a continuación en "[Habilitación de OpenID Connect para el proveedor de nube](#enabling-openid-connect-for-your-cloud-provider)".


## Habilitar OpenID Connect para tu proveedor de servicios en la nube

Para habilitar y configurar OIDC para tu proveedor específico de servicios en la nube, consulta las siguientes guías:

- ["Configuración de OpenID Connect en Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["Configuración de OpenID Connect en Azure"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["Configuración de OpenID Connect en Google Cloud Platform"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["Configuración de OpenID Connect en Hashicorp Vault"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

Para habilitar y configurar OIDC para otro proveedor de servicios en la nube, consulta la siguiente guía:

- ["Configuración de OpenID Connect en proveedores de nube"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
