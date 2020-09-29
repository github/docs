首次启用版本更新时，您可能有很多过时的依赖项，其中一些可能为许多落后于最新版本的版本。 {% data variables.product.prodname_dependabot %} checks for outdated dependencies as soon as it's enabled. 根据您配置更新的清单文件的数量，您可能会在添加配置文件后几分钟内看到新的版本更新拉取请求。

To keep pull requests manageable and easy to review, {% data variables.product.prodname_dependabot_short %} raises a maximum of five pull requests to start bringing dependencies up to the latest version. 如果您在下次预定更新之前合并第一批拉取请求中的一些请求，则接下来的拉取请求最多可以打开五个（您可以更改此限制）。
