{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
Todas las acciones y flujos de trabajo a las que se les llama desde dentro de una ejecución tienen acceso de escritura a los artefactos de dicha ejecución.
{% endif %}
