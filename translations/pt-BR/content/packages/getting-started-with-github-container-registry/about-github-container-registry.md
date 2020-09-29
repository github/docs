---
title: Sobre o GitHub Container Registry
intro: 'O {% data variables.product.prodname_github_container_registry %} permite que você hospede e gerencie imagens do contêiner do Docker na sua organização ou conta de usuário pessoal no {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_github_container_registry %} permite que você configure quem pode gerenciar e acessar pacotes usando permissões refinadas.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** {% data variables.product.prodname_github_container_registry %} está atualmente em versão beta público e sujeito a alterações. Atualmente, {% data variables.product.prodname_github_container_registry %} é compatível apenas com formatos de imagem do Docker. Durante o beta, o armazenamento e a largura de banda são grátis.

{% endnote %}


{% data reusables.package_registry.container-registry-feature-highlights %}

Para compartilhar o contexto sobre o uso do seu pacote, você pode vincular um repositório à sua imagem de contêiner no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Conectar um repositório a uma imagem de contêiner](/packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image)".

### Formatos compatíveis

O {% data variables.product.prodname_container_registry %} atualmente é compatível apenas com as imagens do Docker.


### Visibilidade e permissões de acesso para imagens de contêiner

Se você tem permissões de administrador para uma imagem de contêiner, você pode definir a imagem do contêiner como privada ou pública. As imagens públicas permitem acesso anônimo e podem ser carregadas sem autenticação ou login via CLI.

Como administrador, você também pode conceder permissões de acesso para uma imagem contêiner separada das permissões que você configurou nos níveis da organização e repositório.

Para imagens de contêiner publicadas e pertencentes a uma conta de usuário, você pode dar a qualquer pessoa uma função de acesso. Para imagens de contêineres publicadas e pertencentes a uma organização, você pode dar uma função de acesso a qualquer pessoa ou equipe na organização.

| Função de permissão | Descrição de acesso                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Leitura             | Pode fazer o download do pacote. <br> Pode ler metadados do pacote.                                                                                    |
| Gravação            | Pode fazer upload e download deste pacote. <br> Pode ler gravar metadados do pacote.                                                                   |
| Administrador       | Pode fazer upload, download, excluir e gerenciar este pacote. <br> Pode ler gravar metadados do pacote. <br> Pode conceder permissões de pacote. |

Para obter mais informações, consulte "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

### Sobre a cobrança do {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}

### Entrar em contato com o suporte

Se você tiver feedback ou solicitações de recursos para {% data variables.product.prodname_github_container_registry %}, use o [formulário de feedback](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Entre em contato com {% data variables.contact.github_support %} sobre {% data variables.product.prodname_github_container_registry %} usando o [nosso formulário de contato](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) se:

* Você encontrar qualquer coisa que contradiga a documentação.
* Você encontra erros vagos ou pouco claros.
* Seu pacote publicado contém dados confidenciais, como violações do GDPR, Chaves de API ou informações de identificação pessoal.
