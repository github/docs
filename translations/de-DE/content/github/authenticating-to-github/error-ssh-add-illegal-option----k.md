---
title: 'Fehler: „ssh-add: illegal option -- K“'
intro: 'Diese Fehlermeldung bedeutet, dass Deine Version von `ssh-add` die „mac OS Keychain"-Integration nicht unterstützt, die das Speichern Deiner Passphrase in der Schlüsselkette ermöglicht.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Die Option `-K` ist die Standardversion von `ssh-add` von Apple, bei der die Passphrase für das Hinzufügen eines SSH-Schlüssels zum SSH-Agenten in Deiner Keychain (Schlüsselkette) gespeichert wird. Wenn Du eine andere Version von `ssh-add` installiert hast, fehlt möglicherweise die Unterstützung von `-K`.

### Das Problem beheben

Um Deinen privaten SSH-Schlüssel zum SSH-Agenten hinzuzufügen, kannst Du den Pfad zur Apple-Version von `ssh-add` angeben:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**Hinweis:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### Weiterführende Informationen

- „[Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)“
- [Linus-Manpage für SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Um die Apple-Manpage für SSH-ADD anzuzeigen, führe in Terminal `man ssh-add` aus
