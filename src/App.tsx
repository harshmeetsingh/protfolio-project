import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box } from "@mui/material";
import { pink } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [-1, 1], [-distance, distance]);
}

const imgSrcMap: any = {
  1: "/home.jpg",
  2: "/img1.jpg",
  3: "/img2.jpg",
  4: "/img3.jpg",
  5: "/img4.jpg",
};

const colorMap: any = {
  1: "rgba(112, 137, 139, 0.5)",
  2: "rgba(169, 213, 221, 0.5)",
  3: "rgba(255, 189, 1, 0.5)",
  4: "rgba(255, 62, 59, 0.5)",
  5: "rgba(247, 178, 187, 0.5)",
};

const textColorMap: any = {
  1: "#034C8C",
  2: "#A9D5DD",
  3: "#FFBD01",
  4: "#FF3E3B",
  5: "#F7B2BB",
};

function InfoCard({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const y = useParallax(scrollYProgress, 200);

  return (
    <div className="stack-container">
      <div
        className="motion-div-container motion-text"
        style={{ backgroundColor: colorMap[id], color: textColorMap[id] }}
      >
        <motion.div style={{ y }} ref={ref}>
          <h1 className="project-title">Project Name</h1>
          <div className="project-content">
            contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
          </div>
          <br />
          <p className="project-description">
            descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          </p>
        </motion.div>
      </div>

      <div
        style={{
          backgroundImage: `url(${imgSrcMap[id]})`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
        className="stack-item"
      >
        {/* <img style={{ objectFit: "fill" }} src={imgSrcMap[id]} /> */}
      </div>
    </div>
  );
}

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <Stack style={{ width: "100%" }} display="flex">
        {[1, 2, 3, 4, 5].map((it) => {
          return <InfoCard id={it} />;
        })}
      </Stack>
    </Box>
  );
}

export default App;
