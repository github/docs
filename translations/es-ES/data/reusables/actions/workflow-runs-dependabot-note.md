{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** Las ejecuciones de flujo de trabajo que activan las solicitudes de cambios del {% data variables.product.prodname_dependabot %} se ejecutan como si fueran de un repositorio bifurcado y, por lo tanto, utilizan un `GITHUB_TOKEN` de solo lectura. Estas ejecuciones de flujo de trabajo no pueden acceder a ningún secreto. Consulta la sección "[Mantener seguras tus GitHub Actions y flujos de trabajo: Prevenir solicitudes de tipo pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) para conocer estrategias para mantener la seguridad de estos flujos de trabajo.

{% endnote %}
{% endif %}
