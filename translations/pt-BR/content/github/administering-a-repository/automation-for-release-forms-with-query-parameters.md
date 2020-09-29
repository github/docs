---
title: Automação para formulários de versão com parâmetros de consulta
intro: 'Para criar versões de forma rápida preenchendo automaticamente o novo formulário de versão com informações personalizadas, você pode adicionar parâmetros de consulta ao URL da página de formulário da versão.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Os parâmetros de consulta são partes opcionais de um URL que podem ser personalizadas para compartilhar uma exibição de página web específica, como resultados do filtro de pesquisa, um modelo de problema ou a página de formulário da versão no {% data variables.product.prodname_dotcom %}. Para criar seus próprios parâmetros de consulta, você deve corresponder o par de chave e valor.

Você deve ter as permissões adequadas para qualquer ação para usar o parâmetro de consulta equivalente. Por exemplo, é preciso ter permissão para criar versões que preencham previamente o formulário de versões. Para obter mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)."

Se você criar um URL inválido usando parâmetros de consulta, ou se não tiver as permissões adequadas, o URL retornará uma página de erro 404.

### Parâmetros de consulta compatíveis

| Parâmetro de consulta | Exemplo                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tag`                 | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` cria uma versão com base em uma tag chamada "v1.0.1".                                           |
| `target`              | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` cria uma versão com base no commit mais recente para o branch "release-1.0.1".        |
| `title`               | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` cria uma versão chamada "octo-1.0.1" com base em uma tag chamada "v1.0.1". |
| `texto`               | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` cria uma versão com a descrição "Adiciona suporte ao widget" no texto da versão. |
| `prerelease`          | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` cria uma versão que será identificada como não estando pronta para produção.                  |

### Leia mais

- "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
