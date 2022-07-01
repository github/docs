{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
Adicionalmente,
{% data variables.product.prodname_dotcom %} puede revisar cualquier dependencia que se haya agregado, actualizado o eliminado en una solicitud de cambios que se hizo contra la rama predeterminada de un repositorio y marcar cualquier cambio que reduzca la seguridad de tu proyecto. Esto te permite detectar y tratar las dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} o el malware{% endif %} antes, en vez de después, de que lleguen a tu base de código. Para obtener más información, consulta la sección "[Revisar los cambios a las dependencias en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".
{% endif %}
