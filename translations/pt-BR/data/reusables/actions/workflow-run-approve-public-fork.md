Qualquer pessoa pode bifurcar um repositório público e, em seguida, enviar um pull request que proponha alterações nos fluxos de trabalho do repositório de {% data variables.product.prodname_actions %}. Embora os fluxos de trabalho das bifurcações não tenham acesso a dados confidenciais como segredos, podem ser uma dor de cabeça para os mantenedores se forem modificados para fins abusivos.

Para ajudar a evitar isso, os fluxos de trabalho em pull requests para repositórios públicos de alguns contribuidores externos não serão executados automaticamente, e é possível que tenham de ser aprovados primeiro. Por padrão, todos os colaboradores iniciantes exigem aprovação para executar fluxos de trabalho.

{% note %}

**Note:** Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings.

{% endnote %}