---
title: Propriedades do Subversion com suporte no GitHub
intro: 'Existem vários fluxos de trabalho e propriedades do Subversion que são semelhantes a funções existentes no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
### Arquivos executáveis (svn:executable)

Nós convertemos propriedades `svn:executable` atualizando o modo de arquivo diretamente antes de adicioná-lo ao repositório Git.

### Tipos MIME (svn:mime-type)

O {% data variables.product.product_name %} monitora internamente as propriedades tipo MIME de arquivos e os commits que as adicionaram.

### Ignorar itens sem controle de versão (svn:ignore)

Se você tiver definido arquivos e diretórios para serem ignorados no Subversion, eles serão monitorados internamente pelo {% data variables.product.product_name %}. Os arquivos ignorados por clientes do Subversion são completamente distintos das entradas em um arquivo *.gitignore*.

### Propriedades sem suporte atualmente

O {% data variables.product.product_name %} não oferece suporte atualmente a `svn:externals`, `svn:global-ignores` ou qualquer propriedade que não esteja listada acima, inclusive propriedades personalizadas.
