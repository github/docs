---
title: Criar gists
intro: 'Você pode criar dois tipos de gists: {% ifversion ghae %}internos{% else %}públicos{% endif %} e secretos. Crie um gist {% ifversion ghae %}interno{% else %}um público{% endif %} se você estiver pronto para compartilhar suas ideias com {% ifversion ghae %}os integrantes corporativos{% else %}o mundo{% endif %} ou um gist secreto se você não estiver pronto.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

## Sobre gists

Cada gist é um repositório Git, o que significa que ele pode ser bifurcado e clonado. {% ifversion not ghae %}Se você estiver conectado em {% data variables.product.product_name %} quando{% else %}Quando{% endif %} você criar um gist, este será associado à sua conta e você irá vê-lo na sua lista de gists ao acessar o seu {% data variables.gists.gist_homepage %}.

Os gists podem ser {% ifversion ghae %}internos{% else %}públicos{% endif %} ou segredo. Gists{% ifversion ghae %}Internos{% else %}Públicos{% endif %} aparecem em {% data variables.gists.discover_url %}, em que os {% ifversion ghae %}integrantes da empresa{% else %}pessoas{% endif %} podem pesquisar novos gists criados. Eles também são pesquisáveis, de modo que é possível usá-los se desejar que outras pessoas encontrem e vejam seu trabalho.

Os gists secretos não aparecem em {% data variables.gists.discover_url %} e não são pesquisáveis. Os grupos de segredos não são privados. Se você enviar a URL de um gist do segredo para {% ifversion ghae %}outro integrante da empresa{% else %}um amigo{% endif %}, eles poderão vê-la. No entanto, se {% ifversion ghae %}qualquer outro integrante corporativo{% else %}alguém que você não conhece{% endif %} descobrir a URL, essa pessoa também poderá ver o seu gist. Se precisar manter seu código longe de olhares curiosos, pode ser mais conveniente [criar um repositório privado](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

Se o administrador do site tiver desabilitado o modo privado, você também poderá usar gists anônimos, que podem ser públicos ou secretos.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Você receberá uma notificação quando:
- Você for o autor de um gist.
- Alguém mencionar você em um gist.
- Você assinar um gist, clicando em **Assinar** na parte superior de qualquer gist.

{% ifversion fpt or ghes %}

Você pode fixar os gists no seu perfil para que outras pessoas possam vê-los facilmente. Para obter mais informações, consulte "[Fixar itens ao seu perfil](/articles/pinning-items-to-your-profile)".

{% endif %}

Você pode descobrir gists {% ifversion ghae %}internos{% else %}públicos{% endif %} que outros criaram, acessando {% data variables.gists.gist_homepage %} e clicando em **Todos os Gists**. Isso levará você a uma página com todos os gists classificados e exibidos por data de criação ou atualização. Também é possível pesquisar gists por linguagem com {% data variables.gists.gist_search_url %}. A pesquisa de gist usa a mesma sintaxe de pesquisa que a [pesquisa de código](/search-github/searching-on-github/searching-code).

Uma vez que os gists são repositórios Git, você pode exibir o histórico completo de commits deles, com diffs. Também é possível bifurcar ou clonar gists. Para obter mais informações, consulte ["Bifurcar e clonar gists"](/articles/forking-and-cloning-gists).

Você pode baixar um arquivo ZIP de um gist clicando no botão **Download ZIP** (Baixar ZIP) no topo do gist. É possível inserir um gist em qualquer campo de texto que aceite Javascript, como uma postagem de blog. Para inserir código, clique no ícone de área de transferência ao lado de **Embed** URL de um gist. Para inserir um arquivo de gist específico, acrescente **Embed** URL com `?file=FILENAME`.

{% ifversion fpt %}

O gist permite mapeamento de arquivos geoJSON. Esses mapas são exibidos em gists inseridos, de modo que você pode compartilhar e inserir mapas facilmente. Para obter mais informações, consulte "[Trabalhando com arquivos sem código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".

{% endif %}

## Criar um gist

Siga os passos abaixo para criar um gist.

{% ifversion fpt or ghes or ghae %}
{% note %}

Você também pode criar um gist usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh gist cria`](https://cli.github.com/manual/gh_gist_create)" na documentação do {% data variables.product.prodname_cli %}.

Como alternativa, você pode arrastar e soltar um arquivo de texto da sua área de trabalho diretamente no editor.

{% endnote %}
{% endif %}

1. Entre no {% data variables.product.product_name %}.
2. Navegue até sua {% data variables.gists.gist_homepage %}.
3. Digite uma descrição opcional e o nome do seu gist. ![Descrição do nome do gist](/assets/images/help/gist/gist_name_description.png)

4. Digite o texto do seu gist na caixa de texto do gist. ![Caixa de texto do gist](/assets/images/help/gist/gist_text_box.png)

5. Opcionalmente, para criar um gist {% ifversion ghae %}interno{% else %}público{% endif %}, clique em {% octicon "triangle-down" aria-label="The downwards triangle icon" %} e, em seguida, clique em **Criar {% ifversion ghae %}interno{% else %}público{% endif %} gist**. ![Menu suspenso para selecionar a visibilidade do gist]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Clique em **Criar Gist secreto** ou **Criar gist{% ifversion ghae %}interno{% else %}público{% endif %}**. ![Botão para criar gist](/assets/images/help/gist/create-secret-gist-button.png)
