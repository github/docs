module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow dangerouslySetInnerHTML; render trusted HTML with RenderedHTML/renderHTMLString or a hast tree instead",
      category: "Possible Errors",
      recommended: false,
    },
    schema: [],
    messages: {
      noDanger:
        "Do not use dangerouslySetInnerHTML. Render trusted HTML with the RenderedHTML component (or renderHTMLString), or pass a hast tree to MarkdownContent. See github/docs-engineering#6619.",
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name && node.name.name === "dangerouslySetInnerHTML") {
          context.report({ node, messageId: "noDanger" });
        }
      },
      // Object expressions can build JSX-spread dangerouslySetInnerHTML; patterns only read props.
      Property(node) {
        if (!node.parent || node.parent.type !== "ObjectExpression") return;
        const key = node.key;
        if (
          key &&
          ((key.type === "Identifier" &&
            key.name === "dangerouslySetInnerHTML") ||
            (key.type === "Literal" && key.value === "dangerouslySetInnerHTML"))
        ) {
          context.report({ node, messageId: "noDanger" });
        }
      },
      // Direct and computed assignments bypass JSX-attribute checks, so flag both forms.
      AssignmentExpression(node) {
        const left = node.left;
        if (!left || left.type !== "MemberExpression") return;
        const prop = left.property;
        if (!prop) return;
        const isDanger =
          (!left.computed &&
            prop.type === "Identifier" &&
            prop.name === "dangerouslySetInnerHTML") ||
          (left.computed &&
            prop.type === "Literal" &&
            prop.value === "dangerouslySetInnerHTML");
        if (isDanger) {
          context.report({ node, messageId: "noDanger" });
        }
      },
    };
  },
};
