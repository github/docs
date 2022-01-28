首次启用版本更新时，您可能有很多过时的依赖项，其中一些可能为许多落后于最新版本的版本。 {% data variables.product.prodname_dependabot %} 将在其启用后立即检查过时的依赖项。 根据您配置更新的清单文件的数量，您可能会在添加配置文件后几分钟内看到新的版本更新拉取请求。 {% data variables.product.prodname_dependabot %} 也会在配置文件后续更改时运行更新。

{% data variables.product.prodname_dependabot %} 也可在更新失败后更改清单文件时创建拉取请求。 这是因为对清单的更改，例如删除导致更新失败的依赖项，可能会导致新触发的更新成功。

为使拉取请求保持可管理和易于审查，{% data variables.product.prodname_dependabot %} 最多将提出五个拉取请求，以便开始将依赖项更新至最新版本。 如果您在下次预定的更新之前先合并了这些拉取请求，剩余的拉取请求将在下次更新时打开，最多不超过此限。 您可以通过设置 [`open-pull-requests-limit` 配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)来更改打开的拉取请求最大数。
