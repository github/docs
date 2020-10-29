---
title: Criar gists
intro: 'Você pode criar dois tipos de gist: público e secreto. Crie um gist público se estiver pronto para compartilhar suas ideias com o mundo; caso contrário, crie um gist secreto.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre gists

Cada gist é um repositório Git, o que significa que ele pode ser bifurcado e clonado. Se estiver conectado ao {% data variables.product.product_name %} quando criar um gist, o gist será associado à sua conta e você o verá na lista de gists quando navegar para sua {% data variables.gists.gist_homepage %}.

Os gists podem ser públicos ou secretos. Os gists públicos são mostrados no {% data variables.gists.discover_url %}, onde as pessoas podem navegar por novos gists à medida que eles são criados. Eles também são pesquisáveis, de modo que é possível usá-los se desejar que outras pessoas encontrem e vejam seu trabalho. {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. {% data reusables.gist.cannot-convert-public-gists-to-secret %} Os gists secretos não são privados. Se você enviar a URL de um gist secreto a uma amigo, ele poderá vê-la. No entanto, se alguém que você não conhece descobrir a URL, ele também poderá ver seu gist. Se precisar manter seu código longe de olhares curiosos, pode ser mais conveniente [criar um repositório privado](/articles/creating-a-new-repository).

{% if enterpriseServerVersions contains currentVersion %}

Se o administrador do site tiver desabilitado o modo privado, você também poderá usar gists anônimos, que podem ser públicos ou secretos.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Você receberá uma notificação quando:
- Você for o autor de um gist.
- Alguém mencionar você em um gist.
- Você assinar um gist, clicando em **Subscribe** (Assinar) no topo de qualquer gist.

Você pode fixar os gists no seu perfil para que outras pessoas possam vê-los facilmente. Para obter mais informações, consulte "[Fixar itens ao seu perfil](/articles/pinning-items-to-your-profile)".

É possível descobrir gists que outras pessoas criaram acessando a {% data variables.gists.gist_homepage %} e clicando em **All Gists** (Todos os gists). Isso levará você a uma página com todos os gists classificados e exibidos por data de criação ou atualização. Também é possível pesquisar gists por linguagem com {% data variables.gists.gist_search_url %}. A pesquisa de gist usa a mesma sintaxe de pesquisa que a [pesquisa de código](/articles/searching-code).

Uma vez que os gists são repositórios Git, você pode exibir o histórico completo de commits deles, com diffs. Também é possível bifurcar ou clonar gists. Para obter mais informações, consulte ["Bifurcar e clonar gists"](/articles/forking-and-cloning-gists).

Você pode baixar um arquivo ZIP de um gist clicando no botão **Download ZIP** (Baixar ZIP) no topo do gist. É possível inserir um gist em qualquer campo de texto que aceite Javascript, como uma postagem de blog. Para inserir código, clique no ícone de área de transferência ao lado de **Embed** URL de um gist. Para inserir um arquivo de gist específico, acrescente **Embed** URL com `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

O gist permite mapeamento de arquivos geoJSON. Esses mapas são exibidos em gists inseridos, de modo que você pode compartilhar e inserir mapas facilmente. Para obter mais informações, consulte "[Mapear arquivos geoJSON no {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)".

{% endif %}

### Criar um gist

Você também pode arrastar e soltar um arquivo de texto da sua área de trabalho diretamente no editor do gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

Você também pode criar um gist usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh gist cria`](https://cli.github.com/manual/gh_gist_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endnote %}
{% endif %}

1. Entre no {% data variables.product.product_name %}.
2. Navegue até sua {% data variables.gists.gist_homepage %}.
3. Digite uma descrição opcional e o nome do seu gist. ![Descrição do nome do gist](/assets/images/help/gist/gist_name_description.png)

4. Digite o texto do seu gist na caixa de texto do gist. ![Caixa de texto do gist](/assets/images/help/gist/gist_text_box.png)

5. Siga um destes procedimentos:
    - Para criar um gist público, clique em **Criar gist público**.
    - Para criar um gist secreto, clique em **Criar gist secreto**. ![Botão de criação do gist](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **Observação:** {% data reusables.gist.cannot-convert-public-gists-to-secret %}

  {% endnote %}
