---
title: Grundlagen der Authentifizierung
intro: Hier erfährst du anhand einiger Beispiele mehr über die verschiedenen Möglichkeiten der Authentifizierung.
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 3e2796e83047f4e8bb6b7e9a503eee6dac63f019
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131386'
---
In diesem Abschnitt werden die Grundlagen der Authentifizierung beschrieben. Dabei wird (mithilfe von [Sinatra][Sinatra]) ein Ruby-Server erstellt, der den [Webflow][webflow] einer Anwendung auf unterschiedliche Weise implementiert.

{% tip %}

Du kannst den vollständigen Quellcode für dieses Projekt [aus dem Repository mit den Plattformbeispielen](https://github.com/github/platform-samples/tree/master/api/) herunterladen.

{% endtip %}

## Registrieren deiner App

Zunächst musst du [Deine Anwendung registrieren][new oauth app]. Jeder registrierten OAuth-Anwendung wird eine eindeutige Client-ID und ein geheimer Clientschlüssel zugewiesen.
Der geheime Clientschlüssel darf nicht mit anderen geteilt werden! Dies gilt auch für das Einchecken der Zeichenfolge in deinem Repository.

Dabei kannst du mit Ausnahme der **Rückruf-URL für die Autorisierung** sämtliche Informationen eintragen. Dies ist mit Abstand das wichtigste Element bei der Einrichtung deiner Anwendung. {% data variables.product.product_name %} leitet Benutzer*innen nach der erfolgreichen Authentifizierung an diese Rückruf-URL.

Da wir einen regulären Sinatra-Server ausführen, wird der Speicherort der lokalen Instanz auf `http://127.0.0.1:4567` festgelegt. Hier wird `http://127.0.0.1:4567/callback` als Rückruf-URL angegeben.

## Akzeptieren der Benutzerautorisierung

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Im nächsten Schritt werden die Serverinformationen angegeben. Erstelle eine Datei _server.rb_, und füge die folgenden Angaben in diese Datei ein:

``` ruby
require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end
```

Deine Client-ID und die geheimen Clientschlüssel stammen von der [Konfigurationsseite deiner Anwendung][app settings].{% ifversion fpt or ghec %} Du solltest diese Werte **niemals** auf {% data variables.product.product_name %} oder an einem anderen öffentlichen Speicherort speichern.{% endif %} Stattdessen sollten diese Werte wie hier gezeigt als [Umgebungsvariablen][about env vars] gespeichert werden.

Füge nun in _views/index.erb_ diesen Inhalt ein:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>
      Well, hello there!
    </p>
    <p>
      We're going to now talk to the GitHub API. Ready?
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Wenn du nicht mit der Funktionsweise von Sinatra vertraut bist, solltest du den [Sinatra-Leitfaden][Sinatra guide] lesen.)

Beachte außerdem, dass die URL den `scope`-Abfrageparameter verwendet, um die von der Anwendung angeforderten [Bereiche][oauth scopes] zu definieren. Für diese Anwendung wird der Bereich `user:email` zum Lesen privater E-Mail-Adressen angefordert.

Navigiere in deinem Browser zu `http://127.0.0.1:4567`. Wenn du auf den Link klickst, solltest du zu {% data variables.product.product_name %} geleitet werden. Dort sollte ein Dialogfeld angezeigt werden, das dem folgenden ähnelt: ![GitHub-OAuth-Eingabeaufforderung](/assets/images/oauth_prompt.png)

Wenn du dir selbst vertraust, klicke auf **App autorisieren**. Oje! Sinatra gibt einen `404`-Fehler aus. Was ist los?

Erinnerst du dich, dass wir als Rückruf-URL `callback` angegeben haben? Dabei haben wir keine entsprechende Route festgelegt. {% data variables.product.product_name %} weiß also nicht, wohin Benutzer*innen geleitet werden sollen, nachdem sie die App autorisiert haben. Im Folgenden wird dieses Problem behoben.

### Angeben eines Rückrufwerts

Füge in _server.rb_ eine Route für den Rückruf hinzu:

``` ruby
get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']
end
```

Nach einer erfolgreichen App-Authentifizierung stellt {% data variables.product.product_name %} einen temporären `code`-Wert bereit.
Dieser Code muss per `POST` an {% data variables.product.product_name %} zurückgegeben werden und gegen ein Zugriffstoken (`access_token`) ausgetauscht werden.
Zur Vereinfachung dieser GET- und POST-HTTP-Anforderungen verwenden wir [rest-client][REST Client].
Beachte, dass du wahrscheinlich niemals über REST auf die API zugreifen wirst. In der Praxis solltest du vermutlich eher [eine Bibliothek in deiner bevorzugten Sprache][libraries] verwenden.

### Überprüfen der gewährten Bereiche

