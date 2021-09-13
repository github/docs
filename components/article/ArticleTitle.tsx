type Props = {
  children: React.ReactNode
}
export const ArticleTitle = ({ children }: Props) => {
  return (
    <div className="d-flex flex-items-baseline flex-justify-between">
      <h1 className="my-4 border-bottom-0">{children}</h1>
    </div>
  )
}
