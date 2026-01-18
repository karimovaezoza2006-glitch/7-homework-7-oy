import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const ProviderConf = ({children}: {children : React.ReactNode}) => {
  const queryClinent = new QueryClient()
    return (
    <>
    <QueryClientProvider client={queryClinent}>
    {children}
    </QueryClientProvider>
    </>
  )
}

export default ProviderConf