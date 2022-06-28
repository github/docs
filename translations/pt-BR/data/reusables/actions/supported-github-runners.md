<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Ambiente virtual</b></th>
    <th style="width:25%"><b>Etiqueta de fluxo de trabalho YAML</b></th>
    <th style="width:40%"><b>Observações</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> ou <code>windows-2022</code>
</td>
<td>
O rótulo <code>windows-latest</code> usa atualmente a imagem do executor do Windows Server 2022.
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-2019</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 22.04
</td>
<td>
<code>ubuntu-22.04</code>
</td>
<td>
O Ubuntu 22,04 está atualmente em beta público.
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> ou <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
macOS Monterey 12
</td>
<td>
<code>macos-12</code>
  </td>
</tr>
<tr>
<td>
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> or <code>macos-11</code>
</td>
<td>
A etiqueta <code>macos-latest</code> usa a imagem do executor macOS 11 atualmente.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
</td>
</tr>
</tbody>
</table>

{% note %}

**Observação:** Os `-últimos` ambientes virtuais são as últimas imagens estáveis que {% data variables.product.prodname_dotcom %} fornece, e podem não ser a versão mais recente do sistema operacional disponível no fornecedor do sistema operacional.

{% endnote %}

{% warning %}

<b>Observação:</b> Imagens Beta e Depreciadas são fornecidas "como se apresentam", "com todas as falhas" e "como disponível" e são excluídas da garantia e do contrato de nível de serviço. Imagens Beta podem não estar cobertas pelo suporte ao cliente.

{% endwarning %}
