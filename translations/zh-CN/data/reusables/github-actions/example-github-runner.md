### 在其他操作系统上运行

初学者工作流程模板使用 {% data variables.product.prodname_dotcom %} 托管的 `ubuntu-latest` 运行器将作业配置为在 Linux 上运行。 您可以更改 `runs-on` 键，让您的作业在其他操作系统上运行。 例如，您可以使用 {% data variables.product.prodname_dotcom %} 托管的 Windows 运行器。

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

或者，您可以在 {% data variables.product.prodname_dotcom %} 托管的 macOS 运行器上运行。

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

您还可以在 Docker 容器中运行作业，或者提供在自己的基础架构上运行的自托管运行器。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。
