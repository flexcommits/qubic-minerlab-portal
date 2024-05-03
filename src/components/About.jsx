import Image from "next/image";
import React from "react";
import SubHeader from "../components/subHeader";

const Strengthening = () => {
  return (
    <>
      <div className="bg-transparent mt-36 px-3 h-full lg:h-screen">
        <SubHeader label="About Us" />
        <div className="px-2 text-[#FAF9F6] lg:max-w-[1500px] mx-auto">
          <div
            className={"text-white text-center text-xl md:text-4xl font-bold"}
          >
            Gateway to Powering Masternodes
          </div>
          {/* <p className="text-gray-400  text-center text-lg md:text-2xl  mt-5">
            Various foreverbox Nodes make up the decentralised and distributed
            blockchain-based storage network. The manner that individuals save,
            trade and authenticate valuable data will gradually change thanks to
            foreverbox.
          </p> */}
          <div className="  lg:flex gap-y-10 justify-between mt-16">
            {/* Left */}
            <div className="flex mb-32 flex-col">
              <div className="flex justify-center px-4 flex-wrap gap-8 ">
                {/* 1 */}
                <div className=" w-[300px] ">
                  <div className="">
                    <Image
                      className="rounded-t-2xl"
                      src="/1.png"
                      alt="img"
                      width={350}
                      height={200}
                    />
                  </div>
                  <div className="w-[300px] bg-[#142a4a] p-4 rounded-b-2xl">
                    <h1 className="font-bold">Node Hosting Revolution</h1>
                    <p className="text-white">
                      We're leading the way in node hosting, offering a seamless
                      platform for hosting various nodes, from Masternodes to
                      Full Nodes.
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="mt-24 h-[284px] w-[300px] rounded">
                  <div className="">
                    <Image
                      className="rounded-t-2xl"
                      src="/2.png"
                      alt="img"
                      width={350}
                      height={200}
                    />
                  </div>
                  <div className="w-[300px] bg-[#142a4a] p-4 rounded-b-2xl">
                    <h1 className="font-bold">Secure VPN Integration</h1>
                    <p className="text-white">
                      Our integrated organizational VPN ensures users' data
                      security and privacy across networks, delivering peace of
                      mind in today's digital world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-4 flex-wrap gap-8  md:mt-10">
                {/* 3 */}
                <div className=" w-[300px] mt-56 sm:mt-0 rounded">
                  <div className="">
                    <Image
                      className="rounded-t-2xl"
                      src="/3.png"
                      alt="img"
                      width={350}
                      height={200}
                    />
                  </div>
                  <div className="w-[300px]  bg-[#142a4a] p-4 rounded-b-2xl">
                    <h1 className="font-bold">Expert Mining Support</h1>
                    <p className="text-white">
                      With our dedicated tech support, mining operations become
                      smoother and more efficient, backed by our team's
                      expertise and guidance.
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className="mt-24 w-[300px] rounded-lg">
                  {/* <div className="">
                    <Image
                      className="rounded-t-2xl"
                      src="/4.png"
                      alt="img"
                      width={350}
                      height={200}
                    />
                  </div>
                  <div className="w-[300px] rounded-b-2xl bg-[#142a4a] p-4 rounded">
                    <h1 className="font-bold">Encryption4</h1>
                    <p className="text-gray-400">
                      Before being uploaded to the network, data is encrypted.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            {/* right */}
            {/* <div className="w-1/4 items-center rounded-full hidden xl:block ">
              <Image
                src="/images/lock.png"
                className="rounded-lg"
                alt="img"
                width={600}
                height={600}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Strengthening;
