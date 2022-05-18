合并队列可以提高将拉取请求合并到繁忙的目标分支中的速率，同时确保所有必需的分支保护检查都通过。

拉取请求通过所有必需的分支保护检查后，对存储库具有写入访问权限的用户可以将该拉取请求添加到合并队列中。

合并队列可以使用 {% data variables.product.prodname_actions %}。 更多信息请参阅“[{% data variables.product.prodname_actions %}](/actions/)”。
