{% note %}

**Note:** SARIF upload supports a maximum of {% if currentVersion == "github-ae@next" or currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}5000{% else %}1000{% endif %} results per upload. Todos os resultados acima deste limite são ignorados. Se uma ferramenta gerar muitos resultados, você deverá atualizar a configuração para focar nos resultados para as regras ou consultas mais importantes.

{% endnote %}
