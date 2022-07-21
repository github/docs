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

{% ifversion fpt or ghec %} Los jobs en los ejecutores hospedados en {% data variables.product.prodname_dotcom %} inician en un ambiente virtual limpio y deben descargar dependencias en cada ocasión, lo que provoca que una mayor utilización de red, un tiempo de ejecución más largo y un costo incrementado. {% endif %}Para ayudar a agilizar el tiempo que toma el recrear archivos como dependencias, {% data variables.product.prodname_dotcom %} puede almacenar los archivos en caché que utilizas frecuentemente en los flujos de trabajo.

Para almacenar las dependencias en caché para un job, puedes utilizar la {% data variables.product.prodname_dotcom %}acción de [cache`` de ](https://github.com/actions/cache). La acción crea y restablece un caché identificado con una llave única. Como alternativa, si estás almacenando los siguientes administradores de paquetes en caché, el utilizar sus acciones respectivas de setup-* requiere de una configuración mínima y creará y restablecerá los cachés de dependencia para ti.

| Administradores de paquetes | acción de setup-* para almacenar en caché                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| npm, Yarn, pnpm             | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data)           |
| pip, pipenv, Poetry         | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies)      |
| Gradle, Maven               | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies)          |
| RubyGems                    | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically)      |
| Go `go.sum`                 | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Advertencia**: {% ifversion fpt or ghec %}Ten en cuenta lo siguiente cuando utilices el almacenamiento en caché con {% data variables.product.prodname_actions %}:

