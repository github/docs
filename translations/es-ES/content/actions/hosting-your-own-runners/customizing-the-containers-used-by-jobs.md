---
title: Personalizar los contenedores que utilizan los jobs
intro: Puedes personalizar la forma en que tu ejecutor auto-hospedado invoca un contenedor para un job.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Personalizar los contenedores que utilizan los jobs
---

{% note %}

**Nota**: Esta característica se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

## Acerca de la personalización de contenedores

{% data variables.product.prodname_actions %} te permite ejecutar un job dentro de un contenedor, utilizando la declaración `container:` en tu archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Ejecutar jobs en un contenedor](/actions/using-jobs/running-jobs-in-a-container)". Para procesar jobs basados en contenedores, el ejecutor auto-hospedado crea un contenedor para cada job.

{% data variables.product.prodname_actions %} es compatible con comandos que te permiten personalizar la forma en la que tu ejecutor auto-hospedado crea los contenedores. Por ejemplo, puedes utilizar estos comandos para administrar los contenedores mediante Kubernetes o Podman y también puedes personalizar el comando `docker run` o `docker create` que se utilizan para invocar al contenedor. Los comandos de personalización se ejecutan mediante un script, el cual se activa automáticamente cuando una variable de ambiente específica se configura en el ejecutor. Para obtener más información, consulta la sección "[Activar el script de personalización](#triggering-the-customization-script)" a continuación.

Esta personalización solo está disponible para los ejecutores auto-hospedados y basados en Linux y no se requiere acceso de usuario raíz.

## Comandos de personalización de contenedores

{% data variables.product.prodname_actions %} incluye los siguientes comandos para la personalización de contenedores:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): Se le llama cuando se inicia un job.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): Se le llama al final de un job.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): Se le llama una vez para cada acción de contenedor en el job.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): Ejecuta cualquier paso que no sea una acción de contenedor.

Cada uno de estos comandos de personalización debe definirse en su propio archivo JSON. El nombre de archivo debe empatar con el nombre del comando, con la extensión `.json`. Por ejemplo, el comando `prepare_job` se define en `prepare_job.json`. Entonces, estos archivos JSON se ejecutarán juntos en el ejecutor auto-hospedado, como parte del script principal de `index.js`. Este proceso se describe con más detalle en la sección "[Generar el script de personalización](#generating-the-customization-script)".

Estos comandos también incluyen los argumentos de configuración que se explican abajo con más detalle.

### `prepare_job`

Se llama al comando `prepare_job` cuando inicia un job. {% data variables.product.prodname_actions %} pasa cualquier job o contenedor de servicio que tenga el job. Se llamará a este comando si tienes cualquier servicio o contenedor de job en el job.

{% data variables.product.prodname_actions %} asume que realizarás las siguientes tareas en el comando `prepare_job`:

- Limpiar todo lo de los jobs previos, en caso de ser necesario.
- Crear una red, en caso de ser necesario.
- Extraer los contenedores de servicio y de job.
- Iniciar el contenedor de job.
- Iniciar los contenedores de servicio.
- Escribir al archivo de respuesta cualquier información que podrá requerir {% data variables.product.prodname_actions %}:
  - Requerido: Indicar si el contenedor es un contenedor linux `alpine` (utilizando el booleano `isAlpine`).
  - Opcional: Cualquier campo de contexto que quieras configurar en el contexto del job, de lo contrario, no estarán disponibles para que los usuarios los utilicen. Para obtener más información, consulta el "[contexto `job`](/actions/learn-github-actions/contexts#job-context)".
- Devuelve `0` cuando las verificaciones de salud han tenido éxito y los contenedores de job/servicio iniciaron.

#### Argumentos

- `jobContainer`: **Opcional**. Un objeto que contiene información sobre el contenedor de job especificado.
  - `image`: **Opcional**. Una secuencia que contiene la imagen de Docker.
  - `workingDirectory`: **Requerido**. Una secuencia que contiene la ruta absoluta del directorio de trabajo.
  - `createOptions`: **Opcional**. Las selecciones opcionales de _crear_ que se especifican en el YAML. Para obtener más información, consulta la sección "[Ejemplo: Ejecutar un job dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Configura un mapa de variables de ambiente clave.
  - `userMountVolumes`: **Opcional**. Una arreglo de volúmenes montados por el usuario y configurados en el YAML. Para obtener más información, consulta la sección "[Ejemplo: Ejecutar un job dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
    - `sourceVolumePath`: **Requerido**. La ruta origen hacia el volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Requerido**. La ruta destino hacia el volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Opcional**. Determina si el volumen montado será de solo lectura o no.
  - `systemMountVolumes`: **Requerido**. Un arreglo de volúmenes montados a montarse en el contenedor, con los mismos campos que se explican anteriormente.
    - `sourceVolumePath`: **Requerido**. La ruta origen hacia el volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Requerido**. La ruta destino hacia el volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Opcional**. Determina si el volumen montado será de solo lectura o no.
  - `registro` **Opcional**. Las credenciales del registro de Docker para un registro de contenedores privado.
    - `username`: **Opcional**. El nombre de usuario de la cuenta de registro.
    - `password`: **Opcional**. La contraseña para la cuenta de registro.
    - `serverUrl`: **Opcional**. La URL de registro.
  - `portMappings`: **Opcional**. Un has de valor clave de los puertos _origen:destino_ a mapear en el contenedor.
