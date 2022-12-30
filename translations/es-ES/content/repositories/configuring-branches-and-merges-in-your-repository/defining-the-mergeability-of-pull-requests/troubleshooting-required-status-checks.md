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
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135810'
---
Si tienes una verificación y un estado con el mismo nombre y seleccionas dicho nombre como una verificación de estado requerida, tanto la verificación como el estado se requerirán. Para obtener más información, consulte [Comprobaciones](/rest/reference/checks).

Después de que habilitas la verificación de estado requerida, tu rama podría tener que actualizarse con la rama base antes de que se pueda fusionar. Esto garantiza que tu rama ha sido probada con el último código desde la rama base. Si tu rama no está actualizada, necesitarás fusionar la rama base en tu rama. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Nota:** También puede actualizar la rama con la rama base utilizando la fusión mediante cambio de base de Git. Para obtener más información, consulte "[Acerca de la fusión mediante cambio de base de Git](/github/getting-started-with-github/about-git-rebase)".

{% endnote %}

No podrás subir cambios locales a una rama protegida hasta que se hayan aprobado todas las verificaciones de estado requeridas. En su lugar, recibirá un mensaje de error similar al siguiente:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Nota:** Las solicitudes de incorporación de cambios que están actualizadas y aprobaron las comprobaciones de estado requeridas se pueden fusionar localmente e insertarse en la rama protegida. Esto se puede hacer sin las verificaciones de estado ejecutándose en la propia confirmación de fusión.

{% endnote %}

## Conflictos entre confirmaciones de encabezado y confirmaciones de fusiones de prueba

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. Si la confirmación de fusión de prueba tiene un estado, ésta pasará. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. Para obtener más información sobre las confirmaciones de combinación de prueba, consulte "[Incorporación de cambios](/rest/reference/pulls#get-a-pull-request)".

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Se salta el manejo pero se requieren las verificaciones

{% note %}

**Nota:** Si se omite un flujo de trabajo debido a un [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [filtrado de rama](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) o [mensaje de confirmación](/actions/managing-workflow-runs/skipping-workflow-runs), las comprobaciones asociadas a ese flujo de trabajo permanecerán en estado "Pendiente". Se bloqueará la fusión mediante combinación de una solicitud de incorporación de cambios que requiera esas comprobaciones para realizarse correctamente.

Si se omite un trabajo de un flujo de trabajo debido a una condicional, notificará su estado como "Correcto". Para obtener más información, consulta [Saltarse las ejecuciones de flujo de trabajo](/actions/managing-workflow-runs/skipping-workflow-runs) y [Utilizar condiciones para controlar la ejecución de trabajos](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Ejemplo

En el ejemplo siguiente se muestra un flujo de trabajo que requiere un estado de finalización "Correcto" para el trabajo `build`, pero el flujo de trabajo se omitirá si la solicitud de incorporación de cambios no cambia ningún archivo en el directorio `scripts`.

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

Debido al [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), una solicitud de incorporación de cambios que solo cambia un archivo en la raíz del repositorio no desencadenará este flujo de trabajo y se bloqueará su fusión mediante combinación. Verías el siguiente estado en la solicitud de cambios:

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
      - run: 'echo "No build required"'
```
Ahora siempre se omitirán las comprobaciones cuando alguien envíe una solicitud de incorporación de cambios que no cambie los archivos que aparecen en `paths` el primer flujo de trabajo.

![Verificar omitidos pero que pasan debido a un flujo de trabajo genérico](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Notas:**
* Asegúrese de que la clave `name` y el nombre de trabajo requerido en ambos archivos de flujo de trabajo sean los mismos. Para obtener más información, consulte"[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* El ejemplo anterior utiliza {% data variables.product.prodname_actions %}, pero esta solución también aplica a otros proveedores de IC/DC que se integran con {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Comprobaciones de estado necesarias de orígenes inesperados

También es posible que una rama protegida requiera una verificación de estado desde una {% data variables.product.prodname_github_app %} específica. Si ves un mensaje similar al siguiente, entonces deberías verificar que la app esperada haya configurado la verificación que se lista en la caja de fusión.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
