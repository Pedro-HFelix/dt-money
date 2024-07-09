import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Transactions } from "./Pages/Transaction"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions />
    </ThemeProvider>
  )
}
