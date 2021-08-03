---
title: Almacenar en caché las dependencias para agilizar los flujos de trabajo
shortTitle: Almacenar dependencias en caché
intro: 'Para hacer que tus flujos de trabajo sean más rápidos y eficientes, puedes crear y usar cachés para las dependencias y otros archivos comúnmente reutilizados.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.ae-beta %}

### Acerca de almacenar en caché las dependencias de flujo de trabajo

Las ejecuciones de flujo de trabajo a menudo reutilizan las mismas salidas o dependencias descargadas de una ejecución a otra. Por ejemplo, las herramientas de administración de paquetes y dependencias como Maven, Gradle, npm y Yarn mantienen una caché local de las dependencias descargadas.

Los trabajos en los ejecutores alojados {% data variables.product.prodname_dotcom %} se inician en un entorno virtual limpio y deben descargar dependencias cada vez, lo que provoca una mayor utilización de la red, un tiempo de ejecución más largo y un mayor costo. Para ayudar a acelerar el tiempo que se tarda en volver a crear estos archivos, {% data variables.product.prodname_dotcom %} puede almacenar en caché las dependencias que utilizas con frecuencia en los flujos de trabajo.

Para almacenar en caché las dependencias de un trabajo, deberás usar la acción de `caché` de {% data variables.product.prodname_dotcom %}. La acción recupera una caché identificada por una clave única. Para más información, consulta [`actions/cache`](https://github.com/actions/cache). Si estás guardando gemas de Ruby en caché, mejor consider utilizar la acción mantenida de Ruby, la cual puede guardar paquetes de instalación en caché en el inicio. Para obtener más información, consulta la sección [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically).

{% warning %}

**Advertencia**: Te recomendamos que no almacenes ninguna información confidencial en la caché de los repositorios públicos. Por ejemplo, la información confidencial puede incluir tokens de acceso o credenciales de inicio de sesión almacenados en un archivo en la ruta de la caché. Además, los programas de interfaz de línea de comando (CLI) como `docker login` pueden guardar las credenciales de acceso en un archivo de configuración. Cualquier persona con acceso de lectura puede crear una solicitud de extracción en un repositorio y acceder a los contenidos de la caché. Las bifurcaciones de un repositorio también pueden crear solicitudes de extracción en la rama base y acceder a las cachés en la rama base.

{% endwarning %}

### Comparar artefactos y caché de dependencias

Los artefactos y el almacenamiento en caché son similares porque brindan la posibilidad de almacenar archivos en {% data variables.product.prodname_dotcom %}, pero cada característica ofrece diferentes casos de uso y no se puede usar indistintamente.

- Usa el almacenamiento en caché cuando quieras reutilizar archivos que no cambien a menudo entre trabajos o ejecuciones de flujo de trabajo.
- Usa artefactos cuando quieras guardar los archivos producidos por un trabajo para ver después de que haya finalizado un flujo de trabajo. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

### Restricciones para acceder a una caché

Con la `v2` de la acción `cache`, puedes acceder al caché en en los flujos de trabajo que cualquier evento que tenga un `GITHUB_REF` active. Si estás utilizando la `v1` de la acción `cache`, únicamente podrás acceder al caché en los flujos de trabajo que activen los eventos `push` y `pull_request`, con excepción de aquellos eventos `pull_request` `closed`. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Un flujo de trabajo puede acceder y restaurar una caché creada en la rama actual, la rama base (incluidas las ramas base de los repositorios bifurcados) o la rama predeterminada (por lo general `main`). Por ejemplo, un caché creado en la rama predeterminada sería accesible desde cualquier solicitud de cambios. También, si la rama `feature-b` tiene la rama base `feature-a`, un flujo de trabajo activado en `feature-b` tendría acceso a las cachés creadas en la rama predeterminada (`main`), `feature-a` y `feature-b`.

Las restricciones de acceso proporcionan seguridad y aislamiento de caché al crear un límite lógico entre diferentes flujos de trabajo y ramas. Por ejemplo, un caché creado para la rama `feature-a` (con la base `main`) no sería accesible para una solicitud de extracción para la rama `feature-b` (con la base `main`).

### Usando la acción `cache`

La acción `cache` intentará restaurar una memoria caché basada en la `key` (clave) que proporciones. Cuando la acción encuentra una memoria caché, la acción restaura los archivos almacenados en la caché al `path` (ruta) que configures.

Si no hay una coincidencia exacta, la acción crea una nueva entrada de caché si el trabajo se completa correctamente. La nueva memoria caché usará la `key` que proporcionaste y contiene los archivos en el directorio del `path`.

De manera opcional, puedes proporcionar una lista de `restore-keys` para usar cuando la `key` no coincida con una memoria caché existente. Una lista de `restore-keys` es útil cuando estás restaurando una caché desde otra rama porque `restore-keys` pueden coincidir parcialmente con claves de caché. Para obtener más información acerca de la coincidencia `restore-keys`, consulta [Hacer coincidir una clave de caché](#matching-a-cache-key)".

Para más información, consulta [`actions/cache`](https://github.com/actions/cache).

#### Parámetros de entrada para la acción `chache`

- `key`: **Obligatorio** La clave que se crea cuando se guarda una memoria caché y la clave utilizada para buscar una caché. Puede ser cualquier combinación de variables, valores de contexto, cadenas estáticas y funciones. Las claves tienen una longitud máxima de 512 caracteres y las claves más largas que la longitud máxima provocarán un error en la acción.
- `path`: **Obligatorio** La ruta del archivo en el ejecutor para almacenar en caché o restaurar. La ruta debe ser absoluta o relativa al directorio de trabajo.
  - Las rutas pueden ser tanto directorios o solo archivos, y los patrones estilo glob son compatibles.
  - With `v2` of the `cache` action, you can specify a single path, or you can add multiple paths on separate lines. Por ejemplo:
    ```
    - name: Cache Gradle packages
      uses: actions/cache@v2
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Con la `v1` de la acción `cache`, solo se puede utilizar una ruta única, la cual debe ser un directorio. No puedes almacenar en caché un archivo único.
- `restore-keys`: **Opcional** Una lista ordenada de claves alternativas que se usan para encontrar la caché si no se ha producido ningún hit de caché para `key`.

#### Parámetros de salida para la acción `cache`

- `cache-hit`: Un valor booleano para indicar que se encontró una coincidencia exacta para la llave.

#### Ejemplo de uso para la acción `cache`

Este ejemplo crea una nueva memoria caché cuando los paquetes en el archivo `package-lock.json` cambian o cuando cambia el sistema operativo del ejecutor. La clave de caché usa contextos y expresiones para generar una clave que incluye el sistema operativo del ejecutor y un hash SHA-256 del archivo `package-lock.json`.

{% raw %}
```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```
{% endraw %}

Cuando `key` coincide con una caché existente, se denomina hit de caché y la acción restaura los archivos almacenados en la caché al directorio `path`.

Cuando `key` no coincide con una caché existente, se denomina una falta de caché y se crea una nueva memoria caché si el trabajo se completa correctamente. Cuando se produce una falta de caché, la acción busca claves alternativas llamadas `restore-keys`.

1. Si proporcionas `restore-Keys`, la acción `cache` busca cualquier caché en forma secuencial que coincida con la lista de `restore-keys`.
   - Cuando hay una coincidencia exacta, la acción restaura los archivos en la memoria caché al directorio `path`.
   - Si no hay coincidencias exactas, la acción busca coincidencias parciales de las claves de restauración. Cuando la acción encuentra una coincidencia parcial, se restaura la caché más reciente al directorio `path`.
1. La acción `cache` se completa y el siguiente paso en el flujo de trabajo del job se ejecuta.
1. Si el trabajo se completa correctamente, la acción crea una nueva memoria caché con los contenidos del directorio `path`.

Para almacenar en caché los archivos en más de un directorio, necesitarás un paso que use la acción [`cache`](https://github.com/actions/cache) para cada directorio. Una vez que creas una caché, no puedes cambiar los contenidos de una memoria caché existente, pero puedes crear una nueva caché con una clave nueva.

#### Usar contextos para crear claves de caché

Una clave de caché puede incluir cualquiera de los contextos, funciones, literales y operadores admitidos por {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

Usar expresiones para crear una `key` te permite crear automáticamente una nueva caché cuando las dependencias han cambiado. Por ejemplo, puedes crear una `key` utilizando una expresión que calcule el hash de un archivo `package-lock.json` de npm.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} evalúa la expresión `hash "package-lock.json"` para obtener la última `key`.

```yaml
npm-d5ea0750
```

### Hacer coincidir una clave de caché

La acción `cache` busca primero las coincidencias de caché para `key` y `restore-keys` en la rama que contiene la ejecución del flujo de trabajo. Si no hay coincidencias en la rama actual, la acción `chache` busca a `key` y `restore-keys` en la rama padre y en las ramas ascendentes.

Puedes proporcionar una lista de claves de restauración para usar cuando haya una falta de caché en `key`. Puedes crear múltiples claves de restauración ordenadas desde las más específicas hasta las menos específicas. La acción `cache` busca `restore-keys` en orden secuencial. Cuando una clave no coincide directamente, la acción busca las claves prefijadas con la clave de restauración. Si hay múltiples coincidencias parciales para una clave de restauración, la acción devuelve la caché que se creó más recientemente.

#### Ejemplo usando múltiples claves de restauración

{% raw %}
```yaml
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

El ejecutor evalúa las expresiones, que resuelven estas `restore-keys`:

{% raw %}
```yaml
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

La clave de restauración `npm-foobar-` coincide con cualquier clave que empiece con la cadena `npm-foobar-`. Por ejemplo, ambas claves `npm-foobar-fd3052de` y `npm-foobar-a9b253ff` coinciden con la clave de restauración. Se utilizará la caché con la fecha de creación más reciente. Las claves en este ejemplo se buscan en el siguiente orden:

1. **`npm-foobar-d5ea0750`** coincide con un hash específico.
1. **`npm-foobar-`** coincide con claves de caché prefijadas con `npm-foobar-`.
1. **`npm`** coincide con cualquier clave prefijada con `npm`.

##### Ejemplo de prioridad de búsqueda

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Por ejemplo, si una solicitud de cambios contiene una rama `feature` (el alcance actual) y se dirige a la rama predeterminada (`main`), la acción busca a `key` y a `restore-keys` en el siguiente orden:

1. Clave `npm-feature-d5ea0750` en el alcance de la rama `feature`
1. Clave `npm-feature-` en el alcance de la rama `feature`
2. Clave `npm` en el alcance de la rama `feature`
1. Clave `npm-feature-d5ea0750` en el alcance de la rama `main`
3. Clave `npm-feature-` en el alcance de la rama `main`
4. Clave `npm-` en el alcance de la rama `main`

### Límites de uso y política de desalojo

{% data variables.product.prodname_dotcom %} eliminará todas las entradas de caché a las que no se haya accedido en más de 7 días. No hay límite en la cantidad de cachés que puedes almacenar, pero el tamaño total de todas las cachés en un repositorio está limitado a 5 GB. Si excedes este límite, {% data variables.product.prodname_dotcom %} guardará tu caché, pero comenzará a desalojar las cachés hasta que el tamaño total sea inferior a 5 GB.
