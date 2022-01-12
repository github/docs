Qualquer pessoa pode bifurcar um repositório público e, em seguida, enviar um pull request que proponha alterações nos fluxos de trabalho do repositório de {% data variables.product.prodname_actions %}. Embora os fluxos de trabalho das bifurcações não tenham acesso a dados confidenciais como segredos, podem ser uma dor de cabeça para os mantenedores se forem modificados para fins abusivos.

Para ajudar a evitar isso, os fluxos de trabalho em pull requests para repositórios públicos de alguns contribuidores externos não serão executados automaticamente, e é possível que tenham de ser aprovados primeiro. Por padrão, todos os colaboradores iniciantes exigem aprovação para executar fluxos de trabalho.

{% note %}

**Nota:** Fluxos de trabalho acionados por eventos de `pull_request_target` são executados no contexto do branch de base. Como o branc de base é considerado confiável, os fluxos de trabalho acionados por esses eventos sempre serão executados, independente das configurações de aprovação.

{% endnote %}
