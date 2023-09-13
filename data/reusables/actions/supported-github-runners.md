<table style="width:100%">
<thead>
  <tr>
    <th scope="col" style="width:35%"><b>Runner image</b></th>
    <th scope="col" style="width:25%"><b>YAML workflow label</b></th>
    <th scope="col" style="width:40%"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> or <code>windows-2022</code>
</td>
<td>
The <code>windows-latest</code> label currently uses the Windows Server 2022 runner image.
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-2019</code>
</td>
<td>None
</td>
</tr>
<tr>
<td>
Ubuntu 22.04
</td>
<td>
<code>ubuntu-latest</code> or <code>ubuntu-22.04</code>
</td>
<td>
The <code>ubuntu-latest</code> label currently uses the Ubuntu 22.04 runner image.
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-20.04</code>
</td>
<td>None
</rd>
</tr>
<tr>
<td>
macOS 13 Ventura [Beta]
</td>
<td>
<code>macos-13</code> or <code>macos-13-xl</code>
</td>
<td>
None
</td>
<tr>
<td>
macOS 12 Monterey
</td>
<td>
<code>macos-latest</code>, <code>macos-12</code>, <code>macos-latest-xl</code> or <code>macos-12-xl</code>
</td>
<td>
The <code>macos-latest</code> and <code>macos-latest-xl</code> workflow labels currently uses the macOS 12 runner image.
</td>
</tr>
<tr>
<td>
macOS 11 Big Sur
</td>
<td>
<code>macos-11</code>
</td>
<td>None
</td>
</tr>
</tbody>
</table>

{% note %}

**Note:** The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

**Warning:** Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

{% endwarning %}
