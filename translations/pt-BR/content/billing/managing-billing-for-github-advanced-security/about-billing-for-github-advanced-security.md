---
title: Sobre a cobrança para o GitHub Advanced Security
intro: 'Caso você queira usar {% data variables.product.prodname_GH_advanced_security %} funcionalidades{% ifversion fpt or ghec %} em um repositório privado ou interno{% endif %}, você precisará de uma licença.{% ifversion fpt or ghec %} Essas funcionalidades estão disponíveis gratuitamente para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Cobrança da segurança avançada
---

## Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt or ghec %}

Se quiser usar funcionalidades de {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% elsif ghes %}

Você pode disponibilizar funcionalidades adicionais para segurança de código, comprando e fazendo o upload de uma licença para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

{% endif %}

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

## Calculando gastos do committer

A linha do tempo a seguir demonstra os eventos ao longo de um mês que afetam a cobrança de {% data variables.product.prodname_GH_advanced_security %} em uma empresa. Para cada mês, você encontrará os eventos, a contagem total do committer e o número total de committers que {% data variables.product.company_short %} cobraria.

<table spaces-before="0">
  <tr>
    <th align="left">
      Data
    </th>
    
    <th align="left">
      Eventos durante o mês
    </th>
    
    <th align="right">
      Contagem total do committer
    </th>
    
    <th align="right">
      Committers cobrados no mês
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>1 de agosto</nobr>
    </td>
    
    <td align="left">
      Um membro da sua empresa habilita {% data variables.product.prodname_GH_advanced_security %} para o repositório <strong x-id="1">X</strong>. O repositório <strong x-id="1">X</strong> tem 50 committers nos últimos 90 dias.
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>5 de setembro</nobr>
    </td>
    
    <td align="left">
      Desenvolvedor <strong x-id="1">A</strong> deixa a equipe que trabalha no repositório <strong x-id="1">X</strong>. As contribuições do desenvolvedor <strong x-id="1">A</strong> continuam sendo contabilizadas por 90 dias.
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">50</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>8 de setembro</nobr>
    </td>
    
    <td align="left">
      Desenvolvedor <strong x-id="1">B</strong> faz push de um commit para o repositório <strong x-id="1">X</strong> pela primeira vez. O uso do desenvolvedor <strong x-id="1">B</strong> é pró-rateado, porque o desenvolvedor começou a contribuir para o repositório <strong x-id="1">X</strong> quando o mês já havia começado.
    </td>
    
    <td align="right">
      <sub>_50 + 1_</sub></br><strong x-id="1">51</strong>
    </td>
    
    <td align="right">
      <sub>_50 + 0.8_</sub><br/><strong x-id="1">50.8</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Outubro e novembro
    </td>
    
    <td align="left">
      As contribuições do desenvolvedor <strong x-id="1">A</strong> para o repositório <strong x-id="1">X</strong> continuam sendo contabilizada, pois foram realizadas nos últimos 90 dias. {% data variables.product.company_short %} agora faz a cobrança do desenvolvedor <strong x-id="1">B</strong> referente a todo o mês porque o desenvolvedor <strong x-id="1">B</strong> agora tem contribuições nos últimos 90 dias.
    </td>
    
    <td align="right">
      <strong x-id="1">51</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">51</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>4 de dezembro</nobr>
    </td>
    
    <td align="left">
      Passaram-se 90 dias desde a última contribuição do desenvolvedor <strong x-id="1">A</strong> para o repositório _X. Passaram-se 90 dias após o início de dezembro. Portanto, {% data variables.product.company_short %} irá efetuar a cobrança do mês inteiro para o desenvolvedor <strong x-id="1">A</strong>.
    </td>
    
    <td align="right">
      <sub>_51 - 1_</sub><br/><strong x-id="1">50</strong>
    </td>
    
    <td align="right">
      <sub></sub><br/><strong x-id="1">51</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>11 de dezembro</nobr>
    </td>
    
    <td align="left">
      O desenvolvedor <strong x-id="1">C</strong> junta-se à empresa e faz push de um commit para o repositório <strong x-id="1">X</strong> pela primeira vez. O uso do desenvolvedor <strong x-id="1">C</strong> é pró-rateado em 70% por 21 dias no total de 30.
    </td>
    
    <td align="right">
      <sub>_50 + 1_</sub><br/><strong x-id="1">51</strong>
    </td>
    
    <td align="right">
      <sub>_51 + .07_</sub><br/><strong x-id="1">51.7</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>Janeiro</nobr>
    </td>
    
    <td align="left">
      {% data variables.product.company_short %} não mais efetua a cobrança para o desenvolvedor <strong x-id="1">A</strong>. {% data variables.product.company_short %} efetua a cobrança para desenvolvedor <strong x-id="1">C</strong> para todo o mês.
    </td>
    
    <td align="right">
      <strong x-id="1">51</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">51</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>15 de fevereiro</nobr>
    </td>
    
    <td align="left">
      Um membro da sua empresa desabilita {% data variables.product.prodname_GH_advanced_security %} para o repositório <strong x-id="1">X</strong>. Os 51 contribuidores do repositório <strong x-id="1">X</strong> não trabalham juntos em nenhum outro repositório com {% data variables.product.prodname_GH_advanced_security %}. {% data variables.product.company_short %} efetua a cobrança para o uso dos desenvolvedores no repositório <strong x-id="1">X</strong> para fevereiro.
    </td>
    
    <td align="right">
      <sub>_51 - 51_</sub><br/><strong x-id="1">0</strong>
    </td>
    
    <td align="right">
      <sub></sub><br/><strong x-id="1">51</strong>
    </td>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>Março</nobr>
    </td>
    
    <td align="left">
      Nenhum repositório pertencente à sua empresa tem {% data variables.product.prodname_GH_advanced_security %} habilitado.
    </td>
    
    <td align="right">
      <strong x-id="1">0</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">0</strong>
    </td>
  </tr>
</table>

## Aproveitando o máximo de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}
