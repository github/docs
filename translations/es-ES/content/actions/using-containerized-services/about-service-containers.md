---
title: Acerca de los contenedores de servicios
intro: 'Puedes usar los contenedores de servicios para conectar las bases de datos, los servicios Web, las memorias caché y otras herramientas a tu flujo de trabajo.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145121122'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los contenedores de servicios

Los contenedores de servicios son contenedores de Docker que ofrecen una manera sencilla y portátil de alojar servicios que probablemente necesites para probar o usar tu aplicación en un flujo de trabajo. Por ejemplo, es posible que tu flujo de trabajo tenga que ejecutar pruebas de integración que requieran acceso a una base de datos y a una memoria caché.

Puedes configurar contenedores de servicios para cada trabajo en un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea un contenedor de Docker nuevo para cada servicio configurado en el flujo de trabajo y destruye el contenedor de servicios cuando se termina el trabajo. Los pasos de un trabajo pueden comunicarse con todos los contenedores de servicios que son parte del mismo trabajo. Sin embargo, no se pueden crear y usar contenedores de servicio dentro de una acción compuesta. 

{% data reusables.actions.docker-container-os-support %}

## Comunicarse con contenedores de servicios

Puedes configurar trabajos en un flujo de trabajo para que se ejecuten directamente en una máquina del ejecutor o en un contenedor de Docker. La comunicación entre un trabajo y sus contenedores de servicios cambia en función de si un trabajo se ejecuta directamente en la máquina del ejecutor o en un contenedor.

### Ejecutar trabajos en un contenedor

Cuando ejecutas trabajos en un contenedor, {% data variables.product.prodname_dotcom %} conecta los contenedores de servicios al trabajo mediante las redes de puente definidas por el usuario de Docker. Para obtener más información, consulte "[Uso de redes de puente](https://docs.docker.com/network/bridge/)" en la documentación de Docker.

Al ejecutar el trabajo y los servicios en un contenedor, se simplifica el acceso a la red. Puedes acceder a un contenedor de servicios usando la etiqueta que configuraste en el flujo de trabajo. El nombre del host del contenedor de servicios se correlaciona automáticamente con el nombre de la etiqueta. Por ejemplo, si crea un contenedor de servicios con la etiqueta `redis`, el nombre de host del contenedor de servicios será `redis`.

No es necesario configurar ningún puerto para los contenedores de servicios. Por defecto, todos los contenedores que forman parte de la misma red de Docker se exponen los puertos entre sí, y no se exponen puertos por fuera de la red de Docker.

### Ejecutar trabajos en la máquina del ejecutor

Al ejecutar trabajos directamente en la máquina del ejecutor, puede acceder a los contenedores de servicios mediante `localhost:<port>` o `127.0.0.1:<port>`. {% data variables.product.prodname_dotcom %} configura la red de contenedores para habilitar la comunicación desde el contenedor de servicios hasta el host de Docker.

Cuando un trabajo se ejecuta directamente en una máquina del ejecutor, el servicio que se ejecuta en el contenedor de Docker no expone sus puertos al trabajo del ejecutor por defecto. Debes asignar los puertos del contenedor de servicios al host de Docker. Para obtener más información, consulte "[Asignación de puertos de contenedor de servicios y host de Docker](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

## Crear contenedores de servicios

Puede usar la palabra clave `services` para crear contenedores de servicios que formen parte de un trabajo en el flujo de trabajo. Para más información, vea [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

En este ejemplo se crea un servicio denominado `redis` en un trabajo denominado `container-job`. El host de Docker de este ejemplo es el contenedor `node:16-bullseye`.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Asignar puertos del host de Docker y del contenedor de servicios

Si tu trabajo se ejecuta en un contenedor de Docker, no necesitas asignar puertos en el host o en el contenedor de servicios. Si tu trabajo se ejecuta directamente en la máquina del ejecutor, tendrás que asignar cualquier puerto requerido del contenedor de servicios a los puertos de la máquina del ejecutor del host.

Puede asignar puertos de contenedores de servicios al host de Docker mediante la palabra clave `ports`. Para más información, vea [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Valor de `ports` |    Descripción |
|------------------|--------------|
| `8080:80` |   Asigna el puerto TCP 80 del contenedor al puerto 8080 del host de Docker. |
| `8080:80/udp` |   Asigna el puerto UDP 80 del contenedor al puerto 8080 del host de Docker. |
| `8080/udp`    | Asigna un puerto UDP elegido aleatoriamente del contenedor al puerto UDP 8080 del host de Docker. |

Al asignar puertos mediante la palabra clave `ports`, {% data variables.product.prodname_dotcom %} usa el comando `--publish` para publicar los puertos del contenedor en el host de Docker. Para obtener más información, consulte "[Redes de contenedores de Docker](https://docs.docker.com/config/containers/container-networking/)" en la documentación de Docker.

Cuando especificas el puerto del host de Docker pero no el puerto del contenedor, el puerto del contenedor se asigna aleatoriamente a un puerto gratuito. {% data variables.product.prodname_dotcom %} establece el puerto del contenedor asignado en el contexto del contenedor de servicios. Por ejemplo, para un contenedor de servicios `redis`, si configuró el puerto de host de Docker 5432, podrá acceder al puerto de contenedor correspondiente mediante el contexto `job.services.redis.ports[5432]`. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts#job-context)".

### Ejemplo de asignación de puertos Redis

En este ejemplo se asigna el puerto 6379 del contenedor `redis` de servicios al puerto de host 6379 de Docker.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

## Información adicional

- "[Creación de contenedores de servicios de Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- "[Creación de contenedores de servicios de PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