Benutzer*innen können die angeforderten Bereiche bearbeiten, indem sie die URL direkt ändern. Dadurch kann deine Anwendung einen geringeren Umfang an Zugriffsberechtigungen erhalten, als du ursprünglich angefordert hattest. Bevor du Anforderungen mit dem Token erstellst, solltest du überprüfen, welche Bereiche der oder dem Benutzer*in für das Token gewährt wurden. Weitere Informationen zu angeforderten und gewährten Bereichen findest du unter [Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes) („Bereiche für OAuth-Apps“).

Die gewährten Bereiche werden beim Austausch eines Tokens als Teil der Antwort zurückgegeben.

``` ruby
get '/callback' do
  # ...
  # Get the access_token using the code sample above
  # ...

  # check if we were granted user:email scope
  scopes = JSON.parse(result)['scope'].split(',')
  has_user_email_scope = scopes.include? 'user:email'
end
```

In unserer Anwendung wird mithilfe von `scopes.include?` überprüft, ob der Bereich `user:email` gewährt wurde, der zum Abrufen der privaten E-Mail-Adressen der authentifizierten Benutzer*innen erforderlich ist. Wenn die Anwendung weitere Bereiche angefordert hätte, hätten wir auch diese Bereiche überprüft.

Da zudem eine hierarchische Beziehung zwischen Bereichen besteht, solltest du überprüfen, ob dir die niedrigste Stufe der erforderlichen Bereiche gewährt wurde. Wenn die Anwendung z. B. den Bereich `user` angefordert hat, wurde ihr möglicherweise nur der Bereich `user:email` zugewiesen. In diesem Fall wäre der Anwendung zwar nicht der angeforderte Bereich gewährt worden, der gewährte Bereich wäre jedoch trotzdem ausreichend.

Da Benutzer*innen die Bereiche zwischen deiner Überprüfung und der eigentlichen Anforderung noch ändern können, ist es nicht ausreichend, die Bereiche lediglich vor dem Ausführen von Anforderungen zu überprüfen.
Denn bei einer solchen Änderung tritt bei API-Aufrufen, bei denen du eine erfolgreiche Ausführung erwartet hast, möglicherweise ein Fehler mit dem Status `404` bzw. `401` auf, oder du erhältst eine andere Teilmenge an Informationen als erwartet.

