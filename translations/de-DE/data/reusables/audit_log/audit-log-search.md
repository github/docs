Das Protokoll enthält die folgenden Informationen zu jeder Aktion:

* an welchem Repository eine Aktion durchgeführt wurde,
* der Benutzer, der die Aktion durchgeführt hat
* die Aktion, die durchgeführt wurde,
* in welchem Land die Aktion durchgeführt wurde,
* Datum und Uhrzeit der Aktion.

Beachte, dass Du nicht mit Text nach Einträgen suchen kannst. Du kannst jedoch Suchabfragen mit den verschiedensten Filtern erstellen. Viele Operatoren, die für die Abfrage des Log verwendet werden - wie z.B. `-`, `>` oder `<` - haben das gleiche Format wie die Suche über {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Suchen nach {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github).“

#### Vorgangsbasierte Suche

Verwende den Qualifizierer `operation` (Vorgang) um Aktionen für spezifische Typen von Vorgängen zu beschränken. Ein Beispiel:

  * `operation:access` (Vorgangszugriffe) findet alle Ereignisse, bei denen auf eine Ressource zugegriffen wurde.
  * `operation:authentication` (Vorgangsauthentifizierung) findet alle Ereignisse, bei denen ein Authentifizierungsereignis durchgeführt wurde.
  * `operation:create` (Vorgangserstellung) findet alle Ereignisse, bei denen eine Ressource erstellt wurde.
  * `operation:modify` (Vorgangsveränderung) findet alle Ereignisse, bei denen eine vorhandene Ressource verändert wurde.
  * `operation:remove` (Vorgangsentfernung) findet alle Ereignisse, bei denen eine vorhandene Ressource entfernt wurde.
  * `operation:restore` (Vorgangswiederherstellung) findet alle Ereignisse, bei denen eine vorhandene Ressource wiederhergestellt wurde.
  * `operation:transfer` (Vorgangsübertragung) findet alle Ereignisse, bei denen eine vorhandene Ressource übertragen wurde.

#### Suche basierend auf Repository

Verwende den Qualifizierer `repo` (Repository) um Aktionen auf ein spezifisches Repository einzuschränken. Ein Beispiel:

  * `repo:my-org/our-repo` findet alle Ereignisse, die im Repository `our-repo` der Organisation `my-org` aufgetreten sind.
  * `repo:my-org/our-repo repo:my-org/another-repo` findet alle Ereignisse, die in den Repositorys `our-repo` und `another-repo` der Organisation `my-org` aufgetreten sind.
  * `-repo:my-org/not-this-repo` schließt alle Ereignisse aus, die im Repository `not-this-repo` der Organisation `my-org` aufgetreten sind.

Beachte, dass Du den Kontonamen im Qualifizierer `repo` einfügen musst; nur nach `repo:our-repo` zu suchen, wird nicht funktionieren.

#### Suche nach Benutzer

Der Qualifizierer `actor` (Akteur) kann Ereignisse einschränken basierend darauf, wer die Aktion durchgeführt hat. Ein Beispiel:

  * `actor:octocat` findet alle Ereignisse in Verbindung mit Aktionen, die von `octocat` ausgeführt wurden.
  * `actor:octocat actor:hubot` findet alle Ereignisse in Verbindung mit Aktionen, die von `octocat` oder `hubot` ausgeführt wurden.
  * `-actor:hubot` schließt alle Ereignisse in Verbindung mit Aktionen aus, die von `hubot` ausgeführt wurden.

Beachten Sie, dass Sie nur den in {% data variables.product.product_name %} verwendeten Benutzernamen, nicht den wirklichen Namen eines Benutzers, verwenden können.
