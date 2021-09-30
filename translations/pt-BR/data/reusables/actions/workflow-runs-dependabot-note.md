{% ifversion fpt %}
{% note %}

**Observação:**  As execuções de fluxo de trabalho acionadas por pull requests de {% data variables.product.prodname_dependabot %} são executadas como se fossem de um repositório bifurcado, usando, portanto um `GITHUB_TOKEN` apenas leitura. Estas execuções de fluxo de trabalho não podem acessar nenhum segredo. Consulte ["Mantendo seus GitHub Actions e fluxos de trabalho seguros: Evitando solicitações do tipo pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) para que as estratégias mantenham esses fluxos de trabalho seguros.

{% endnote %}
{% endif %}