- `services`: **Opcional**. Un arreglo de contenedores de servicio a acelerar.
  - `contextName`: **Requerido**. El nombre del servicio en el contexto del job.
  - `image`: **Requerido**. Una secuencia que contiene la imagen de Docker.
  - `createOptions`: **Opcional**. Las selecciones opcionales de _crear_ que se especifican en el YAML. Para obtener más información, consulta la sección "[Ejemplo: Ejecutar un job dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Configura un mapa de variables de ambiente clave.
  - `userMountVolumes`: **Opcional**. Un arreglo de volúmenes montados a montarse en el contenedor, con los mismos campos que se explican anteriormente.
    - `sourceVolumePath`: **Requerido**. La ruta origen hacia el volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Requerido**. La ruta destino hacia el volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Opcional**. Determina si el volumen montado será de solo lectura o no.
  - `registro` **Opcional**. Las credenciales de registro de Docker para el registro de contenedores privado.
    - `username`: **Opcional**. El nombre de usuario de la cuenta de registro.
    - `password`: **Opcional**. La contraseña para la cuenta de registro.
    - `serverUrl`: **Opcional**. La URL de registro.
  - `portMappings`: **Opcional**. Un has de valor clave de los puertos _origen:destino_ a mapear en el contenedor.

#### Entrada de ejemplo

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### Salida de ejemplo

Esta salida de ejemplo comprende los contenidos de `responseFile` que se definen en la entrada anterior.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

Se llama al comando `cleanup_job` al final de un job. {% data variables.product.prodname_actions %} asume que realizarás las siguientes tareas en el comando `cleanup_job`:

- Detener cualquier contenedor de job o de servicio en ejecución (o el pod equivalente).
- Detener la red (si existe alguna).
- Borrar cualquier contenedor de job o de servicio (o el pod equivalente).
- Borrar la red (si alguna existe).
- Borrar cualquier otra cosa que se haya creado para el job.

#### Argumentos

No se proporcionan argumentos para `cleanup_job`.

#### Entrada de ejemplo

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### Salida de ejemplo

No se espera ninguna salida para `cleanup_job`.

### `run_container_step`

Se llama al comando `run_container_step` una vez para cada acción de contenedor en tu job. {% data variables.product.prodname_actions %} asume que realizarás las siguientes tareas en el comando `run_container_step`:

- Extraer o compilar el contenedor requerido (o fallar en caso de que no se pueda).
- Ejecutar la acción de contenedor y devolver el código de salida del contenedor.
- Transmitir cualquier salida de bitácoras de paso a stdout y stderr.
- Limpiar el contenedor después de que se ejecute.

#### Argumentos

- `image`: **Opcional**. Una secuencia que contiene la imagen de docker. De lo contrario, se debe proporcionar un dockerfile.
- `dockerfile`: **Opcional**. Una secuencia que contiene la ruta al dockerfile, de lo contrario, se debe proporcionar una imagen.
- `entryPointArgs`: **Opcional**. Una lista que contiene los argumentos de punto de entrada.
- `entryPoint`: **Opcional**. El punto de entrada del contenedor a utilizar si el punto de entrada de imagen predeterminado se debe sobreescribir.
- `workingDirectory`: **Requerido**. Una secuencia que contiene la ruta absoluta del directorio de trabajo.
- `createOptions`: **Opcional**. Las selecciones opcionales de _crear_ que se especifican en el YAML. Para obtener más información, consulta la sección "[Ejemplo: Ejecutar un job dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
- `environmentVariables`: **Opcional**. Configura un mapa de variables de ambiente clave.
- `prependPath`: **Opcional**. Un arreglo de rutas adicionales a anteponer a la variable `$PATH`.
- `userMountVolumes`: **Opcional**. una arreglo de volúmenes montados por el usuario y configurados en el YAML. Para obtener más información, consulta la sección "[Ejemplo: Ejecutar un job dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `sourceVolumePath`: **Requerido**. La ruta origen hacia el volumen que se montará en el contenedor de Docker.
  - `targetVolumePath`: **Requerido**. La ruta destino hacia el volumen que se montará en el contenedor de Docker.
  - `readOnly`: **Requerido**. Determina si el volumen montado será de solo lectura o no.
- `systemMountVolumes`: **Requerido**. Un arreglo de volúmenes montados para montar en el contenedor utilizando los mismos campos que se mencionan anteriormente.
  - `sourceVolumePath`: **Requerido**. La ruta origen hacia el volumen que se montará en el contenedor de Docker.
  - `targetVolumePath`: **Requerido**. La ruta destino hacia el volumen que se montará en el contenedor de Docker.
  - `readOnly`: **Requerido**. Determina si el volumen montado será de solo lectura o no.
