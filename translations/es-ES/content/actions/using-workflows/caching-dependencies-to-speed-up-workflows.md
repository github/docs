---
title: Almacenar en caché las dependencias para agilizar los flujos de trabajo
shortTitle: Cache dependencies
intro: 'Para hacer que tus flujos de trabajo sean más rápidos y eficientes, puedes crear y usar cachés para las dependencias y otros archivos comúnmente reutilizados.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164384'
---
## Acerca de almacenar en caché las dependencias de flujo de trabajo

Las ejecuciones de flujo de trabajo a menudo reutilizan las mismas salidas o dependencias descargadas de una ejecución a otra. Por ejemplo, las herramientas de administración de paquetes y dependencias como Maven, Gradle, npm y Yarn mantienen una caché local de las dependencias descargadas.

{% ifversion fpt or ghec %} Los trabajos en ejecutores hospedados en {% data variables.product.prodname_dotcom %} se inician en una imagen de ejecutor limpia y deben descargar dependencias cada vez, lo que provoca una mayor utilización de la red, un tiempo de ejecución más largo y un mayor costo. {% endif %}Para ayudar a acelerar el tiempo que se tarda en volver a crear archivos como dependencias, {% data variables.product.prodname_dotcom %} puede almacenar en caché los archivos que utilizas con frecuencia en los flujos de trabajo.

