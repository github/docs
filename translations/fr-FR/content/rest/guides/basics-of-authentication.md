---
title: Principes de base de l’authentification
intro: Découvrez les différentes façons de s’authentifier avec quelques exemples.
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
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147887317'
---
Dans cette section, nous allons nous concentrer sur les principes de base de l’authentification. Plus précisément, nous allons créer un serveur Ruby (à l’aide de [Sinatra][Sinatra]) qui implémente le [flux web][webflow] d’une application de différentes manières.

{% tip %}

Vous pouvez télécharger le code source complet de ce projet [à partir du référentiel platform-samples](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

## Inscription de votre application

Pour commencer, vous devez [inscrire votre application][new oauth app]. Chaque application OAuth inscrite se voit attribuer un ID client et à une clé secrète client uniques.
La clé secrète client ne doit pas être partagée. Cela inclut la vérification de la chaîne dans votre référentiel.

Vous pouvez remplir toutes les informations comme vous le souhaitez, à l’exception de **l’URL de rappel d’autorisation**. C’est l’élément le plus important pour configurer votre application. Il s’agit de l’URL de rappel vers laquelle {% data variables.product.product_name %} renvoie l’utilisateur après une authentification réussie.

Étant donné que nous exécutons un serveur Sinatra standard, l’emplacement de l’instance locale est défini sur `http://127.0.0.1:4567`. Remplissons l’URL de rappel comme suit : `http://127.0.0.1:4567/callback`.

## Accepter l’autorisation utilisateur

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Maintenant, commençons à remplir notre serveur simple. Créez un fichier appelé _server.rb_ et collez-y ce qui suit :

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

Votre ID client et vos clés secrètes client proviennent [de la page de configuration de votre application][app settings].{% ifversion fpt or ghec %} Vous ne devez **jamais, _jamais_** stocker ces valeurs dans {% data variables.product.product_name %}, ou tout autre emplacement public.{% endif %} Nous vous recommandons de les stocker en tant que [variables d’environnement][about env vars], ce que nous avons fait ici.

Ensuite, dans _views/index.erb_, collez ce contenu :

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

(Si vous n’êtes pas familiarisé avec le fonctionnement de Sinatra, nous vous recommandons de [lire le guide Sinatra][Sinatra guide].)

Notez également que l’URL utilise le paramètre de requête `scope` pour définir les [étendues][oauth scopes] demandées par l’application. Pour notre application, nous demandons l’étendue `user:email` pour lire les adresses e-mail privées.

Dans votre navigateur, accédez à `http://127.0.0.1:4567`. Après avoir cliqué sur le lien, vous devez être redirigé vers {% data variables.product.product_name %} et accéder à une boîte de dialogue se présentant comme suit : ![Invite OAuth GitHub](/assets/images/oauth_prompt.png)

Si vous faites confiance à cette application, cliquez sur **Autoriser l’application**. Wuh-oh ! Sinatra renvoie une erreur `404`. Quelle en est la raison ?

Vous vous souvenez du moment où nous avons spécifié une URL de rappel sur `callback` ? Nous n’avons pas fourni d’itinéraire pour celle-ci et dès lors, {% data variables.product.product_name %} ne sait pas où diriger l’utilisateur après qu'il ait autorisé l'application. Nous allons à présent y remédier.

### Mise à disposition d’un rappel

Dans _server.rb_, ajoutez un itinéraire pour spécifier ce que le rappel doit faire :

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

Après une authentification d’application réussie, {% data variables.product.product_name %} fournit une valeur `code` temporaire.
Vous en aurez besoin pour renvoyer, `POST`, ce code à {% data variables.product.product_name %} en échange d’un `access_token`.
Pour simplifier nos requêtes GET et POST HTTP, nous utilisons le [client REST][REST Client].
Notez que vous n’accéderez probablement jamais à l’API via REST. Pour une application plus sérieuse, vous devrez probablement utiliser [une bibliothèque écrite dans la langue de votre choix][libraries].

### Vérification des étendues octroyées

Les utilisateurs peuvent modifier les étendues que vous avez demandées en modifiant directement l’URL. Cela peut octroyer à votre application moins d'accès que ce que vous aviez demandé à l'origine. Avant d’effectuer des requêtes avec le jeton, vérifiez les étendues octroyées pour le jeton par l’utilisateur. Pour plus d’informations sur les étendues demandées et octroyées, consultez « [Étendues des applications OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes) ».

Les étendues octroyées sont retournées dans le cadre de la réponse d’échange de jeton.

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

Dans notre application, nous utilisons `scopes.include?` pour vérifier si l’étendue `user:email` requise pour extraire les adresses e-mail privées de l’utilisateur authentifié nous a été octroyée. Si l'application avait demandé d'autres étendues, nous les aurions également vérifiées.

En outre, étant donné qu’il existe une relation hiérarchique entre les étendues, vous devez vérifier que vous avez reçu le niveau le plus bas des étendues requises. Par exemple, si l’application avait demandé l’étendue `user`, seule l’étendue`user:email` aurait pu lui être octroyée. Dans ce cas, l’application n'aurait pas obtenu ce qu'elle demandait, mais les étendues octroyées auraient quand même été suffisantes.

La vérification des étendues avant d’effectuer des requêtes ne suffit pas, car il est possible que les utilisateurs modifient ces étendues entre cette vérification et la requête réelle.
Dans une telle situation, les appels d’API censés aboutir peuvent échouer avec un état `404` ou `401`, ou retourner un autre sous-ensemble d’informations.

Pour vous aider à gérer ces situations, toutes les réponses d’API correspondant aux requêtes effectuées avec des jetons valides comportent également un [en-tête `X-OAuth-Scopes`][oauth scopes].
Cet en-tête contient la liste des étendues du jeton utilisé pour effectuer la requête. De plus, l’API Applications OAuth fournit un point de terminaison pour {% ifversion fpt or ghes or ghec %} [vérifier la validité d’un jeton](/rest/reference/apps#check-a-token){% else %}[vérifier la validité d’un jeton](/rest/reference/apps#check-an-authorization){% endif %}.
Utilisez ces informations pour détecter les modifications apportées aux étendues de jeton et informer vos utilisateurs des modifications apportées aux fonctionnalités d’application disponibles.

### Effectuer des requêtes authentifiées

Enfin, ce jeton d’accès vous permet d’effectuer des requêtes authentifiées en tant qu’utilisateur connecté :

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

Nous pouvons faire ce que nous voulons avec nos résultats. Dans ce cas, nous allons les placer directement dans _basic.erb_ :

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

## Implémentation d’une authentification « persistante »

Il ne serait pas pratique de demander aux utilisateurs de se connecter à l’application chaque fois qu’ils ont besoin d’accéder à la page web. Par exemple, essayez d’accéder directement à `http://127.0.0.1:4567/basic`. Vous obtenez une erreur.

Et si nous contournions l’ensemble du processus « cliquer ici » pour nous _souvenir_ que, tant que l’utilisateur est connecté à {% data variables.product.product_name %}, il doit être en mesure d’accéder à cette application ? Eh bien, _il s’agit précisément de ce que nous allons faire_.

Notre petit serveur ci-dessus est plutôt simple. Afin d’intégrer une authentification intelligente, nous allons passer à l'utilisation de sessions pour stocker les jetons.
Il en résulte une authentification transparente pour l’utilisateur.

En outre, étant donné que nous conservons les étendues au sein de la session, nous devons gérer les cas où l’utilisateur met à jour les étendues après leur vérification, ou révoque le jeton. Pour ce faire, nous allons utiliser un bloc `rescue` et vérifier que le premier appel d’API a réussi, ce qui permet de vérifier que le jeton est toujours valide. Après cela, nous allons vérifier l’en-tête de réponse `X-OAuth-Scopes` pour vérifier que l’utilisateur n’a pas révoqué l’étendue `user:email`.

Créez un fichier appelé _advanced_server.rb_, puis collez-y ces lignes :

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

Le code doit globalement vous sembler familier. Par exemple, nous utilisons toujours `RestClient.get` pour appeler l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} et transmettons nos résultats pour qu’ils s’affichent dans un modèle ERB (appelé cette fois `advanced.erb`).

De plus, nous disposons désormais de la méthode `authenticated?` qui vérifie si l’utilisateur est déjà authentifié. Si ce n’est pas le cas, la méthode `authenticate!` est appelée. Elle effectue le flux OAuth et met à jour la session avec le jeton et les étendues octroyés.

Ensuite, créez un fichier dans les _vues_ appelé _advanced.erb_ et collez-y ce balisage :

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

À partir de la ligne de commande, appelez `ruby advanced_server.rb`, qui démarre votre serveur sur le port `4567`, le même port que celui utilisé lorsque nous avions une application Sinatra simple.
Lorsque vous accédez à `http://127.0.0.1:4567`, l’application appelle `authenticate!` qui vous redirige vers `/callback`. `/callback` nous renvoie à `/`, et comme nous avons été authentifiés, affiche _avancé.erb_.

Nous pourrions simplifier ce routage en remplaçant simplement notre URL de rappel dans {% data variables.product.product_name %} par `/`. Mais _server.rb_ et _advanced.rb_ s’appuyant sur la même URL de rappel, il nous faut en faire un peu plus pour que cela fonctionne.

De plus, si nous n’avions pas autorisé cette application à accéder à nos données {% data variables.product.product_name %}, nous aurions vu apparaître la même boîte de dialogue de confirmation que précédemment et nous aurions été avertis.

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
