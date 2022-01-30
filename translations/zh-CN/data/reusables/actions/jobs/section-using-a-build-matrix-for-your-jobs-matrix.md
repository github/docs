
Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. 矩阵允许您通过在单个作业定义中执行变量替换来创建多个作业。 例如，可以使用矩阵为多个受支持的编程语言、操作系统或工具版本创建作业。 矩阵重新使用作业的配置，并为您配置的每个矩阵创建作业。

{% data reusables.github-actions.usage-matrix-limits %}

您在 `matrix` 中定义的每个选项都有键和值。 定义的键将成为 `matrix` 上下文中的属性，您可以在工作流程文件的其他区域中引用该属性。 例如，如果定义包含操作系统数组的键 `os`，您可以使用 `matrix.os` 属性作为 `runs-on` 关键字的值，为每个操作系统创建一个作业。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

定义 `matrix` 事项的顺序。 定义的第一个选项将是工作流程中运行的第一个作业。

#### 示例：运行多个版本的 Node.js

您可以提供配置选项阵列来指定矩阵。 例如，如果运行器支持 Node.js 版本 10、12 和 14，则您可以在 `matrix` 中指定这些版本的阵列。

此示例通过设置三个 Node.js 版本阵列的 `node` 键创建三个作业的矩阵。 为使用矩阵，示例将 `matrix.node` 上下文属性设置为 `setup-node` 操作的输入参数 `node-version`。 因此，将有三个作业运行，每个使用不同的 Node.js 版本。

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

`setup-node` 操作是在使用 {% data variables.product.prodname_dotcom %} 托管的运行器时建议用于配置 Node.js 版本的方式。 更多信息请参阅 [`setup-node`](https://github.com/actions/setup-node) 操作。

#### 示例：使用多个操作系统运行

您可以创建矩阵以在多个运行器操作系统上运行工作流程。 您也可以指定多个矩阵配置。 此示例创建包含 6 个作业的矩阵：

- 在 `os` 阵列中指定了 2 个操作系统
- 在 `node` 阵列中指定了 3 个 Node.js 版本

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% ifversion ghae %}
For more information about the configuration of self-hosted runners, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% else %}要查找 {% data variables.product.prodname_dotcom %} 托管的运行器支持的配置选项，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。
{% endif %}

#### Example: Including additional values in combinations

您可以将额外的配置选项添加到已经存在的构建矩阵作业中。 例如，如果要在作业使用 `windows-latest` 和 `node` 的版本 8 运行时使用 `npm` 的特定版本，您可以使用 `include` 指定该附加选项。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### 示例：包括新组合

您可以使用 `include` 将新作业添加到构建矩阵中。 任何不匹配包含配置都会添加到矩阵中。 例如，如果您想要使用 `node` 版本 14 在多个操作系统上构建，但在 Ubuntu 上需要一个使用节点版本 15 的额外实验性作业，则可使用 `include` 指定该额外作业。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### 示例：从矩阵中排除配置

您可以使用 `exclude` 选项删除构建矩阵中定义的特定配置。 使用 `exclude` 删除由构建矩阵定义的作业。 作业数量是您提供的数组中所包括的操作系统 (`os`) 数量减去所有减项 (`exclude`) 后的叉积。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # excludes node 8 on macOS
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**注意：**所有 `include` 组合在 `exclude` 后处理。 这允许您使用 `include` 添加回以前排除的组合。

{% endnote %}

### 在矩阵中使用环境变量

您可以使用 `include` 键为每个测试组合添加自定义环境变量。 然后，您可以在后面的步骤中引用自定义环境变量。

{% data reusables.github-actions.matrix-variable-example %}
