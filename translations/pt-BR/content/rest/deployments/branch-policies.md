---
title: Políticas de branch de implantação
allowTitleToDifferFromFilename: true
shortTitle: Políticas de branch de implantação
intro: A API de políticas de branch de implantação permite que você gerencie políticas personalizadas de branch de implantação.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API das políticas de branch de implantação

A API de políticas de branch de implantação permite que você especifique padrões de nome personalizados aos quais os branchs devem corresponder para fazer a implantação em um ambiente. A propriedade `deployment_branch_policy.custom_branch_policy` para o ambiente deve ser definida como `verdadeiro` para usar estas extremidades. Para atualizar o `deployment_branch_policy` para um ambiente, consulte "[Criando ou atualizando um ambiente](/rest/deployments/environments#create-or-update-an-environment)".

Para obter mais informações sobre como restringir implantações de ambiente em certos branches, consulte "[Usando ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches). ".
