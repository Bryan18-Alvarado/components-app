import React from 'react'
import { Text, TextProps } from 'react-native'

//1.los tipos de texto estrictos permitidos en nuestra app

type TextTypes = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

//1. extendemos de TextOrios para heredar onLayout, numberOfLines, etc

interface Props extends TextProps {
  className?: string
  type?: TextTypes
}

const ThemedText = ({ className, type = 'normal', ...rest }: Props) => {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',

        //clases inyectadas segun type

        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-semibold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,

        // calcular clase extra ejp margenes

        className
      ].join(' ')}
      {...rest}
    />
  )
}

export default ThemedText
