Puedes utilizar `permissions` para modificar los permisos predeterminados que se le otorgan al `GITHUB_TOKEN`, agregando o eliminando el acceso conforme se requiera para que solo permitas el acceso mínimo requerido. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Puedes utilizar los `permissions` ya sea como una clave de nivel superior, para aplicar todos los jobs en el flujo de trabajo, o dentro de jobs específicos. Cuando agregas la clave `permissions` dentro de un job específico, todas las acciones y comandos de ejecución dentro de este que utilicen el `GITHUB_TOKEN` obtendrán los derechos de acceso que especificas.  Para obtener más información, consulta los [`jobs<job_id>permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

### Ejemplo: Asignar permisos a un GITHUB_TOKEN

Este ejemplo muestra los permisos que se están configurando para el `GITHUB_TOKEN` que aplicará a todos los jobs en el flujo de trabajo. Se otorga acceso de lectura a todos los permisos.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
