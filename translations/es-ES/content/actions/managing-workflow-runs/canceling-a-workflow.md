---
title: Cancelar un flujo de trabajo
intro: 'Puedes cancelar una ejecución de flujo de trabajo que esté en curso. Cuando cancelas una ejecución de flujo de trabajo, {% data variables.product.prodname_dotcom %} cancela todsos los jobs y pasos que son parte de ésta.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

### Cancelar una ejecución de flujo de trabajo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Desde la lista de ejecuciones de flujo de trabajo, da clic en el nombre de la ejecución en estado de `queued` o `in progress` que quieras cancelar. ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/in-progress-run.png)
1. En la esquina superior derecha del flujo de trabajo, da clic en **Cancelar flujo de trabajo**.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![Botón de cancelar el conjunto de verificaciones](/assets/images/help/repository/cancel-check-suite-updated.png)
{% else %}
 ![Botón de cancelar el conjunto de verificaciones](/assets/images/help/repository/cancel-check-suite.png)
{% endif %}

### Pasos que toma {% data variables.product.prodname_dotcom %} para cancelar una ejecución de flujo de trabajo

Cuando cancelas una ejecución de flujo de trabajo, tal vez estés ejecutando otro software que utiliza recursos que se relacionan con ésta. Para ayudarte a liberar los recursos relacionados con dicha ejecución de flujo de trabajo, podría ser útil entender los pasos que realiza {% data variables.product.prodname_dotcom %} para cancelar una ejecución de flujo de trabajo.

1. Para cancelar una ejecución de flujo de trabajo, el servidor vuelve a evaluar las condiciones `if` para todos los jobs que se ejecutan actualmente. Si la condición se evalúa como `true`, el job no se cancelará. Por ejemplo, la condición `if: always()` se evaluaría como "true" y el job continuaría ejecutándose. Cuando no hay condición, esto es equivalente a una condición `if: success()`, la cual solo se ejecutará si el paso anterior finalizó con éxito.
2. Para los jobs que necesitan cancelarse, el servidor envía un mensaje de cancelación a todas las máquinas ejecutoras con jobs que necesitan cancelarse.
3. Para los jobs que siguen ejecutándose, el servidor vuelve a evaluar las condiciones `if` para los pasos sin finalizar. Si la condición se evalúa como `true`, el paso seguirá ejecutándose.
4. Para los pasos que necesitan cancelarse, la máquina ejecutora manda un `SIGINT/Ctrl-C` al proceso de entrada del paso (`node` para una acción de javascript, `docker` para una acción de contenedor, y `bash/cmd/pwd` cuando se utiliza `run` en un paso). Si el proceso no sale en 7500 ms, el ejecutor mandará un `SIGTERM/Ctrl-Break` al proceso y luego esperará por 2500 ms para que el proceso salga. Si el proceso aún está ejecutándose, el ejecutor finalizará abruptamente el árbol de proceso.
5. Después de los 5 minutos del periodo de expiración de plazo de cancelación, el servidor forzará la terminación de todos los jobs y pasos que no hayan finalizado la ejecución o que hayan fallado en completar el proceso de cancelación.
