{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Advertencia:** Los ejecutores auto-hospedados se hablitan predeterminadamente para {% data variables.product.prodname_ghe_managed %}. Los ejecutores auto-hospedados son de larga duración y cualquier riesgo que sufra la máquina hospedadora podría filtrar secretos o credenciales, o habilitar otros ataques. Si te gustaría inhabilitar los ejecutores auto-hospedados en tu empresa, puedes contactar al soporte de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre los riesgos de utilizar ejecutores auto-hospedados, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Advertencia:** Los ejecutores auto-hospedados actualmente están inhabilitados para {% data variables.product.prodname_ghe_managed %}. Esto es porque {% data variables.product.prodname_ghe_managed %} ofrece garantías para los límites de seguridad, las cuales son incompatibles con la forma en que trabajan los ejecutores auto-hospedados. Sin embargo, en caso de que sí necesites utilizar ejecutores auto-hospedados con {% data variables.product.prodname_ghe_managed %} y entender las implicaciones de seguridad, puedes contactar al soporte de {% data variables.product.prodname_dotcom %} para que hagan una exepción de seguridad que los habilitará.

Si no necesitas ejecutores auto-hospedados, entonces puedes utilizar {% data variables.actions.hosted_runner %} para que ejecuten tus flujos de trabajo. Para obtener más información, consulta la sección "[Acerca de los {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)".

{% endif %}

{% endwarning %}

{% endif %}
