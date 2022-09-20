---
title: Personalización de los contenedores usados por los trabajos
intro: Puedes personalizar la forma en la que el ejecutor auto hospedado invoca un contenedor para un trabajo.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881167'
---
{% note %}

**Nota:** Esta característica se encuentra en versión beta y está sujeta a cambios.

{% endnote %}

## Acerca de la personalización del contenedor

{% data variables.product.prodname_actions %} permite ejecutar un trabajo dentro de un contenedor mediante la instrucción `container:` del archivo de flujo de trabajo. Para más información, consulte "[Ejecutar trabajos en un contenedor](/actions/using-jobs/running-jobs-in-a-container)". Para procesar trabajos basados en contenedores, el ejecutor auto hospedado crea un contenedor para cada trabajo.

{% data variables.product.prodname_actions %} admite comandos que permiten personalizar la forma en que el ejecutor auto hospedado crea los contenedores. Por ejemplo, puede usar estos comandos para administrar los contenedores a través de Kubernetes o Podman, y también puede personalizar los comandos `docker run` o `docker create` que se usan para invocar el contenedor. Los comandos de personalización se ejecutan mediante un script, que se desencadena de forma automática cuando se establece una variable de entorno específica en el ejecutor. Para más información, vea "[Desencadenamiento del script de personalización](#triggering-the-customization-script)" a continuación.

Esta personalización solo está disponible para los ejecutores auto hospedados basados en Linux y no se requiere acceso de usuario raíz.

## Comandos de personalización de contenedor

{% data variables.product.prodname_actions %} incluye los siguientes comandos para la personalización del contenedor:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): se llama cuando se inicia un trabajo.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): se llama al final de un trabajo.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): se llama una vez para cada acción de contenedor en el trabajo.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): ejecuta cualquier paso que no sea una acción de contenedor.

Cada uno de estos comandos de personalización debe definirse en su propio archivo JSON. El nombre de archivo debe coincidir con el nombre del comando, con la extensión `.json`. Por ejemplo, el comando `prepare_job` se define en `prepare_job.json`. Estos archivos JSON se ejecutarán juntos en el ejecutor auto hospedado, como parte del script principal `index.js`. Este proceso se describe con más detalle en "[Generación del script de personalización](#generating-the-customization-script)".

Estos comandos también incluyen argumentos de configuración, que se explican a continuación con más detalle.

### `prepare_job`

Se llama al comando `prepare_job` cuando se inicia un trabajo. {% data variables.product.prodname_actions %} pasa en cualquier trabajo o contenedor de servicio que tenga el trabajo. Se llamará a este comando si tiene algún servicio o contenedores de trabajos en el trabajo. 

{% data variables.product.prodname_actions %} supone que se realizarán las siguientes tareas en el comando `prepare_job`:

- Eliminar cualquier cosa de los trabajos anteriores, si es necesario.
- Crear una red, si es necesario.
- Extraer el trabajo y los contenedores de servicio.
- Iniciar el contenedor de trabajos.
- Iniciar los contenedores de servicio.
- Escribir en el archivo de respuesta cualquier información que los datos {% data variables.product.prodname_actions %} necesitarán:
  - Obligatorio: indique si el contenedor es un contenedor de Linux `alpine` (mediante el valor booleano `isAlpine`). 
  - Opcional: los campos de contexto que quiera establecer en el contexto del trabajo, de lo contrario, no estarán disponibles para que los usuarios los usen. Para más información, vea "[Contexto de `job`](/actions/learn-github-actions/contexts#job-context)".
- Devuelve `0` cuando las comprobaciones de estado se han realizado correctamente y se inician los contenedores de trabajo o servicio.

#### Argumentos

- `jobContainer`: **Opcional**. Objeto que contiene información sobre el contenedor de trabajos especificado.
  - `image`: **Obligatorio**. Cadena que contiene la imagen de Docker.
  - `workingDirectory`: **Obligatorio**. Cadena que contiene la ruta de acceso absoluta del directorio de trabajo.
  - `createOptions`: **Opcional**. Las opciones de _creación_ opcionales especificadas en YAML. Para más información, vea "[Ejemplo: ejecución de un trabajo dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Establece un mapa de variables de entorno clave.
  - `userMountVolumes`: **Opcional**. Matriz de volúmenes de montaje de usuarios establecidos en YAML. Para más información, vea "[Ejemplo: ejecución de un trabajo dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
    - `sourceVolumePath`: **Obligatorio**. La ruta de acceso de origen al volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Obligatorio**. La ruta de acceso de destino al volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Obligatorio**. Determina si el montaje debe ser de solo lectura.
  - `systemMountVolumes`: **Obligatorio**. Matriz de montajes que se van a montar en el contenedor, los mismos campos que los anteriores.
    - `sourceVolumePath`: **Obligatorio**. La ruta de acceso de origen al volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Obligatorio**. La ruta de acceso de destino al volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Obligatorio**. Determina si el montaje debe ser de solo lectura.
  - `registry` **Opcional**. Credenciales del registro de Docker para un registro de contenedor privado.
    - `username`: **Opcional**. Nombre de usuario de la cuenta de registro.
    - `password`: **Opcional**. Contraseña de la cuenta de registro.
    - `serverUrl`: **Opcional**. Dirección URL del registro.
  - `portMappings`: **Opcional**. Código hash de valor de clave de los puertos _source:target_ que se van a asignar al contenedor.
