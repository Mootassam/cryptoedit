import { useRef, useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";
 
import Template1 from "./component/tempalate1/Template1";
import Template2 from "./component/tempalate2/Template2";
import Template3 from "./component/template3/Template3";
import Template4 from "./component/template4/Template4";
import Template5 from "./component/template5/Template5";
import Template6 from "./component/template6/Template6";
import Template7 from "./component/template7/Template7";
import Template8 from "./component/template8/Template8";
import Template9 from "./component/template9/Template9";
import Template10 from "./component/template10/Template10";
import Template11 from "./component/template11/Template11";
import Template12 from "./component/template12/Template12";
import Template13 from "./component/template13/Template13";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("template1");
  const [size, setSize] = useState("small");
  const [transactionType, setTransactionType] = useState("deposit");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  
  // Set canvas dimensions based on template
  const getCanvasDimensions = () => {
    switch(value) {
      case "completed":
        return { width: 470, height: 801 };
      case "green":
        return { width: 440, height: 820 };
      case "large":
        return { width: 671, height: 820 };
      default:
        return { width: 400, height: 800 };
    }
  };

  const dimensions = getCanvasDimensions();

  return (
    <div className="app">
      <div className="app__container">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setSize={setSize}
          size={value}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          {...toolbarProps}
        />
        <main className="app__main">
          <div className="content" ref={divRef}>
            {/* <div className="app__canvas">
              <canvas
                ref={canvasRef as any}
                width={dimensions.width}
                height={dimensions.height}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            </div> */}
 
            {value === "template1" && <Template1 />}
            {value === "template2" && <Template2 />}
            {value === "template3" && <Template3 />}
            {value === "template4" && <Template4 />}
            {value === "template5" && <Template5 />}
            {value === "template6" && <Template6 />}
            {value === "template7" && <Template7 />}
            {value === "template8" && <Template8 />}
            {value === "template9" && <Template9 />}
            {value === "template10" && <Template10 />}
            {value === "template11" && <Template11 />}
            {value === "template12" && <Template12 />}
            {value === "template13" && <Template13 />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;