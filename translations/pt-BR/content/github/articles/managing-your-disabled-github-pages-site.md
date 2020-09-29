---
title: Gerenciar seu site GitHub Pages desabilitado
intro: 'Repositórios privados no {% data variables.product.prodname_free_user %} não são compatíveis com {% data variables.product.prodname_pages %}, entretanto, um número limitado de sites {% data variables.product.prodname_pages %} conectados a repositórios privados grátis ficaram ativos equivocadamente. Esses sites não estão mais sendo atualizados e a publicação deles será cancelada pelo {% data variables.product.prodname_dotcom %} em 10 de maio de 2019.'
hidden: true
redirect_from:
  - /articles/managing-your-disabled-github-pages-site
versions:
  free-pro-team: '*'
---

{% note %}

O {% data variables.product.prodname_pages %} está disponível somente em repositórios públicos com {% data variables.product.prodname_free_user %} e em repositórios públicos e privados com {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, e {% data variables.product.prodname_ghe_server %}. {% data reusables.gated-features.more-info %}

{% endnote %}

Se você tem um site {% data variables.product.prodname_pages %} publicado em um repositório privado grátis, você tem algumas opções para continuar publicando e atualizando seu site ou para cancelar a publicação dele manualmente. Se você não tomar nenhuma medida, o {% data variables.product.prodname_dotcom %} cancelará a publicação do site por você em 10 de maio de 2019.

- **Para continuar a publicar e atualizar seu site {% data variables.product.prodname_pages %}**, você pode converter seu repositório em público ou atualizar sua conta para {% data variables.product.prodname_pro %}. Para obter mais informações sobre como transformar seu repositório privado em público, consulte "[Configurar a visibilidade do repositório](/articles/setting-repository-visibility#making-a-private-repository-public)". Para obter mais informações sobre como atualizar sua conta, consulte "[Atualizar sua assinatura GitHub](/articles/upgrading-your-github-subscription)".

- **Para parar de publicar seu site {% data variables.product.prodname_pages %}**, é possível [cancelar manualmente a publicação](#manually-unpublishing-your-github-pages-site) ou não fazer nada e o {% data variables.product.prodname_dotcom %} cancelará a publicação de seu site por você em 10 de maio de 2019. Se o seu site {% data variables.product.prodname_pages %} tem um domínio personalizado configurado, você deve atualizar ou remover seus registros DNS com o seu provedor DNS o quanto antes possível para evitar o risco de uma incorporação do domínio. Configurar seu domínio personalizado com seu provedor DNS enquanto o seu site {% data variables.product.prodname_pages %} está desabilitado, poderia resultar em alguma outra pessoa hospedando um site em um de seus subdomínios. Para obter mais informações, consulte "[Usar um domínio personalizado com o {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".

### Cancelar a publicação de seu site {% data variables.product.prodname_pages %} manualmente

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Na barra lateral esquerda, clique em **Unpublish {% data variables.product.prodname_pages %}** (Cancelar publicação do {% data variables.product.prodname_pages %}). ![Configurações de repositório para cancelar publicação de site {% data variables.product.prodname_pages %}](/assets/images/help/pages/unpublish-pages-button-sidebar.png)
4. Clique em **Unpublish this site** (Cancelar publicação deste site). ![Botão para unpublish (cancelar a publicação) de site {% data variables.product.prodname_pages %}](/assets/images/help/pages/unpublish-pages-button.png)

### Leia mais

- "[Cancelar publicação de um site User Pages](articles/unpublishing-a-user-pages-site)"
- "[Cancelar a publicação de um site Project Pages](/articles/unpublishing-a-project-pages-site)"
- "[Transferir um repositório](/articles/transferring-a-repository)"
- "[Sobre arquivar repositórios](/articles/about-archiving-repositories)"
- "[Excluir um repositório](/articles/deleting-a-repository)"
