---
title: Sintaxis de metadatos para acciones de GitHub
shortTitle: Sintaxis de metadatos
intro: Puedes crear acciones para realizar tareas en tu repositorio. Las acciones requieren un archivo de metadatos que use la sintaxis YAML.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de la nueva sintaxis YAML para {% data variables.product.prodname_actions %}

Las acciones Docker y JavaScript requieren un archivo de metadatos. El nombre del archivo de metadatos debe ser `action.yml` o `action.yaml`. Los datos del archivo de metadatos definen las entradas, las salidas y el punto de entrada principal para tu acción.

Los archivos de metadatos de acción usan la sintaxis YAML. Si eres nuevo en YAML, puedes leer "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

### **`name (nombre)`**

**Requerido** El nombre de tu acción. {% data variables.product.prodname_dotcom %} muestra el `name` (nombre) en la pestaña **Actions** (Acciones) para ayudarte a identificar visualmente las acciones en cada trabajo.

### **`autor`**

**Opcional** El nombre del autor de las acciones.

### **`descripción`**

**Requerido** Una descripción breve de la acción.

### **`inputs (entradas)`**

**Opcional** Los parámetros de entrada te permiten especificar datos que la acción espera para usar durante el tiempo de ejecución. {% data variables.product.prodname_dotcom %} almacena parámetros de entrada como variables de entorno. Las Id de entrada con letras mayúsculas se convierten a minúsculas durante el tiempo de ejecución. Recomendamos usar Id de entrada en minúsculas.

#### Ejemplo

Este ejemplo configura dos entradas: numOctocats y octocatEyeColor. La entrada numOctocats no se requiere y se predeterminará a un valor de '1'. Se requiere la entrada octocatEyeColor y no tiene un valor predeterminado. Los archivos de flujo de trabajo que usan esta acción deben usar la palabra clave `with` (con) para establecer un valor de entrada para octocatEyeColor. Para obtener información sobre la sintaxis `with` (con), consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".


```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```


Cuando especificas una entrada para una acción en un archivo de flujo de trabajo o usas un valor de entrada predeterminado, {% data variables.product.prodname_dotcom %} crea una variable de entorno para la entrada con el nombre `INPUT_<VARIABLE_NAME>`. La variable de entorno creada convierte los nombre de entrada en letras mayúscula y reemplaza los espacios con los caracteres `_`.

Por ejemplo, si un flujo de trabajo definió las entradas numOctocats y octocatEyeColor, el código de acción podría leer los valores de las entradas usando las variables de entorno `INPUT_NUMOCTOCATS` y `INPUT_OCTOCATEYECOLOR`.

#### **`inputs.<input_id>`**

**Requerido** Un identificador `string` (cadena) para asociar con la entrada. El valor de `<input_id>` es un mapa con los metadatos de la entrada. `<input_id>` debe ser un identificador único dentro del objeto `inputs` (entradas). El `<input_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### **`inputs.<input_id>.description`**

**Requerido** Una descripción de `string` del parámetro de entrada.

#### **`inputs.<input_id>.required`**

**Requerido** Un `boolean` (booleano) para indicar si la acción requiere el parámetro de entrada. Establecer en `true` cuando se requiera el parámetro.

#### **`inputs.<input_id>.default`**

**Opcional** Una `string` que representa el valor predeterminado. El valor predeterminado se usa cuando un parámetro de entrada no se especifica en un archivo de flujo de trabajo.

### **`outputs (salidas)`**

**Opcional** Los parámetros de salida te permiten declarar datos que una acción establece. Las acciones que se ejecutan más tarde en un flujo de trabajo pueden usar el conjunto de datos de salida en acciones de ejecución anterior.  Por ejemplo, si se realizó una acción además de las dos entradas (x + y = z), la acción podría dar como resultado la suma (z) para que otras acciones la usen como entrada.

Si no declaras una salida en tu archivo de metadatos de acción, todavía puedes configurar las salidas y utilizarlas en un flujo de trabajo. Para obtener más información acerca de la configuración de salidas en una acción, consulta "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)".

#### Ejemplo

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

#### **`outputs.<output_id>`**

**Requerido** Un identificador `string` para asociar con la salida. El valor de `<output_id>` es un mapa con los metadatos de la salida. `<output_id>` debe ser un identificador único dentro del objeto `outputs` (salidas). El `<output_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### **`outputs.<output_id>.description`**

