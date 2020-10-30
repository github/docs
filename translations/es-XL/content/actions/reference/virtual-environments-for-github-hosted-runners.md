---
title: Entornos virtuales para los ejecutores alojados en GitHub
intro: '{% data variables.product.prodname_dotcom %} ofrece máquinas virtuales alojadas para ejecutar flujos de trabajo. La máquina virtual contiene un entorno de herramientas, paquetes y configuraciones disponibles para que {% data variables.product.prodname_actions %} los utilice.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de ejecutores alojados en {% data variables.product.prodname_dotcom %}

Un ejecutor alojado en {% data variables.product.prodname_dotcom %} es una máquina virtual alojada por {% data variables.product.prodname_dotcom %} con la aplicación del ejecutor {% data variables.product.prodname_actions %} instalada. {% data variables.product.prodname_dotcom %} ofrece ejecutores con sistemas operativos Linux, Windows y macOS.

Cuando usas un ejecutor alojado en {% data variables.product.prodname_dotcom %}, se contemplan el mantenimiento de la máquina y las actualizaciones. Puedes ejecutar flujos de trabajo directamente en la máquina virtual o en un contenedor Docker.

Puedes especificar el tipo de ejecutor para cada puesto en un flujo de trabajo. Cada puesto en un flujo de trabajo se ejecuta en una instancia nueva de la máquina virtual. Todos los pasos del trabajo se ejecutan en la misma instancia de la máquina virtual, lo que permite que las acciones de ese trabajo compartan información usando el sistema de archivos.

{% data reusables.github-actions.runner-app-open-source %}

#### Hosts en la nube para ejecutores alojados en {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} aloja ejecutores de Linux y Windows en máquinas virtuales Standard_DS2_v2 en Microsoft Azure con la aplicación del ejecutor de {% data variables.product.prodname_actions %} instalada. La aplicación del ejecutor alojada en {% data variables.product.prodname_dotcom %} es una bifurcación del agente de Azure Pipelines. Los paquetes ICMP entrantes están bloqueados para todas las máquinas virtuales de Azure, por lo tanto, es posible que los comandos ping o traceroute no funcionen. Para obtener más información acerca de los recursos de la máquina Standard_DS2_v2, consulta "[Dv2 y DSv2-series](https://docs.microsoft.com/en-us/azure/virtual-machines/dv2-dsv2-series#dsv2-series)"en la documentación de Microsoft Azure.

{% data variables.product.prodname_dotcom %} utiliza [MacStadium](https://www.macstadium.com/) para alojar a los ejecutores de macOS.

#### Privilegios administrativos de los ejecutores alojados en {% data variables.product.prodname_dotcom %}

Las máquinas virtuales Linux y macPS se ejecutan sin la contraseña `sudo`. Cuando necesitas ejecutar comandos o instalar herramientas que requieren más privilegios que el usuario actual, puedes usar `sudo` sin la necesidad de brindar una contraseña. Para obtener más información, consulta "[Manual de sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Las máquinas virtuales de Windows están configuradas para ejecutarse como administradores con el control de cuentas de usuario (UAC) inhabilitado. Para obtener más información, consulta "[Cómo funciona el control de cuentas de usuario](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works)" en la documentación de Windows.

### Ejecutores y recursos de hardware compatibles

Cada máquina virtual tiene los mismos recursos de hardware disponibles.

- CPU de 2 núcleos
- 7 GB de memoria RAM
- 14 GB de espacio en el disco SSD

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

Para obtener una lista de software, herramientas y paquetes compatibles con cada ejecutor, consulta "[Software instalado en ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/reference/software-installed-on-github-hosted-runners)".

Puedes ver las bitácoras para una ejecución de flujo de trabajo para ver el ambiente del ejecutor exacto que se utilizó para un job, así como un enlace a las herramientas preinstaladas que estaban en dicho ejecutor. Para obtener más información, consulta la sección "[Administrar la ejecución de un flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)".


#### Direcciones IP de ejecutores alojados en {% data variables.product.prodname_dotcom %}

{% note %}

**Nota:** Si usas una lista de direcciones IP permitidas para tu cuenta de organización o de empresa {% data variables.product.prodname_dotcom %}, no puedes usar ejecutores alojados en {% data variables.product.prodname_dotcom %} y, en su lugar, debes usar ejecutores autoalojados. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Los ejecutores de Windows y Ubuntu se alojan en Azure y tienen los mismos rangos de direcciones IP que los centros de datos de Azure. Actualmente, todos los ejecutores elojados en {% data variables.product.prodname_dotcom %} de Windows y Ubuntu están en las siguientes regiones de Azure:

- Este de EE. UU. (`eastus`)
- Este de EE. UU. 2 (`eastus2`)
- Oeste de EE. UU. 2 (`westus2`)
- Centro de EE. UU. (`centralus`)
- Centro sur de EE. UU. (`southcentralus`)

Microsoft actualiza los rangos de dirección IP de Azure semanalmente en un archivo JSON que puedes descargar desde los rangos de IP de Azure [ y el sitio web de Etiquetas de servicio - Nube pública](https://www.microsoft.com/en-us/download/details.aspx?id=56519). Puedes usar este rango de direcciones IP si requieres una lista de permisos para impedir el acceso no autorizado a tus recursos internos.

El archivo JSON contiene una matriz denominada `values` (valores). Dentro de esa matriz, puedes encontrar las direcciones IP admitidas en un objeto con un `name` e `Id` de la región de Azure, por ejemplo, `"AzureCloud. eastus2"`.

Puedes buscar los rangos de direcciones IP compatibles en el objeto `"addressPrefixes"`. Este es un ejemplo condensado del archivo JSON.

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

### Sistemas de archivos en ejecutores alojados en {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} ejecuta acciones y comandos de shell en directorios específicos en la máquina virtual. Las rutas de archivo en las máquinas virtuales no son estáticas. Usa las variables de entorno que proporciona {% data variables.product.prodname_dotcom %} para construir rutas de archivo para los directorios `home`, `workspace` y `workflow`.

| Directorio            | Variable de entorno | Descripción                                                                                                                                                                                                                    |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hogar`               | `HOME`              | Contiene datos relacionados con el usuario. Por ejemplo, este directorio podría contener las credenciales de un intento de inicio de sesión.                                                                                   |
| `workspace`           | `GITHUB_WORKSPACE`  | Las acciones y los comandos del shell se ejecutan en este directorio. Una acción puede modificar los contenidos de este directorio, al que pueden tener acceso acciones posteriores.                                           |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | La carga `POST` del evento de webhook que activó el flujo de trabajo. {% data variables.product.prodname_dotcom %} reescribe esto cada vez que se ejecuta una acción para aislar el contenido del archivo entre acciones. |

Para obtener una lista de las variables de entorno que crea {% data variables.product.prodname_dotcom %} para cada flujo de trabajo, consulta "[Usar variables de entorno](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

#### Sistema de archivos del contenedor de Docker

Las acciones que se ejecutan en contenedores Docker tienen directorios estáticos en la ruta `/github`. Sin embargo, te recomendamos encarecidamente que uses las variables de entorno predeterminadas para construir rutas de archivos en contenedores de Docker.

{% data variables.product.prodname_dotcom %} se reserva el prefijo de ruta `/github` y crea tres directorios para acciones.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### Leer más
- "[Administrar la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}
