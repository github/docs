---
title: Criar gists
intro: 'You can create two kinds of gists: {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and secret. Create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist if you''re ready to share your ideas with {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}the world{% endif %} or a secret gist if you''re not.'
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

Cada gist é um repositório Git, o que significa que ele pode ser bifurcado e clonado. {% if currentVersion != "github-ae@latest" %}If you are signed in to {% data variables.product.product_name %} when{% else %}When{% endif %} you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or secret. {% if currentVersion == "github-ae@latest" %}Internal{% else %}Public{% endif %} gists show up in {% data variables.gists.discover_url %}, where {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}people{% endif %} can browse new gists as they're created. Eles também são pesquisáveis, de modo que é possível usá-los se desejar que outras pessoas encontrem e vejam seu trabalho.

Os gists secretos não aparecem em {% data variables.gists.discover_url %} e não são pesquisáveis. Secret gists aren't private. If you send the URL of a secret gist to {% if currentVersion == "github-ae@latest" %}another enterprise member{% else %}a friend {% endif %}, they'll be able to see it. However, if {% if currentVersion == "github-ae@latest" %}any other enterpise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. Se precisar manter seu código longe de olhares curiosos, pode ser mais conveniente [criar um repositório privado](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% if enterpriseServerVersions contains currentVersion %}

Se o administrador do site tiver desabilitado o modo privado, você também poderá usar gists anônimos, que podem ser públicos ou secretos.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Você receberá uma notificação quando:
- Você for o autor de um gist.
- Alguém mencionar você em um gist.
- Você assinar um gist, clicando em **Subscribe** (Assinar) no topo de qualquer gist.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Você pode fixar os gists no seu perfil para que outras pessoas possam vê-los facilmente. Para obter mais informações, consulte "[Fixar itens ao seu perfil](/articles/pinning-items-to-your-profile)".

{% endif %}

You can discover {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. Isso levará você a uma página com todos os gists classificados e exibidos por data de criação ou atualização. Também é possível pesquisar gists por linguagem com {% data variables.gists.gist_search_url %}. A pesquisa de gist usa a mesma sintaxe de pesquisa que a [pesquisa de código](/articles/searching-code).

Uma vez que os gists são repositórios Git, você pode exibir o histórico completo de commits deles, com diffs. Também é possível bifurcar ou clonar gists. Para obter mais informações, consulte ["Bifurcar e clonar gists"](/articles/forking-and-cloning-gists).

Você pode baixar um arquivo ZIP de um gist clicando no botão **Download ZIP** (Baixar ZIP) no topo do gist. É possível inserir um gist em qualquer campo de texto que aceite Javascript, como uma postagem de blog. Para inserir código, clique no ícone de área de transferência ao lado de **Embed** URL de um gist. Para inserir um arquivo de gist específico, acrescente **Embed** URL com `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

O gist permite mapeamento de arquivos geoJSON. Esses mapas são exibidos em gists inseridos, de modo que você pode compartilhar e inserir mapas facilmente. Para obter mais informações, consulte "[Mapear arquivos geoJSON no {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)".

{% endif %}

### Criar um gist

Você também pode arrastar e soltar um arquivo de texto da sua área de trabalho diretamente no editor do gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% note %}

Você também pode criar um gist usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh gist cria`](https://cli.github.com/manual/gh_gist_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endnote %}
{% endif %}

1. Entre no {% data variables.product.product_name %}.
2. Navegue até sua {% data variables.gists.gist_homepage %}.
3. Digite uma descrição opcional e o nome do seu gist. ![Descrição do nome do gist](/assets/images/help/gist/gist_name_description.png)

4. Digite o texto do seu gist na caixa de texto do gist. ![Caixa de texto do gist](/assets/images/help/gist/gist_text_box.png)

5. Optionally, to create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Drop-down menu to select gist visibility]{% if currentVersion == "github-ae@latest" %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Click **Create secret Gist** or **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Button to create gist](/assets/images/help/gist/create-secret-gist-button.png)
