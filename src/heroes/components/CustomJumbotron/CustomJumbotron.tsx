import type { FC } from 'react'

interface Props {
  title: string
  subTitle: string
}

export const CustomJumbotron: FC<Props> = ({ subTitle, title }) => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg">{subTitle}</p>
      </div>
    </>
  )
}