**Requerido** Una descripción de `string` del parámetro de salida.

### **`outputs`** para acciones de pasos de ejecución compuestos

Los `outputs` **Opcionales** utilizan los mismos parámetros que los `outputs.<output_id>` and los `outputs.<output_id>.description` (consulta la sección "[`outputs` para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)"), pero también incluyen el token de `value`.

#### Ejemplo

{% raw %}
```yaml
outputs:
  random-number: 
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps: 
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

#### **`outputs.<output_id.value>`**
**Requerido** El valor al cual se mapeará el parámetro de salida. Puedes configurarlo a una `string` o a una expresión con contexto. Por ejemplo, puedes utilizar el contexto `steps` para configurar el `value` de una salida al valor de salida de un paso.

Para obtener más información sobre cómo utilizar la sintaxis de contexto y de expresión, consulta la sección "[Sintaxis de contexto y de expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### **`runs`** para acciones de JavaScript

**Requerido** Configura la ruta al código de la acción y a la aplicación que se utiliza para ejecutar dicho código.

#### Ejemplo usando Node.js

```yaml
runs:
  using: 'node12'
  main: 'main.js'
```

#### **`runs.using`**

**Requerido** La aplicación utilizada para el código especificado en [`main`](#runsmain).

#### **`runs.main`**

**Requerido** El archivo que contiene tu código de acción. La aplicación especificada en [`using`](#runsusing) ejecuta este archivo.

#### **`pre`**

**Opcional** Te permite ejecutar un script al inicio de un job, antes de que la acción `main:` comience. Por ejemplo, puedes utilizar `pre:` para ejecutar un script de configuración de pre-requisitos. La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo. La acción `pre:` siempre se ejecuta predeterminadamente pero puedes invalidarla utilizando [`pre-if`](#pre-if).

En este ejemplo, la acción `pre:` ejecuta un script llamado `setup.js`:

```yaml
runs:
  using: 'node12'
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

#### **`pre-if`**

**Opcional** Te permite definir las condiciones para la ejecución de la acción `pre:`. La acción `pre:` únicamente se ejecutará si se cumplen las condiciones en `pre-if`. Si no se configura, `pre-if` se configurará predefinidamente como `always()`. Nota que el contexto `step` no está disponible, ya que no se ha ejecutado ningún paso todavía.

En este ejemplo, `cleanup.js` se ejecuta únicamente en los ejecutores basados en linux:

```yaml
  pre: 'cleanup.js'
  pre-if: 'runner.os == linux'
```

#### **`publicación`**

**Opcional** Te permite ejecutar un script al final de un job, una vez que se haya completado la acción `main:`. Por ejemplo, puedes utilizar `post:` para finalizar algunos procesos o eliminar los archivos innecesarios. La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo.

En este ejemplo, la acción `post:` ejecuta un script llamado `cleanup.js`:

```yaml
runs:
  using: 'node12'
  main: 'index.js'
  post: 'cleanup.js'
```

La acción `post:` siempre se ejecuta predeterminadamente, pero la puedes invalidar utilizando `post-if`.

#### **`post-if`**

**Opcional** Te permite definir condiciones para la ejecución de la acción `post:`. La acción `post` únicamente se ejecutará si se cumplen las condiciones en `post-if`. Si no se configura, `pre-if` se configurará predeterminadamente como `always()`.

Por ejemplo, este `cleanup.js` únicamente se ejecutará en ejecutores basados en Linux:

```yaml
  post: 'cleanup.js'
  post-if: 'runner.os == linux'
```

### **`runs`** para acciones de pasos de ejecución compuestos

