{% note %}

**Notas:**
- SARIF upload supports a maximum of 5000 results per upload. Todos os resultados acima deste limite são ignorados. Se uma ferramenta gerar muitos resultados, você deverá atualizar a configuração para focar nos resultados para as regras ou consultas mais importantes.

 - For each upload, SARIF upload supports a maximum size of 10 MB for the `gzip`-compressed SARIF file. Any uploads over this limit will be rejected. If your SARIF file is too large because it contains too many results, you should update the configuration to focus on results for the most important rules or queries.

{% endnote %}
