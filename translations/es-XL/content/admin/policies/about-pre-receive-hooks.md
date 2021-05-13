---
title: Acerca de ganchos de pre-recepción
intro: 'Los *ganchos de pre-recepción* son scripts que se ejecutan en el aparato {% data variables.product.prodname_ghe_server %} que puedes usar para implementar controles de calidad.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Cuando se produce una subida, cada script se ejecuta en un entorno aislado y puede realizar verificaciones en el contenido que se subió. Los scripts provocarán la aceptación de la subida si el estado de salida es 0, o rechazado si el estado de salida no es cero.

### Escenarios de uso
Usa los ganchos de pre-recepción para satisfacer las reglas comerciales, implementar el cumplimiento regulatorio y prevenir determinados errores comunes.

Ejemplos de cómo usar los ganchos de pre-recepción:

- Requerir mensajes de confirmación para seguir un patrón o formato específico, como incluir un número de ticket válido o finalizar luego de una determinada duración.
- Buscar una rama o repositorio al rechazar todas las subidas.
- Impedir que se agreguen datos sensibles al repositorio al bloquear palabras clave, patrones o tipos de archivo.
- Impedir que un autor PR se fusione con sus propios cambios.

### Impactar en el rendimiento y los flujos de trabajo flujo de trabajo
El impacto que causa en los programadores y sus flujos de trabajo puede ser significativo y debe considerarse cuidadosamente. Los ganchos de pre-recepción que se basan en necesidades comerciales y se implementan cuidadosamente brindarán la mayor cantidad de beneficios a la organización en conjunto.

Los ganchos de pre-recepción pueden tener efectos no deseados sobre el rendimiento de {% data variables.product.product_location_enterprise %} y deberían implementarse y revisarse cuidadosamente.
