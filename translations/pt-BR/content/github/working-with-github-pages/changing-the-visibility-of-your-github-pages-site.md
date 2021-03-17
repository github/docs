---
title: Alterar a visibilidade do site do GitHub Pages
intro: 'Você pode gerenciar o controle de acesso no seu site de projeto publicando o site publicamente ou privadamente.'
product: '{% data reusables.gated-features.private-pages %}'
versions:
  free-pro-team: '*'
permissions: As pessoas com permissões de administrador em um repositório podem alterar a visibilidade de um site de {% data variables.product.prodname_pages %}
---

### Sobre controle de acesso para sites de {% data variables.product.prodname_pages %}

Se o seu site de projeto for publicado de um repositório privado ou interno, pertencente a uma organização que usa {% data variables.product.prodname_ghe_cloud %}, você poderá gerenciar o controle de acesso para o site. Com controle de acesso, você pode optar por publicar o site publicamente para qualquer pessoa na internet ou em particular para pessoas com acesso de leitura ao seu repositório. Um site publicado de forma privada pode ser usado para compartilhar sua documentação interna ou base de conhecimento com integrantes da sua empresa. Você não pode gerenciar o controle de acesso para um site da organização. Para obter mais informações sobre os tipos de sites de sites de {% data variables.product.prodname_pages %}, consulte "[Sobre o GitHub Pages](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Os sites publicados em particular estão disponíveis em um subdomínio diferente dos sites publicados em modo público. Você pode ver a URL do site nas configurações do repositório. Se você estiver usando um gerador de site estático configurado para criar o site com o nome do repositório como um caminho, talvez seja necessário atualizar as configurações para o gerador do site estático ao alterar o site para privado. Para obter mais informações, consulte "[Configurar o Jekyll no seu site de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" ou a documentação para o gerador do seu site estático.

### Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "{% data variables.product.prodname_pages %}", selecione o ** visibilidade de {% data variables.product.prodname_pages %}** no menu suspenso e, em seguida, clique em uma visibilidade. ![Menu suspenso para escolher uma visibilidade para o seu site](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver seu site publicado, em "{% data variables.product.prodname_pages %}", clique na URL do seu site. ![URL do seu site publicado em modo particular](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
