<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Runner image</b></th>
    <th style="width:25%"><b>YAML 工作流程标签</b></th>
    <th style="width:40%"><b>注：</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> 或 <code>windows-2022</code>
</td>
<td>
<code>windows-latest</code> 标签目前使用 Windows Server 2022 运行器映像。
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
<code>ubuntu-latest</code> 或 <code>ubuntu-20.04</code>
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
Migrate to <code>ubuntu-20.04</code> or <code>ubuntu-22.04</code>. For more information, see <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">this GitHub blog post</A>.
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
<code>macos-latest</code> 或 <code>macos-11</code>
</td>
<td>
<code>macos-latest</code> 标签目前使用 macOS 11 运行器映像。
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
Migrate to <code>macOS-11</code> or <code>macOS-12</code>. For more information, see <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">this GitHub blog post</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Note:** The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

<b>注意：</b> 测试版和已弃用映像均按“原样”、“包含所有故障”和“可用”提供，并且不在服务级别协议和保修范围内。 测试版映像可能不在客户支持范围内。

{% endwarning %}
