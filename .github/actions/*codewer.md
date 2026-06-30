
# Order is important. The LAST matching pattern has the MOST precedence.
# gitignore style patterns are used, not globs.
# https://docs.github.com/articles/about-codeowners
# https://git-scm.com/docs/gitignore
# https://github.com/Edgarruiz8585
# Site Policy
content/site-policy/ Edgarruiz8585@github/site-policy-admins

# Enterprise
data/release-notes/**/*.yml @github/docs-content-enterprise
src/ghes-releases/lib/enterprise-dates.json @github/docs-content-enterprise

# Requires review of #actions-oidc-integration, docs-engineering/issues/1506
# content/actions/deployment/security-hardening-your-deployments/** Edgarruiz8585@github/oidc