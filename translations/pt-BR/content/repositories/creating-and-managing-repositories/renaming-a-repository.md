---
title: Renomear um repositório
intro: Você poderá renomear um repositório se for proprietário da organização ou tiver permissões de administrador no repositório.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: e56e8ca634ca1bfec3c587fe8fb606ab73ac72d4
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127080'
---
Quando você renomear um repositório, todas as informações existentes, com exceção das URLs do site do projeto, serão automaticamente redirecionadas para o novo nome, incluindo:

* Problemas
* Wikis
* Estrelas
* Seguidores

Para obter mais informações sobre sites de projeto, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Além de redirecionar o tráfego da Web, todas as operações `git clone`, `git fetch` ou `git push` direcionadas ao local anterior continuarão funcionando como se fossem feitas no novo local. No entanto, para reduzir a confusão, recomendamos que a atualização de quaisquer clones locais existentes apontem para a nova URL do repositório. Faça isso usando `git remote` na linha de comando:

```shell
$ git remote set-url origin <em>new_url</em>
```

Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

{% ifversion fpt or ghec %}

Se você planeja renomear um repositório que tenha um site do {% data variables.product.prodname_pages %} , recomendamos usar um domínio personalizado para o seu site. Isso garante que a URL do site não seja impactada pela renomeação do repositório. Para obter mais informações, confira "[Sobre os domínios personalizados e o site do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)". 

{% endif %}

{% note %}

**Observação:** o {% data variables.product.prodname_dotcom %} não redirecionará chamadas a uma ação hospedada por um repositório renomeado. Qualquer fluxo de trabalho que usa essa ação falhará com o erro `repository not found`. Em vez disso, crie um repositório e uma ação com o novo nome e arquive o repositório antigo. Para obter mais informações, confira "[Como arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)".

{% endnote %}

{% warning %}

**Aviso**: se você criar um repositório na sua conta no futuro, não reutilize o nome original do repositório renomeado. Se o fizer, o redirecionamento para o repositório renomeado quebrará.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sob o título **Nome do Repositório**, digite o novo nome do repositório.
   ![Renomeação do repositório](/assets/images/help/repository/repository-name-change.png)
4. Clique em **Renomear**. Pronto!