- `registro` **Opcional**. Las credenciales del registro de Docker para un registro de contenedores privado.
  - `username`: **Opcional**. El nombre de usuario de la cuenta de registro.
  - `password`: **Opcional**. La contraseña para la cuenta de registro.
  - `serverUrl`: **Opcional**. La URL de registro.
- `portMappings`: **Opcional**. Un has de valor clave de los puertos _origen:destino_ a mapear en el contenedor.

#### Entrada de ejemplo para la imagen

Si estás utilizando una imagen de Docker, puedes especificar el nombre de esta en el parámetro `"image":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Entrada de ejemplo para Dockerfile

Si un Dockerfile define a tu contenedor, este ejemplo demuestra cómo especificar la ruta a un `Dockerfile` en tu entrada utilizando el parámetro `"dockerfile":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Salida de ejemplo

No se esperan salidas para `run_container_step`.

### `run_script_step`

{% data variables.product.prodname_actions %} asume que realizarás las siguientes tareas:

- Invocar el script proporcionado dentro del contenedor del job y devolver el código de salida.
- Transmitir cualquier salida de bitácora de paso a stdout y stderr.

#### Argumentos

- `entryPointArgs`: **Opcional**. Una lista que contiene los argumentos de punto de entrada.
- `entryPoint`: **Opcional**. El punto de entrada del contenedor a utilizar si el punto de entrada de imagen predeterminado se debe sobreescribir.
- `prependPath`: **Opcional**. Un arreglo de rutas adicionales a anteponer a la variable `$PATH`.
- `workingDirectory`: **Requerido**. Una secuencia que contiene la ruta absoluta del directorio de trabajo.
- `environmentVariables`: **Opcional**. Configura un mapa de variables de ambiente clave.

#### Entrada de ejemplo

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### Salida de ejemplo

No se espera ninguna salida para `run_script_step`.

## Generar el script de personalización

{% data variables.product.prodname_dotcom %} creó un repositorio de ejemplo que demuestra cómo generar scripts de personalización para Docker y Kubernetes.

{% note %}

**Nota:** Los scripts resultantes están disponibles para propósito de pruebas y necesitarás determinar si son adecuados para tus requisitos.

{% endnote %}

1. Clona el repositorio [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) hacia tu ejecutor auto-hospedado.

1. El directorio `examples/` contiene algunos comandos de personalización existentes, cada uno con su propio archivo JSON. Puedes revisar estos ejemplos y utilizarlos como punto de inicio para tus propios comandos de personalización.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Compila los paquetes de npm. Estos comandos generan los archivos de `index.js` dentro de `packages/docker/dist` y `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Cuando el `index.js` resultante se activa mediante {% data variables.product.prodname_actions %}, este ejecutará los comandos de personalización que se definen en los archivos JSON. Para activar el `index.js`, necesitarás agregarlo a tu variable de ambiente `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, tal como se describe en la siguiente sección.

## Activar el script de personalización

El script personalizado debe ubicarse en el ejecutor, pero no debe almacenarse ene el directorio de la aplicación del ejecutor auto-hospedado. Los scripts se ejecutan en el contexto de seguridad de la cuenta de servicio que está ejecutando el servicio del ejecutor.

{% note %}

**Nota**: El script activado se procesa sincrónicamente, así que bloqueará la ejecución del job mientras se ejecuta.

{% endnote %}

El script se ejecuta automáticamente cuando el ejecutor tiene la siguiente variable de ambiente que conteien una ruta absoluta al script:

- `ACTIONS_RUNNER_CONTAINER_HOOK`: El script que se define en esta variable de ambiente se activa cuando un job se ha asignado a un ejecutor, pero antes de que el job comience a ejecutarse.

Para configurar esta variable de ambiente, puedes ya sea añadirla al sistema operativo o añadirla a un archivo llamado `.env` dentro del directorio de la aplicación del ejecutor auto-hospedado. Por ejemplo, la siguiente entrada de `.env` hará que el ejecutor ejecute el script en `/Users/octocat/runner/index.js` automáticamente antes de que cada job basado en contenedores se ejecute:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Si quieres asegurarte de que tu job siempre se ejecute en un contenedor y, posteriormente, siempre aplique tus personalizaciones de contenedor, puedes configurar la variable `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` en el ejecutor auto-hospedado como `true`. Esto hará que fallen los jobs que no especifiquen un contenedor de jobs.

## Solución de problemas

### Sin ajuste de tiempo de inactividad

Actualmente no hay un ajuste de tiempo de inactividad disponible para el script que ejecuta `ACTIONS_RUNNER_CONTAINER_HOOK`. Como resultado, podrías considerar agregar un manejo de tiempo de inactividad a tu script.

### Revisar la bitácora de ejecución de flujo de trabajo

Para confirmar si se están ejecutando tus scripts, puedes revisar las bitácoras de ese job. Para obtener más información sobre cómo verificar las bitácoras, consulta la sección "[Visualizar las bitácoras para diagnosticar las fallas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
