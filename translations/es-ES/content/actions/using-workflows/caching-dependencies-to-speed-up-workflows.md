---
title: Almacenar en caché las dependencias para agilizar los flujos de trabajo
shortTitle: Almacenar dependencias en caché
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
---

## Acerca de almacenar en caché las dependencias de flujo de trabajo

Las ejecuciones de flujo de trabajo a menudo reutilizan las mismas salidas o dependencias descargadas de una ejecución a otra. Por ejemplo, las herramientas de administración de paquetes y dependencias como Maven, Gradle, npm y Yarn mantienen una caché local de las dependencias descargadas.

{% ifversion fpt or ghec %} Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean virtual environment and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. {% endif %}To help speed up the time it takes to recreate files like dependencies, {% data variables.product.prodname_dotcom %} can cache files you frequently use in workflows.

To cache dependencies for a job, you can use {% data variables.product.prodname_dotcom %}'s [`cache` action](https://github.com/actions/cache). The action creates and restores a cache identified by a unique key. Alternatively, if you are caching the package managers listed below, using their respective setup-* actions requires minimal configuration and will create and restore dependency caches for you.

<table>
<thead>
  <tr>
    <th>Administradores de paquetes</th>
    <th>acción de setup-* para almacenar en caché</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>npm, yarn, pnpm</td>
    <td><a href="https://github.com/actions/setup-node#caching-global-packages-data">setup-node</a></td>
  </tr>
  <tr>
    <td>pip, pipenv</td>
    <td><a href="https://github.com/actions/setup-python#caching-packages-dependencies">setup-python</a></td>
  </tr>
  <tr>
    <td>gradle, maven</td>
    <td><a href="https://github.com/actions/setup-java#caching-packages-dependencies">setup-java</a></td>
  </tr>
  <tr>
    <td>ruby gems</td>
    <td><a href="https://github.com/ruby/setup-ruby#caching-bundle-install-automatically">setup-ruby</a></td>
  </tr>
</tbody>
</table>

{% warning %}

**Warning**: {% ifversion fpt or ghec %}Be mindful of the following when using caching with {% data variables.product.prodname_actions %}:

