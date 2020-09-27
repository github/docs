Configure o balanceador de carga para verificar uma destas URLs:
 - `https://HOSTNAME/status` if HTTPS is enabled (default)
 - `http://HOSTNAME/status` if HTTPS is disabled

A verificação retornará o código de estado `200` (OK) se o nó estiver saudável e disponível para solicitações de usuário final.