**Requerido** Configura la ruta a la acción compuesta, y la aplicación que se utiliza para ejecutar el código.

#### **`runs.using`**

**Requerido** Para utilizar una acción de pasos de ejecución compuestos, configúrala como `"composite"`.

#### **`runs.steps`**

**Requerido** Los pasos de ejecución que planeas ejecutar en esta acción.

##### **`runs.steps.run`**

**Requerido** El comando que quieres ejecutar. Este puede estar dentro de la línea o ser un script en tu repositorio de la acción:
```yaml
runs:
  using: "composite"
  steps: 
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```

Como alternativa, puedes utilizar `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps: 
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Para obtener más información, consulta la sección "[``](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

##### **`runs.steps.shell`**

**Requerido** El shell en donde quieres ejecutar el comando. Puedes utilizar cualquiera de los shells listados [aquí](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

##### **`runs.steps.name`**

**Opcional** El nombre del paso de ejecución compuesto.

##### **`runs.steps.id`**

**Opcional** Un identificador único para el paso. Puede usar el `id` para hacer referencia al paso en contextos. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### **`runs.steps.env`**

**Opcional**  Configura un `map` de variables de ambiente únicamente para este paso. Si quieres modificar la variable de ambiente en el flujo de trabajo, utiliza `echo "::set-env name={name}::{value}"` en un paso de ejecución compuesto.

##### **`runs.steps.working-directory`**

**Opcional**  Especifica el directorio de trabajo en donde se ejecuta un comando.

### **`runs`** para acciones de Docker

**Requerido** Configura la imagen utilizada para la acción de Docker.

#### Ejemplo utilizando un Dockerfile en tu repositorio

```yaml
runs: 
  using: 'docker'
  image: 'Dockerfile'
```

#### Ejemplo usando un contenedor de registro Docker público

```yaml
runs: 
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

#### **`runs.using`**

**Requerido** Debes configurar este valor como `'docker'`.

#### **`pre-entrypoint`**

