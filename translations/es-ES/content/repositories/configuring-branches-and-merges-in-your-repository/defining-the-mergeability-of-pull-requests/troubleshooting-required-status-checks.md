---
title: Solución de problemas para verificaciones de estado requeridas
intro: Puedes verificar si hay errores comunes y resolver problemas con las verificaciones de estado requeridas.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Verificaciones de estado requeridas
---

Si tienes una verificación y un estado con el mismo nombre y seleccionas dicho nombre como una verificación de estado requerida, tanto la verificación como el estado se requerirán. Para obtener más información, consulta las "[Verificaciones](/rest/reference/checks)".

Después de que habilitas la verificación de estado requerida, tu rama podría tener que actualizarse con la rama base antes de que se pueda fusionar. Esto garantiza que tu rama ha sido probada con el último código desde la rama base. Si tu rama no está actualizada, necesitarás fusionar la rama base en tu rama. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Nota:** También puedes actualizar tu rama con la rama base utilizando Git rebase. Para obtener más información, consulta [Accerca del rebase de Git](/github/getting-started-with-github/about-git-rebase)."

{% endnote %}

No podrás subir cambios locales a una rama protegida hasta que se hayan aprobado todas las verificaciones de estado requeridas. En su lugar, recibirás un mensaje de error similar al siguiente.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Nota:** Las solicitudes de extracción que están actualizadas y aprobaron las verificaciones de estado requeridas pueden fusionarse localmente y subirse a la rama protegida. Esto se puede hacer sin las verificaciones de estado ejecutándose en la propia confirmación de fusión.

{% endnote %}

## Conflictos entre confirmaciones de encabezado y confirmaciones de fusiones de prueba

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. Si la confirmación de fusión de prueba tiene un estado, ésta pasará. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. Para obtener más información sobre las confirmaciones de fusiones de prueba, consulta la sección "[Extracciones](/rest/reference/pulls#get-a-pull-request)".

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Se salta el manejo pero se requieren las verificaciones

{% note %}

**Nota:** Si se omite un flujo de trabajo debido a [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [filtrado de rama](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) o a un [mensaje de confirmación](/actions/managing-workflow-runs/skipping-workflow-runs), entonces las verificaciones asociadas con este flujo de trabajo permanecerán en un estado de "Pendiente". Las solicitudes de cambios que requieran que esas verificaciones tengan éxito quedarán bloqueadas para fusión.

Si se omite un job en un flujo de trabajo debido a una condicional, este reportará su estado como "Éxito". Para obtener más información, consulta las secciones de [Omitir las ejecuciones de flujo de trabajo](/actions/managing-workflow-runs/skipping-workflow-runs) y [Utilizar condiciones para controlar la ejecución de jobs](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Ejemplo

El siguiente ejemplo muestra un flujo de trabajo que requiere un estado de finalización "Exitoso" para el job `build`, pero el flujo de trabajo se omitirá si la solicitud de cambios no cambia ningún archivo en el directorio `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Debido al [filtrado de rutas](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), una solicitud de cambios que solo cambie un archivo en la raíz del repositorio ya no activará este flujo de trabajo y se bloqueará para su fusión. Verías el siguiente estado en la solicitud de cambios:

![Verificación requerida omitida, pero mostrada como pendiente](/assets/images/help/repository/PR-required-check-skipped.png)

Puedes arreglar esto creando un flujo de trabajo genérico con el mismo nombre, el cual devolverá "true" en cualquier caso similar al flujo de trabajo siguiente:

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required" '
```
Ahora las verificaciones siempre pasarán cuando alguien envíe una solicitud de cambios que no cambie los archivos que se listan bajo `paths` en el primer flujo de trabajo.

![Verificar omitidos pero que pasan debido a un flujo de trabajo genérico](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Notas:**
* Asegúrate de que la llave `name` y el nombre de job requerido en ambos archivos de flujo de trabajo sean los mismos. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* El ejemplo anterior utiliza {% data variables.product.prodname_actions %}, pero esta solución también aplica a otros proveedores de IC/DC que se integran con {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}También es posible que una rama protegida requiera verificaciones de estado desde una {% data variables.product.prodname_github_app %}. Si ves un mensaje similar al siguiente, entonces deberías verificar que la app esperada haya configurado la verificación que se lista en la caja de fusión.

```
La {% data variables.product.prodname_github_app %} esperada no configuró la "compilación" de la verificación de estado requerida.
```
{% endif %}
