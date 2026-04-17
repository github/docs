module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Use our internal logger instead of console",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    // flag to ensure we add the logger setup only once per file
    let setupInserted = false;

    // Check if the logger import is already present.
    function needsLoggerImport() {
      return !sourceCode.ast.body.some(
        (node) =>
          node.type === "ImportDeclaration" &&
          node.source.value === "@/observability/logger",
      );
    }

    // Check if a logger variable is already declared.
    // This checks for both direct declarations (const logger = ...) and
    // destructured patterns (const { logger } = ...).
    function needsLoggerDeclaration() {
      return !sourceCode.ast.body.some((node) => {
        if (node.type === "VariableDeclaration") {
          return node.declarations.some((decl) => {
            // Check for direct identifier: const logger = ...
            if (decl.id.type === "Identifier" && decl.id.name === "logger") {
              return true;
            }
            // Check for destructured pattern: const { logger } = ...
            if (decl.id.type === "ObjectPattern") {
              return decl.id.properties.some(
                (prop) =>
                  prop.type === "Property" &&
                  prop.key.type === "Identifier" &&
                  prop.key.name === "logger",
              );
            }
            return false;
          });
        }
        return false;
      });
    }

    // Retrieve the last import statement.
    function getLastImportNode() {
      const imports = sourceCode.ast.body.filter(
        (node) => node.type === "ImportDeclaration",
      );
      return imports.length > 0 ? imports[imports.length - 1] : null;
    }

    return {
      CallExpression(node) {
        const callee = node.callee;
        if (
          callee &&
          callee.type === "MemberExpression" &&
          callee.object &&
          callee.object.name === "console" &&
          callee.property &&
          ["log", "error", "debug", "warn"].includes(callee.property.name)
        ) {
          const method = callee.property.name;
          // Determine the replacement method: "log" should become "info".
          const newMethod = method === "log" ? "info" : method;
          context.report({
            node: callee,
            message: `Please use our internal logger.${newMethod} instead of console.${method}`,
            fix(fixer) {
              const fixes = [];
              const args = node.arguments;

              // Replace 'console' with 'logger'
              fixes.push(fixer.replaceText(callee.object, "logger"));
              // Replace the property; if it's "log", change to "info"
              fixes.push(fixer.replaceText(callee.property, newMethod));

              // Check if we need to transform arguments for error-level methods
              // If the first argument appears to be an error variable (common pattern: err, error, e)
              // and there's only one argument, we should add a descriptive message
              if (
                (newMethod === "error" || newMethod === "warn") &&
                args.length === 1 &&
                args[0].type === "Identifier" &&
                /^(err|error|e|.+Error|.+Err|failBotError|exception)$/i.test(
                  args[0].name,
                )
              ) {
                // Transform console.error(err) to logger.error('Error occurred', { err })
                // This makes the log message more useful and follows structured logging pattern
                const errorVarName = sourceCode.getText(args[0]);
                fixes.push(
                  fixer.replaceText(
                    args[0],
                    `'Error occurred', { ${errorVarName} }`,
                  ),
                );
              }

              // Insert our logger setup (import + declaration) only once per file.
              if (!setupInserted) {
                setupInserted = true;

                const needsImport = needsLoggerImport();
                const needsDeclaration = needsLoggerDeclaration();
                const lastImport = getLastImportNode();

                if (needsImport && needsDeclaration) {
                  // Insert both import and declaration together
                  if (lastImport) {
                    fixes.push(
                      fixer.insertTextAfter(
                        lastImport,
                        "\nimport { createLogger } from '@/observability/logger';\n\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  } else {
                    // No imports – insert at the top
                    fixes.push(
                      fixer.insertTextBeforeRange(
                        [0, 0],
                        "import { createLogger } from '@/observability/logger';\n\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  }
                } else if (needsImport) {
                  // Only insert the import
                  if (lastImport) {
                    fixes.push(
                      fixer.insertTextAfter(
                        lastImport,
                        "\nimport { createLogger } from '@/observability/logger';",
                      ),
                    );
                  } else {
                    fixes.push(
                      fixer.insertTextBeforeRange(
                        [0, 0],
                        "import { createLogger } from '@/observability/logger';\n",
                      ),
                    );
                  }
                } else if (needsDeclaration) {
                  // Only insert the logger declaration
                  if (lastImport) {
                    fixes.push(
                      fixer.insertTextAfter(
                        lastImport,
                        "\n\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  } else {
                    fixes.push(
                      fixer.insertTextAfterRange(
                        [0, 0],
                        "\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  }
                }
              }

              return fixes;
            },
          });
        }
      },
    };
  },
};
