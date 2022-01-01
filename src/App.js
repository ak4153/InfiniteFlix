import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper className="App">
      <h3>Hello world</h3>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  display: flex;
`;
export default App;
