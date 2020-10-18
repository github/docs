---
title: Mit Zwei-Faktor-Authentifizierung auf GitHub zugreifen
intro: 'With 2FA enabled, you''ll be asked to provide your 2FA authentication code, as well as your password, when you sign in to {% data variables.product.product_name %}.'
redirect_from:
  - /articles/providing-your-2fa-security-code/
  - /articles/providing-your-2fa-authentication-code/
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc/
  - /articles/accessing-github-using-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

With two-factor authentication enabled, you'll need to provide an authentication code when accessing {% data variables.product.product_name %} through your browser. If you access {% data variables.product.product_name %} using other methods, such as the API or the command line, you'll need to use an alternative form of authentication. For more information, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)."

### Einen 2FA-Code bei der Anmeldung in die Website bereitstellen

After you sign in to {% data variables.product.product_name %} using your password, you'll be prompted to provide an authentication code from {% if currentVersion == "free-pro-team@latest" %}a text message or{% endif %} your TOTP app.

Nachdem Sie sich mit Ihrem Passwort bei {% data variables.product.product_name %} angemeldet haben, werden Sie erst dann wieder aufgefordert, Ihren Authentifizierungscode für die Zwei-Faktor-Authentifizierung anzugeben, wenn Sie sich abgemeldet haben, ein neues Gerät verwenden oder Ihre Sitzung abläuft.

#### Einen Code über eine TOTP-Anwendung generieren

Wenn Sie sich dafür entschieden haben, die Zwei-Faktor-Authentifizierung mit einer TOTP-Anwendung auf Ihrem Smartphone einzurichten, können Sie jederzeit einen Authentifizierungscode für {% data variables.product.product_name %} generieren. In den meisten Fällen wird beim bloßen Starten der Anwendung ein neuer Code generiert. Spezifische Anweisungen findest Du in der Dokumentation Deiner Anwendung.

Wenn Du die mobile Anwendung nach der Konfiguration der Zwei-Faktor-Authentifizierung löschst, musst Du Deinen Wiederherstellungscode angeben, um Zugriff auf Dein Konto zu erhalten. Weitere Informationen findest Du unter „[Dein Konto beim Verlust der Anmeldeinformationen für die Zwei-Faktor-Authentifizierung wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials),“

{% if currentVersion == "free-pro-team@latest" %}

#### Eine SMS empfangen

Wenn Sie die Zwei-Faktor-Authentifizierung per SMS einrichten, sendet Ihnen {% data variables.product.product_name %} eine SMS mit Ihrem Authentifizierungscode.

{% endif %}

### Zwei-Faktor-Authentifizierung mit der Befehlszeile verwenden

Nachdem Sie die Zwei-Faktor-Authentifizierung aktiviert haben, müssen Sie beim Zugriff auf {% data variables.product.product_name %} in der Befehlszeile anstelle Ihres Passworts ein persönliches Zugriffstoken oder einen SSH-Schlüssel verwenden.

#### In der Befehlszeile mit HTTPS authentifizieren

Nachdem Sie die Zwei-Faktor-Authentifizierung aktiviert haben, müssen Sie bei der Authentifizierung bei {% data variables.product.product_name %} in der Befehlszeile über HTTPS-URLs ein persönliches Zugriffstoken erstellen, das Sie als Passwort verwenden können.

Wenn Du in der Befehlszeile nach einem Benutzernamen und einem Passwort gefragt wirst, verwende Deinen {% data variables.product.product_name %}-Benutzernamen und Dein persönliches Zugriffstoken. In der Eingabeaufforderung wird nicht angegeben, dass Sie Ihr persönliches Zugriffstoken eingeben sollen, wenn Sie nach Ihrem Passwort gefragt werden.

Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

#### In der Befehlszeile mit SSH authentifizieren

Die Aktivierung der Zwei-Faktor-Authentifizierung ändert nichts daran, wie Sie sich in der Befehlszeile über SSH-URLs bei {% data variables.product.product_name %} authentifizieren. Weitere Informationen zum Einrichten und Verwenden eines SSH-Schlüssels finden Sie unter „[Verbindung zu {% data variables.product.prodname_dotcom %} mit SSH herstellen](/articles/connecting-to-github-with-ssh/)“.

### Zwei-Faktor-Authentifizierung für den Zugriff auf ein Repository mittels Subversion verwenden

Wenn Sie mittels Subversion auf ein Repository zugreifen, müssen Sie anstelle der Eingabe Ihres Passworts ein persönliches Zugriffstoken angeben. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

### Problemlösungen

Wenn Sie den Zugriff auf Ihre Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlieren, können Sie Ihre Wiederherstellungscodes oder eine andere Wiederherstellungsmethode (sofern Sie eine eingerichtet haben) verwenden, um wieder Zugriff auf Ihr Konto zu erhalten. Weitere Informationen findest Du unter „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).“

Wenn Ihre Authentifizierung mehrmals fehlschlägt, sollten Sie möglicherweise die Uhrzeit auf Ihrem Smartphones mit Ihrem Mobilfunkanbieter synchronisieren. Häufig wird dabei die Option zum automatischen Einstellen der Uhrzeit auf Ihrem Smartphone aktiviert, anstatt Ihre eigene Zeitzone anzugeben.

### Weiterführende Informationen

- „[Informationen zur Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication)“
- „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication)“
- „[Wiederherstellungsmethoden für die Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication-recovery-methods)“
- „[Ihr Konto beim Verlust der Anmeldeinformationen für die Zwei-Faktor-Authentifizierung wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“
