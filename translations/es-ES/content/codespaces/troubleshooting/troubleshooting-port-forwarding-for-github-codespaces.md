---
title: Troubleshooting port forwarding for GitHub Codespaces
intro: Pasos de solución de problemas para los problemas comunes del reenvío de puertos.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Reenvío de puertos
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
---

Cuando una aplicación que se ejecuta en un codespace da salida a la consola a un puerto, el {% data variables.product.prodname_github_codespaces %} detecta el patrón de URL del host local y reenvía el puerto automáticamente. Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Si un puerto no se reenvía automáticamente, puedes reenviarlo manualmente. Para obtener más información, consulta la sección "[Reenviar un puerto](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)".

Si se configura el reenvío de puertos, verifica lo siguiente:

- Utiliza la alerta de notificación o haz clic en la URL de la Terminal para abrir el puerto reenviado. No funcionará teclear `localhost:8000` (como ejemplo) en tu máquina local si estás conectado al codespace a través del buscador.
- Asegúrate de verificar que tu aplicación aún se esté ejecutando desde dentro de tu codespace. Si tu codespace paró después de un periodo de inactividad, necesitarás garantizar que tu aplicación reinicie una vez que se reinició el codespace.

Habitualmente, puedes hacer que un puerto reenviado sea accesible al público o dentro de la organización a la que le pertenezca un repositorio. Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)". Si cualquiera o ambas de las opciones para visibilidad de organización o al público están indispuestas, esto indica que sí se configuró la política a nivel organizacional. Para obtener más información, consulta la sección "[restringir la visbilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".