Damit diese Situation vermieden wird, enthalten alle API-Antworten auf Anforderungen mit gültigen Token auch einen [`X-OAuth-Scopes`-Header][oauth scopes].
In diesem Header sind die Bereiche des Tokens aufgeführt, das für die Anforderung verwendet wurde. Darüber hinaus bietet die OAuth-Anwendungs-API einen Endpunkt, mit dem {% ifversion fpt or ghes or ghec %} [ein Token auf Gültigkeit](/rest/reference/apps#check-a-token){% else %}[ein Token auf Gültigkeit](/rest/reference/apps#check-an-authorization) überprüfen kann{% endif %}.
Verwende diese Informationen, um Änderungen an Tokenbereichen zu ermitteln, und informiere deine Benutzer*innen über Änderungen bei den verfügbaren Anwendungsfunktionen.

### Ausführen von authentifizierten Anforderungen

Schließlich kannst du mit diesem Zugriffstoken authentifizierte Anforderungen als angemeldete*r Benutzer*in vornehmen:

``` ruby
# fetch user information
auth_result = JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user',
                                        {:params => {:access_token => access_token}}))

# if the user authorized it, fetch private emails
if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                              {:params => {:access_token => access_token}}))
end

erb :basic, :locals => auth_result
```

Mit den Ergebnissen kannst du beliebige Schritte ausführen. In diesem Fall setzen wir unsere Arbeit direkt mit _basic.erb_ fort:

``` erb
<p>Hello, <%= login %>!</p>
<p>
  <% if !email.nil? && !email.empty? %> It looks like your public email address is <%= email %>.
  <% else %> It looks like you don't have a public email. That's cool.
  <% end %>
</p>
<p>
  <% if defined? private_emails %>
  With your permission, we were also able to dig up your private email addresses:
  <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
  <% else %>
  Also, you're a bit secretive about your private email addresses.
  <% end %>
</p>
```

## Implementieren einer „persistenten“ Authentifizierung

Es wäre sehr ungünstig, wenn Benutzer*innen sich jedes Mal bei der App anmelden müssten, wenn sie auf die Webseite zugreifen möchten. Versuche z. B., direkt zu `http://127.0.0.1:4567/basic` zu navigieren. Du erhältst eine Fehlermeldung.

Was wäre, wenn der gesamte „Hier klicken“-Vorgang umgangen werden könnte? Und stattdessen einfach festgelegt __ wird, dass Benutzer*innen auf die Anwendung zugreifen können sollen, solange sie bei {% data variables.product.product_name %} angemeldet sind? _Genau das werden wir jetzt umsetzen_.

Unser kleiner Server oben ist ein ziemlich einfaches Beispiel. Für einen intelligenten Authentifizierungsprozess verwenden wir nun Sitzungen, um Token zu speichern.
Dadurch wird die Authentifizierung für Benutzer*innen transparent.

Da die Bereiche innerhalb der Sitzung beibehalten werden, muss zudem eine Vorgehensweise für Situationen definiert werden, in denen Benutzer*innen die Bereiche nach der Überprüfung aktualisieren oder das Token widerrufen. Dazu wird ein `rescue`-Block verwendet, und es wird überprüft, ob der erste API-Aufruf erfolgreich ist. Dadurch wird sichergestellt, dass das Token noch gültig ist. Danach wird anhand des `X-OAuth-Scopes`-Antwortheaders überprüft, ob der `user:email`-Bereich durch die oder den Benutzer*in widerrufen wurde.

Erstelle eine Datei _advanced_server.rb_, und füge diese Zeilen in der Datei ein:

``` ruby
require 'sinatra'
require 'rest_client'
require 'json'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
# if ENV['GITHUB_CLIENT_ID'] && ENV['GITHUB_CLIENT_SECRET']
#  CLIENT_ID        = ENV['GITHUB_CLIENT_ID']
#  CLIENT_SECRET    = ENV['GITHUB_CLIENT_SECRET']
# end

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

use Rack::Session::Pool, :cookie_only => false

def authenticated?
  session[:access_token]
end

def authenticate!
  erb :index, :locals => {:client_id => CLIENT_ID}
end

get '/' do
  if !authenticated?
    authenticate!
  else
    access_token = session[:access_token]
    scopes = []

    begin
      auth_result = RestClient.get('{% data variables.product.api_url_code %}/user',
                                   {:params => {:access_token => access_token},
                                    :accept => :json})
    rescue => e
      # request didn't succeed because the token was revoked so we
      # invalidate the token stored in the session and render the
      # index page so that the user can start the OAuth flow again

      session[:access_token] = nil
      return authenticate!
    end

    # the request succeeded, so we check the list of current scopes
    if auth_result.headers.include? :x_oauth_scopes
      scopes = auth_result.headers[:x_oauth_scopes].split(', ')
    end

    auth_result = JSON.parse(auth_result)

    if scopes.include? 'user:email'
      auth_result['private_emails'] =
        JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                       {:params => {:access_token => access_token},
                        :accept => :json}))
    end

    erb :advanced, :locals => auth_result
  end
end

get '/callback' do
  session_code = request.env['rack.request.query_hash']['code']

  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  session[:access_token] = JSON.parse(result)['access_token']

  redirect '/'
end
```

Der Code sollte Ihnen im Wesentlichen vertraut erscheinen. Es wird z. B. weiterhin `RestClient.get` für den Aufruf der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API verwendet, und die Ergebnisse werden wie zuvor für die Anzeige in einer ERB-Vorlage (in diesem Fall `advanced.erb`) übergeben.

Außerdem wird nun mithilfe der `authenticated?`-Methode überprüft, ob die oder der Benutzer*in bereits authentifiziert ist. Falls nicht, wird die Methode `authenticate!` aufgerufen, mit der der OAuth-Flow ausgeführt und die Sitzung mit den gewährten Bereichen und Token aktualisiert wird.

Als Nächstes erstellst du in _views_ die Datei _advanced.erb_ und fügst dieses Markup ein:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>Well, well, well, <%= login %>!</p>
    <p>
      <% if !email.empty? %> It looks like your public email address is <%= email %>.
      <% else %> It looks like you don't have a public email. That's cool.
      <% end %>
    </p>
    <p>
      <% if defined? private_emails %>
      With your permission, we were also able to dig up your private email addresses:
      <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
      <% else %>
      Also, you're a bit secretive about your private email addresses.
      <% end %>
    </p>
  </body>
</html>
```

Rufe an der Befehlszeile `ruby advanced_server.rb` auf, um deinen Server an Port `4567` zu starten. Dies ist derselbe Port, den wir bereits bei der einfachen Sinatra-App verwendet haben.
Wenn du zu `http://127.0.0.1:4567` navigierst, ruft die App `authenticate!` auf, um dich zu `/callback` umzuleiten. `/callback` leitet dich dann erneut zu `/` und zeigt _advanced.erb_ an, da du bereits authentifiziert wurdest.

Dieses Roundtriprouting könnte erheblich vereinfacht werden, indem die Rückruf-URL in {% data variables.product.product_name %} ganz einfach in `/` geändert wird. Da _server.rb_ und _advanced.rb_ dieselbe Rückruf-URL verwenden, sind diese zusätzlichen Schritte jedoch erforderlich.

Wäre diese Anwendung zudem niemals für den Zugriff auf die {% data variables.product.product_name %}-Daten autorisiert worden, wäre als Warnhinweis dasselbe Bestätigungsdialogfeld angezeigt worden wie zuvor.

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/basics-of-authentication
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers
