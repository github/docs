---
title: Accessing the administrative shell (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh
  - /admin/administering-your-instance/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
---
## About administrative shell access

If you have SSH access to the administrative shell, you can run {% data variables.product.prodname_ghe_server %}'s command line utilities. SSH access is also useful for troubleshooting, running backups, and configuring replication. Administrative SSH access is managed separately from Git SSH access and is accessible only via port 122.

## Enabling access to the administrative shell via SSH

To enable administrative SSH access, you must add your SSH public key to your instance's list of authorized keys. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "SSH access", paste your key into the "Add new SSH key" text box, then click **Add key**. The change takes effect immediately, so you do not need to click **Save settings**.

## Connecting to the administrative shell over SSH

After you've added your SSH key to the list, connect to the instance over SSH as the `admin` user on port 122.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### Troubleshooting SSH connection problems

If you encounter the `Permission denied (publickey)` error when you try to connect to {% data variables.location.product_location %} via SSH, confirm that you are connecting over port 122. You may need to explicitly specify which private SSH key to use.

To specify a private SSH key using the command line, run `ssh` with the `-i` argument.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@HOSTNAME
```

You can also specify a private SSH key using the SSH configuration file (`~/.ssh/config`).

```shell
Host HOSTNAME
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## Accessing the administrative shell using the local console

In an emergency situation, for example if SSH is unavailable, you can access the administrative shell locally. Sign in as the `admin` user and use the password established during initial setup of {% data variables.product.prodname_ghe_server %}.

## Access limitations for the administrative shell

Administrative shell access is permitted for troubleshooting and performing documented operations procedures only. Modifying system and application files, running programs, or installing unsupported software packages may void your support contract. Please visit {% data variables.contact.contact_ent_support %} if you have a question about the activities allowed by your support contract.
