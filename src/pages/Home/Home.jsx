import React from "react";
import { Link } from "react-router-dom";
import GradText from "../../components/GradText";
import { useImage } from "../../hooks/useImage";

const Home = () => {
  const getImage = useImage();

  return (
    <div className="px-90 py-5">
      <div className="max-w-full py-10 flex mx-auto bg-white overflow-hidden md:max-w-full justify-evenly">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-80 w-full  box-shadow-image object-cover md:h-full md:w-80"
              src={getImage("landing")}
              alt="home"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end justify-center flex-col h-full">
            <div className="text-end text-primary-header">
              <span className="block leading-primary font-bold align-right">
                Imagine if
              </span>
              <GradText text="Snapchat" className="leading-primary" />
              <span className="leading-primary block font-bold">
                had events.
              </span>
            </div>
            <span className="text-end text-skin-secondary font-light text-xl mb-10 mt-5">
              Easily host and share events with your friends
              <span className="block">across any social media.</span>
            </span>
            <div className="flex justify-end my-10">
              <Link
                to="/create"
                className="bg-gradient-primary items-center align-center flex justify-center text-center font-bold text-xl text-white px-2 py-1 w-80 h-14 rounded-primary"
              >
                <span>🎉 Create my event</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
