{% note %}

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API offers the `application/vnd.github.v3.diff` [media type](/v3/media/#commits-commit-comparison-and-pull-requests). Para ver um diff do pull request, adicione este tipo de mídia ao cabeçalho `Aceitar` de uma chamada para o ponto de extremidade do [pull request único](/v3/pulls/#get-a-pull-request).

O valor da `posição` é igual ao número de linhas abaixo da primeira parte "@@@" do cabeçalho no arquivo ao qual você deseja adicionar um comentário. A linha logo abaixo da linha "@@" é a posição 1, a próxima linha é a posição 2, e assim por diante. A posição no diff continua a aumentar por meio das linhas de linhas dos espaços em branco e das partes adicionais até o início de um novo arquivo.

{% endnote %}
