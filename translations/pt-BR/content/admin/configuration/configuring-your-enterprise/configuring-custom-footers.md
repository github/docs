---
title: Configurando rodapés personalizados
intro: 'Você pode facilitar o acesso dos usuários aos links específicos da empresa, adicionando rodapés personalizados a {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-5487
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configurar rodapés personalizados
---

Os proprietários de empresas podem configurar {% data variables.product.product_name %} para mostrar rodapés personalizados com até cinco links adicionais.

![Rodapé personalizado](/assets/images/enterprise/custom-footer/octodemo-footer.png)

O rodapé personalizado é exibido acima do rodapé de {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}para todos os usuários, em todas as páginas de {% data variables.product.product_name %}{% elsif ghec %}para todos os membros e colaboradores da empresa, em todas as páginas do repositório e da organização para repositórios e organizações que pertencem à empresa{% endif %}.

## Configurar rodapés personalizados para sua empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}

1. Em "Configurações", clique em **Perfil**.
{%- ifversion ghec %}
![Configurações do perfil corporativo](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png)
{%- else %}
![Configurações do perfil corporativo](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png)
{%- endif %}

1. Na parte superior da seção do perfil, clique em **Personalizar rodapé**. ![Seção de rodapé personalizada](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Adicione até cinco links nos campos mostrados. ![Adicionar links de rodapé](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Clique em **Atualizar o rodapé personalizado** para salvar o conteúdo e exibir o rodapé personalizado. ![Atualizar rodapé personalizado](/assets/images/enterprise/custom-footer/update-custom-footer.png)
