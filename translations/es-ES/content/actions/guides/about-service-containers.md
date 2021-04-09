---
title: Acerca de los contenedores de servicios
intro: 'Puedes usar los contenedores de servicios para conectar las bases de datos, los servicios Web, las memorias caché y otras herramientas a tu flujo de trabajo.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /Actions/Automating-Your-Workflow-with-GitHub-Actions/about-Service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Contenedores
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de los contenedores de servicios

Los contenedores de servicios son contenedores de Docker que ofrecen una manera sencilla y portátil de alojar servicios que probablemente necesites para probar o usar tu aplicación en un flujo de trabajo. Por ejemplo, es posible que tu flujo de trabajo tenga que ejecutar pruebas de integración que requieran acceso a una base de datos y a una memoria caché.

Puedes configurar contenedores de servicios para cada trabajo en un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea un contenedor de Docker nuevo para cada servicio configurado en el flujo de trabajo y destruye el contenedor de servicios cuando se termina el trabajo. Los pasos de un trabajo pueden comunicarse con todos los contenedores de servicios que son parte del mismo trabajo.

{% data reusables.github-actions.docker-container-os-support %}

### Comunicarse con contenedores de servicios

Puedes configurar trabajos en un flujo de trabajo para que se ejecuten directamente en una máquina del ejecutor o en un contenedor de Docker. La comunicación entre un trabajo y sus contenedores de servicios cambia en función de si un trabajo se ejecuta directamente en la máquina del ejecutor o en un contenedor.

#### Ejecutar trabajos en un contenedor

Cuando ejecutas trabajos en un contenedor, {% data variables.product.prodname_dotcom %} conecta los contenedores de servicios al trabajo mediante las redes de puente definidas por el usuario de Docker. Para obtener más información, consulta "[Usar redes de puente](https://docs.docker.com/network/bridge/)" en la documentación de Docker.

Al ejecutar el trabajo y los servicios en un contenedor, se simplifica el acceso a la red. Puedes acceder a un contenedor de servicios usando la etiqueta que configuraste en el flujo de trabajo. El nombre del host del contenedor de servicios se correlaciona automáticamente con el nombre de la etiqueta. Por ejemplo, si creas un contenedor de servicios con la etiqueta `redis`, el nombre del host del contenedor de servicio será `redis`.

No es necesario configurar ningún puerto para los contenedores de servicios. Por defecto, todos los contenedores que forman parte de la misma red de Docker se exponen los puertos entre sí, y no se exponen puertos por fuera de la red de Docker.

#### Ejecutar trabajos en la máquina del ejecutor

Cuando ejecutas trabajos directamente en la máquina del ejecutor, puedes acceder a los contenedores de servicios usando `localhost:<port>` o `127.0.0.1<port>`. {% data variables.product.prodname_dotcom %} configura la red de contenedores para habilitar la comunicación desde el contenedor de servicios hasta el host de Docker.

Cuando un trabajo se ejecuta directamente en una máquina del ejecutor, el servicio que se ejecuta en el contenedor de Docker no expone sus puertos al trabajo del ejecutor por defecto. Debes asignar los puertos del contenedor de servicios al host de Docker. Para obtener más información, consulta "[Asignar puertos del host de Docker y del contenedor de servicios](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

### Crear contenedores de servicios

Puedes usar la palabra clave `services` para crear contenedores de servicios que sean parte de un trabajo en tu flujo de trabajo. Para obtener más información, consulta [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

Este ejemplo crea un servicio llamado `redis` en un trabajo llamado `container-job`. El host de Docker en este ejemplo es el contenedor `node: 10.18-jessie`.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Etiqueta del trabajo del contenedor
  container-job:
    # Los contenedores deben ejecutarse en sistemas operativos basados en Linux
    runs-on: ubuntu-latest
    # Imagen de Docker Hub que 'container-job' ejecuta en
    el contendor: node:10.18-jessie

    # Contenedores de servicios para ejecutar con servicios de 'container-job':
      # Etiqueta usada para acceder al contenedor de servicios
      redis:
        # Imagen de Docker Hub
        image: redis
```
{% endraw %}

### Asignar puertos del host de Docker y del contenedor de servicios

Si tu trabajo se ejecuta en un contenedor de Docker, no necesitas asignar puertos en el host o en el contenedor de servicios. Si tu trabajo se ejecuta directamente en la máquina del ejecutor, tendrás que asignar cualquier puerto requerido del contenedor de servicios a los puertos de la máquina del ejecutor del host.

Puedes asignar puertos de contenedores de servicios al host de Docker utilizando la palabra clave `ports`. Para obtener más información, consulta [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Valor de `ports` | Descripción                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `8080:80`        | Asigna el puerto TCP 80 del contenedor al puerto 8080 del host de Docker.                         |
| `8080:80/UDP`    | Asigna el puerto UDP 80 del contenedor al puerto 8080 del host de Docker.                         |
| `8080/UDP`       | Asigna un puerto UDP elegido aleatoriamente del contenedor al puerto UDP 8080 del host de Docker. |

Cuando asignas puertos utilizando la palabra clave `ports`, {% data variables.product.prodname_dotcom %} utiliza el comando `--publish` para publicar los puertos del contenedor en el host de Docker. Para obtener más información, consulta "[Redes de contenedores de Docker](https://docs.docker.com/config/containers/container-networking/)"en la documentación de Docker.

Cuando especificas el puerto del host de Docker pero no el puerto del contenedor, el puerto del contenedor se asigna aleatoriamente a un puerto gratuito. {% data variables.product.prodname_dotcom %} establece el puerto del contenedor asignado en el contexto del contenedor de servicios. Por ejemplo, para un contenedor de servicios `redis`, si configuraste el puerto del host de Docker 5432, puedes acceder al puerto del contenedor correspondiente utilizando el contexto `job.services.redis.ports[5432]`. Para obtener más información, consulta "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-context)".

#### Ejemplo de asignación de puertos Redis

Este ejemplo asigna el puerto 6379 del contenedor de servicios `redis` al puerto 6379 del host de Docker.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

Jobs:
  # Etiqueta del trabajo del contenedor
  runner-job:
    # Debes usar un entorno Linux cuando uses contenedores de servicios o trabajos del contenedor
    runs-on: ubuntu-latest

    # Contenedores de servicios para ejecutar con servicios de 'runner-job':
      # Etiqueta usada para acceder al contenedor de servicios
      redis:
        # Imagen de Docker Hub
        image: redis
        #
        puertos:
          # Abre el puerto tcp 6379 en el host y el contenedor de servicios
          -6379:6379
```
{% endraw %}

### Leer más

- "[Crear contenedores de servicios Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- "[Crear contenedores de servicios PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
