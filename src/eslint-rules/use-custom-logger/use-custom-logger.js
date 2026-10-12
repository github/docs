module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Use our internal logger instead of console",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    let setupInserted = false;

    function needsLoggerImport() {
      return !sourceCode.ast.body.some(
        (node) =>
          node.type === "ImportDeclaration" &&
          node.source.value === "@/observability/logger",
      );
    }

    function needsLoggerDeclaration() {
      return !sourceCode.ast.body.some((node) => {
        if (node.type === "VariableDeclaration") {
          return node.declarations.some((decl) => {
            if (decl.id.type === "Identifier" && decl.id.name === "logger") {
              return true;
            }
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
          const newMethod = method === "log" ? "info" : method;
          context.report({
            node: callee,
            message: `Please use our internal logger.${newMethod} instead of console.${method}`,
            fix(fixer) {
              const fixes = [];
              const args = node.arguments;

              fixes.push(fixer.replaceText(callee.object, "logger"));
              fixes.push(fixer.replaceText(callee.property, newMethod));

              // Add a message when error or warn receives one error variable; keep it as metadata.
              if (
                (newMethod === "error" || newMethod === "warn") &&
                args.length === 1 &&
                args[0].type === "Identifier" &&
                /^(err|error|e|.+Error|.+Err|failBotError|exception)$/i.test(
                  args[0].name,
                )
              ) {
                const errorVarName = sourceCode.getText(args[0]);
                fixes.push(
                  fixer.replaceText(
                    args[0],
                    `'Error occurred', { ${errorVarName} }`,
                  ),
                );
              }

              // Insert logger setup once per file.
              if (!setupInserted) {
                setupInserted = true;

                const needsImport = needsLoggerImport();
                const needsDeclaration = needsLoggerDeclaration();
                const lastImport = getLastImportNode();

                if (needsImport && needsDeclaration) {
                  if (lastImport) {
                    fixes.push(
                      fixer.insertTextAfter(
                        lastImport,
                        "\nimport { createLogger } from '@/observability/logger';\n\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  } else {
                    fixes.push(
                      fixer.insertTextBeforeRange(
                        [0, 0],
                        "import { createLogger } from '@/observability/logger';\n\nconst logger = createLogger(import.meta.url);\n",
                      ),
                    );
                  }
                } else if (needsImport) {
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
