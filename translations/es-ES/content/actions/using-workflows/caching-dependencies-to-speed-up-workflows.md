---
title: Almacenar en caché las dependencias para agilizar los flujos de trabajo
shortTitle: Caching dependencies
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
ms.openlocfilehash: efae730b48d2423821bb95ac639df355e6b9b5d9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710311'
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

Un flujo de trabajo puede acceder y restaurar una caché creada en la rama actual, la rama base (incluidas las ramas base de los repositorios bifurcados) o la rama predeterminada (por lo general, `main`). Por ejemplo, un caché creado en la rama predeterminada sería accesible desde cualquier solicitud de cambios. Además, si la rama `feature-b` tiene la rama base `feature-a`, un flujo de trabajo desencadenado en `feature-b` tendría acceso a las memorias caché creadas en la rama predeterminada (`main`), `feature-a` y `feature-b`.

Las restricciones de acceso proporcionan aislamiento y seguridad de caché al crear una frontera lógica entre las ramas o etiquetas diferentes. Por ejemplo, una caché creada para la rama `feature-a` (con la base `main`) no sería accesible para una solicitud de incorporación de cambios para la rama `feature-c` (con la base `main`). En líneas similares, una memoria caché creada para la etiqueta `release-a` (desde la base `main`) no sería accesible para un flujo de trabajo desencadenado para la etiqueta `release-b` (con la base `main`).

Los flujos de trabajo múltiples dentro de un repositorio comparten entradas de caché. Puede accederse a un caché que se crea para una rama dentro de un flujo de trabajo y se puede establecer desde otro flujo de trabajo para el mismo repositorio y rama.

## Uso de la acción `cache`

La [acción `cache`](https://github.com/actions/cache) intentará restaurar una caché en función del `key` que proporciones. Cuando la acción encuentra una memoria caché, la acción restaura los archivos almacenados en caché al `path` que configures.

Si no hay una coincidencia exacta, la acción crea automáticamente una caché si el trabajo se completa correctamente. La nueva caché usará el elemento `key` que proporcionaste y contiene los archivos que especificaste en `path`.

Opcionalmente, puedes proporcionar una lista de `restore-keys` para usarlos cuando `key` no coincide con una caché existente. Una lista de `restore-keys` resulta útil cuando se restaura una memoria caché desde otra rama porque `restore-keys` puede coincidir parcialmente con claves de caché. Para obtener más información sobre la coincidencia con `restore-keys`, consulta "[Coincidencia con una clave de caché](#matching-a-cache-key)".

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

Cuando `key` coincide con una caché existente, se denomina un _acierto de caché_ y la acción restaura los archivos almacenados en caché en el directorio `path`.

Cuando `key` no coincide con una caché existente, se denomina un _error de caché_ y se crea automáticamente una caché si el trabajo se completa correctamente.

Cuando se produce un error de caché, la acción también busca los elementos `restore-keys` especificados en busca de coincidencias:

1. Si proporcionas `restore-keys`, la acción `cache` busca secuencialmente las memorias caché que coincidan con la lista de `restore-keys`.
   - Cuando hay una coincidencia exacta, la acción restaura los archivos en la memoria caché al directorio `path`.
   - Si no hay coincidencias exactas, la acción busca coincidencias parciales de las claves de restauración. Cuando la acción encuentra una coincidencia parcial, se restaura la caché más reciente al directorio `path`.
1. La acción `cache` se completa y se ejecuta el paso siguiente del flujo de trabajo.
1. Si el trabajo se completa correctamente, la acción crea automáticamente una caché con los contenidos del directorio `path`.

Para obtener una explicación más detallada del proceso de coincidencia de caché, consulta "[Coincidencia de una clave de caché](#matching-a-cache-key)". Una vez que creas una caché, no puedes cambiar los contenidos de una memoria caché existente, pero puedes crear una nueva caché con una clave nueva.

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

La acción `cache` busca primero los aciertos de caché para `key` y `restore-keys` en la rama que contiene la ejecución del flujo de trabajo. Si no hay aciertos en la rama actual, la acción `cache` busca `key` y `restore-keys` en la rama primaria y las ramas ascendentes.

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

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %} Para información sobre cómo cambiar las directivas para el límite de tamaño de la caché de un repositorio, consulta "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" y "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".
{% endif %}

{% ifversion actions-cache-management %}

## Administración de cachés

Puedes usar la API de REST de {% data variables.product.product_name %} para administrar las memorias caché. {% ifversion actions-cache-list-delete-apis %}Puedes usar la API para enumerar y eliminar entradas de caché y ver el uso de la caché.{% elsif actions-cache-management %}En la actualidad, puedes usar la API para ver el uso de la caché, con más funcionalidad esperada en actualizaciones futuras.{% endif %} Para más información, consulta la documentación de la API REST "[Caché de {% data variables.product.prodname_actions %}](/rest/actions/cache)".

También puedes instalar una extensión de {% data variables.product.prodname_cli %} para administrar las memorias caché desde la línea de comandos. Para obtener más información sobre la extensión, consulta [la documentación de la extensión](https://github.com/actions/gh-actions-cache#readme). Para más información sobre las extensiones de {% data variables.product.prodname_cli %}, consulta "[Uso de extensiones de la CLI de GitHub](/github-cli/github-cli/using-github-cli-extensions)".

{% endif %}
