### Executando em um sistema operacional diferente

O modelo de fluxo de trabalho inicial configura trabalhos para executar no Linux, usando o {% data variables.product.prodname_dotcom %}-executores hospedados `ubuntu-latest`. Você pode alterar a tecla `runs-on` para executar seus trabalhos em um sistema operacional diferente. Por exemplo, você pode usar os {% data variables.product.prodname_dotcom %}-executores Windows hospedados.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Ou, você pode executar nos {% data variables.product.prodname_dotcom %}-executores do macOS.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Você também pode executar tarefas em contêineres Docker, ou você pode fornecer um executor auto-hospedado que funciona na sua própria infraestrutura. Para obter mais informações, consulte "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
