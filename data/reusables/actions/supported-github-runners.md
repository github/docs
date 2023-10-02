<table style="width:100%">
<thead>
  <tr>
    <th scope="col" style="width:10%"><b>Virtual Machine</b></th>
    <th scope="col" style="width:10%"><b>Processor (CPU)</b></th>
    <th scope="col" style="width:10%"><b>Memory (RAM)</b></th>
    <th scope="col" style="width:10%"><b>Storage (SSD)</b></th>
    <th scope="col" style="width:20%"><b>OS (YAML workflow label)</b></th>
    <th scope="col" style="width:40%"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Linux
</td>
<td>
2
</td>
<td>
7 GB
</td>
<td>
14 GB
</td>
<td>
<code>ubuntu-latest</code>, <code>ubuntu-22.04</code>, <code>ubuntu-20.04</code>
</td>
<td>
The <code>ubuntu-latest</code> label currently uses the Ubuntu 22.04 runner image.
</td>
</tr>
<tr>
<td>
Windows
</td>
<td>
2
</td>
<td>7 GB
</td>
<td>
14 GB
</td>
<td>
<code>windows-latest</code>, <code>windows-2022</code>, <code>windows-2019</code>
</td>
<td>
The <code>windows-latest</code> label currently uses the Windows 2022 runner image.
</td>
</tr>
<tr>
<td>
macOS
</td>
<td>
3
</td>
<td>
14 GB
</td>
<td>
14 GB
</td>
<td>
<code>macos-latest</code>, <code>macos-12</code>, <code>macos-11</code>
</td>
<td>
The <code>macos-latest</code> workflow label currently uses the macOS 12 runner image.
</td>
</tr>
<tr>
<td>
macOS
</td>
<td>
4
</td>
<td>
14 GB
</td>
<td>
14 GB
</td>
<td>
<code>macos-13</code> [Beta]
</td>
<td>
N/A
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
