1. Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

    You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. Esta configuração não pode ser substituída se configurar o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}
