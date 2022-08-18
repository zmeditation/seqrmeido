import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ChildElems } from "models/child-elems";

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: { children: ChildElems }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);

export default ReactQueryProvider;
