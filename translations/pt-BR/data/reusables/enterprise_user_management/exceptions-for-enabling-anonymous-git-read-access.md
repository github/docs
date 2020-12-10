{% note %}

**Notas:**
- Você não pode alterar as configurações de acesso de leitura do Git para repositórios bifurcados, uma vez que eles herdam suas configurações de acesso a partir do repositório raiz por padrão.
- Se um repositório público se tornar privado, então o acesso de leitura anônimo do Git será automaticamente desabilitado para esse repositório e ele bifurca.
- Se um repositório com autenticação anônima contiver recursos do {% data variables.large_files.product_name_short %} ele vai falhar no download dos recursos do {% data variables.large_files.product_name_short %} já que eles ainda exigem autenticação. Recomendamos fortemente que não habilite acesso de leitura anônimo do Git para um repositório com ativos do {% data variables.large_files.product_name_short %}.

{% endnote %}
