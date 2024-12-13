import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Button = ({color, textColor, text, pathname, width="95%", borderWidth = 0, borderColor = "transparent", height = 40 }) => {
  return (
    <>
    <Link href={{pathname:pathname}} asChild>
    <TouchableOpacity
              style={{
                width:width,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: height,
                backgroundColor: color,
                borderRadius: 8,
                marginTop: 15,
                borderWidth:borderWidth,
                borderColor: borderColor,
              }}
            >
              <Text style={{ color: textColor }}>{text}</Text>
            </TouchableOpacity>
            </Link>
    </>
  )
}

export default Button