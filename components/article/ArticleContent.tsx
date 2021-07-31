type Props = {
  children: string
}
export const ArticleContent = ({ children }: Props) => {
  return (
    <div
      id="article-contents"
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
