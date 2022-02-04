<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Entorno virtual</b></th>
    <th style="width:25%"><b>Etiqueta de flujo de trabajo YAML</b></th>
    <th style="width:40%"><b>Notas</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-2022</code>
</td>
<td>
La etiqueta de <code>windows-latest</code> actualmente utiliza la imagen de ejecutor de Windows Server 2019.
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-latest</code> o <code>windows-2019</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Windows Server 2016<sup>[deprecated]</sup>
</td>
<td>
<code>windows-2016</code>
</td>
<td>
Migrarse a Windows 2019 o Windows 2022. Para obtener más información, consulta <A href="https://github.blog/changelog/2021-10-19-github-actions-the-windows-2016-runner-image-will-be-removed-from-github-hosted-runners-on-march-15-2022/">la publicación del blog</A>.
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> o <code>ubuntu-20.04</code>
</td>
<td>
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
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> or <code>macos-11</code>
</td>
<td>
La etiqueta de <code>macos-latest</code> actualmente utiliza la imagen de ejecutor de macOS 11.
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

**Note:** The `-latest` virtual environments are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

<b>Nota:</b> Las imágenes beta y obsoletizadas se proporcionan "tal cual", "con todos sus fallos" y "conforme estén disponibles" y se les excluye del acuerdo de nivel de servicio y de la garantía. El soporte al cliente podría no cubrir las imágenes beta.

{% endwarning %}
