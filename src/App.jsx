import Dsl from "./dsl/dsl";
import Pdf from "./pages/Pdf";

const App = () => {
  return (
    <>
      <Dsl>
        <Pdf />
      </Dsl>
    </>
  );
};
export default App;
