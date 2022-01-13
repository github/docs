---
title: Entender las GitHub Actions
shortTitle: Entendiendo las GitHub Actions
intro: 'Aprende lo básico de las {% data variables.product.prodname_actions %}, incluyendo los conceptos nucleares y la terminología esencial.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

{% data reusables.actions.about-actions %} Puedes crear flujos de trabajo y crear y probar cada solicitud de cambios en tu repositorio o desplegar solicitudes de cambios fusionadas a producción.

{% data variables.product.prodname_actions %} va más allá de solo DevOps y te permite ejecutar flujos de trabajo cuando otros eventos suceden en tu repositorio. Por ejemplo, puedes ejecutar un flujo de trabajo para que agregue automáticamente las etiquetas adecuadas cada que alguien cree una propuesta nueva en tu repositorio.

{% data variables.product.prodname_dotcom %} proporciona máquinas virtuales Linux, Windows y macOS para que ejecutes tus flujos de trabajo o puedes hospedar tus propios ejecutores auto-hospedados en tu propio centro de datos o infraestructura en la nube.

## Los componentes de las {% data variables.product.prodname_actions %}

Puedes configurar un _flujo de trabajo_ de {% data variables.product.prodname_actions %} para que se active cuando ocurre un _evento_ en tu repositorio, tal como la apertura de una solicitud de cambios o la creación de una propuesta.  Tu flujo de trabajo contiene uno o más _jobs_, los cuales pueden ejecutarse en orden secuencial o en paralelo.  Cada job se ejecutará dentro del _ejecutor_ de su propia máquina virtual o dentro de un contenedor y tendrá uno o más _pasos_ que ya sea puedan ejecutar un script que definas o que ejecuten una _acción_, la cual es una extensión reutilizable que puede simplificar tu flujo de trabajo.