**Opcional** Te permite ejecutar un script antes de que comience la acción `entrypoint`. Por ejemplo, puedes utilizar `pre-entrypoint` para ejecutar un script de configuración de pre-requisitos. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción, y ejecuta el script dentro de un contenedor nuevo que utiliza la misma imagen base. Esto significa que el estado del tiempo de ejecución difiere de el contenedor principal `entrypoint`, y se deberá acceder a cualquier estado que requieras ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `pre-entrypoint:` siempre se ejecuta predeterminadamente pero la puedes invalidar utilizando [`pre-if`](#pre-if).

La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo.

En este ejemplo, la acción `pre.entrypoint:` ejecuta un script llamado `setup.sh`:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
  - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

#### **`runs.image`**

**Requerido** La imagen de Docker a utilizar como el contenedor para ejecutar la acción. El valor puede ser el nombre de la imagen base de Docker, un `Dockerfile` local en tu repositorio, o una imagen pública en Docker Hub u otro registro. Para hacer referencia a un `Dockerfile` local en tu repositorio, usa una ruta relativa a tu archivo de metadatos de acción. La aplicación `docker` ejecutará este archivo.

#### **`runs.env`**

**Opcional** Especifica mapa clave/de valores de las variables del ambiente para configurar en el ambiente del contenedor.

#### **`runs.entrypoint`**

**Opcional** Invalida el `ENTRYPOINT` de Docker en el `Dockerfile`, o lo configura si no se había especificado anteriormente. Utiliza `entrypoint` cuando el `Dockerfile` no especifique un `ENTRYPOINT` o cuando quieras invalidar la instrucción de `ENTRYPOINT`. Si omites el `entrypoint`, se ejecutarán los comandos que especifiques en la instrucción `ENTRYPOINT` de Docker. La instrucción `ENTRYPOINT` de Docker tiene una forma de _shell_ y una de _exec_. La documentación de `ENTRYPOINT` de Docker recomienda utilizar la forma de _exec_ de la instrucción `ENTRYPOINT`.

Para obtener más información acerca de cómo se ejecuta el `entrypoint`, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

#### **`post-entrypoint`**

**Opcional** Te permite ejecutar un script de limpieza una vez que se haya completado la acción de `runs.entrypoint`. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción. Ya que {% data variables.product.prodname_actions %} ejecuta el script dentro de un contenedor nuevo utilizando la misma imagen base, el estado de tiempo de ejecución es diferente del contenedor principal de `entrypoint`. Puedes acceder a cualquier estado que necesites, ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `post-entrypoint:` siempre se ejecuta predeterminadamente, pero puedes invalidarla utilizando [`post-if`](#post-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
  - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

#### **`runs.args`**

**Opcional** Una matriz de secuencias que defina las entradas para un contenedor de Docker. Las entradas pueden incluir cadenas codificadas de forma rígida. {% data variables.product.prodname_dotcom %} comunica los `args`en el `ENTRYPOINT` del contenedor cuando se inicia el contenedor.

Los `args` se usan en el lugar de la instrucción `CMD` en un `Dockerfile`. Si usas `CMD` en tu `Dockerfile`, usa los lineamientos ordenados por preferencia:

{% data reusables.github-actions.dockerfile-guidelines %}

Si necesitas pasar variables de ambiente a una acción, asegúrate que ésta ejecute un shell de comandos para realizar la sustitución de variables. Por ejemplo, si se configura tu atributo `entrypoint` como `"sh -c"`, entoces `args` se ejecutará en un shell de comandos. Como alternativa, si tu `Dockerfile` utiliza un `ENTRYPOINT` para ejecutar el mismo comando (`"sh -c"`), entonces `args` se ejecutará en un shell de comandos.

Para obtener más información sobre el uso de la instrucción `CMD` con {% data variables.product.prodname_actions %}, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

##### Ejemplo

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

### **`branding (marca)`**

Puedes usar un color y un icono [Pluma](https://feathericons.com/) para crear un distintivo para personalizar y distinguir tu acción. Las insignias se muestran junto a tu nombre de la acción en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

#### Ejemplo

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

#### **`branding.color`**

El color de fondo de la insignia. Puede ser: `blanco`, `amarillow`, `azul`, `verde`, `anaranjado`, `rojo`, `púrpura` o `gris oscuro`.

#### **`branding.icon`**

El nombre del icono de [Pluma](https://feathericons.com/) que se debe usar.

<table>
<tr>
<td>actividad</td>
<td>radiodifusión</td>
<td>alerta-círculo</td>
<td>alerta-octágono</td>
</tr>
<tr>
<td>alerta-triángulo</td>
<td>alinear-centro</td>
<td>alinear-justificar</td>
<td>alinear-izquierda</td>
</tr>
<tr>
<td>alinear-derecha</td>
<td>ancla</td>
<td>apertura</td>
<td>archivar</td>
</tr>
<tr>
<td>flecha-abajo-círculo</td>
<td>flecha-abajo-izquierda</td>
<td>flecha-abajo-derecha</td>
<td>flecha-abajo</td>
</tr>
<tr>
<td>flecha-izquierda-círculo</td>
<td>flecha-izquierda</td>
<td>flecha-derecha-círculo</td>
<td>flecha-derecha</td>
</tr>
<tr>
<td>flecha-arriba-círculo</td>
<td>flecha-arriba-izquierda</td>
<td>flecha-arriba-derecha</td>
<td>flecha-arriba</td>
</tr>
<tr>
<td>en-cartel</td>
<td>premio</td>
<td>barra-cuadro-2</td>
<td>barra-cuadro</td>
</tr>
<tr>
<td>batería-carga</td>
<td>batería</td>
<td>campana-apagado</td>
<td>campana</td>
</tr>
<tr>
<td>bluetooth</td>
<td>negrita</td>
<td>libro-abierto</td>
<td>libro</td>
</tr>
<tr>
<td>marcador</td>
<td>caja</td>
<td>maletín</td>
<td>calendario</td>
</tr>
<tr>
<td>cámara-apagado</td>
<td>cámara</td>
<td>molde</td>
<td>verificar-círculo</td>
</tr>
<tr>
<td>verificar-cuadrado</td>
<td>verificar</td>
<td>comilla angular-abajo</td>
<td>comilla angular-izquierda</td>
</tr>
<tr>
<td>comillas angulares-derehca</td>
<td>comilla angular- arriba</td>
<td>comillas angulares-abajo</td>
<td>comillas angulares-izquierda</td>
</tr>
<tr>
<td>comillas angulares-derecha</td>
<td>comillas angulares- arriba</td>
<td>círculo</td>
<td>portapapeles</td>
</tr>
<tr>
<td>reloj</td>
<td>nube-llovizna</td>
<td>nube-rayo</td>
<td>nube-apagado</td>
</tr>
<tr>
<td>nube-lluvia</td>
<td>nube-nieve</td>
<td>nube</td>
<td>código</td>
</tr>
<tr>
<td>comando</td>
<td>brújula</td>
<td>copiar</td>
<td>ángulo-abajo-izquierdo</td>
</tr>
<tr>
<td>ángulo-abajo-derecho</td>
<td>ángulo-izquierdo-abajo</td>
<td>ángulo-arriba-izquierdo</td>
<td>ángulo-derecho-abajo</td>
</tr>
<tr>
<td>ángulo-derecho-arriba</td>
<td>ángulo-arriba-izquierdo</td>
<td>ángulo-arriba-derecha</td>
<td>cpu</td>
</tr>
<tr>
<td>tarjeta-de-crédito</td>
<td>cortar</td>
<td>punto de mira</td>
<td>base de datos</td>
</tr>
<tr>
<td>eliminar</td>
<td>disco</td>
<td>dólar-signo</td>
<td>descargar-nube</td>
</tr>
<tr>
<td>descargar</td>
<td>gota</td>
<td>editar-2</td>
<td>editar-3</td>
</tr>
<tr>
<td>editar</td>
<td>externo-enlace</td>
<td>desviar la mirada</td>
<td>ojo</td>
</tr>
<tr>
<td>facebook</td>
<td>avance rápido</td>
<td>pluma</td>
<td>archivo-menos</td>
</tr>
<tr>
<td>archivo-más</td>
<td>archivo-texto</td>
<td>archivo</td>
<td>película</td>
</tr>
<tr>
<td>filtro</td>
<td>bandera</td>
<td>carpeta-menos</td>
<td>carpeta-más</td>
</tr>
<tr>
<td>carpeta</td>
<td>obsequio</td>
<td>git-rama</td>
<td>git-confirmar</td>
</tr>
<tr>
<td>git-fusionar</td>
<td>git-solicitud-extracción</td>
<td>globo</td>
<td>cuadrícula</td>
</tr>
<tr>
<td>disco-duro</td>
<td>hash</td>
<td>auriculares</td>
<td>corazón</td>
</tr>
<tr>
<td>ayuda-círculo</td>
<td>hogar</td>
<td>imagen</td>
<td>bandeja de entrada</td>
</tr>
<tr>
<td>info</td>
<td>cursiva</td>
<td>capas</td>
<td>diseño</td>
</tr>
<tr>
<td>vida-boya</td>
<td>enlace-2</td>
<td>enlace</td>
<td>lista</td>
</tr>
<tr>
<td>cargador</td>
<td>bloquear</td>
<td>iniciar-sesión</td>
<td>cerrar-sesión</td>
</tr>
<tr>
<td>correo</td>
<td>asignar-pin</td>
<td>asignar</td>
<td>maximizar-2</td>
</tr>
<tr>
<td>maximizar
</td>
<td>menú</td>
<td>mensaje-círculo</td>
<td>mensaje-cuadrado</td>
</tr>
<tr>
<td>mic-apagado</td>
<td>mic</td>
<td>minimizar-2</td>
<td>minimizar</td>
</tr>
<tr>
<td>menos-círculo</td>
<td>menos-cuadrado</td>
<td>menos</td>
<td>monitor</td>
</tr>
<tr>
<td>luna</td>
<td>más-horizontal</td>
<td>más-vertical</td>
<td>mover</td>
</tr>
<tr>
<td>música</td>
<td>navegación-2</td>
<td>navegación</td>
<td>octágono</td>
</tr>
<tr>
<td>paquete</td>
<td>sujetapapeles</td>
<td>pausa-círculo</td>
<td>pausar</td>
</tr>
<tr>
<td>porcentaje</td>
<td>llamada-telefónica</td>
<td>teléfono-transferencia</td>
<td>teléfono-entrante</td>
</tr>
<tr>
<td>teléfono-perdido</td>
<td>teléfono-apagado</td>
<td>teléfono-salida</td>
<td>teléfono</td>
</tr>
<tr>
<td>gráfico-circular</td>
<td>reproducir-círculo</td>
<td>reproducir</td>
<td>más-círculo</td>
</tr>
<tr>
<td>más-cuadrado</td>
<td>más</td>
<td>bolsillo</td>
<td>potencia</td>
</tr>
<tr>
<td>impresora</td>
<td>radio</td>
<td>actualizar-ccw</td>
<td>actualizar-cw</td>
</tr>
<tr>
<td>repetir</td>
<td>retroceder</td>
<td>rotar-ccw</td>
<td>rotar-cw</td>
</tr>
<tr>
<td>rss</td>
<td>guardar</td>
<td>tijeras</td>
<td>buscar</td>
</tr>
<tr>
<td>enviar</td>
<td>servidor</td>
<td>parámetros</td>
<td>compartir-2</td>
</tr>
<tr>
<td>compartir</td>
<td>escudo-apagar</td>
<td>escudo</td>
<td>bolsa-de-compras</td>
</tr>
<tr>
<td>carro-de-compras</td>
<td>aleatorio</td>
<td>barra lateral</td>
<td>omitir-atrás</td>
</tr>
<tr>
<td>omitir-adelante</td>
<td>barra</td>
<td>deslizadores</td>
<td>smartphone</td>
</tr>
<tr>
<td>parlante</td>
<td>cuadrado</td>
<td>estrella</td>
<td>detener-círculo</td>
</tr>
<tr>
<td>sol</td>
<td>amanecer</td>
<td>atardecer</td>
<td>tablet</td>
</tr>
<tr>
<td>etiqueta</td>
<td>destino</td>
<td>terminal</td>
<td>termómetro</td>
</tr>
<tr>
<td>pulgares-abajo</td>
<td>pulgares-arriba</td>
<td>alternar-izquierda</td>
<td>alternar-derecha</td>
</tr>
<tr>
<td>papelera-2</td>
<td>papelera</td>
<td>tendencia-abajo</td>
<td>tendencia-arriba</td>
</tr>
<tr>
<td>triángulo</td>
<td>camión</td>
<td>TV</td>
<td>type</td>
</tr>
<tr>
<td>paraguas</td>
<td>subrayar</td>
<td>desbloquear</td>
<td>cargar-nube</td>
</tr>
<tr>
<td>cargar</td>
<td>usuario-comprobar</td>
<td>usuario-menos</td>
<td>usuario-más</td>
</tr>
<tr>
<td>usuario-x</td>
<td>usuario</td>
<td>usuarios</td>
<td>video-apagar</td>
</tr>
<tr>
<td>video</td>
<td>correo de voz</td>
<td>volumen-1</td>
<td>volumen-2</td>
</tr>
<tr>
<td>volumen-x</td>
<td>volumen</td>
<td>ver</td>
<td>wifi-apagar</td>
</tr>
<tr>
<td>wifi</td>
<td>viento</td>
<td>x-círculo</td>
<td>x-cuadrado</td>
</tr>
<tr>
<td>x</td>
<td>destruir-apagado</td>
<td>destruir</td>
<td>acercarse</td>
</tr>
<tr>
<td>alejarse</td>
<td></td>
<td></td>
<td></td>
</table>
