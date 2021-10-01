{% note %}

**Observação:** O upload do SARIF é compatível com um máximo de {% ifversion ghae-next or fpt or ghes > 3.0 %}5000{% else %}1000{% endif %} resultados por upload. Todos os resultados acima deste limite são ignorados. Se uma ferramenta gerar muitos resultados, você deverá atualizar a configuração para focar nos resultados para as regras ou consultas mais importantes.

{% endnote %}
