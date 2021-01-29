---
title: Ver y actualizar dependencias vulnerables en tu repositorio
intro: 'Si {% data variables.product.product_name %} descubre una dependencia vulnerable en tu proyecto, podrás verla en la pestaña de alertas del Dependabot de tu repositorio. Posteriormente, podrás actualizar tu proyecto para resolver o descartar la vulnerabilidad.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Los administradores de repositorio y propietarios de la organización pueden ver y actualizar las dependencias.
shortTitle: Ver y actualizar las dependencias vulnerables
versions:
  free-pro-team: '*'
---

La pestaña de alertas del {% data variables.product.prodname_dependabot %} de tu repositorio lista todas las {% data variables.product.prodname_dependabot_alerts %} abiertas y cerradas, y las {% data variables.product.prodname_dependabot_security_updates %} correspondientes. Puedes clasificar la lista de alertas utilizando el menú desplegable y hacer clic en alertas específicas para obtener más detalles. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Puedes habilitar las alertas de seguridad automáticas para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

{% data reusables.repositories.dependency-review %}

### Acerca de las actualizaciones para las dependencias vulnerables en tu repositorio

{% data variables.product.product_name %} genera {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que tu base de código está utilizando dependencias con vulnerabilidades conocidas. Para los repositorios en donde se habilitan las {% data variables.product.prodname_dependabot_security_updates %} cuando {% data variables.product.product_name %} detecta una dependencia vulnerable en la rama predeterminada, {% data variables.product.prodname_dependabot %} crea una solicitud de cambios para arreglarla. La solicitud de extracción mejorará la dependencia a la versión segura mínima que sea posible y necesaria para evitar la vulnerabilidad.

### Ver y actualizar las dependencias vulnerables

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Haz clic en la alerta que quieres ver. ![Alerta seleccionada en la lista de alertas](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Revisa los detalles de la vulnerabilidad y, en caso de que esté disponible, la solicitud de extracción que contienen la actualización de seguridad automatizada.
1. Opcionalmente, si no existe ya una actualización de {% data variables.product.prodname_dependabot_security_updates %} para la alerta, para crear una solicitud de extracción o para resolver la vulnerabilidad, da clic en **Crear una actualización de eguridad del {% data variables.product.prodname_dependabot %}**. ![Crea un botón de actualización de seguridad del {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Cuando estés listo para actualizar tu dependencia y resolver la vulnerabilidad, fusiona la solicitud de extracción. Cada solicitud de extracción que levante el {% data variables.product.prodname_dependabot %} incluye información sobre los comandos que puedes utilizar para controlar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Adminsitrar las solicitudes de extracción para las actualizaciones de las dependencias](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".
1. Opcionalmente, si se está arreglando la alerta, si es incorrecta o si se ubica en una sección de código sin utilizar, utiliza el menú desplegable de "Descartar" y da clic en una razón para descartar la alerta.![Elegir una razón para descartar la alerta a través del menú desplegable de "Descartar"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### Further reading

- "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
- "[Solucionar problemas de los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"
