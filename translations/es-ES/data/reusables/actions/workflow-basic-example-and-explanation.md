## Crear un flujo de trabajo de ejemplo

Las {% data variables.product.prodname_actions %} utilizan la sintaxis de YAML para definir el flujo de trabajo.  Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

Puedes crear un flujo de trabajo de ejemplo en tu repositorio que active automáticamente una serie de comandos cada que se suba código. In this workflow, {% data variables.product.prodname_actions %} checks out the pushed code, installs the [bats](https://www.npmjs.com/package/bats) testing framework, and runs a basic command to output the bats version: `bats -v`.

1. En tu repositorio, crea el directorio `.github/workflows/` para almacenar tus archivos de flujo de trabajo.
1. En el directorio `.github/workflows/`, crea un archivo nuevo que se llame `learn-github-actions.yml` y agrega el siguiente código.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Confirma estos cambios y cárgalos a tu repositorio de {% data variables.product.prodname_dotcom %}.

Tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %} nuevo estará ahora instalado en tu repositorio y se ejecutará automáticamente cada que alguien suba un cambio a éste. To see the details about a workflow's execution history, see "[Viewing the activity for a workflow run](#viewing-the-activity-for-a-workflow-run)."

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
Especifica el activador de este flujo de trabajo. Este ejemplo utiliza el evento <code>push</code>, así que una ejecución de flujo de trabajo se activa cada que alguien sube un cambio al repositorio o fusiona una solicitud de cambios.  Esto se activa mediante una subida a cada rama; para encontrar ejemplos de la sintaxis que solo se ejecuta en subidas a ramas específicas, rutas o etiquetas, consulta la sección "<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}</a>".
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
  Configura el job para que se ejecute en la versión más reciente de un ejecutor Ubuntu Linux. Esto significa que el job se ejecutará en una máquina virtual nueva que se hospede en GitHub. For syntax examples using other runners, see "<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
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
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v3</code> of the <code>actions/checkout</code> action. Esta es una acción que comprueba tu repositorio en el ejecutor, lo cual te permite ejecutar scripts u otras acciones contra tu código (tales como herramientas de compilación y prueba). Debes utilizar la acción de verificación en cualquier momento en el que tu flujo de trabajo se ejecute contra el código del repositorio.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>{% data reusables.actions.action-setup-node %}</code> action to install the specified version of the Node.js (this example uses v14). Esto pone a los comandos <code>node</code> y <code>npm</code> en tu <code>PATH</code>.
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

## Viewing the activity for a workflow run

When your workflow is triggered, a _workflow run_ is created that executes the workflow. After a workflow run has started, you can see a visualization graph of the run's progress and view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre de tu repositorio, da clic en **Acciones**.

   ![Navegar al repositorio](/assets/images/help/images/learn-github-actions-repository.png)
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieres ver.

   ![Impresión de pantalla de los resultados del flujo de trabajo](/assets/images/help/images/learn-github-actions-workflow.png)
1. Debajo de "Ejecuciones de flujo de trabajo", da clic en el nombre de la ejecución que quieres ver.

   ![Impresión de pantalla de las ejecuciones del flujo de trabajo](/assets/images/help/images/learn-github-actions-run.png)
1. Debajo de **Jobs** o en la gráfica de visualización, da clic en el job que quieras ver.

   ![Seleccionar job](/assets/images/help/images/overview-actions-result-navigate.png)
1. View the results of each step.

   ![Impresión de pantalla de los detalles de la ejecución del flujo de trabajo](/assets/images/help/images/overview-actions-result-updated-2.png)
