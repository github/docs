---
title: Acerca de webhooks
redirect_from:
  - /post-receive-hooks/
  - /articles/post-receive-hooks/
  - /articles/creating-webhooks/
  - /articles/about-webhooks
intro: Los webhooks ofrecen una manera de enviar las notificaciones a un servidor web externo siempre que ciertas acciones ocurran en un repositorio o una organización.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Sugerencia:**{% data reusables.organizations.owners-and-admins-can %} administrar webhooks para una organización. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Los webhooks se pueden disparar siempre que se realicen una variedad de acciones en un repositorio o una organización. Por ejemplo, puedes configurar tus webhooks para ejecutarse siemrpe que:

* Se suba a un repositorio.
* Se abra una solicitud de extracción.
* Se cree un sitio {% data variables.product.prodname_pages %}.
* Se agregue un nuevo miembro a un equipo.

Al usar la API de {% data variables.product.product_name %}, puedes hacer que estos webhooks actualicen un seguimiento de la propuesta, disparen compilaciones de CI, actualicen un espejo de copia de seguridad o incluso se implementen en tu servidor de producción.

Para configurar un webhook nuevo, necesitarás acceso a un servidor externo y estar familiarizado con los procedimientos técnicos involucrados. Para obtener ayuda para crear un webhook, lo cual incluye un listado completo de las acciones con las que lo puedes asociar, consulta la secicón "[Webhooks](/webhooks)".