- `services`: **Opcional**. Matriz de contenedores de servicio que se va a poner en marcha.
  - `contextName`: **Obligatorio**. Nombre del servicio en el contexto del trabajo.
  - `image`: **Obligatorio**. Cadena que contiene la imagen de Docker.
  - `createOptions`: **Opcional**. Opciones de _creación_ opcionales especificadas en YAML. Para más información, vea "[Ejemplo: ejecución de un trabajo dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Establece un mapa de variables de entorno clave.
  - `userMountVolumes`: **Opcional**. Matriz de montajes que se van a montar en el contenedor, los mismos campos que los anteriores.
    - `sourceVolumePath`: **Obligatorio**. La ruta de acceso de origen al volumen que se montará en el contenedor de Docker.
    - `targetVolumePath`: **Obligatorio**. La ruta de acceso de destino al volumen que se montará en el contenedor de Docker.
    - `readOnly`: **Obligatorio**. Determina si el montaje debe ser de solo lectura.
  - `registry` **Opcional**. Credenciales del registro de Docker para un registro de contenedor privado.
    - `username`: **Opcional**. Nombre de usuario de la cuenta de registro.
    - `password`: **Opcional**. Contraseña de la cuenta de registro.
    - `serverUrl`: **Opcional**. Dirección URL del registro.
  - `portMappings`: **Opcional**. Código hash de valor de clave de los puertos _source:target_ que se van a asignar al contenedor.

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

Esta salida de ejemplo es el contenido de `responseFile` definido en la entrada anterior.

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

Se llama al comando `cleanup_job` al final de un trabajo. {% data variables.product.prodname_actions %} supone que se realizarán las siguientes tareas en el comando `cleanup_job`:

- Detener cualquier servicio o contenedor de trabajos en ejecución (o el pod equivalente).
- Detener la red (si existe).
- Eliminar los contenedores de trabajos o servicios (o el pod equivalente).
- Eliminar la red (si existe).
- Limpiar cualquier otra cosa que se haya creado para el trabajo.

#### Argumentos

No se proporciona ningún argumento para `cleanup_job`.

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

Se llama al comando `run_container_step` una vez para cada acción de contenedor del trabajo. {% data variables.product.prodname_actions %} supone que se realizarán las siguientes tareas en el comando `run_container_step`:

- Extraer o compilar el contenedor necesario (o generar un error si no es posible).
- Ejecutar la acción del contenedor y devolver el código de salida del contenedor.
- Transmitir los registros de los pasos de salida a stdout y stderr.
- Limpiar el contenedor después de ejecutarlo.

#### Argumentos

- `image`: **Opcional**. Cadena que contiene la imagen de Docker. De lo contrario, se debe proporcionar un Dockerfile.
- `dockerfile`: **Opcional**. Cadena que contiene la ruta de acceso al Dockerfile; de lo contrario, se debe proporcionar una imagen.
- `entryPointArgs`: **Opcional**. Lista que contiene los argumentos del punto de entrada.
- `entryPoint`: **Opcional**. Punto de entrada del contenedor que se va a usar si se debe sobrescribir el punto de entrada de imagen predeterminado.
- `workingDirectory`: **Obligatorio**. Cadena que contiene la ruta de acceso absoluta del directorio de trabajo.
- `createOptions`: **Opcional**. Las opciones de _creación_ opcionales especificadas en YAML. Para más información, vea "[Ejemplo: ejecución de un trabajo dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
- `environmentVariables`: **Opcional**. Establece un mapa de variables de entorno clave.
- `prependPath`: **Opcional**. Matriz de rutas de acceso adicionales que se anteponen a la variable `$PATH`.
- `userMountVolumes`: **Opcional**. una matriz de volúmenes de montaje de usuario establecidos en YAML. Para más información, vea "[Ejemplo: ejecución de un trabajo dentro de un contenedor](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `sourceVolumePath`: **Obligatorio**. La ruta de acceso de origen al volumen que se montará en el contenedor de Docker.
  - `targetVolumePath`: **Obligatorio**. La ruta de acceso de destino al volumen que se montará en el contenedor de Docker.
  - `readOnly`: **Obligatorio**. Determina si el montaje debe ser de solo lectura.
- `systemMountVolumes`: **Obligatorio**. Matriz de montajes que se van a montar en el contenedor, con los mismos campos que antes.
  - `sourceVolumePath`: **Obligatorio**. La ruta de acceso de origen al volumen que se montará en el contenedor de Docker.
  - `targetVolumePath`: **Obligatorio**. La ruta de acceso de destino al volumen que se montará en el contenedor de Docker.
  - `readOnly`: **Obligatorio**. Determina si el montaje debe ser de solo lectura.
