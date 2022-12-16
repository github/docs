---
title: À propos des journaux système
intro: '{% data variables.product.product_name %} conserve les journaux des erreurs et des messages pour les événements système. Les journaux sont utiles pour identifier les actions et exceptions au niveau de l’utilisateur, de l’application et du système.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: e41702e25c7cc222cefb4eedb4e0322adf3acdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063329'
---
## Journaux système

Par défaut, les journaux système pour {% data variables.product.product_name %} sont remplacés automatiquement toutes les 24 heures et conservés pendant sept jours. Les journaux système sont constitués d’événements de niveau système, des journaux d’application et des données d’événements Git. Comme les fichiers journaux font souvent l’objet d’écritures et qu’ils peuvent être volumineux, il peut être utile d’extraire et d’analyser les entrées de journal pertinentes sur un hôte distinct sur votre instance {% data variables.product.prodname_ghe_server %}.

Vous pouvez transférer les journaux système sur un système tiers ou un serveur pour les conserver plus longtemps. Pour plus d’informations, consultez « [Transfert de journaux](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding) ».

En plus de passer en revue vos journaux système, vous pouvez superviser l’activité de votre entreprise d’autres façons, par exemple en examinant les journaux d’audit, les journaux d’envois (push) et en gérant les webhooks globaux. Pour plus d’informations, consultez « [Supervision de l’activité dans votre entreprise](/admin/monitoring-activity-in-your-enterprise) ».

## Types de journaux

Vous trouverez ci-dessous les principaux journaux utilisés par l’appliance {% data variables.product.product_name %} ainsi que leurs fonctions :

| Path | Description |
|------|-------------|
| `/var/log/github/audit.log` | Événements utilisateur, dépôt et système audités.
| `/var/log/github/unicorn.log` | Trafic d’API et d’interface web.
| `/var/log/github/exceptions.log` | Erreurs de niveau application.
| `/var/log/haproxy.log` | Ensemble du trafic IP atteignant l’appliance.
| `/var/log/hookshot/resqued.log` | Remise et échecs de webhooks.
| `/var/log/github/auth.log` | Demandes d’authentification, que ce soit au moyen de méthodes intégrées, LDAP, CAS ou SAML.
| `/var/log/github/gitauth.log` | Ensemble des demandes d’authentification Git.

Les demandes d’authentification et l’activité Git sont traitées par le service `babeld`.

Plusieurs services {% data variables.product.product_name %}, comme le service `babeld`, sont conteneurisés. Les journaux conteneurisés sont écrits dans `systemd journal` et peuvent être interrogés à tout moment à l’aide de la commande `journalctl`.

## Événements système audités

Toutes les entrées du fichier `audit.log` utilisent et peuvent être filtrées avec le mot clé `github_audit`.

Par exemple, cette entrée indique qu’un nouveau dépôt a été créé.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Cet exemple montre que les commits ont été envoyés (push) à un dépôt.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Bundles de support

Le bundle de support comprend les journaux système et toutes les informations d’audit sont enregistrées dans le fichier `audit.log` dans le répertoire `github-logs`. Pour plus d’informations, consultez « [Fournir des données au support {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support) ».

## Pour aller plus loin

- [Page du manuel Linux pour la commande `journalctl`](http://man7.org/linux/man-pages/man1/journalctl.1.html)
