import { useState, useRef } from "react";
import { motion } from "framer-motion";

import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import Menu from "./components/Menu";

function App() {
  const [menuDisplay, setMenuDisplay] = useState("none");
  const [windowDisplay, setWindowDisplay] = useState("none");
  const constraintsRef = useRef(null);

  return (
      <motion.div ref={constraintsRef} className="screen">
        <Window
          constraintsRef={constraintsRef}
          windowDisplay={windowDisplay}
          setWindowDisplay={setWindowDisplay}
        />

        <Menu menuDisplay={menuDisplay} />

        <DesktopIcons
          windowDisplay={windowDisplay}
          setWindowDisplay={setWindowDisplay}
        />

        <Taskbar
          windowDisplay={windowDisplay}
          setWindowDisplay={setWindowDisplay}
          menuDisplay={menuDisplay}
          setMenuDisplay={setMenuDisplay}
        />
      </motion.div>
  );
}

export default App;
