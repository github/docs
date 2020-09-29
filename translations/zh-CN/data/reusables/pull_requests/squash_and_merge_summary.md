对 {% data variables.product.product_location %} 上的拉取请求选择 **Squash and merge（压缩并合并）**选项时，拉取请求的提交会压缩为单一提交。 不是从主题分支查看所有贡献者的个别提交，而是所有提交合并成一个提交并合并到默认分支。 压缩了提交的拉取请求使用[快进选项](https://git-scm.com/docs/git-merge#_fast_forward_merge)合并。

要压缩并合并拉取请求，必须在仓库中拥有[写入权限](/articles/repository-permission-levels-for-an-organization/)，并且仓库必须[允许压缩合并](/articles/configuring-commit-squashing-for-pull-requests/)。

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

您可以使用压缩并合并在仓库中创建更简化的 Git 历史记录。 在功能分支上工作时，提交正在进行的工作会有帮助，但它们不一定必须留在 Git 历史记录中。 如果在合并到默认分支时将这些提交压缩到一个提交中，您可以保留原来的更改并清除 Git 历史记录。