* {% endif %}We recommend that you don't store any sensitive information in the cache. Por ejemplo, la información confidencial puede incluir tokens de acceso o credenciales de inicio de sesión almacenados en un archivo en la ruta de la caché. Además, los programas de interfaz de línea de comando (CLI) como `docker login` pueden guardar las credenciales de acceso en un archivo de configuración. Anyone with read access can create a pull request on a repository and access the contents of a cache. Las bifurcaciones de un repositorio también pueden crear solicitudes de extracción en la rama base y acceder a las cachés en la rama base.
{%- ifversion fpt or ghec %}
* When using self-hosted runners, caches from workflow runs are stored on {% data variables.product.company_short %}-owned cloud storage. A customer-owned storage solution is only available with {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

For more information on workflow run artifacts, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

## Restricciones para acceder a una caché

Un flujo de trabajo puede acceder y restaurar una caché creada en la rama actual, la rama base (incluidas las ramas base de los repositorios bifurcados) o la rama predeterminada (por lo general `main`). Por ejemplo, un caché creado en la rama predeterminada sería accesible desde cualquier solicitud de cambios. También, si la rama `feature-b` tiene la rama base `feature-a`, un flujo de trabajo activado en `feature-b` tendría acceso a las cachés creadas en la rama predeterminada (`main`), `feature-a` y `feature-b`.

Las restricciones de acceso proporcionan aislamiento y seguridad de caché al crear una frontera lógica entre las ramas diferentes. For example, a cache created for the branch `feature-a` (with the base `main`) would not be accessible to a pull request for the branch `feature-c` (with the base `main`).

Los flujos de trabajo múltiples dentro de un repositorio comparten entradas de caché. Puede accederse a un caché que se crea para una rama dentro de un flujo de trabajo y se puede establecer desde otro flujo de trabajo para el mismo repositorio y rama.

## Usando la acción `cache`

The [`cache` action](https://github.com/actions/cache) will attempt to restore a cache based on the `key` you provide. Cuando la acción encuentra una memoria caché, la acción restaura los archivos almacenados en la caché al `path` (ruta) que configures.

If there is no exact match, the action automatically creates a new cache if the job completes successfully. The new cache will use the `key` you provided and contains the files you specify in `path`.

De manera opcional, puedes proporcionar una lista de `restore-keys` para usar cuando la `key` no coincida con una memoria caché existente. Una lista de `restore-keys` es útil cuando estás restaurando una caché desde otra rama porque `restore-keys` pueden coincidir parcialmente con claves de caché. Para obtener más información acerca de la coincidencia `restore-keys`, consulta [Hacer coincidir una clave de caché](#matching-a-cache-key)".

### Parámetros de entrada para la acción `chache`

- `key`: **Obligatorio** La clave que se crea cuando se guarda una memoria caché y la clave utilizada para buscar una caché. It can be any combination of variables, context values, static strings, and functions. Las claves tienen una longitud máxima de 512 caracteres y las claves más largas que la longitud máxima provocarán un error en la acción.
- `path`: **Required** The path(s) on the runner to cache or restore.
  - You can specify a single path, or you can add multiple paths on separate lines. Por ejemplo:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - You can specify either directories or single files, and glob patterns are supported.
  - You can specify absolute paths, or paths relative to the workspace directory.
- `restore-keys`: **Optional** A string containing alternative restore keys, with each restore key placed on a new line. If no cache hit occurs for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. Por ejemplo:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Parámetros de salida para la acción `cache`

- `cache-hit`: Un valor booleano para indicar que se encontró una coincidencia exacta para la llave.

### Ejemplo de uso para la acción `cache`

Este ejemplo crea una nueva memoria caché cuando los paquetes en el archivo `package-lock.json` cambian o cuando cambia el sistema operativo del ejecutor. La clave de caché usa contextos y expresiones para generar una clave que incluye el sistema operativo del ejecutor y un hash SHA-256 del archivo `package-lock.json`.

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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
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

When `key` matches an existing cache, it's called a _cache hit_, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a _cache miss_, and a new cache is automatically created if the job completes successfully.

When a cache miss occurs, the action also searches your specified `restore-keys` for any matches:

1. Si proporcionas `restore-Keys`, la acción `cache` busca cualquier caché en forma secuencial que coincida con la lista de `restore-keys`.
   - Cuando hay una coincidencia exacta, la acción restaura los archivos en la memoria caché al directorio `path`.
   - Si no hay coincidencias exactas, la acción busca coincidencias parciales de las claves de restauración. Cuando la acción encuentra una coincidencia parcial, se restaura la caché más reciente al directorio `path`.
1. The `cache` action completes and the next step in the job runs.
1. If the job completes successfully, the action automatically creates a new cache with the contents of the `path` directory.

For a more detailed explanation of the cache matching process, see "[Matching a cache key](#matching-a-cache-key)." Una vez que creas una caché, no puedes cambiar los contenidos de una memoria caché existente, pero puedes crear una nueva caché con una clave nueva.

### Usar contextos para crear claves de caché

Una clave de caché puede incluir cualquiera de los contextos, funciones, literales y operadores admitidos por {% data variables.product.prodname_actions %}. For more information, see "[Contexts](/actions/learn-github-actions/contexts)" and "[Expressions](/actions/learn-github-actions/expressions)."

Using expressions to create a `key` allows you to automatically create a new cache when dependencies change.

Por ejemplo, puedes crear una `key` utilizando una expresión que calcule el hash de un archivo `package-lock.json` de npm. So, when the dependencies that make up the `package-lock.json` file change, the cache key changes and a new cache is automatically created.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} evalúa la expresión `hash "package-lock.json"` para obtener la última `key`.

```yaml
npm-d5ea0750
```

### Using the output of the `cache` action

You can use the output of the `cache` action to do something based on whether a cache hit or miss occurred. If there is a cache miss (an exact match for a cache was not found for the specified `key`), the `cache-hit` output is set to `false`.

In the example workflow above, there is a step that lists the state of the Node modules if a cache miss occurred:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Hacer coincidir una clave de caché

La acción `cache` busca primero las coincidencias de caché para `key` y `restore-keys` en la rama que contiene la ejecución del flujo de trabajo. Si no hay coincidencias en la rama actual, la acción `chache` busca a `key` y `restore-keys` en la rama padre y en las ramas ascendentes.

`restore-keys` allows you to specify a list of alternate restore keys to use when there is a cache miss on `key`. Puedes crear múltiples claves de restauración ordenadas desde las más específicas hasta las menos específicas. The `cache` action searches the `restore-keys` in sequential order. Cuando una clave no coincide directamente, la acción busca las claves prefijadas con la clave de restauración. Si hay múltiples coincidencias parciales para una clave de restauración, la acción devuelve la caché que se creó más recientemente.

### Ejemplo usando múltiples claves de restauración

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

El ejecutor evalúa las expresiones, que resuelven estas `restore-keys`:

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

The restore key `npm-feature-` matches any key that starts with the string `npm-feature-`. For example, both of the keys `npm-feature-fd3052de` and `npm-feature-a9b253ff` match the restore key. Se utilizará la caché con la fecha de creación más reciente. Las claves en este ejemplo se buscan en el siguiente orden:

1. **`npm-feature-d5ea0750`** matches a specific hash.
1. **`npm-feature-`** matches cache keys prefixed with `npm-feature-`.
1. **`npm`** coincide con cualquier clave prefijada con `npm`.

#### Ejemplo de prioridad de búsqueda

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Key `npm-feature-d5ea0750` in the `feature` branch
1. Key `npm-feature-` in the `feature` branch
1. Key `npm-` in the `feature` branch
1. Key `npm-feature-d5ea0750` in the `main` branch
1. Key `npm-feature-` in the `main` branch
1. Key `npm-` in the `main` branch

## Límites de uso y política de desalojo

{% data variables.product.prodname_dotcom %} eliminará todas las entradas de caché a las que no se haya accedido en más de 7 días. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited{% if actions-cache-policy-apis %}. By default, the limit is 10 GB per repository, but this limit might be different depending on policies set by your enterprise owners or repository administrators.{% else %} to 10 GB.{% endif %}

{% data reusables.actions.cache-eviction-process %}

{% if actions-cache-policy-apis %}
For information on changing the policies for the repository cache size limit, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" and "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)."
{% endif %}

{% if actions-cache-management %}

## Managing caches

You can use the {% data variables.product.product_name %} REST API to manage your caches. At present, you can use the API to see your cache usage, with more functionality expected in future updates. For more information, see the "[Actions](/rest/reference/actions#cache)" REST API documentation.

{% endif %}
