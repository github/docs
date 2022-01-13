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

{% ifversion fpt or ghae or ghes or ghec %}

## Conflictos entre confirmaciones de encabezado y confirmaciones de fusiones de prueba

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. Si la confirmación de fusión de prueba tiene un estado, ésta pasará. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. Para obtener más información sobre las confirmaciones de fusiones de prueba, consulta la sección "[Extracciones](/rest/reference/pulls#get-a-pull-request)".

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

## Se salta el manejo pero se requieren las verificaciones

Algunas veces, se salta una verificación de estado requerida en las solicitudes de cambios debido al filtrado de rutas. Por ejemplo, una prueba de Node.JS podría saltarse en una solicitud de cambios que solo arregla un error de dedo en tu archivo README y no hace cambios a los archivos de JavaScript y TypeScript en el directorio de `scripts`.

Si esta verificación es requerida y se salta, entonces el estado de verificación se mostrará como pendiente, dado que es requerida. En esta situación no podrás fusionar la solicitud de cambios.

### Ejemplo

En este ejemplo, tienes un flujo de trabajo que se requiere para pasar.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Si alguien emite una solicitud de cambios que cambie un archivo de lenguaje de marcado en la raíz del repositorio, entonces el flujo de trabajo anterior no se ejecutará para nada debido al filtrado de ruta. Como resultado, no podrás fusionar la solicitud de cambios. Verías el siguiente estado en la solicitud de cambios:

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

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. Si ves un mensaje similar al siguiente, entonces deberías verificar que la app esperada haya configurado la verificación que se lista en la caja de fusión.

```
La {% data variables.product.prodname_github_app %} esperada no configuró la "compilación" de la verificación de estado requerida.
```
{% endif %}
