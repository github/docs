{% if currentVersion == "github-ae@latest" %}
{% warning %}

** Advertencia:** Los ejecutores auto-hospedados se encuentran actualmente inhabilitados para {% data variables.product.prodname_ghe_managed %}. Esto es porque {% data variables.product.prodname_ghe_managed %} ofrece garantías para los límites de seguridad, las cuales son incompatibles con la forma en que trabajan los ejecutores auto-hospedados. Sin embargo, en caso de que sí necesites utilizar ejecutores auto-hospedados con {% data variables.product.prodname_ghe_managed %} y entender las implicaciones de seguridad, puedes contactar al soporte de {% data variables.product.prodname_dotcom %} para que hagan una exepción de seguridad que los habilitará.

Si no necesitas ejecutores auto-hospedados, entonces puedes utilizar {% data variables.actions.hosted_runner %} para que ejecuten tus flujos de trabajo. Para obtener más información, consulta la sección "[Acerca de los {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)".

{% endwarning %}
{% endif %}
