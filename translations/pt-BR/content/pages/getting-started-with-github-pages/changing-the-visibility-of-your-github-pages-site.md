---
title: Alterar a visibilidade do site do GitHub Pages
intro: Você pode gerenciar o controle de acesso no seu site de projeto publicando o site publicamente ou privadamente.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Alterar a visibilidade do site
---

## Sobre controle de acesso para sites de {% data variables.product.prodname_pages %}

Com controle de acesso para {% data variables.product.prodname_pages %}, você pode restringir o acesso ao seu site de projeto publicando o site de forma privada. Um site publicado de forma privada só pode ser acessado por pessoas com acesso de leitura ao repositório a partir do qual o site é publicado. Você pode usar sites publicados de forma privada para compartilhar sua documentação interna ou base de conhecimento com integrantes da sua empresa.

{% data reusables.pages.privately-publish-ghec-only %}

Se a sua empresa usa {% data variables.product.prodname_emus %}, o controle de acesso não está disponível, e todos os sites de {% data variables.product.prodname_pages %} estão acessíveis somente para os integrantes da empresa. Para obter mais informações sobre {% data variables.product.prodname_emus %}, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)."

Se a sua organização usar {% data variables.product.prodname_ghe_cloud %} sem {% data variables.product.prodname_emus %}, você poderá optar por publicar seus sites de projeto em particular ou publicamente para qualquer pessoa na internet.

O controle de acesso está disponível para os sites de projeto publicados a partir de um repositório privado ou interno que pertencem à organização. Você não pode gerenciar o controle de acesso para um site da organização. Para obter mais informações sobre os tipos de sites do {% data variables.product.prodname_pages %}, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Sobre subdomínios para sites publicados em particular

Os sites publicados em particular estão disponíveis em um subdomínio diferente dos sites publicados em modo público. Isso garante que seu site do {% data variables.product.prodname_pages %} esteja seguro a partir do momento em que for publicado:

- Protegemos automaticamente todos os subdomínios de `*.pages.github.io` com um certificado TLS e aplicamos HSTS para garantir que os navegadores sempre servem a página por meio de HTTPS.
- Usamos um subdomínio exclusivo para o site publicado de forma privada, para garantir que outros repositórios na organização não possam publicar conteúdo na mesma origem do site. Isso protege seu site contra "[cookies](https://github.blog/2013-04-09-yummy-cookies-across-domains/)". É por isso que também não hospedamos sites de {% data variables.product.prodname_pages %} no domínio do `github.com`.

Você pode visualizar o subdomínio único do site na aba "Pages" das configurações do seu repositório. Se você estiver usando um gerador de site estático configurado para criar o site com o nome do repositório como um caminho, talvez seja necessário atualizar as configurações para o gerador do site estático ao alterar o site para privado. Para obter mais informações, consulte "[Configurar o Jekyll no seu site de {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" ou a documentação para o gerador do seu site estático.

Para usar um domínio mais curto e mais memorável para seu site publicado com privacidade, você pode configurar um domínio personalizado. Para obter mais informações, consulte "[Configurar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site)""

## Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Em "{% data variables.product.prodname_pages %}", selecione o ** visibilidade de {% data variables.product.prodname_pages %}** no menu suspenso e, em seguida, clique em uma visibilidade. ![Menu suspenso para escolher uma visibilidade para o seu site](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver seu site publicado, em "{% data variables.product.prodname_pages %}", clique na URL do seu site. ![URL do seu site publicado em modo particular](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
