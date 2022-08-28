---
title: Acerca de los ejecutores hospedados en AE
intro: '{% data variables.product.prodname_ghe_managed %} ofrece máquinas virtuales hospedadas, personalizables y con seguridad robustecida, para ejecutar los flujos de trabajo de {% data variables.product.prodname_actions %}. Puedes seleccionar el hardware, traer tu propia imagen de máquina, y habilitar una dirección IP para trabajar en red con tu {% data variables.actions.hosted_runner %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  github-ae: '*'
---




{% data reusables.actions.ae-beta %}

### Acerca de las {% data variables.actions.hosted_runner %}

Un {% data variables.actions.hosted_runner %} es una máquina virtual hospedada en {% data variables.product.prodname_dotcom %} que tiene instalado el servicio de ejecutor de {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_ghe_managed %} te permite crear y personalizar los {% data variables.actions.hosted_runner %} utilizando imágenes de Ubuntu y de Windows; puedes seleccionar el tamaño de máquina que quieras y configurar un trabajo en red con seguridad robustecida para ellos. {% data variables.product.prodname_dotcom %} administra y auto-escala los {% data variables.actions.hosted_runner %} integralmente.

Cada job del flujo de trabajo se ejecuta en una instancia nueva del {% data variables.actions.hosted_runner %} y puedes ejecutar flujos de trabajo directamente en la máquina virtual o en un contenedor de Docker. Todos los pasos del job se ejecutan en la misma instancia, permitiendo que las acciones en este job compartan información utilizando el sistema de archivos del {% data variables.actions.hosted_runner %}.

{% note %}
Los {% data variables.actions.hosted_runner %} son los únicos disponibles para {% data variables.product.prodname_ghe_managed %} y no se incluye a los ejecutores auto-hospedados.
{% endnote %}

Para agregar {% data variables.actions.hosted_runner %} a tu organización o empresa, consulta la sección ["Agregar {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/adding-ae-hosted-runners)".

### Asignaciones de agrupaciones para los {% data variables.actions.hosted_runner %}

Tus {% data variables.actions.hosted_runner %} se distribuyen en la misma agrupación que tu instancia de {% data variables.product.prodname_ghe_managed %}. Ningún otro cliente tiene acceso a dicha agrupación y, como resultado, los {% data variables.actions.hosted_runner %} no se comparten con ningún otro cliente.

### Administrar tus {% data variables.actions.hosted_runner %}

Durante el beta de los {% data variables.actions.hosted_runner %}, puedes administrar tus {% data variables.actions.hosted_runner %} si contactas al soporte de {% data variables.product.prodname_dotcom %}. Por ejemplo, el soporte de {% data variables.product.prodname_dotcom %} puede ayudarte para agregar un {% data variables.actions.hosted_runner %} nuevo, asignar etiquetas, o mover un {% data variables.actions.hosted_runner %} a un grupo diferente.

### Facturación

{% data variables.product.prodname_actions %} se encuentra acutalmente en beta para {% data variables.product.prodname_ghe_managed %}. Durante este periodo beta, los {% data variables.actions.hosted_runner %} no se facturan, y pueden utilizarse gratuitamente.

Una vez que termine el beta, el uso facturable incluirá el tiempo total de actividad para las instancias activas en tus conjuntos de ejecutores hospedados en AE. Esto incluye:
- Hora del job - minutos que se utilizaron ejecutando el job de las acciones.
- Administración - minutos que se utilizaron haciendo re-imagen de las máquinas y tiempo inactivo que se creó como resultado de un comportamiento de auto-escalamiento deseado.

Los precios aumentarán linearmente con los núcleos. Por ejemplo, 4 núcleos costarán lo doble que 2 núcleos. Las MV de Windows tendrán un precio más alto que las de Linux.

### Especificaciones del Hardware

Los {% data variables.actions.hosted_runner %} se encuentran disponibles en diversas máquinas virtuales hospedadas en Microsoft Azure. Dependiendo de la disponibilidad regional, puedes elegir entre `Standard_Das_v4`, `Standard_DS_v2`, `Standard_Fs_v2 series`. Algunas regiones también incluyen ejecutores de GPU basados en `Standard_NCs_v3`.

Para obtener más información acercfa de los recursos de máquina de Azure, consulta la sección "[Tamaños de las máquinas virtuales en Azure](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes)" en la documentación de Microsoft Azure.

Para determinar quém ejecutor ejecutó un job, puedes revisar las bitácoras de flujo de trabajo. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

### Especificaciones de software

Puedes utilizar los {% data variables.actions.hosted_runner %} con imágenes de sistema operativo estándar, o puedes agregar imágenes que hayas creado.

#### Imágenes predeterminadas de sistema operativo

Estas imágenes solo incluyen las herramientas estándar del sistema operativo:

- Ubuntu 18.04 LTS (Canonical)
- Ubuntu 16.04 LTS (Canonical)
- Windows Server 2019 (Microsoft)
- Windows Server 2016 (Microsoft)

#### Imágenes personalizadas de sistema operativo

Puedes crear tus propias imágenes de SO en Azure y agregarlas a {% data variables.product.prodname_ghe_managed %} en forma de {% data variables.actions.hosted_runner %}. Para obtener más información, consulta la sección "[Agregar un {% data variables.actions.hosted_runner %} con una imagen personalizada"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).

