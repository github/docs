---
title: Características esenciales de las GitHub Actions
shortTitle: Características esenciales
intro: 'Las {% data variables.product.prodname_actions %} se diseñaron para ayudarte a crear automatizaciones robustas y dinámicas. Esta guía te mostrará cómo crear flujos de trabajo de {% data variables.product.prodname_actions %} que incluyan variables de ambiente, scripts personalizados, y más.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Resumen

Las {% data variables.product.prodname_actions %} te permiten personalizar tus flujos de trabajo para satisfacer las necesidades específicas de tu aplicación y de tu equipo. En esta guía, presentaremos algunas de las técnicas de personalización esenciales, tales como el uso de variables, la ejecución de scripts, y el compartir datos y artefactos entre jobs.

### Utilizar varibales en tus flujos de trabajo

Las {% data variables.product.prodname_actions %} incluyen variables de ambiente predeterminadas para cada ejecución de flujo de trabajo. Si necesitas utilizar variables de ambiente personalizadas, puedes configurarlas en tu archivo de flujo de trabajo de YAML. Este ejemplo te muestra cómo crear variables personalizadas que se llamen `POSTGRES_HOST` y `POSTGRES_PORT`. Estas variables estarán entonces disponibles en el script `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Para obtener más información, consulta "[Usar variables de entorno](/actions/configuring-and-managing-workflows/using-environment-variables)".

### Agregar scripts a tu flujo de trabajo

Puedes utilizar acciones para ejecutar scripts y comandos de shell, los cuales se ejecutarán después en el ejecutor asignado. Este ejemplo muestra cómo una acción puede utilizar la palabra clave `run` para ejecutar `npm install -g bats` en el ejecutor.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Por ejemplo, para ejecutar un script como una acción, puedes almacenarlo en tu repositorio e indicar la ruta y tipo de shell.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

### Compartir datos entre jobs

Si tu job genera archivos que quieras compartir con otro job en el mismo flujo de trabajo, o si quieres guardar los archivos para su referencia futura, puedes almacenarlos en {% data variables.product.prodname_dotcom %} como _artefactos_. Los artefactos son los archivos que se crean cuando desarrollas y pruebas tu código. Por ejemplo, los artefactos podrían incluir archivos binarios o de paquete, resultados de pruebas, capturas de pantalla o archivos de registro. Los artefactos se asocian con la ejecución del flujo de trabajo en donde se crearon y otro job puede utilizarlos.

Por ejemplo, puedes crear un archivo y luego subirlo como un artefacto.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: actions/upload-artifact@v2
        with:
          name: output-log-file
          path: output.log
```

Para descargar un artefacto de una ejecución de flujo de trabajo independiente, puedes utilizar la acción `actions/download-artifact`. Por ejemplo, puedes descargar el artefacto que se llama `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v2
        with:
          name: output-log-file
```

Para obtener más información acerca de los artefactos, consulta la sección "[Persistir datos de flujos de trabajo utilizando artefactos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

### Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Administrar flujos de trabajo complejos](/actions/learn-github-actions/managing-complex-workflows)".
