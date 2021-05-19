{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Observação:**  As execuções de fluxo de trabalho acionadas por pull requests de {% data variables.product.prodname_dependabot %} são executadas como se fossem de um repositório bifurcado, usando, portanto um `GITHUB_TOKEN` apenas leitura. Estas execuções de fluxo de trabalho não podem acessar nenhum segredo. See ["Keeping your GitHub Actions and workflows secure: Preventing pwn requests"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) for strategies to keep these workflows secure.

{% endnote %}
{% endif %}
