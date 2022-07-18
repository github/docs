---
title: Sobre a cobrança para o GitHub Advanced Security
intro: 'Caso você queira usar as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} recursos{% ifversion fpt or ghec %} em um repositório privado ou interno{% endif %}, você precisará de uma licença{% ifversion fpt %} para sua empresa{% endif %}.{% ifversion fpt or ghec %} Essas funcionalidades estão disponíveis gratuitamente para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Cobrança da segurança avançada
---

## Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Se você quiser usar as funcionalidades do {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença de {% data variables.product.prodname_GH_advanced_security %}, disponível com {% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

Para obter mais informações sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Caso você queira usar as funcionalidades do {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença do {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% elsif ghes %}

Você pode disponibilizar funcionalidades adicionais para segurança de código, comprando e fazendo o upload de uma licença para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Para discutir licenciamento de {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

## Sobre os números do committer para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

É possível aplicar políticas que permitam ou não o uso de {% data variables.product.prodname_advanced_security %} por parte de organizações pertencentes à conta corporativa. Para obter mais informações, consulte "[Aplicando políticas para {% data variables.product.prodname_advanced_security %} na suaempresa]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}{% endif %}

{% ifversion fpt or ghes or ghec %}

Para obter mais informações sobre a visualização do uso da licença, consulte "[Visualizar o seu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

## Entendendo uso do committer ativo

A linha do tempo a seguir demonstra como a contagem ativa do committer para {% data variables.product.prodname_GH_advanced_security %} pode mudar ao longo do tempo em uma empresa. Por cada mês, você encontrará eventos, juntocom a contagem do autor resultante.

<table spaces-before="0">
  <tr>
    <th align="left">
      Data
    </th>
    
    <th align="left">
      Eventos durante o mês
    </th>
    
    <th align="right">
      Total de committers
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>Abril de 15</nobr>
    </td>
    
    <td align="left">
      Um membro da sua empresa habilita {% data variables.product.prodname_GH_advanced_security %} para o repositório <strong x-id="1">X</strong>. O repositório <strong x-id="1">X</strong> tem 50 committers nos últimos 90 dias.
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>1 de maio</nobr>
    </td>
    
    <td align="left">
      Desenvolvedor <strong x-id="1">A</strong> deixa a equipe que trabalha no repositório <strong x-id="1">X</strong>. As contribuições do desenvolvedor <strong x-id="1">A</strong> continuam sendo contabilizadas por 90 dias.
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong> | <strong x-id="1">50</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>1 de agosto</nobr>
    </td>
    
    <td align="left">
      As contribuições do desenvolvedor <strong x-id="1">A</strong> não contam mais para as licenças necessárias, porque 90 dias se passaram.
    </td>
    
    <td align="right">
      <sub>_50 - 1_</sub></br><strong x-id="1">49</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>Agosto de 15</nobr>
    </td>
    
    <td align="left">
      Um membro da sua empresa habilita {% data variables.product.prodname_GH_advanced_security %} para um segundo repositório, o repositório <strong x-id="1">Y</strong>. Nos últimos 90 dias, um total de 20 desenvolvedores contribuíram para esse repositório. Dos 20 desenvolvedores, 10 também trabalharam recentemente no repositório <strong x-id="1">X</strong> e não requerem licenças adicionais.
    </td>
    
    <td align="right">
      <sub>_49 + 10_</sub><br/><strong x-id="1">59</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>Agosto de 16</nobr>
    </td>
    
    <td align="left">
      Um membro da sua empresa desabilita {% data variables.product.prodname_GH_advanced_security %} para o repositório <strong x-id="1">X</strong>. Dos 49 desenvolvedores que estavam trabalhando no repositório <strong x-id="1">X</strong>, 10 também trabalham no repositório <strong x-id="1">Y</strong>, que tem um total de 20 desenvolvedores contribuindo nos últimos 90 dias.
    </td>
    
    <td align="right">
      <sub>_49 - 29_</sub><br/><strong x-id="1">20</strong>
    </td>
  </tr>
</table>

{% note %}

**Observação:** Um usuário será sinalizado como ativo quando seus commits forem levados a qualquer branch de um repositório, mesmo que os compromissos tenham sido criados há mais de 90 dias.

{% endnote %}

## Aproveitando o máximo de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
