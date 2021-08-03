---
title: 'Fehler: „Agent admitted failure to sign“ (Agent gibt Signierfehler zu)'
intro: 'In Ausnahmefällen kann beim Verbinden mit {% data variables.product.product_name %} über SSH unter Linux der Fehler `"Agent admitted failure to sign using the key"` (Agent gibt Signierfehler mittels Schlüssel zu) auftreten. Führe diese Schritte aus, um das Problem zu beheben.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key/
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Wenn Sie auf einem Linux-Computer versuchen, eine SSH-Verbindung mit {% data variables.product.product_location %} herzustellen, wird möglicherweise die folgende Meldung im Terminal angezeigt:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Detailliertere Informationen findest Du in <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>diesem Issue-Bericht</a>.

### Behebung

Du solltest diesen Fehler beheben können, indem Du Deine Schlüssel mit `ssh-add` in Deinen SSH-Agenten lädst:

```shell
# starte den ssh-agent im Hintergrund
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Wenn Dein Schlüssel nicht den Standard-Dateinamen (`/.ssh/id_rsa`) aufweist, musst Du diesen Pfad an `ssh-add` übergeben:

```shell
# starte den ssh-agent im Hintergrund
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
