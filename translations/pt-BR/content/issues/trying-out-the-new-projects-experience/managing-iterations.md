---
title: Gerenciando iterações em projetos (beta)
intro: Você pode criar iterações para planejar os itens de trabalho e grupos futuros.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067567"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>Sobre iterações

Você pode criar um campo de iteração para associar itens com blocos de tempo repetidos específicos. As iterações podem ser definidas para qualquer período de tempo, podem incluir intervalos e podem ser editadas individualmente para modificar o nome e o intervalo de datas. Com os projetos, você pode agrupar por iteração para visualizar o equilíbrio do trabalho futuro, usar filtros para focar em uma única iteração, bem como ordenar por iteração.

Ao criar um campo de iteração, três iterações serão criadas automaticamente.  Você pode adicionar iterações adicionais e fazer outras alterações na página de configurações do seu projeto.

![Captura de tela que mostra as configurações para um campo de iteração](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>Criando um campo de iteração

Você pode criar um campo de iteração usando a paleta de comandos ou a interface do projeto.

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.

   Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
1. Na caixa de texto, digite um nome para o novo campo de iteração.
1. Selecione o menu suspenso abaixo e clique em **Iteração**.
1. Opcionalmente, se quiser mudar a data de início a partir do dia atual, selecione o calendário suspenso ao lado de "Começa em" e clique em uma nova data de início.
2. Para alterar a duração de cada iteração, digite um novo número, selecione o menu suspenso e clique em **dias** ou **semanas**.
3. Clique em **Salvar e criar**.
  
## <a name="adding-new-iterations"></a>Adicionando novas iterações

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
1. Para adicionar uma nova iteração da mesma duração, clique em **Adicionar iteração**.
1. Opcionalmente, para personalizar a duração da nova iteração e o início dela, clique em {% octicon "triangle-down" aria-label="The triangle icon" %} ao lado de "Adicionar iteração", selecione uma data e uma duração de início e clique em **Adicionar**.
1. Clique em **Salvar alterações**.

## <a name="editing-an-iteration"></a>Editando uma iteração

Você pode editar as iterações nas configurações do seu projeto. Você também pode acessar as configurações de um campo de iteração clicando em {% octicon "triangle-down" aria-label="The triangle icon" %} no cabeçalho da tabela do campo e clicando em **Editar valores**.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
1. Para alterar o nome de uma iteração, clique no nome e comece a digitar.
1. Para alterar a data ou a duração de uma iteração, clique na data para abrir o calendário. Clique no dia de início, no dia de término e em **Aplicar**.
1. Opcionalmente, para excluir uma iteração, clique em {% octicon "trash" aria-label="The trash icon" %}.
1. Clique em **Salvar alterações**.

## <a name="inserting-a-break"></a>Inserindo uma pausa

Você pode inserir pausas em suas iterações para se comunicar quando você está tirando o tempo do trabalho agendado. O padrão da duração de uma nova pausa é o comprimento da iteração criada mais recentemente.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
2. Na linha divisória acima de uma iteração e à direita, clique em **Inserir quebra**.
   ![Captura de tela que mostra o local do botão "Inserir quebra"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para alterar a duração da pausa, clique na data para abrir o calendário. Clique no dia de início, no dia de término e em **Aplicar**.
4. Clique em **Salvar alterações**.
