---
title: Acesar o shell administrativo (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access/
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access/
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access/
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Sobre o acesso ao shell administrativo

Se tiver acesso por SSH ao shell administrativo, você poderá executar os utilitários de linha de comando do {% data variables.product.prodname_ghe_server %}. O acesso SSH também é útil para solucionar problemas, fazer backups e configurar a replicação. O acesso a SSH administrativa é gerenciado separadamente do acesso SSH do Git e fica acessível apenas pela porta 122.

### Habilitar o acesso ao shell administrativo por SSH

Para habilitar o acesso a SSH administrativa, você deve adicionar sua chave pública SSH à lista de chaves autorizadas da instância.

{% tip %}

**Dica:** as alterações nas chaves SSH autorizadas entram em vigor de imediato.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. Em "SSH access" (Acesso SSH), cole a chave no campo de texto e clique em **Add key** (Adicionar chave). ![Caixa de texto e botão para adicionar uma chave SSH](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png)
{% data reusables.enterprise_management_console.save-settings %}

### Conectar-se ao shell administrativo por SSH

Depois de adicionar sua chave SSH à lista, conecte-se à instância por SSH como usuário `admin` na porta 122.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

#### Solucionar problemas de conectividade com SSH

Se o erro `Permission denied (publickey)` (Permissão negada [chave pública]) ocorrer quando você tentar se conectar à {% data variables.product.product_location %} via SSH, confirme se a conexão está sendo feita pela porta 122. Talvez seja necessário especificar explicitamente a chave SSH privada em uso.

Para especificar uma chave SSH privada usando a linha de comando, execute `ssh` com o argumento `-i`.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

Você também pode especificar uma chave SSH privada usando o arquivo de configuração SSH (`~/.ssh/config`).

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

### Acesar o shell administrativo usando o console local

Em uma situação de emergência, se o acesso por SSH estiver indisponível, você poderá acessar o shell administrativo localmente. Entre como usuário `admin` usando a senha definida na configuração inicial do {% data variables.product.prodname_ghe_server %}.

### Limitações de acesso ao shell administrativo

O acesso ao shell administrativo é permitido apenas para solucionar problemas e executar procedimentos de operações documentadas. Modificar arquivos de aplicativos e sistemas, executar programas ou instalar pacotes de software não compatíveis pode anular seu contrato de suporte. Entre em contato com o {% data variables.contact.contact_ent_support %} em caso de perguntas sobre as atividades permitidas pelo contrato.