- `registry` **Opcional**. Credenciales del registro de Docker para un registro de contenedor privado.
  - `username`: **Opcional**. Nombre de usuario de la cuenta de registro.
  - `password`: **Opcional**. Contraseña de la cuenta de registro.
  - `serverUrl`: **Opcional**. Dirección URL del registro.
- `portMappings`: **Opcional**. Código hash de valor de clave de los puertos _source:target_ que se van a asignar al contenedor.

#### Entrada de ejemplo para la imagen

Si usa una imagen de Docker, puede especificar el nombre de la imagen en el parámetro `"image":`.

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

Si un Dockerfile define el contenedor, en este ejemplo se muestra cómo especificar la ruta de acceso a `Dockerfile` en la entrada mediante el parámetro `"dockerfile":`.

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

No se espera ninguna salida para `run_container_step`.

### `run_script_step`

{% data variables.product.prodname_actions %} supone que se realizarán las siguientes tareas:

- Invocar el script proporcionado dentro del contenedor de trabajos y devolver el código de salida.
- Transmitir cualquier salida del registro de pasos a stdout y stderr.

#### Argumentos

- `entryPointArgs`: **Opcional**. Lista que contiene los argumentos del punto de entrada.
- `entryPoint`: **Opcional**. Punto de entrada del contenedor que se va a usar si se debe sobrescribir el punto de entrada de imagen predeterminado.
- `prependPath`: **Opcional**. Matriz de rutas de acceso adicionales que se anteponen a la variable `$PATH`.
- `workingDirectory`: **Obligatorio**. Cadena que contiene la ruta de acceso absoluta del directorio de trabajo.
- `environmentVariables`: **Opcional**. Establece un mapa de variables de entorno clave.

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

## Generación del script de personalización

{% data variables.product.prodname_dotcom %} ha creado un repositorio de ejemplo que muestra cómo generar scripts de personalización para Docker y Kubernetes. 

{% note %}

**Nota:** Los scripts resultantes están disponibles para fines de prueba y deberás determinar si son adecuados para tus requisitos.

{% endnote %}

1. Clona el repositorio [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) en el ejecutor auto hospedado.

1. El directorio `examples/` contiene algunos comandos de personalización existentes, cada uno con su propio archivo JSON. Puedes revisar estos ejemplos y usarlos como punto de partida para tus propios comandos de personalización.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Compila los paquetes de npm. Estos comandos generan los archivos `index.js` dentro de `packages/docker/dist` y `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Cuando los datos {% data variables.product.prodname_actions %} desencadenan el resultado `index.js`, ejecutará los comandos de personalización definidos en los archivos JSON. Para desencadenar `index.js`, deberá agregarla a la variable de entorno`ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, como se describe en la sección siguiente.

## Desencadenamiento del script de personalización

El script personalizado debe estar ubicado en el ejecutor, pero no se debe almacenar en el directorio auto hospedado de la aplicación. Los scripts se ejecutan en el contexto de seguridad de la cuenta de servicio que ejecuta el servicio del ejecutor.

{% note %}

**Nota**: el script desencadenado se procesa de forma sincrónica, por lo que bloqueará la ejecución del trabajo mientras se ejecuta.

{% endnote %}

El script se ejecuta de forma automática cuando el ejecutor tiene la siguiente variable de entorno que contiene una ruta de acceso absoluta al script:

- `ACTIONS_RUNNER_CONTAINER_HOOK`: el script definido en esta variable de entorno se desencadena cuando se ha asignado un trabajo a un ejecutor, pero antes de que el trabajo empiece a ejecutarse.

Para establecer esta variable de entorno, puedes agregarla al sistema operativo o a un archivo denominado `.env` dentro del directorio de aplicaciones del ejecutor auto hospedado. Por ejemplo, la siguiente entrada `.env` hará que el ejecutor ejecute automáticamente el script en `/Users/octocat/runner/index.js` antes de que se ejecute cada trabajo basado en contenedor:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Si quieres asegurarte de que el trabajo siempre se ejecuta dentro de un contenedor y, posteriormente, siempre aplica las personalizaciones del contenedor, puedes establecer la variable `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` en el ejecutor auto hospedado en `true`. Se producirá un error en los trabajos que no especifican un contenedor de trabajo.

## Solución de problemas

### Sin configuración de tiempo de espera

Actualmente no hay ninguna configuración de tiempo de espera disponible para el script ejecutado por `ACTIONS_RUNNER_CONTAINER_HOOK`. Como resultado, podría considerar la posibilidad de agregar el control de tiempo de espera al script.

### Revisión del registro de ejecución del flujo de trabajo

Para confirmar si los scripts se están ejecutando, puede revisar los registros de ese trabajo. Para más información sobre cómo comprobar los registros, vea "[Visualización de registros para diagnosticar errores](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
