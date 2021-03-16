---
title: 'Fehler: „Key already in use“ (Schlüssel wird bereits verwendet)'
intro: 'Dieser Fehler tritt auf, wenn Du versuchst, [einen Schlüssel hinzuzufügen](/articles/adding-a-new-ssh-key-to-your-github-account), der bereits zu einem anderen Konto oder Repository hinzugefügt wurde.'
redirect_from:
  - /articles/error-key-already-in-use
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Herausfinden, wo der Schlüssel verwendet wurde

Um herauszufinden, wo der Schlüssel bereits verwendet wurde, öffne ein Terminal und gib den Befehl `ssh` ein. Mit dem Flag `-i` gibst Du den Pfad zu dem Schlüssel ein, den Du überprüfen möchtest:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Stellt mit einem bestimmten SSH-Key eine Verbindung mit {% data variables.product.product_location %} her
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Der *username* (Benutzername) in der Antwort ist das {% data variables.product.product_name %}-Konto, an das der Schlüssel derzeit angehängt ist. Wenn die Antwort ähnlich wie „username/repo“ aussieht, wurde der Schlüssel als [*Deployment-Schlüssel*](/guides/managing-deploy-keys#deploy-keys) an ein Repository angehängt.

### Das Problem beheben

Um das Problem zu beheben, entferne den Schüssel zunächst von dem anderen Konto respektive Repository und [füge ihn dann zu Deinem Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

Wenn Du keine Berechtigungen für die Übertragung des Schlüssels hast und keinen Benutzer mit diesen Berechtigungen kontaktieren kannst, entferne das Schlüsselpaar und [erstelle ein komplett neues](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Deployment-Schlüssel

Sobald ein Schlüssel als Deployment-Schlüssel an ein Repository angehängt wurde, kann er nicht für andere Repositorys verwendet werden.  If you're running into this error while setting up deploy keys, see "[Managing deploy keys](/guides/managing-deploy-keys)."
