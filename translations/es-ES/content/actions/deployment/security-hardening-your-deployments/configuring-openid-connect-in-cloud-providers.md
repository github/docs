---
title: Configurar OpenID Connect en los proveedores de servicios en la nube
shortTitle: Configurar OpenID Connect en los proveedores de servicios en la nube
intro: Utiliza OpenID Connect dentro de tus flujos de trabajo para autenticarte con los proveedores de servicios en la nube.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} accedan a los recursos de tu proveedor de servicios en la nube sin tener que almacenar credenciales como secretos de {% data variables.product.prodname_dotcom %} de larga duración.

Para utilizar OIDC, primero necesitarás configurar tu proveedor de servicios en la nube para confiar en el ODIC de {% data variables.product.prodname_dotcom %} como una identidad federada y entonces deberás actualizar tus flujos de trabajo para autenticarte utilizando tokens.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Utiliza la acción oficial desde tu proveedor de servicios en la nube para intercambiar el token de OIDC (JWT) por un token de acceso a la nube.

Si tu proveedor de servicios en la nube aún no ofrece una acción oficial, puedes actualizar tus flujos de trabajo para realizar estos pasos manualmente.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Utilizar acciones oficiales

Si tu proveedor de servicios en la nube creó una acción oficial para utilizar OIDC con {% data variables.product.prodname_actions %}, te permitirá intercambiar fácilmente el token ODIC por un token de acceso. Podrás entonces actualizar tus flujos de trabajo para utilizar este token cuando accedas a los recursos en la nube.

## Utilizar acciones personalizadas

Si tu proveedor de servicios en la nube no tiene una acción oficial o si prefieres crear scripts personalizados, puedes solicitar manualmente el Token Web JSON (JWT) del proveedor de OIDC de {% data variables.product.prodname_dotcom %}.

Si no estás utilizando una acción oficial, entonces {% data variables.product.prodname_dotcom %} recomienda que utilices el kit de herramientas nuclear de las acciones. Como alternativa, puedes utilizar las siguientes variables de ambiente para retribuir el token: `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

Para actualizar tus flujos de trabajo utilizando este enfoque, necesitarás hacer tres cambios a tu YAML:

1. Agregar ajustes de permisos para el token.
2. Agregar código que solicite el token de OIDC desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %}.
3. Agregar código que intercambie el token de OIDC por un token de acceso con tu proveedor de servicios en la nube.

### Solicitar un JTW utilizando el kit de herramientas nuclear de las acciones

El siguiente ejemplo ilustra cómo utilizar `actions/github-script` con el kit de herramientas `core` apra solicitar el JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Agregar paquetes de kit de herramientas de acciones](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()   
          coredemo.setOutput('id_token', id_token)  
```

### Solicitar el JWT utilizando variables de ambiente

El siguiente ejemplo demuestra cómo utilizar variables de ambiente para solicitar un Token Web de JSON.

Para tu job de despliegue, necesitarás definir los ajustes del token utilizando `actions/github-script` con el kit de herramientas de `core`. Para obtener más información, consulta la sección "[Agregar paquetes de kit de herramientas de acciones](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)".

Por ejemplo:

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

Entonces puedes utilizar `curl` para recuperar un JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %}. Por ejemplo:

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
        echo "::set-output name=idToken::${IDTOKEN}"
      id: tokenid
```

### Obtener el token de acceso desde el proveedor de servicios en la nube

Necesitarás presentar el token web JSON de OIDC a tu proveedor de servicios en la nube para obtener un token de acceso.

Para cada despliegue, tus flujos de trabajo deben utilizar acciones de inicio de sesión en la nube (o scripts personalizados) que recuperen el token OIDC y lo presenten a tu proveedor de servicios en la nube. Posteriormente, el proveedor validará las reivindicaciones en el token; de tener éxito, proporcionará un token de acceso a la nube que estará disponible solo para esta ejecución de job. Las acciones subsecuentes en el job podrán, entonces, utilizar el token de acceso para conectarse a la nube y desplegar sus recursos.

Los pasos para intercambiar el token de OIDC por un token de acceso variarán para cada proveedor de servicios en la nube.

### Acceder a los recursos en tu proveedor de servicios en la nube

Una vez que hayas obtenido el token de acceso, puedes utilizar acciones o scripts específicos en la nube para autenticarte con el proveedor de servicios en la nube y desplegar hacia sus recursos. Estos pasos podrían diferir entre cada proveedor. Adicionalmente, el tiempo de vencimiento predeterminado para este token de acceso podría variar entre cada nube y podría ser configurable de lado del proveedor de servicios.
