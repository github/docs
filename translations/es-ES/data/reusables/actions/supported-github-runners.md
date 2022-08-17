<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Runner image</b></th>
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
<code>windows-latest</code> o <code>windows-2022</code>
</td>
<td>
La etiqueta de <code>windows-latest</code> actualmente utiliza la imagen de ejecutor de Windows Server 2022.
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
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> o <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[deprecated]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Migrate to <code>ubuntu-20.04</code> or <code>ubuntu-22.04</code>. Para obtener más información, consulta <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">esta publicación del blog de GitHub</A>.
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
La etiqueta de <code>macos-latest</code> actualmente utiliza la imagen de ejecutor de macOS 11.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[deprecated]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Migra a <code>macOS-11</code> o <code>macOS-12</code>. Para obtener más información, consulta <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">esta publicación del blog de GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Note:** The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

<b>Nota:</b> Las imágenes beta y obsoletizadas se proporcionan "tal cual", "con todos sus fallos" y "conforme estén disponibles" y se les excluye del acuerdo de nivel de servicio y de la garantía. El soporte al cliente podría no cubrir las imágenes beta.

{% endwarning %}
