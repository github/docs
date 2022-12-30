---
title: Сведения о системных журналах
intro: '{% data variables.product.product_name %} хранит журналы ошибок и сообщений для системных событий. Журналы полезны для выявления действий и исключений на уровне пользователя, приложения и системы.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063333'
---
## Системные журналы

По умолчанию ротация системных журналов для {% data variables.product.product_name %} автоматически выполняется каждые 24 часа, журналы сохраняются в течение семи дней. Системные журналы содержат события системного уровня, журналы приложений и данные событий Git. Так как файлы журналов часто открываются для записи и могут иметь большой размер, полезно извлечь и проанализировать соответствующие записи журнала на узле, отдельном от вашего экземпляра {% data variables.product.prodname_ghe_server %}.

Системные журналы можно пересылать в стороннюю систему или на сервер для более длительного хранения. Дополнительные сведения см. в разделе «[Пересылка журналов](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)».

Помимо просмотра системных журналов, можно выполнять мониторинг действия в организации другими способами, например, просматривать журналы аудита, отправлять журналы и управлять глобальными веб-перехватчиками. Дополнительные сведения см. в разделе [Мониторинг действий в организации](/admin/monitoring-activity-in-your-enterprise).

## Типы журналов

Ниже перечислены основные журналы, используемые устройством {% data variables.product.product_name %} и их функциями:

| Путь | Описание |
|------|-------------|
| `/var/log/github/audit.log` | События пользователя, репозитория и системных событий с аудитом.
| `/var/log/github/unicorn.log` | Трафик API и веб-интерфейса.
| `/var/log/github/exceptions.log` | Ошибки уровня приложений.
| `/var/log/haproxy.log` | Весь IP-трафик, достигающий устройства.
| `/var/log/hookshot/resqued.log` | Доставка и сбои веб-перехватчика.
| `/var/log/github/auth.log` | Запросы проверки подлинности, например, с помощью встроенных методов LDAP, CAS или SAML.
| `/var/log/github/gitauth.log` | Все запросы проверки подлинности Git.

Действия Git и запросы проверки подлинности обрабатываются службой `babeld`.

Несколько служб {% data variables.product.product_name %}, таких как служба `babeld` работают в контейнере. Контейнерные журналы записываются в `systemd journal`, и могут запрашиваться в любое время с помощью команды `journalctl`.

## События системы с аудитом

Все записи в файле `audit.log` используются и могут фильтроваться с помощью ключевого слова `github_audit`.

Например, эта запись показывает, что был создан новый репозиторий.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

В этом примере показано, что фиксации были отправлены в репозиторий.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Пакеты поддержки

Пакет поддержки содержит системные журналы, а вся информация об аудите записывается в файл `audit.log` в каталоге `github-logs`. Дополнительные сведения см. в статье "[Предоставление данных в службу поддержки {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support)".

## Дополнительные материалы

- [Страница руководства Linux ](http://man7.org/linux/man-pages/man1/journalctl.1.html) по команде `journalctl`
