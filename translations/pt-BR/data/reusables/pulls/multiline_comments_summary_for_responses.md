{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

##### Resumo de comentários de linha múltipla

{% note %}

**Observação:** Novos parâmetros e campos de resposta estão disponíveis para os desenvolvedores visualizarem. Durante o período de visualização, esses campos de resposta podem mudar sem aviso prévio. Veja o post do [blogue](https://developer.github.com/changes/2019-10-03-multi-line-comments) para obter informações completas.

{% endnote %}

Use o cabeçalho de visualização `comfort-fade` e o parâmetro de `linha` para mostrar campos compatíveis com o comentário de linha múltipla na resposta.

Se você usar o cabeçalho de visualização `comfort-fade` sua resposta mostrará:
- Para comentários de linha múltipla, valores para `start_line`, `original_start_line,` `start_side`, `linha`, `original_line` e `lado`.
- Para comentários de linha única, valores para `linha`, `original_line` e `lado` e um valor `nulo` para `start_line`, `original_start_line` e `start_side`.

Se você não usar o cabeçalho de visualização `comfort-fade` serão exibidos comentários de linha múltipla e de linha única da mesma maneira na resposta com um único atributo `de posição`. Sua resposta exibirá:
- Para comentários linha múltipla, a última linha do intervalo de comentários para o atributo de `posição`.
- For single-line comments, the diff-positioned way of referencing comments for the  `position` attribute. Para obter mais informações, consulte a `posição` na tabela [de parâmetros de entrada](/v3/pulls/comments/#parameters-2).

{% endif %}
