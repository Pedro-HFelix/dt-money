import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './Pages/Transaction'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './contexts/Transaction-Context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
