import { IconButton } from "@chakra-ui/react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ColorModeToggle() {
  const { theme ,setTheme } = useTheme()
  console.log("🚀 ~ ColorModeToggle ~ theme:", theme)
  const toggleColorMode = () => {
    console.log("test")
    setTheme(theme == "light" ? "dark" : "light")
  }
  
  return (
    <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
      {theme === "light" ? <Moon /> : <Sun />}
    </IconButton>
  )
}