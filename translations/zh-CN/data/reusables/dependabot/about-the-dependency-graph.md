依赖关系图是存储库中存储的清单和锁定文件的摘要，{% ifversion dependency-submission-api %} 以及使用依赖项提交 API（测试版）{% endif %} 为存储库提交的任何依赖项。 对于每个仓库，它显示{% ifversion fpt or ghec %}：

- 依赖项、它依赖的生态系统和包
- 依赖项、依赖于它的仓库和包{% else %} 依赖项，即它所依赖的生态系统和包。 {% data variables.product.product_name %} 不计算有关依赖项、仓库和依赖于仓库的包的信息。{% endif %}
