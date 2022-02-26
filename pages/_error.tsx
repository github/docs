import { NextPage } from 'next'
import { GenericError } from 'components/GenericError'

type Props = {}

const ErrorPage: NextPage<Props> = () => {
  return <GenericError />
}

export default ErrorPage
