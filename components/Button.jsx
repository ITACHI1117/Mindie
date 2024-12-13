import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Button = ({color, textColor, text, pathname}) => {
  return (
    <>
    <Link href={{pathname:pathname}} asChild>
    <TouchableOpacity
              style={{
                width: "95%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                backgroundColor: color,
                borderRadius: 8,
                marginTop: 15,
              }}
            >
              <Text style={{ color: textColor }}>{text}</Text>
            </TouchableOpacity>
            </Link>
    </>
  )
}

export default Button