### Especificaciones de red

Opcionalmente, puedes habilitar una dirección IP estática pública para tu {% data variables.actions.hosted_runner %}. Si se habilitan, todos los {% data variables.actions.hosted_runner %} en tu instancia compartirán un rango de 2 a 4 direcciones IP y se comunicarán utilizando los puertos de esas direcciones.

Si no habilitas las direcciones IP estáticas públicas, entonces tus {% data variables.actions.hosted_runner %} tendrán los mismos rangos de direcciones IP que los centros de datos de Azure subsecuentemente. Los paquetes entrantes de ICMP se bloquearán, por lo tanto, no se espera que funcionen los comandos de `ping` o `traceroute`.

Para obtener una lista de rangos de direcciones IP que utilizan las {% data variables.product.prodname_actions %} para los {% data variables.actions.hosted_runner %}, puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la clave `actions` en la respuesta de la terminal de [Obtener información meta de GitHub](/rest/reference/meta#get-github-meta-information)". Puedes utilizar esta lista de direcciones IP si requieres prevenir acceso no autorizados a tus recursos internos mediante una lista de direcciones IP permitidas.

La lista de direcciones IP permitidas de {% data variables.product.prodname_actions %} que devuelve la API se actualiza una vez por semana.

### Privilegios adminsitrativos para los {% data variables.actions.hosted_runner %}

Las máquinas virtuales Linux se ejecutan utilizando un `sudo` sin contraseña. Cuando necesitas ejecutar comandos o instalar herramientas que requieren más privilegios que el usuario actual, puedes usar `sudo` sin la necesidad de brindar una contraseña. Para obtener más información, consulta "[Manual de sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Las máquinas virtuales de Windows están configuradas para ejecutarse como administradores con el control de cuentas de usuario (UAC) inhabilitado. Para obtener más información, consulta "[Cómo funciona el control de cuentas de usuario](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" en la documentación de Windows.

### Sistemas de archivos

{% data variables.product.prodname_dotcom %} ejecuta acciones y comandos de shell en directorios específicos en la máquina virtual. Las rutas de archivo en las máquinas virtuales no son estáticas. Usa las variables de entorno que proporciona {% data variables.product.prodname_dotcom %} para construir rutas de archivo para los directorios `home`, `workspace` y `workflow`.

| Directorio            | Variable de entorno | Descripción                                                                                                                                                                                                               |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | Contiene datos relacionados con el usuario. Por ejemplo, este directorio podría contener las credenciales de un intento de inicio de sesión.                                                                              |
| `workspace`           | `GITHUB_WORKSPACE`  | Las acciones y los comandos del shell se ejecutan en este directorio. Una acción puede modificar los contenidos de este directorio, al que pueden tener acceso acciones posteriores.                                      |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | La carga `POST` del evento de webhook que activó el flujo de trabajo. {% data variables.product.prodname_dotcom %} reescribe esto cada vez que se ejecuta una acción para aislar el contenido del archivo entre acciones. |

Para obtener una lista de las variables de entorno que crea {% data variables.product.prodname_dotcom %} para cada flujo de trabajo, consulta "[Usar variables de entorno](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

#### Sistema de archivos del contenedor de Docker

Las acciones que se ejecutan en contenedores Docker tienen directorios estáticos en la ruta `/github`. Sin embargo, te recomendamos encarecidamente que uses las variables de entorno predeterminadas para construir rutas de archivos en contenedores de Docker.

{% data variables.product.prodname_dotcom %} se reserva el prefijo de ruta `/github` y crea tres directorios para las acciones.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`
