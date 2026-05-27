diff --git a/node_modules/socks/.claude/settings.local.json b/node_modules/socks/.claude/settings.local.json
deleted file mode 100644
index 8422f2bec7873..0000000000000
--- a/node_modules/socks/.claude/settings.local.json
+++ /dev/null
@@ -1,26 +0,0 @@
-{
-  "permissions": {
-    "allow": [
-      "Bash(npm test:*)",
-      "Bash(npm run lint:*)",
-      "Bash(npm run build:*)",
-      "Bash(find:*)",
-      "Bash(wc:*)",
-      "Bash(git:*)",
-      "Bash(npm run:*)",
-      "Bash(npm install:*)",
-      "Bash(npm uninstall:*)",
-      "Bash(npx eslint:*)",
-      "Bash(gh issue:*)",
-      "Bash(npx vitest:*)",
-      "WebFetch(domain:www.openssh.com)",
-      "Bash(ls:*)",
-      "Bash(cat:*)",
-      "Bash(npm pack:*)",
-      "Bash(npx tsc:*)",
-      "Bash(node:*)",
-      "Bash(npm info:*)",
-      "Bash(cp:*)"
-    ]
-  }
-}