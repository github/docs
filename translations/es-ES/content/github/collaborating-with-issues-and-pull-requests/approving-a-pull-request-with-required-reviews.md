---
title: Aprobar una solicitud de extracción con revisiones requeridas
intro: 'Si tu repositorio requiere revisiones, las solicitud de extracción deben tener un número específico de revisiones de aprobación de personas con permisos de _escritura_ o _administración_ en el repositorio antes de que puedan ser fusionados.'
redirect_from:
  - /articles/approving-a-pull-request-with-required-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Para obtener más información sobre las revisiones requeridas, consulta la sección "[Acerca de ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Puedes comentar una solicitud de extracción, aprobar los cambios o solicitar mejoras antes de aprobarlas. Para obtener más información, consulta "[Revisar las modificaciones propuestas en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)."

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Sugerencia**: Si una solicitud de extracción que aprobaste ha cambiado significativamente, puedes descartar tu revisión. La solicitud de extracción necesitará una nueva revisión antes de que pueda fusionarse. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/articles/dismissing-a-pull-request-review)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. Revisa los cambios en la solicitud de extracción, y opcionalmente, [comenta sobre las líneas específicas](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. Selecciona **Approve** (Aprobar) para aprobar la fusión de los cambios propuestos en la solicitud de extracción.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Leer más

- "[Revisar los cambios propuestos en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentar sobre una solicitud de extracción](/articles/commenting-on-a-pull-request)"
