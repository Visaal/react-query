import "./App.css";
// import ColorForm from "./components/ColorForm";
// import ColorSquare from "./components/ColorSquare";
// import PrettySquares from "./components/PrettySquares";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { QueryClient, QueryClientProvider } from "react-query";
import AddPersonProvider from "./components/hooks/AddPersonProvider";


export default function App() {

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <h1 className="App-header">Forms with React Query and Context</h1>
      
      <AddPersonProvider>
          <QueryClientProvider client={queryClient}>
            <Section1 />
          </QueryClientProvider>
          
          <Section2 />

          <Section3 />
      </AddPersonProvider>

    </div>
  );
}
