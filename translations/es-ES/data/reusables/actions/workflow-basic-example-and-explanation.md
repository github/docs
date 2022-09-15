---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064542"
---
## Crear un flujo de trabajo de ejemplo

Las {% data variables.product.prodname_actions %} utilizan la sintaxis de YAML para definir el flujo de trabajo.  Cada flujo de trabajo se almacena como un archivo YAML independiente en el repositorio de código, en un directorio denominado `.github/workflows`.

Puedes crear un flujo de trabajo de ejemplo en tu repositorio que active automáticamente una serie de comandos cada que se suba código. En este flujo de trabajo {% data variables.product.prodname_actions %} extrae el código insertado, instala el marco de pruebas de [bats](https://www.npmjs.com/package/bats) y ejecuta un comando básico para generar la versión de los bats: `bats -v`.

1. En el repositorio, cree el directorio `.github/workflows/` para almacenar los archivos de flujo de trabajo.
1. En el directorio `.github/workflows/`, cree un archivo denominado `learn-github-actions.yml` y agregue el código siguiente.

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

Tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %} nuevo estará ahora instalado en tu repositorio y se ejecutará automáticamente cada que alguien suba un cambio a éste. Para ver los detalles sobre el historial de ejecución de un flujo de trabajo, consulta «[Visualización de la actividad de una ejecución de flujo de trabajo](#viewing-the-activity-for-a-workflow-run)».

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
  <em>Opcional</em> - el nombre del flujo de trabajo como aparece en la pestaña de Acciones del repositorio de {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Especifica el activador de este flujo de trabajo. En este ejemplo se usa el evento <code>push</code>, de forma que se desencadena una ejecución de flujo de trabajo cada vez que alguien inserta un cambio en el repositorio o combina una solicitud de incorporación de cambios.  Esto se desencadena mediante una inserción en cada rama; para obtener ejemplos de una sintaxis que solo se ejecuta en inserciones en ramas, rutas o etiquetas concretas, consulta «<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}</a>».
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
Agrupa todos los trabajos que se ejecutan en el flujo de trabajo <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Define un trabajo denominado <code>check-bats-version</code>. Las llaves hijas definirán las propiedades del job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Configura el job para que se ejecute en la versión más reciente de un ejecutor Ubuntu Linux. Esto significa que el job se ejecutará en una máquina virtual nueva que se hospede en GitHub. Para obtener ejemplos de sintaxis con otros ejecutores, consulta «<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}</a>».
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
Agrupa todos los pasos que se ejecutan en el trabajo <code>check-bats-version</code>. Cada elemento anidado debajo de esta sección es una acción o script de shell por separado.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
La palabra clave <code>uses</code> especifica que este paso ejecutará <code>v3</code> de la acción <code>actions/checkout</code>. Esta es una acción que comprueba tu repositorio en el ejecutor, lo cual te permite ejecutar scripts u otras acciones contra tu código (tales como herramientas de compilación y prueba). Debes utilizar la acción de verificación en cualquier momento en el que tu flujo de trabajo se ejecute contra el código del repositorio.
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
Este paso usa la acción <code>{% data reusables.actions.action-setup-node %}</code> para instalar la versión especificada de Node.js (en este ejemplo se usa v14). Esto coloca los comandos <code>node</code> y <code>npm</code> en <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
La palabra clave <code>run</code> indica al trabajo que ejecute un comando en el ejecutor. En este caso, se usa <code>npm</code> para instalar el paquete de pruebas de software <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
Por último, ejecutará el comando <code>bats</code> con un parámetro que genera la versión del software.
</td>
</tr>
</table>

### Visualizar el archivo de flujo de trabajo

En este diagrama, puedes ver el archivo de flujo de trabajo que acabas de crear, así como la forma en que los componentes de {% data variables.product.prodname_actions %} se organizan en una jerarquía. Cada paso ejecuta una acción o script de shell simples. Los pasos 1 y 2 ejecutan acciones, mientras que los pasos 3 y 4 ejecutan scripts de shell. A fin de buscar más acciones precompiladas para los flujos de trabajo, vea "[Búsqueda y personalización de acciones](/actions/learn-github-actions/finding-and-customizing-actions)".

![Introducción al flujo de trabajo](/assets/images/help/images/overview-actions-event.png)

## Visualización de la actividad de una ejecución de flujo de trabajo

Cuando se desencadena el flujo de trabajo, se crea una _ejecución de flujo de trabajo_ que ejecuta el flujo de trabajo. Una vez que el flujo de trabajo haya comenzado a ejecutarse, puedes ver una gráfica de visualización del progreso de dicha ejecución, así como la actividad de cada paso, en {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre del repositorio, haga clic en **Acciones**.

   ![Navegar al repositorio](/assets/images/help/images/learn-github-actions-repository.png)
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieras ver.

   ![Captura de pantalla de los resultados del flujo de trabajo](/assets/images/help/images/learn-github-actions-workflow.png)
1. Debajo de "Ejecuciones de flujo de trabajo", da clic en el nombre de la ejecución que quieres ver.

   ![Captura de pantalla de las ejecuciones del flujo de trabajo](/assets/images/help/images/learn-github-actions-run.png)
1. En **Trabajos** o en el gráfico de visualización, seleccione el trabajo que quiera ver.

   ![Selección del trabajo](/assets/images/help/images/overview-actions-result-navigate.png)
1. Vea los resultados de cada paso.

   ![Captura de pantalla de los detalles de la ejecución del flujo de trabajo](/assets/images/help/images/overview-actions-result-updated-2.png)
