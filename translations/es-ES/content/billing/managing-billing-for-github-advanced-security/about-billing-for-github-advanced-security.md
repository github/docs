---
title: Acerca de la facturación para Github Advanced Security
intro: 'Si quieres utilizar las características de la {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt %} en un repositorio interno o privado{% endif %}, necesitas una licencia.{% ifversion fpt %} Estas características están disponibles gratuitamente para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '>=3.1'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Facturación de Advanced Security
---

## Acerca de la facturación para {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Si quieres utilizar las características de {% data variables.product.prodname_GH_advanced_security %} en cualquier repositorio aparte de uno público en {% data variables.product.prodname_dotcom_the_website %}, necesitarás una licencia. Para obtener más información acerca de {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% elsif ghes %}

Puedes poner a disposición de los usuarios algunas características adicionales para la seguridad de código si compras y cargas una licencia de la {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información acerca de {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% endif %}

{% ifversion fpt or ghes %}

{% data reusables.advanced-security.license-overview %}

{% endif %}

Para debatir sobre el licenciamiento de {% data variables.product.prodname_GH_advanced_security %} para tu empresa, contacta a {% data variables.contact.contact_enterprise_sales %}.

## Acerca de los números de confirmante para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Puedes requerir políticas para permitir o dejar de permitir que las organizaciones que pertenecen a tu cuenta empresarial utilicen la {% data variables.product.prodname_advanced_security %}. Para obtener más información, consulta la sección "{% ifversion ghes %}[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% elsif fpt or ghae %}[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account){% endif %}".

{% ifversion fpt or ghes %}

Para obtener más información sobre cómo ver el uso de licencias, consulta la sección "[Ver tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

## Calcular los gastos de los confirmantes

La siguiente línea de tiempo de ejemplo demuestra los eventos mensuales que afectan la facturación de {% data variables.product.prodname_GH_advanced_security %} en una empresa. Para cada mes, encontrarás eventos, la cuenta total de confirmantes y la cantidad total de confirmantes por la que cobrará {% data variables.product.company_short %}.

<table spaces-before="0">
  <tr>
    <th align="left">
      Fecha
    </th>
    
    <th align="left">
      Eventos del mes
    </th>
    
    <th align="right">
      Cuenta total de confirmantes
    </th>
    
    <th align="right">
      Confirmantes por los que se cobrará en el mes
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <nobr>1 de agosto</nobr>
    </td>
    
    <td align="left">
      Un miembro de tu empresa habilita {% data variables.product.prodname_GH_advanced_security %} para el repositorio <strong x-id="1">X</strong>. El repositorio <strong x-id="1">X</strong> tiene 50 confirmantes en los últimos 90 días.
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
      <nobr>5 de septiembre</nobr>
    </td>
    
    <td align="left">
      El desarrollador <strong x-id="1">A</strong> sale del equipo que está trabajando en el repositorio <strong x-id="1">X</strong>. Las contribuciones del desarrollador <strong x-id="1">A</strong> siguen contando durante 90 días.
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
      <nobr>8 de septiembre</nobr>
    </td>
    
    <td align="left">
      El desarrolador <strong x-id="1">B</strong> sube una confirmación al repositorio <strong x-id="1">X</strong> por primera vez. El uso del desarrollador <strong x-id="1">B</strong> se prorratea, ya que el desarrollador comenzó a contribuir al repositorio <strong x-id="1">X</strong> ya empezado el mes.
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
      Octubre y noviembre
    </td>
    
    <td align="left">
      Las contribuciones del desarrollador <strong x-id="1">X</strong> al repositorio <strong x-id="1">X</strong> siguen contando, ya que estas se hicieron dentro de los últimos 90 días. {% data variables.product.company_short %} ahora cobra por el mes completo del desarrollador <strong x-id="1">B</strong>, ya que el desarrollador <strong x-id="1">B</strong> ahora tiene contribuciones dentro de los 90 días pasados.
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
      <nobr>4 de diciembre</nobr>
    </td>
    
    <td align="left">
      Han pasado 90 días desde que el desarrollador <strong x-id="1">A</strong> hizo su última contribución al repositorio _X. Pasaron 90 días después de que comenzó diciembre, así que {% data variables.product.company_short %} cobra por todo el mes del desarrollador <strong x-id="1">A</strong>.
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
      <nobr>11 de diciembre</nobr>
    </td>
    
    <td align="left">
      El desarrollador <strong x-id="1">C</strong> se une a la compañía y sube una confirmación al repositorio <strong x-id="1">X</strong> por primera vez. El uso del desarrollador <strong x-id="1">C</strong> se prorratea en 70% durante 21 de los 30 días.
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
      <nobr>Enero</nobr>
    </td>
    
    <td align="left">
      {% data variables.product.company_short %} ya no cobra por el desarrollador <strong x-id="1">A</strong>. {% data variables.product.company_short %} cobra por todo el mes del desarrollador <strong x-id="1">C</strong>.
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
      <nobr>15 de febrero</nobr>
    </td>
    
    <td align="left">
      Un miembro de tu empresa inhabilita la {% data variables.product.prodname_GH_advanced_security %} para el repositorio <strong x-id="1">X</strong>. Los 51 contribuyentes del repositorio <strong x-id="1">X</strong> no trabajan en ningún otro repositorio que cuente con la {% data variables.product.prodname_GH_advanced_security %}. {% data variables.product.company_short %} cobra por el uso de los desarrolladores en el repositorio <strong x-id="1">X</strong> en febrero.
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
      <nobr>Marzo</nobr>
    </td>
    
    <td align="left">
      Ningún repositorio que pertenezca a tu empresa tiene habilitada la {% data variables.product.prodname_GH_advanced_security %}.
    </td>
    
    <td align="right">
      <strong x-id="1">0</strong>
    </td>
    
    <td align="right">
      <strong x-id="1">0</strong>
    </td>
  </tr>
</table>

## Sacar el mayor provecho de la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}