Para almacenar en caché las dependencias de un trabajo, puedes usar la [acción `cache`](https://github.com/actions/cache) de {% data variables.product.prodname_dotcom %}. La acción crea y restaura una memoria caché que identifica una clave única. Como alternativa, si almacenas en caché los administradores de paquetes que se enumeran debajo, el uso de sus respectivas acciones setup-* requiere una configuración mínima, y creará y restaurará las cachés de dependencias automáticamente.

| Administradores de paquetes | acción de setup-* para almacenar en caché |
|---|---|
| npm, Yarn, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Advertencia**: {% ifversion fpt or ghec %}Ten en cuenta lo siguiente al usar el almacenamiento en caché con {% data variables.product.prodname_actions %}:

* {% endif %}Se recomienda no almacenar ninguna información confidencial en la memoria caché. Por ejemplo, la información confidencial puede incluir tokens de acceso o credenciales de inicio de sesión almacenados en un archivo en la ruta de la caché. Además, los programas de interfaz de línea de comandos (CLI), como `docker login`, pueden guardar las credenciales de acceso en un archivo de configuración. Cualquier usuario con acceso de lectura puede crear una solicitud de incorporación de cambios en un repositorio y acceder a los contenidos de una caché. Las bifurcaciones de un repositorio también pueden crear solicitudes de extracción en la rama base y acceder a las cachés en la rama base.
{%- ifversion fpt or ghec %}
* Al usar ejecutores autohospedados, las cachés de las ejecuciones de flujo de trabajo se almacenan en almacenamiento en la nube propiedad de {% data variables.product.company_short %}. Una solución de almacenamiento propiedad del cliente solo está disponible con {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Para más información sobre los artefactos de ejecución de flujo de trabajo, consulta "[Conservación de datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

## Restricciones para acceder a una caché

Las restricciones de acceso proporcionan aislamiento y seguridad de caché al crear una frontera lógica entre las ramas o etiquetas diferentes. Las ejecuciones de flujo de trabajo pueden restaurar las memorias caché creadas en la rama actual o en la rama predeterminada (normalmente `main`). Si se desencadena una ejecución de flujo de trabajo para una solicitud de incorporación de cambios, también puede restaurar las memorias caché creadas en la rama base, incluidas las ramas base de repositorios bifurcados. Por ejemplo, si la rama `feature-b` tiene la rama base `feature-a`, una ejecución de flujo de trabajo desencadenada en una solicitud de incorporación de cambios tendría acceso a las memorias caché creadas en la rama predeterminada `main`, la rama base `feature-a` y la rama actual `feature-b`.

Las ejecuciones de flujo de trabajo no pueden restaurar las memorias caché creadas para ramas secundarias o ramas del mismo nivel. Por ejemplo, una memoria caché creada para la rama secundaria `feature-b` no sería accesible para una ejecución de flujo de trabajo desencadenada en la rama primaria `main`. De forma similar, una memoria caché creada para la rama `feature-a` con la rama `main` base no sería accesible para su la rama `feature-c` del mismo nivel con la rama base `main`. Las ejecuciones de flujo de trabajo tampoco pueden restaurar las memorias caché creadas para nombres de etiqueta diferentes. Por ejemplo, una memoria caché creada para la etiqueta `release-a` con la rama `main` no sería accesible para un flujo de trabajo desencadenado para la etiqueta `release-b` con la rama base `main`.

Cuando se crea una memoria caché mediante una ejecución de flujo de trabajo desencadenada en una solicitud de incorporación de cambios, dicha memoria caché se crea para la referencia de combinación (`refs/pull/.../merge`). Por este motivo, la memoria caché tendrá un ámbito limitado y solo se puede restaurar mediante nuevas ejecuciones de la solicitud de incorporación de cambios. No se puede restaurar mediante la rama base u otras solicitudes de incorporación de cambios destinadas a esa rama base.

Varias ejecuciones de flujo de trabajo en un repositorio pueden compartir memorias caché. Se puede acceder a una memoria caché creada para una rama en una ejecución de flujo de trabajo y restaurarla desde otra ejecución de flujo de trabajo para el mismo repositorio y rama.

## Uso de la acción `cache`

La [acción `cache`](https://github.com/actions/cache) intentará restaurar una caché en función del `key` que proporciones. Cuando la acción encuentra una memoria caché que coincide _exactamente_ con la clave, la acción restaura los archivos almacenados en caché al `path` que configures.
Opcionalmente, puedes proporcionar una lista de `restore-keys` para que se usen cuando `key` no coincide con una memoria caché existente. Una lista de `restore-keys` resulta útil cuando se restaura una memoria caché desde otra rama porque `restore-keys` puede coincidir _parcialmente_ con claves de caché. Para obtener más información sobre la coincidencia con `restore-keys`, consulta "[Coincidencia con una clave de caché](#matching-a-cache-key)".

Si hay una coincidencia exacta con el elemento `key` proporcionado, se considera un acierto de caché. Si ninguna memoria caché coincide exactamente con el elemento `key` proporcionado, se considera un error de caché. En un error de caché, la acción crea automáticamente una nueva memoria caché si el trabajo se completa correctamente. La nueva caché usará el elemento `key` que proporcionaste y contiene los archivos que especificaste en `path`. Para obtener más información sobre cómo se controla esto, consulta "[Aciertos y errores de caché](#cache-hits-and-misses)".

No se puede cambiar el contenido de una memoria caché existente. En su lugar, puedes crear una nueva memoria caché con una nueva clave.


### Parámetros de entrada de la acción `cache`

- `key`: **obligatorio** La clave creada al guardar una memoria caché y la clave usada para buscar una caché. Puede ser cualquier combinación de variables, valores de contexto, cadenas estáticas y funciones. Las claves tienen una longitud máxima de 512 caracteres y las claves más largas que la longitud máxima provocarán un error en la acción.
- `path`: **obligatorio** las rutas de acceso en el ejecutor para almacenar en caché o restaurar.
  - Puedes especificar una única ruta de acceso o agregar varias rutas de acceso en líneas independientes. Por ejemplo:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Puedes especificar directorios o archivos únicos, y los patrones globales son compatibles.
  - Puedes especificar rutas de acceso absolutas o rutas de acceso relativas al directorio del área de trabajo.
- `restore-keys`: **opcional** una cadena que contiene claves de restauración alternativas, con cada clave de restauración colocada en una nueva línea. Si no se produce ningún acierto de caché para `key`, estas claves de restauración se usan secuencialmente en el orden proporcionado para buscar y restaurar una caché. Por ejemplo:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Parámetros de salida de la acción `cache`

- `cache-hit`: valor booleano para indicar que se encontró una coincidencia exacta para la clave.

### Aciertos y errores de caché
Cuando `key` coincide exactamente con una memoria caché existente, se denomina un _acierto de caché_ y la acción restaura los archivos almacenados en caché en el directorio `path`.

Cuando `key` no coincide con una caché existente, se denomina un _error de caché_ y se crea automáticamente una caché si el trabajo se completa correctamente.

Cuando se produce un error de caché, la acción también busca los elementos `restore-keys` especificados en busca de coincidencias:

1. Si proporcionas `restore-keys`, la acción `cache` busca secuencialmente las memorias caché que coincidan con la lista de `restore-keys`.
   - Cuando hay una coincidencia exacta, la acción restaura los archivos en la memoria caché al directorio `path`.
   - Si no hay coincidencias exactas, la acción busca coincidencias parciales de las claves de restauración. Cuando la acción encuentra una coincidencia parcial, se restaura la caché más reciente al directorio `path`.
1. La acción `cache` se completa y se ejecuta el paso siguiente del flujo de trabajo.
1. Si el trabajo se completa correctamente, la acción crea automáticamente una caché con los contenidos del directorio `path`.

Para obtener una explicación más detallada del proceso de coincidencia de caché, consulta "[Coincidencia de una clave de caché](#matching-a-cache-key)".

### Ejemplo de uso de la acción `cache`

En este ejemplo se crea una nueva memoria caché cuando cambian los paquetes del archivo `package-lock.json` o cuando cambia el sistema operativo del ejecutor. La clave de caché usa contextos y expresiones para generar una clave que incluye el sistema operativo del ejecutor y un hash SHA-256 del archivo `package-lock.json`.

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

### Usar contextos para crear claves de caché

Una clave de caché puede incluir cualquiera de los contextos, funciones, literales y operadores admitidos por {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts)" y "[Expresiones](/actions/learn-github-actions/expressions)".

Usar expresiones para crear un elemento `key` te permite crear automáticamente una caché cuando las dependencias cambian.

Por ejemplo, puedes crear una `key` mediante una expresión que calcule el hash de un archivo `package-lock.json` de npm. Por lo tanto, cuando cambian las dependencias que componen el cambio en el archivo `package-lock.json`, la clave de caché cambia y se crea automáticamente una caché.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} evalúa la expresión `hash "package-lock.json"` para generar el `key` final.

```yaml
npm-d5ea0750
```

### Uso de la salida de la acción `cache`

Puedes usar la salida de la acción `cache` para hacer algo en función de si se ha producido un acierto o un error en la caché. Si se encuentra una coincidencia exacta para la caché en la `key` especificada, la salida `cache-hit` se establece en `true`.

En el flujo de trabajo de ejemplo anterior, hay un paso que enumera el estado de los módulos de Node si se ha producido un error en la caché:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Hacer coincidir una clave de caché

La acción `cache` busca primero los aciertos de caché para `key` y la _versión_ de la memoria caché en la rama que contiene la ejecución del flujo de trabajo. Si no hay ningún acierto, busca `restore-keys` y la _versión_. Si sigue sin haber aciertos en la rama actual, la acción `cache` reintenta los mismos pasos en la rama predeterminada. Ten en cuenta que se aplican las restricciones de ámbito durante la búsqueda. Para obtener más información, consulta "[Restricciones para acceder a una memoria caché](#restrictions-for-accessing-a-cache)".

La versión de la memoria caché es una forma de marcar con un sello una memoria caché con metadatos de `path` y la herramienta de compresión que se usa al crear la memoria caché. Esto garantiza que la ejecución del flujo de trabajo de consumo coincida únicamente con una memoria caché que realmente puede descomprimir y usar. Para obtener más información, consulta [Versión de caché](https://github.com/actions/cache#cache-version) en la documentación de caché de Acciones.

`restore-keys` permite especificar una lista de claves de restauración alternativas que se usarán cuando se produce un error de caché en `key`. Puedes crear múltiples claves de restauración ordenadas desde las más específicas hasta las menos específicas. La acción `cache` busca `restore-keys` en orden secuencial. Cuando una clave no coincide directamente, la acción busca las claves prefijadas con la clave de restauración. Si hay múltiples coincidencias parciales para una clave de restauración, la acción devuelve la caché que se creó más recientemente.

### Ejemplo usando múltiples claves de restauración

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

El ejecutor evalúa las expresiones, que se resuelven en estos `restore-keys`:

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

La clave de restauración `npm-feature-` coincide con cualquier clave que comience por la cadena `npm-feature-`. Por ejemplo, las claves `npm-feature-fd3052de` y `npm-feature-a9b253ff` coinciden con la clave de restauración. Se utilizará la caché con la fecha de creación más reciente. Las claves en este ejemplo se buscan en el siguiente orden:

1. **`npm-feature-d5ea0750`** coincide con un hash específico.
1. **`npm-feature-`** coincide con las claves de caché con el prefijo `npm-feature-`.
1. **`npm-`** coincide con cualquier clave con el prefijo `npm-`.

#### Ejemplo de prioridad de búsqueda

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Por ejemplo, si una solicitud de incorporación de cambios contiene una rama `feature` y tiene como destino la rama predeterminada (`main`), la acción busca `key` y `restore-keys` en el orden siguiente:

1. Clave `npm-feature-d5ea0750` en la rama `feature`
1. Clave `npm-feature-` en la rama `feature`
1. Clave `npm-` en la rama `feature`
1. Clave `npm-feature-d5ea0750` en la rama `main`
1. Clave `npm-feature-` en la rama `main`
1. Clave `npm-` en la rama `main`

## Límites de uso y política de desalojo

{% data variables.product.prodname_dotcom %} eliminará todas las entradas de caché a las que no se haya accedido en más de 7 días. No hay límite en la cantidad de cachés que puedes almacenar, pero el tamaño total de todas las cachés de un repositorio es limitado{% ifversion actions-cache-policy-apis %}. De manera predeterminada, el límite es de 10 GB por repositorio, pero este límite puede ser diferente en función de las directivas que establezcan los propietarios de la empresa o los administradores del repositorio.{% else %} hasta 10 GB. {% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %}El proceso de expulsión de caché puede provocar la paginación excesiva de caché, donde las memorias caché se crean y eliminan con una alta frecuencia. Para reducir esto, puedes revisar las memorias caché de un repositorio y tomar medidas correctivas, como quitar el almacenamiento en caché de flujos de trabajo específicos. Para obtener más información, consulta "[Administración de memorias caché](#managing-caches)".{% endif %}{% ifversion actions-cache-admin-ui %} También puedes aumentar el límite de tamaño de caché de un repositorio. Para más información, vea "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".

{% elsif actions-cache-policy-apis %}

A fin de obtener información sobre cómo cambiar las directivas para el límite de tamaño de caché del repositorio, consulta "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" y "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".

{% endif %}

{% ifversion actions-cache-management %}

## Administración de cachés

{% ifversion actions-cache-ui %}

Para administrar las memorias caché creadas a partir de los flujos de trabajo, puedes:

- Ver una lista de todas las entradas de caché de un repositorio.
- Filtrar y ordenar la lista de memorias cachés mediante metadatos específicos, como el tamaño de la memoria caché, la hora de creación o la hora a la que se accedió por última vez.
- Eliminar las entradas de caché de un repositorio.
- Supervisar el uso de caché agregada para repositorios y organizaciones.

Hay varias maneras de administrar memorias cachés para los repositorios:

- Mediante la interfaz web de {% data variables.product.prodname_dotcom %}, como se muestra a continuación.
- Mediante la API REST. Para más información, consulta la documentación de la API REST de "[Caché de {% data variables.product.prodname_actions %}](/rest/actions/cache)".
- Instalando una extensión de la {% data variables.product.prodname_cli %} para administrar las memorias caché desde la línea de comandos. Para obtener más información, consulta la extensión [gh-actions-cache](https://github.com/actions/gh-actions-cache).

{% else %}

Puedes usar la API de REST de {% data variables.product.product_name %} para administrar las memorias caché. {% ifversion actions-cache-list-delete-apis %}Puedes usar la API para enumerar y eliminar entradas de caché y ver el uso de la caché.{% elsif actions-cache-management %}En la actualidad, puedes usar la API para ver el uso de la caché, con más funcionalidad esperada en actualizaciones futuras.{% endif %} Para más información, consulta la documentación de la API REST "[Caché de {% data variables.product.prodname_actions %}](/rest/actions/cache)".

También puedes instalar una extensión de {% data variables.product.prodname_cli %} para administrar las memorias caché desde la línea de comandos. Para obtener más información sobre la extensión, consulta [la documentación de la extensión](https://github.com/actions/gh-actions-cache#readme). Para más información sobre las extensiones de {% data variables.product.prodname_cli %}, consulta "[Uso de extensiones de la CLI de GitHub](/github-cli/github-cli/using-github-cli-extensions)".

{% endif %}

{% ifversion actions-cache-ui %}

### Visualización de entradas de caché

Puedes usar la interfaz web para ver una lista de entradas de caché de un repositorio. En la lista de caché, puedes ver cuánto espacio en disco usa cada memoria caché, cuándo se creó la memoria caché y cuándo se usó por última vez la memoria caché.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. Revisa la lista de entradas de caché del repositorio.

   * Para buscar entradas de caché usadas para una rama específica, haz clic en el menú desplegable **Rama** y selecciona una rama. La lista de memorias caché mostrará todas las memorias caché usadas para la rama seleccionada.
   * Para buscar entradas de caché con una clave de caché específica, usa la sintaxis `key: key-name` en el campo **Filtrar memorias cachés**. La lista de memorias caché mostrará las memorias caché de todas las ramas en las que se usó la clave.

   ![Captura de pantalla de la lista de entradas de caché](/assets/images/help/repository/actions-cache-entry-list.png)

### Eliminación de entradas de caché

Los usuarios con acceso `write` a un repositorio pueden usar la interfaz web de {% data variables.product.prodname_dotcom %} para eliminar entradas de caché.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. A la derecha de la entrada de caché que quieres eliminar, haz clic en {% octicon "trash" aria-label="The trash icon" %}. 

   ![Captura de pantalla de la lista de entradas de caché](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