![Resumen del flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

### Flujos de trabajo

Un flujo de trabajo es un proceso automatizado configurable que ejecutará uno o más jobs.  Los flujos de trabajo se definen mediante un archivo de YAML que se verifica en tu repositorio y se ejecutará cuando lo active un evento dentro de este o puede activarse manualmente o en una programación definida.

Tu repositorio puede tener varios flujos de trabajo dentro de él, cada uno de los cuales puede llevar a cabo un conjunto de pasos diferente.  Por ejemplo, puedes tener un flujo de trabajo para crear y probar las solicitudes de cambio, otro para desplegar tu aplicación cada que se cree un lanzamiento y todavía otro más que agregue una etiqueta cada que alguien abra una propuesta nueva.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Puedes referenciar un flujo de trabajo dentro de otro flujo de trabajo, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".{% endif %}

### Eventos

Un evento es una actividad específica en un repositorio, la cual activa una ejecución de flujo de trabajo. Por ejemplo, la actividad puede originarse desde {% data variables.product.prodname_dotcom %} cuando alguien crea una solicitud de cambios, abre una propuesta o sube una confirmación a un repositorio.  También puedes activar una ejecución de flujo de trabajo de acuerdo con una programación si la [publicas en una API de REST](/rest/reference/repos#create-a-repository-dispatch-event) o si lo haces manualmente.

Para encontrar una lista de eventos completa que puede utilizarse para activar flujos de trabajo, consulta los [Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows).

### Jobs

Un job es un conjunto de _pasos_ en un flujo de trabajo, los cuales se ejecutan en el mismo ejecutor.  Cada paso es ya sea un script de shell o una _acción_ que se ejecutarán.  Los pasos se ejecutarán en orden y serán dependientes uno del otro.  Ya que cada paso se ejecuta en el mismo ejecutor, puedes compartir datos de un paso a otro.  Por ejemplo, puedes tener un paso que compile tu aplicación, seguido de otro que pruebe la aplicación que se compiló.

Puedes configurar las dependencias de un job con otros jobs; predeterminadamente, los jobs no tienen dependencias y se ejecutan en paralelo entre ellos.  Cuando un job lleva una dependencia a otro job, este esperará a que el job dependiente se complete antes de que pueda ejecutarse.  Por ejemplo, puedes tener jobs de compilación múltiple para arquitecturas diferentes que no tengan dependencias y un job de empaquetado que sea dependiente de estos jobs.  Los jobs de compilación se ejecutarán en paralelo y, cuando se hayan completado con éxito, se ejecutará el job de empaquetado.

### Acciones

Una _acción_ es una aplicación personalizada para la plataforma de {% data variables.product.prodname_actions %} que realiza una tarea compleja pero que se repite frecuentemente.  Utiliza una acción para ayudarte a reducir la cantidad de código repetitivo que escribes en tus archivos de flujo de trabajo.  Una acción puede extraer tu repositorio de git desde {% data variables.product.prodname_dotcom %}, configurar la cadena de herramientas correcta para tu ambiente de compilación o configurar la autenticación en tu proveedor de servicios en la nube.

Puedes escribir tus propias acciones o puedes encontrar acciones para utilizar en tus flujos de trabajo dentro de {% data variables.product.prodname_marketplace %}.

### Ejecutores

{% data reusables.actions.about-runners %} Cada ejecutor puede ejecutar un job individual a la vez. {% ifversion ghes or ghae %} Debes hospedar tus propios ejecutores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} proporciona ejecutores de Ubuntu Linux, Microsoft Windows y macOS para ejecutar tus flujos de trabajo; cada flujo de trabajo se ejecuta en una máquina virtual nueva y recién aprovisionada. Si necesitas un sistema operativo diferente o si requieres una configuración de hardware específica, puedes hospedar tus propios ejecutores.{% endif %} Para obtener más información{% ifversion fpt or ghec %} sobre los ejecutores auto-hospedados{% endif %}, consulta la sección "[Hospedar tus propios ejecutores](/actions/hosting-your-own-runners)".

## Crear un flujo de trabajo de ejemplo

Las {% data variables.product.prodname_actions %} utilizan la sintaxis de YAML para definir el flujo de trabajo.  Cada flujo de trabajo se almacena como un archivo de YAML por separado en tu repositorio de código en un directorio que se llama `.github/workflows`.

Puedes crear un flujo de trabajo de ejemplo en tu repositorio que active automáticamente una serie de comandos cada que se suba código. En este flujo de trabajo, las {% data variables.product.prodname_actions %} verifican el código que se subió, instalan las dependencias de software, y ejecutan `bats -v`.

1. En tu repositorio, crea el directorio `.github/workflows/` para almacenar tus archivos de flujo de trabajo.
1. En el directorio `.github/workflows/`, crea un archivo nuevo que se llame `learn-github-actions.yml` y agrega el siguiente código.
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. Confirma estos cambios y cárgalos a tu repositorio de {% data variables.product.prodname_dotcom %}.

Tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %} nuevo estará ahora instalado en tu repositorio y se ejecutará automáticamente cada que alguien suba un cambio a éste. Para encontrar los detalles sobre el historial de ejecución un job, consulta la sección "[Visualizar la actividad del flujo de trabajo](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)".

## Entender el archivo de flujo de trabajo

