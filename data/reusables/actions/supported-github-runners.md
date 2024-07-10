### Standard {% data variables.product.prodname_dotcom %}-hosted runners for public repositories

For public repositories, jobs using the workflow labels shown in the table below will run on virtual machines with the associated specifications. The use of these runners on public repositories is free and unlimited.

<table style="width:100%">
<thead>
  <tr>
    <th scope="col" style="width:10%"><b>Virtual Machine</b></th>
    <th scope="col" style="width:10%"><b>Processor (CPU)</b></th>
    <th scope="col" style="width:10%"><b>Memory (RAM)</b></th>
    <th scope="col" style="width:10%"><b>Storage (SSD)</b></th>
    <th scope="col" style="width:20%"><b>Workflow label</b></th>
    <th scope="col" style="width:40%"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Linux
</td>
<td>
4
</td>
<td>
16 GB
</td>
<td>
14 GB
</td>
<td>
<code>ubuntu-latest</code>, <code>ubuntu-24.04</code> [Beta], <code>ubuntu-22.04</code>, <code>ubuntu-20.04</code>
</td>
<td>
The <code>ubuntu-latest</code> label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Readme.md">Ubuntu 22.04 runner image</a>.
</td>
</tr>
<tr>
<td>
Windows
</td>
<td>
4
</td>
<td>16 GB
</td>
<td>
14 GB
</td>
<td>
<code>windows-latest</code>, <code>windows-2022</code>, <code>windows-2019</code>
</td>
<td>
The <code>windows-latest</code> label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md">Windows 2022 runner image</a>.
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
<code>macos-12</code>
</td>
<td>
Uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md">macOS 12 runner image</a>.
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
<code>macos-13</code>
</td>
<td>
Uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-13-Readme.md">macOS 13 runner image</a>.
</td>
</tr>
<tr>
<td>
macOS
</td>
<td>
3 (M1)
</td>
<td>
7 GB
</td>
<td>
14 GB
</td>
<td>
<code>macos-latest</code> or <code>macos-14</code>
</td>
<td>
The <code>macos-latest</code> label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-14-Readme.md">macOS 14 runner image</a>.
</td>
</tr>
</tbody>
</table>

### Standard {% data variables.product.prodname_dotcom %}-hosted runners for {% ifversion ghec %}internal and{% endif %} private repositories

For {% ifversion ghec %}internal and{% endif %} private repositories, jobs using the workflow labels shown in the table below will run on virtual machines with the associated specifications. These runners use your {% data variables.product.prodname_dotcom %} account's allotment of free minutes, and are then charged at the per minute rates. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)."

<table style="width:100%">
<thead>
  <tr>
    <th scope="col" style="width:10%"><b>Virtual Machine</b></th>
    <th scope="col" style="width:10%"><b>Processor (CPU)</b></th>
    <th scope="col" style="width:10%"><b>Memory (RAM)</b></th>
    <th scope="col" style="width:10%"><b>Storage (SSD)</b></th>
    <th scope="col" style="width:20%"><b>Workflow label</b></th>
    <th scope="col" style="width:40%"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
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
<code>ubuntu-latest</code>, <code>ubuntu-24.04</code> [Beta], <code>ubuntu-22.04</code>, <code>ubuntu-20.04</code>
</td>
<td>
The <code>ubuntu-latest</code> label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Readme.md">Ubuntu 22.04 runner image</a>.
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
The <code>windows-latest</code> label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md">Windows 2022 runner image</a>.
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
<code>macos-12</code>
</td>
<td>
Uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md">macOS 12 runner image</a>.
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
<code>macos-13</code>
</td>
<td>
Uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-13-Readme.md">macOS 13 runner image</a>.
</td>
</tr>
<tr>
<td>
macOS
</td>
<td>
3 (M1)
</td>
<td>
7 GB
</td>
<td>
14 GB
</td>
<td>
<code>macos-latest</code> or <code>macos-14</code>
</td>
<td>
The <code>macos-latest</code>label currently uses the <a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-14-Readme.md">macOS 14 runner image</a>.
</td>
</tr>
</tbody>
</table>