* {% endif %}Te recomendamos que no almacenes información sensible en el caché. Por ejemplo, la información confidencial puede incluir tokens de acceso o credenciales de inicio de sesión almacenados en un archivo en la ruta de la caché. Además, los programas de interfaz de línea de comando (CLI) como `docker login` pueden guardar las credenciales de acceso en un archivo de configuración. Cualquiera con acceso de lectura puede crear una solicitud de cambios en un repositorio y acceder al contenido de un caché. Las bifurcaciones de un repositorio también pueden crear solicitudes de extracción en la rama base y acceder a las cachés en la rama base.
{%- ifversion fpt or ghec %}
* Cuando utilizas ejecutores auto-hospedados, los cachés de las ejecuciones de flujo de trabajo se almacenan en el almacenamiento en la nube que pertenece a {% data variables.product.company_short %}. Las soluciones de almacenamiento que le pertenecen a los clientes solo están disponibles con {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Para obtener más información sobre los artefactos de ejecución de flujos de trabajo, consulta la sección "[Datos persistentes de flujos de trabajo que utilizan artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

## Restricciones para acceder a una caché

Un flujo de trabajo puede acceder y restaurar una caché creada en la rama actual, la rama base (incluidas las ramas base de los repositorios bifurcados) o la rama predeterminada (por lo general `main`). Por ejemplo, un caché creado en la rama predeterminada sería accesible desde cualquier solicitud de cambios. También, si la rama `feature-b` tiene la rama base `feature-a`, un flujo de trabajo activado en `feature-b` tendría acceso a las cachés creadas en la rama predeterminada (`main`), `feature-a` y `feature-b`.

Las restricciones de acceso proporcionan aislamiento y seguridad de caché al crear una frontera lógica entre las ramas diferentes. Por ejemplo, una solicitud de cambios para la rama `feature-c` (con la base `main`) no podría acceder a un caché que se creó para la rama `feature-a` (con la base `main`).

Los flujos de trabajo múltiples dentro de un repositorio comparten entradas de caché. Puede accederse a un caché que se crea para una rama dentro de un flujo de trabajo y se puede establecer desde otro flujo de trabajo para el mismo repositorio y rama.

## Usando la acción `cache`

La [acción `cache`](https://github.com/actions/cache) intentará restablecer un caché con base en la `key` que proporciones. Cuando la acción encuentra una memoria caché, la acción restaura los archivos almacenados en la caché al `path` (ruta) que configures.

Si no hay una coincidencia exacta, la acción creará automáticamente un caché nuevo si el job se completa con éxito. El caché nuevo utilizará la `key` que proporcionaste y contendrá los archivos que especificaste en `path`.

De manera opcional, puedes proporcionar una lista de `restore-keys` para usar cuando la `key` no coincida con una memoria caché existente. Una lista de `restore-keys` es útil cuando estás restaurando una caché desde otra rama porque `restore-keys` pueden coincidir parcialmente con claves de caché. Para obtener más información acerca de la coincidencia `restore-keys`, consulta [Hacer coincidir una clave de caché](#matching-a-cache-key)".

### Parámetros de entrada para la acción `chache`

- `key`: **Obligatorio** La clave que se crea cuando se guarda una memoria caché y la clave utilizada para buscar una caché. Puede ser cualquier combinación de variables, valores de contexto, secuencias estáticas y funciones. Las claves tienen una longitud máxima de 512 caracteres y las claves más largas que la longitud máxima provocarán un error en la acción.
- `path`: **Requerido** La(s) ruta(s) en el ejecutor para almacenar en caché o restablecer.
  - Puedes especificar una sola ruta o puedes agregar varias en líneas separadas. Por ejemplo:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Puedes especificar cualquiera de los directorios o archivos simples y los patrones globales son compatibles.
  - Puedes especificar las rutas absolutas o las relativas al directorio del espacio de trabajo.
- `restore-keys`: **Opcional** Una secuencia que contiene claves de restablecimiento alternas, con cada llave de restablecimiento colocada en una línea nueva. Si no se suscita ninguna ocurrencia en caché para `key`, estas llaves de restablecimiento se utilizarán secuencialmente en el orden proporcionado para encontrar y restablecer un caché. Por ejemplo:

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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
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

Cuando `key` empata con un caché existente, a esto se le llama una _ocurrencia en caché_ y la acción restablece los archivos almacenados en caché al directorio de la `path`.

Cuando `key` no coincide con un caché existente, se le llama una _omisión de caché_ y se crea un caché nuevo automáticamente si el job se completa con éxito.

Cuando se suscita una omisión de caché, la acción también busca tus `restore-keys` para cualquier coincidencia:

1. Si proporcionas `restore-Keys`, la acción `cache` busca cualquier caché en forma secuencial que coincida con la lista de `restore-keys`.
   - Cuando hay una coincidencia exacta, la acción restaura los archivos en la memoria caché al directorio `path`.
   - Si no hay coincidencias exactas, la acción busca coincidencias parciales de las claves de restauración. Cuando la acción encuentra una coincidencia parcial, se restaura la caché más reciente al directorio `path`.
1. La acción `cache` se completa y el siguiente paso en el job se ejecuta.
1. Si el job se completa con éxito, la acción crea automáticamente un caché nuevo con el contenido del directorio `path`.

Para obtener una explicación más detallada del proceso de coincidencia de caché, consulta la sección "[Hacer coincidir a una llave de caché](#matching-a-cache-key)". Una vez que creas una caché, no puedes cambiar los contenidos de una memoria caché existente, pero puedes crear una nueva caché con una clave nueva.

### Usar contextos para crear claves de caché

Una clave de caché puede incluir cualquiera de los contextos, funciones, literales y operadores admitidos por {% data variables.product.prodname_actions %}. Para obtener más información, consulta las secciones "[Contextos](/actions/learn-github-actions/contexts)" y "[Expresiones](/actions/learn-github-actions/expressions)".

El utilizar expresiones para crear una `key` te permite crear automáticamente un caché nuevo cuando las dependencias cambian.

Por ejemplo, puedes crear una `key` utilizando una expresión que calcule el hash de un archivo `package-lock.json` de npm. Así que, cuando cambian las dependencias que conforman el archivo `package-lock.json`, la llave del caché cambia y un caché nuevo se crea automáticamente.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} evalúa la expresión `hash "package-lock.json"` para obtener la última `key`.

```yaml
npm-d5ea0750
```

### Utilizar la salida de la acción `cache`

Puedes utilizar la salida de la acción `cache` para hacer algo con base en si se suscita una ocurrencia u omisión en caché. Si se suscita una omisión en caché (no se encontró una coincidencia exacta para un caché en la `key` especificada), la salida `cache-hit` se configura en `false`.

En el flujo de trabajo del ejemplo anterior, hay un paso que lista el estado de los módulos de nodo si se suscitó una omisión de caché:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Hacer coincidir una clave de caché

La acción `cache` busca primero las coincidencias de caché para `key` y `restore-keys` en la rama que contiene la ejecución del flujo de trabajo. Si no hay coincidencias en la rama actual, la acción `chache` busca a `key` y `restore-keys` en la rama padre y en las ramas ascendentes.

`restore-keys` te permite especificar una lista de llaves de restablecimiento alternas a utilizar cuando hay una omisión de caché en la `key`. Puedes crear múltiples claves de restauración ordenadas desde las más específicas hasta las menos específicas. La acción `cache` busca las `restore-keys` en orden secuencial. Cuando una clave no coincide directamente, la acción busca las claves prefijadas con la clave de restauración. Si hay múltiples coincidencias parciales para una clave de restauración, la acción devuelve la caché que se creó más recientemente.

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

La llave de restablecimiento `npm-feature-` coincide con cualquier llave que inicie con la secuencia `npm-feature-`. Por ejemplo, ambas llaves: `npm-feature-fd3052de` y `npm-feature-a9b253ff`, coinciden con la llave de restablecimiento. Se utilizará la caché con la fecha de creación más reciente. Las claves en este ejemplo se buscan en el siguiente orden:

1. **`npm-feature-d5ea0750`** coincide con un hash específico.
1. **`npm-feature-`** coincide con las llaves de caché que tienen el prefijo `npm-feature-`.
1. **`npm`** coincide con cualquier clave prefijada con `npm`.

#### Ejemplo de prioridad de búsqueda

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Por ejemplo, si una solicitud de cambios contiene una rama de `feature` y apunta a la rama predeterminada (`main`), la acción busca a `key` y `restore-keys` en el siguiente orden:

1. La llave `npm-feature-d5ea0750` en la ruta `feature`
1. La llave `npm-feature-` en la rama `feature`
1. La llave `npm-` en la rama `feature`
1. La llave `npm-feature-d5ea0750` en la rama `main`
1. La llave `npm-feature-` en la rama `main`
1. La llave `npm-` en la rama `main`

## Límites de uso y política de desalojo

{% data variables.product.prodname_dotcom %} eliminará todas las entradas de caché a las que no se haya accedido en más de 7 días. No hay límite en la cantidad de cachés que puedes almacenar, pero el tamaño total de todos ellos en un repositorio se limita{% ifversion actions-cache-policy-apis %}. Predeterminadamente, el límite es de 10 GB por repositorio, pero este límite podría ser diferente dependiendo de las políticas que configuren tus propietarios de empresa o administradores de repositorio.{% else %} a 10 GB.{% endif %}

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %}
Para obtener más información sobre cómo cambiar las políticas del límite de tamaño del caché del repositorio, consulta las secciones "[Requerir políticas para las {% data variables.product.prodname_actions %} de tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" y "[Administrar los ajustes de las {% data variables.product.prodname_actions %} de un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".
{% endif %}

{% ifversion actions-cache-management %}

## Administrar los cachés

Puedes utilizar la API de REST de {% data variables.product.product_name %} para administrar tus cachés. {% ifversion actions-cache-list-delete-apis %}You can use the API to list and delete cache entries, and see your cache usage.{% elsif actions-cache-management %}At present, you can use the API to see your cache usage, with more functionality expected in future updates.{% endif %} For more information, see the "[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)" REST API documentation.

{% endif %}
