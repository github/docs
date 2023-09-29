declare module '*.scss' {
  const content: Record<string, string>
  export default content
}"Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"

declare module 'highlightjs-curl'
