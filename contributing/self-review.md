curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: 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 and 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" \
--header "X-GitHub-Api-Version: 2025
Note
uids:true confirm
In most cases, you can use Authorization: Bearer or Authorization: token to pass a token. However, if you are passing a JSON web token (JWT), you must use Authorization: Bearer
;
