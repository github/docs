---
title: Fazendo a migração da sua empresa para o GitHub Actions
shortTitle: Migrar para Ações
intro: 'Aprenda a planejar uma migração para {% data variables.product.prodname_actions %} para sua empresa a partir de outro provedor.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Sobre as migrações corporativas para {% data variables.product.prodname_actions %}

Para fazer a migração da sua empresa para {% data variables.product.prodname_actions %} a partir de um sistema existente, você pode planejar a migração, concluir a migração e desativar os sistemas existentes.

Este guia aborda considerações específicas sobre migrações. Para obter informações adicionais sobre a introdução de {% data variables.product.prodname_actions %} à sua empresa, consulte "[Apresentando {% data variables.product.prodname_actions %} à sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise). "

## Planejando a sua migração

Antes de começar a fazer a migração da sua empresa para {% data variables.product.prodname_actions %}, você deverá identificar quais fluxos de trabalho serão migrados e como essas migrações afetarão suas equipes e, em seguida, planejar como e quando você concluirá as migrações.

### Aproveitando os especialistas em migração

{% data variables.product.company_short %} pode ajudar com a sua migração, e você também pode beneficiar-se da compra de {% data variables.product.prodname_professional_services %}. Para obter mais informações, entre em contato com o seu representante dedicado ou {% data variables.contact.contact_enterprise_sales %}.

### Identificando e armazenando as metas de migração

Antes de fazer a migração para {% data variables.product.prodname_actions %}, você deverá ter um entendimento completo dos fluxos de trabalho usados pela empresa no seu sistema existente.

Primeiro, crie um inventário da criação existente e libere os fluxos de trabalho dentro de sua empresa, recolha informações sobre quais os fluxos de trabalho que estão sendo ativamente utilizados e que devem ser migrados e quais podem ser deixados para trás.

Em seguida, aprenda as diferenças entre o seu provedor atual e {% data variables.product.prodname_actions %}. Isso ajudará você a avaliar quaisquer dificuldades na migração de cada fluxo de trabalho, e onde sua empresa pode experimentar diferentes funcionalidades. Para obter mais informações, consulte "[Fazendo a migração para {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions)".

Com estas informações, você será capaz de determinar quais fluxos de trabalho você pode e deseja migrar para {% data variables.product.prodname_actions %}.

### Determinar os impactos para a equipe a partir das migrações

Ao mudar as ferramentas usadas na sua empresa, você influencia a forma de funcionar da sua equipe. Você deverá considerar como a transferência de um fluxo de trabalho dos seus sistemas existentes para {% data variables.product.prodname_actions %} afetará o trabalho diário dos seus desenvolvedores.

Identifique todos os processos, integrações e ferramentas de terceiros que serão afetadas pela sua migração e faça um plano para quaisquer atualizações que você precise fazer.

Considere como a migração pode afetar suas preocupações de conformidade. Por exemplo, as suas ferramentas de verificação de credenciais e análise de segurança funcionarão com {% data variables.product.prodname_actions %}, ou você precisará usar novas ferramentas?

Identifique os portões e verificações em seu sistema existente e verifique se você pode implementá-los com {% data variables.product.prodname_actions %}.

### Identificando e validando as ferramentas de migração

As ferramentas de migração automatizadas podem traduzir os fluxos de trabalho da sua empresa da sintaxe do sistema existente para a sintaxe exigida por {% data variables.product.prodname_actions %}. Identifique ferramentas de terceiros ou entre em contato com seu representante dedicado ou com {% data variables.contact.contact_enterprise_sales %} para perguntar sobre ferramentas que {% data variables.product.company_short %} pode fornecer.

Depois de identificar uma ferramenta para automatizar suas migrações, valide a ferramenta executando a ferramenta em alguns fluxos de trabalho de teste e verificando que os resultados são como esperado.

As ferramentas automatizadas devem ser capazes de fazer a migração a maioria dos seus fluxos de trabalho, mas você provavelmente precisará reescrever manualmente pelo menos uma pequena porcentagem. Estime a quantidade de trabalho manual que você precisará concluir.

### Decidir uma abordagem de migração

Determine a abordagem de migração que funcionará melhor para a sua empresa. As equipes menores poderão migrar todos os seus fluxos de trabalho de uma vez, com uma abordagem de "rasgar e substituir". Para as grandes empresas, uma abordagem iterativa pode ser mais realista. Você pode optar por ter uma equipe central que gerencie toda a migração ou pedir para que cada equipe trabalhe fazendo a migração dos seus próprios fluxos de trabalho.

Recomendamos uma abordagem iterativa que combina gerenciamento ativo com autosserviço. Comece com um pequeno grupo de primeiros usuários que podem atuar como seus campeões internos. Identifique um punhado de fluxos de trabalho que são abrangentes o suficiente para representar a amplitude do seu negócio. Trabalhe com seus primeiros usuários para fazer a migração desses fluxos de trabalho para {% data variables.product.prodname_actions %}, iterando conforme necessário. Isto dará a outras equipas confiança de que os seus fluxos de trabalho também podem ser migrados.

Em seguida, disponibilize {% data variables.product.prodname_actions %} para as outras partes da sua organização. Forneça recursos para ajudar estas equipes a migrar seus próprios fluxos de trabalho para {% data variables.product.prodname_actions %}, e informe às equipes quando os sistemas existentes serão desativados.

Por fim, informe qualquer a equipe que ainda esteja usando seus sistemas antigos que conclua a migração dentro de um prazo específico. Podem mostrar os sucessos de outras equipas para garantir que a migração é possível e desejável.

### Definindo o cronograma da sua migração

Depois de decidir sobre uma abordagem de migração, crie um cronograma que descreve quando cada uma das suas equipes fará a migração dos seus fluxos de trabalho para {% data variables.product.prodname_actions %}.

Primeiro, decida a data em que você deseja que sua migração seja concluída. Por exemplo, você pode planejar realizar a sua migração até o término do seu contrato com o seu provedor atual.

Em seguida, trabalhe com as suas equipes para criar uma agenda que cumpra o seu prazo, sem sacrificar os objetivos de sua equipe. Veja a cadência da sua empresa e a carga de trabalho de cada equipe que você está pedindo para migrar. Coordene com cada equipe para entender seu cronograma de entrega e criar um plano que permita que a equipe faça a migração dos seus fluxos de trabalho em um momento que não impacte a sua capacidade de entregar.

## Migrando para {% data variables.product.prodname_actions %}

Quando você estiver pronto para iniciar a sua migração, traduza seus fluxos de trabalho existentes para {% data variables.product.prodname_actions %} usando a ferramenta automatizada e a reescrita manual que você planejou acima.

Você também deverá manter artefatos de compilação antigos de seu sistema existente, talvez escrevendo um roteiro para arquivar os artefatos.

## Desativando sistemas existentes

Depois que a migração for concluída, você poderá pensar em desativar o seu sistema existente.

Você deverá executar os dois sistemas lado a lado por um período de tempo, enquanto você verifica que sua configuração de {% data variables.product.prodname_actions %} é estável, sem nenhuma degradação de experiência para os desenvolvedores.

Por fim, você deverá descomissionar e desligar os sistemas antigos, e garantir que ninguém na sua empresa poderá voltar a ligar os sistemas antigos.
