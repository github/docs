---
title: Listar dependencias configuradas para las actualizaciones de versión
intro: 'Puedes ver las dependencias que monitorea el {% data variables.product.prodname_dependabot %} pára encontrar actualizaciones.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### Visualizar dependencias que monitorea el {% data variables.product.prodname_dependabot %}

Después de que habilites las actualizaciones de versión, puedes confirmar que tu configuración es la correcta si utilizas la pestaña de **{% data variables.product.prodname_dependabot_short %}** en la gráfica de dependencias para el repositorio. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/github/administering-a-repository/enabling-and-disabling-version-updates)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. Opcionalmente, para ver los archivos que se monitorean para un administrador de paquete, da clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} asociado. ![Archivos de dependencia monitoreados](/assets/images/help/dependabot/monitored-dependency-files.png)

Si no encuentras alguna dependencia, revisa los archivos de bitácora para ver los errores. En caso de que no encuentres algún administrador de paquete, revisa el archivo de configuración.

### Visualizar los archivos de bitácora del {% data variables.product.prodname_dependabot %}

1. En la **pestaña de {% data variables.product.prodname_dependabot_short %}**, da clic en **Revisado por última vez hace *TIME*** para ver el archivo de bitácora que generó el {% data variables.product.prodname_dependabot %} durante su última verificación de actualizaciones de versión. ![Ver el archivo de bitácora](/assets/images/help/dependabot/last-checked-link.png)
2. Opcionalmente, para volver a ejecutar la revisión de versión, da clic en **Revisar si hay actualizaciones**. ![Revisar si hay actualizaciones](/assets/images/help/dependabot/check-for-updates.png)
