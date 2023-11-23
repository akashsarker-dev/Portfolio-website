import * as React from "react";
import { Circle } from "rc-progress";
import "aos/dist/aos.css";
class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const { percent } = this.state;
    const newPercent = percent + 1;
    if (newPercent >= 91) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent: newPercent });
    this.tm = setTimeout(this.increase, 15);
  }

  render() {
    const { percent } = this.state;
    return (
      <>
        <>
          <h2 className="text-center py-16 text-3xl md:text-4xl   font-bold text-text-color">
            My<span className="text-primary-color"> Skills</span>
          </h2>

          <div className="gap-x-14 gap-y-14 flex flex-wrap mx-auto max-w-container">
            <div className="lg:w-6/12 w-full">
              <h2 className="text-2xl font-bold text-white mb-5">
                Coding <span className="text-primary-color">Skills</span>
              </h2>
              <div className="bg-[#112E42] grid  grid-cols-2 sm:grid-cols-3 px-5 mx-auto gap-4 py-9 xl:px-9 rounded-2xl border-primary-color border-2">
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
                <div className="relative w-[140px] p-4 mx-auto border-2 border-primary-color bg-transparent rounded-xl">
                  <Circle
                    style={{ margin: 10, width: 90 }}
                    strokeWidth={10}
                    percent={percent}
                  ></Circle>
                  <div className="absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/3  text-[#EDEDED] text-base font-bold">
                    {percent} %
                  </div>
                  <p className="text-base font-bold text-center text-[#EDEDED]">
                    Tailwind css
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <h2 className=" mb-5 py-5 md:p-0 text-[25px] font-bold text-text-color">
                My creative
                <span className="text-primary-color">
                  {" "}
                  skills & experiences.
                </span>
              </h2>
              <div className="relative w-full after:absolute after:-left-5 after:top-0 after:z-10 after:h-full after:w-2 after:transition-transform after:content-[''] after:bottom-2 after:border-primary-color after:border-l-4">
                <div className="relative after:absolute after:-left-[30px] after:z-40 after:-top-1 after:h-5 after:bg-primary-color after:rounded-full after:w-5 after:transition-transform after:content-[''] rounded-lg p-4 border-2 border-primary-color">
                  <h2 className="text-text-color font-bold text-xl">
                    Real-Time Applications:
                  </h2>
                  <p className="text-text-color font-medium mt-1 text-base">
                    If you have experience with real-time features like chat
                    applications or notifications using technologies like
                    WebSockets, emphasize this creativity and interactivity.
                  </p>
                </div>
              </div>
              
              <div className="relative w-full py-4 after:absolute after:-left-5 after:top-0 after:z-10 after:h-full after:w-2 after:transition-transform after:content-[''] after:bottom-2 after:border-primary-color after:border-l-4">
                <div className="relative after:absolute after:-left-[30px] after:z-40 after:-top-1 after:h-5 after:bg-primary-color after:rounded-full after:w-5 after:transition-transform after:content-[''] rounded-lg p-4 border-2 border-primary-color">
                  <h2 className="text-text-color font-bold text-xl">
                    Real-Time Applications:
                  </h2>
                  <p className="text-text-color font-medium mt-1 text-base">
                    If you have experience with real-time features like chat
                    applications or notifications using technologies like
                    WebSockets, emphasize this creativity and interactivity.
                  </p>
                </div>
              </div>
              <div className="relative w-full after:absolute after:-left-5 after:top-0 after:z-10 after:h-full after:w-2 after:transition-transform after:content-[''] after:bottom-2 after:border-primary-color after:border-l-4">
                <div className="relative after:absolute after:-left-[30px] after:z-40 after:-top-1 after:h-5 after:bg-primary-color after:rounded-full after:w-5 after:transition-transform after:content-[''] rounded-lg p-4 border-2 border-primary-color">
                  <h2 className="text-text-color font-bold text-xl">
                    Real-Time Applications:
                  </h2>
                  <p className="text-text-color font-medium mt-1 text-base">
                    If you have experience with real-time features like chat
                    applications or notifications using technologies like
                    WebSockets, emphasize this creativity and interactivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default Skill;