Para ayudarte a entender cómo se utiliza la sintaxis de YAML para crear un flujo de trabajo, esta sección explica cada línea del ejemplo de la introducción:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Opcional</em> - El nombre del flujo de trabajo ta como aparece en la pestaña de Acciones del repositorio de {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Especifica el activador de este flujo de trabajo. Este ejemplo utiliza el evento <code>push</code>, así que una ejecución de flujo de trabajo se activa cada que alguien sube un cambio al repositorio o fusiona una solicitud de cambios.  Esto se activa mediante una subida a cada rama; para encontrar ejemplos de la sintaxis que solo se ejecuta en subidas a ramas específicas, rutas o etiquetas, consulta la sección <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}".</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Agrupa los jobs que se ejecutan en el flujo de trabajo <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Define un job que se llame <code>check-bats-version</code>. Las llaves hijas definirán las propiedades del job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configura el job para que se ejecute en la versión más reciente de un ejecutor Ubuntu Linux. Esto significa que el job se ejecutará en una máquina virtual nueva que se hospede en GitHub. Para encontrar ejemplos de sintaxis que utilicen otros ejecutores, consulta la sección <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}".</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Agrupa todos los pasos que se ejecutan en el job <code>check-bats-version</code>. Cada elemento anidado debajo de esta sección es una acción o script de shell por separado.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
La palabra clave <code>uses</code> especifica que este paso ejecutará la <code>v2</code> de la acción <code>actions/checkout</code>.  Esta es una acción que comprueba tu repositorio en el ejecutor, lo cual te permite ejecutar scripts u otras acciones contra tu código (tales como herramientas de compilación y prueba). Debes utilizar la acción de verificación en cualquier momento en el que tu flujo de trabajo se ejecute contra el código del repositorio.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  Este paso utiliza la acción <code>actions/setup-node@v2</code> para instalar la versión especificada del Node.js (este ejemplo utiliza la v14). Esto pone a los comandos <code>node</code> y <code>npm</code> en tu <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  La palabra clave <code>run</code> le dice al job que ejecute un comando en el ejecutor. Ene ste caso, estás utilizando <code>npm</code> para instalar el paquete de pruebas del software <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  Finalmente, ejecutarás el comando <code>bats</code> con un parámetro que producirá la versión del software.
</td>
</tr>
</table>

### Visualizar el archivo de flujo de trabajo

En este diagrama, puedes ver el archivo de flujo de trabajo que acabas de crear, así como la forma en que los componentes de {% data variables.product.prodname_actions %} se organizan en una jerarquía. Cada paso ejecuta una acción o script de shell simples. Los pasos 1 y 2 ejecutan acciones, mientras que los pasos 3 y 4 ejecutan scripts de shell. Para encontrar más acciones preconstruidas para tus flujos de trabajo, consulta la sección "[Encontrar y personalizar acciones](/actions/learn-github-actions/finding-and-customizing-actions)".

![Resumen del flujo de trabajo](/assets/images/help/images/overview-actions-event.png)

## Ver la actividad del flujo de trabajo

Una vez que tu flujo de trabajo comience a ejecutarse, podrás{% ifversion fpt or ghes > 3.0 or ghae or ghec %}ver una gráfica de visualización del progreso de dicha ejecución y {% endif %}ver la actividad de cada paso en {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre de tu repositorio, da clic en **Acciones**. ![Navegar al repositorio](/assets/images/help/images/learn-github-actions-repository.png)
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieras ver. ![Impresión de pantalla de los resultados del flujo de trabajo](/assets/images/help/images/learn-github-actions-workflow.png)
1. Debajo de "Ejecuciones de flujo de trabajo", da clic en el nombre de la ejecución que quieres ver. ![Captura de pantalla de las ejecuciones del flujo de trabajo](/assets/images/help/images/learn-github-actions-run.png)
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. Debajo de **Jobs** o en la gráfica de visualización, da clic en el job que quieras ver. ![Seleccionar job](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. Ve los resultados de cada paso. ![Impresión de pantalla de los detalles de la ejecución del flujo de trabajo](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif ghes %}
1. Da clic en el nombre del job para ver los resultados de cada paso. ![Impresión de pantalla de los detalles de la ejecución del flujo de trabajo](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Da clic en el nombre del job para ver los resultados de cada paso. ![Impresión de pantalla de los detalles de la ejecución del flujo de trabajo](/assets/images/help/images/overview-actions-result.png)
{% endif %}

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions)".

{% ifversion fpt or ghec or ghes %}

Para entender cómo funciona la facturación de las {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de la facturación para las {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## Contactar con soporte técnico

{% data reusables.github-actions.contacting-support %}
