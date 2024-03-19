import React, { useEffect, useRef, useState } from "react";
import BannerBg from "../../asset/BannerBg.png";
import TabBrowser from "../../asset/TabBrowser.png";
import { ArrowIcon, LeftArrowIcon, RightArrowIcon } from "../AllIcons";
import ReactPlayer from "react-player";
import Modal from "../Modal/Modal";
import SuccessFull from "../Toast/Toaster";

const Banner = () => {
  const [videoLink, setVideoLink] = useState("https://www.youtube.com/watch?v=TAGaXa1sNH8");
  const handleInputChange = (event) => {
    setVideoLink(event.target.value);
  };
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  const [modals, setModals] = useState(false);
  const [text,setText] = useState("")
  const [startend, setStartend] = useState([
    {
      duration: null,
      progressPointer: null,
      played:played
    },
    {
      duration: null,
      progressPointer: null,
      played:played
    },
  ]);
  const [toaster, setToaster] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);

  
  const handleProgress = (state) => {
    // setPlayed(state.played);
    console.log("state",state)
    setPlayed(state.played * 100);
  };
  // console.log("currentPlayedTime",(playerRef.current.getCurrentTime() % 60));

  const handleStartClick = () => {
    const currentTime = Math.floor(
      Math.round(playerRef.current.getCurrentTime()) % 60
      
    );
    console.log("mints", (playerRef.current.getCurrentTime() % 60) ) 
    setPlaying(true);
    startend[0] = {
      ...startend[0],
      duration: currentTime,
      progressPointer: Math.floor(played),
      played :playerRef.current.getCurrentTime() 
    };
  };

  console.log("startend", startend);

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleEndClick = () => {
    const currentTime = Math.floor(
      Math.round(playerRef.current.getCurrentTime() * 100 / 60) 
    ); 
    setPlaying(true);
    startend[1] = {
      ...startend[1],
      duration: currentTime,
      progressPointer: Math.floor(played),
      played :playerRef.current.getCurrentTime() / 60
    };
  };

  const hanlderModal = () => {
    setModals(!modals);
  };

  const hanlderCloseModal = () => {
    setModals(false);
    setToaster(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setToaster(false);
    }, 2000);
  }, [toaster]);

  return (
    <div className="relative">
      <img src={BannerBg} className="mx-auto w-[90%]" />
      <div className="absolute z-[1] top-[5%] left-[50%] translate-x-[-50%] text-center">
        <h1 className="text-[60px] font-bold inter  text-white left-[50%] leading-[110%] ">
          Supercharge AI using <br />
          <span className="bg-gradient-to-r from-[#B2C5F7] to-[#8EDCF9] via-[#B2C5F7] text-transparent bg-clip-text">
            Human Powered Data
          </span>
        </h1>
        <p className="text-[#ffffff] inter text-[18px] text-center pt-[30px]">
          High quality training data curated by a diverse and skilled crowd,{" "}
          <br /> tailored for your machine learning projects
        </p>

        <button className="text-white flex text-[14px] mx-auto  mt-[20px] font-[500] inter items-center bg-[#6F43CD] px-[24px] py-[12px] rounded-[40px]">
          Contact Sales <ArrowIcon />
        </button>
      </div>
      <div className="relative">
        <div className="absolute bottom-[0%] left-[50%] block translate-x-[-50%] w-[70%]">
          <img src={TabBrowser} className="w-[100%]" />
          <div className="absolute top-[20px] left-[10%] w-[80%]">
            <input
              type="text"
              value={videoLink}
              placeholder="Enter YouTube video link"
              className="w-[80%] z-[3]  py-[6px] text-[#000000] text-[14px] font-[400] inter  px-[16px] focus:outline-none peer rounded-[40px] hover:border-[0px] "
              onChange={handleInputChange}
            />
          </div>
          {videoLink && (
            <>
              <ReactPlayer
                className="react-player"
                ref={playerRef}
                url={videoLink}
                width={"580px"}
                height={"300px"}
                playing={playing}
                onProgress={handleProgress}
                onDuration={handleDuration}
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 },
                  },
                }}
                controls={false}
                light={true}
                // onProgress={{played: 0.12}}
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "10%",
                  borderRadius: "20px",
                }}
              />
              <div className="absolute bottom-[0%] left-[10%]">
                <div className="flex items-center gap-x-[20px] mb-[20px]">
                  <button
                    onClick={handleStartClick}
                    title="Start"
                    className="bg-[#171923] flex  gap-x-[5px] items-center font-[500] text-[12px] text-[#ffffff] rounded-[4px] px-[18px] py-[8px] "
                  >
                    Start <RightArrowIcon />
                  </button>
                  <div className="relative">
                    <progress
                      min={0}
                      max={1}
                      value={played}
                      className="w-[380px]  bg-[#EDEDED] text-[#EDEDED]  custom-progress-bar"
                      style={{
                        backgroundColor: "#EDEDED",
                        borderRadius: "5px",
                      }}
                    ></progress>

                    {startend.map((value, id) => {
                      if (value.duration != null) {
                        return (
                          <>
                            {" "}
                            <div
                              key="id"
                              data-tooltip-target="tooltip-bottom"
                              data-tooltip-placement="bottom"
                              className={`absolute  h-[25px]  w-[3px] top-0 w-[2px] bg-[#000]  rounded-[30px]`}
                              style={{
                                marginLeft: `${
                                  startend.length > 0
                                    ? Math.floor(value.progressPointer)
                                    : "0"
                                }%`,
                              }}
                            >
                              <div
                                id="tooltip-bottom"
                                role="tooltip"
                                class="absolute z-10 bottom-[-40px] left-[-13px] inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
                              >
                                {value.duration / 100}
                                <div
                                  class="tooltip-arrow"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>

                  <button
                    onClick={handleEndClick}
                    title="End"
                    className="bg-[#171923] flex  gap-x-[5px] items-center font-[500] text-[12px] text-[#ffffff] rounded-[4px] px-[18px] py-[8px] "
                  >
                    <LeftArrowIcon /> End
                  </button>
                </div>

                <textarea
                  placeholder="Describe the part of the video between starting and ending point"
                  className="w-[580px] border-[#E2E8F0] text-[14px] py-[10px] px-[10px] border-[1.5px] rounded-[5px]"
                  style={{ height: "64px" }}
                  onChange={(e)=>{setText(e.target.value)}}
                ></textarea>
                <button
                  onClick={hanlderModal}
                  className="bg-[#171923] flex mx-auto items-center font-[500] text-[14px] text-[#ffffff] rounded-[4px] px-[18px] py-[9px] "
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {modals && <Modal onClick={hanlderCloseModal} startTime={ startend[0].duration / 100} EndTime={startend[1].duration / 100}  Description={text} />}
      {toaster && <SuccessFull />}
    </div>
  );
};

export default Banner;
