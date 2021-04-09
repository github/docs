---
title: Criar gists
intro: 'Você pode criar dois tipos de gists: {% if currentVersion == "github-ae@latest" %}internos{% else %}públicos{% endif %} e secretos. Crie um gist {% if currentVersion == "github-ae@latest" %}interno{% else %}um público{% endif %} se você estiver pronto para compartilhar suas ideias com {% if currentVersion == "github-ae@latest" %}os integrantes corporativos{% else %}o mundo{% endif %} ou um gist secreto se você não estiver pronto.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre gists

Cada gist é um repositório Git, o que significa que ele pode ser bifurcado e clonado. {% if currentVersion ! "github-ae@latest" %}Se você estiver conectado em {% data variables.product.product_name %} quando{% else %}Quando{% endif %} criar um gist, este será associado à sua conta e você irá vê-lo na sua lista de gists ao acessar o seu {% data variables.gists.gist_homepage %}.

Os gists podem ser {% if currentVersion == "github-ae@latest" %}internos{% else %}públicos{% endif %} ou segredo. {% se a versão atual == "github-ae@latest" %} Os gists internos{% else %}Públicos{% endif %} aparecem em {% data variables.gists.discover_url %}, onde {% se a correnteVersion == "github-ae@latest" %}integrantes corporativos{% else %}pessoas{% endif %} podem pesquisar novos gistas à medida que são criados. Eles também são pesquisáveis, de modo que é possível usá-los se desejar que outras pessoas encontrem e vejam seu trabalho.

Os gists secretos não aparecem em {% data variables.gists.discover_url %} e não são pesquisáveis. Os grupos de segredos não são privados. Se você enviar a URL de um gist de segredo para {% if currentVersion == "github-ae@latest" %}outro integrante corporativo{% else %}um amigo {% endif %}, eles poderão vê-lo. No entanto, se {% if currentVersion == "github-ae@latest" %}qualquer outro integrante corporativo{% else %}alguém que você não conhece{% endif %} descobrir a URL, eles também poderão ver o seu gist. Se precisar manter seu código longe de olhares curiosos, pode ser mais conveniente [criar um repositório privado](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% if enterpriseServerVersions contains currentVersion %}

Se o administrador do site tiver desabilitado o modo privado, você também poderá usar gists anônimos, que podem ser públicos ou secretos.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Você receberá uma notificação quando:
- Você for o autor de um gist.
- Alguém mencionar você em um gist.
- You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Você pode fixar os gists no seu perfil para que outras pessoas possam vê-los facilmente. Para obter mais informações, consulte "[Fixar itens ao seu perfil](/articles/pinning-items-to-your-profile)".

{% endif %}

Você pode descobrir gists {% if currentVersion == "github-ae@latest" %}internos{% else %}públicos{% endif %} que outros criaram, acessando {% data variables.gists.gist_homepage %} e clicando em **Todos os Gists**. Isso levará você a uma página com todos os gists classificados e exibidos por data de criação ou atualização. Também é possível pesquisar gists por linguagem com {% data variables.gists.gist_search_url %}. A pesquisa de gist usa a mesma sintaxe de pesquisa que a [pesquisa de código](/articles/searching-code).

Uma vez que os gists são repositórios Git, você pode exibir o histórico completo de commits deles, com diffs. Também é possível bifurcar ou clonar gists. Para obter mais informações, consulte ["Bifurcar e clonar gists"](/articles/forking-and-cloning-gists).

Você pode baixar um arquivo ZIP de um gist clicando no botão **Download ZIP** (Baixar ZIP) no topo do gist. É possível inserir um gist em qualquer campo de texto que aceite Javascript, como uma postagem de blog. Para inserir código, clique no ícone de área de transferência ao lado de **Embed** URL de um gist. Para inserir um arquivo de gist específico, acrescente **Embed** URL com `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

O gist permite mapeamento de arquivos geoJSON. Esses mapas são exibidos em gists inseridos, de modo que você pode compartilhar e inserir mapas facilmente. Para obter mais informações, consulte "[Mapear arquivos geoJSON no {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)".

{% endif %}

### Criar um gist

Follow the steps below to create a gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% note %}

Você também pode criar um gist usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh gist cria`](https://cli.github.com/manual/gh_gist_create)" na documentação do {% data variables.product.prodname_cli %}.

Alternatively, you can drag and drop a text file from your desktop directly into the editor.

{% endnote %}
{% endif %}

1. Entre no {% data variables.product.product_name %}.
2. Navegue até sua {% data variables.gists.gist_homepage %}.
3. Digite uma descrição opcional e o nome do seu gist. ![Descrição do nome do gist](/assets/images/help/gist/gist_name_description.png)

4. Type the text of your gist into the gist text box. ![Caixa de texto do gist](/assets/images/help/gist/gist_text_box.png)

5. Opcionalmente, para criar {% se a correnteVersion == "github-ae@latest" %}um gist interno{% else %}um público{% endif %}, clique em {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, clique em **Criar gist {% se a correnteVersion == "github-ae@latest" %}interno{% else %}público{% endif %}**. ![Menu suspenso para selecionar a visibilidade do gist]{% if currentVersion == "github-ae@latest" %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Clique em **Criar Gist secreto** ou **Criar gist{% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %}**. ![Botão para criar gist](/assets/images/help/gist/create-secret-gist-button.png)
