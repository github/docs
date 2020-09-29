---
title: Criar um repositório de modelos
intro: 'Você pode converter um repositório existente em um modelo, para que você e outras pessoas possam gerar novos repositórios com a mesma estrutura de diretório{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, branches,{% endif %} e arquivos.'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.18'
---

Qualquer pessoa com permissões de administrador em um repositório pode transformar o repositório em um modelo.

Para criar um repositório de modelos, é preciso criar um repositório e, em seguida, torná-lo um modelo. Para obter mais informações sobre como criar um repositório, consulte "[Criar um repositório](/articles/creating-a-new-repository)".

Depois de converter o seu repositório em um modelo, qualquer pessoa com acesso ao repositório poderá gerar um novo repositório com a mesma estrutura de diretório e arquivos do branch-padrão.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} Eles também podem optar por incluir todos os outros branches no seu repositório.{% endif %} Para obter mais informações, consulte "[Criar um repositório a partir de um modelo](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Selecione **Template repository** (Repositório de modelos). ![Caixa de seleção para transformar um repositório em modelo](/assets/images/help/repository/template-repository-checkbox.png)
