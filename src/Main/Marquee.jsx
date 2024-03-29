import Marquee from "react-double-marquee";
import Convert from "../assets/Convert.png";
import Convert1 from "../assets/Convert1.png";
import Component8 from "../assets/Component8.png";
import Component7 from "../assets/Component7.png";

export default function Section1() {
  return (
    <div>
      <div>
        <marquee behavior="alternate">
          <ul className="text-7xl sm:text-7xl flex font-normal my-6 justify-around">
            <li className="list-disc mx-16 gradient">CONNECT</li>
            <li className="list-disc mx-16 gradient">SEND</li>
            <li className="list-disc mx-16 gradient">RECEIVE</li>
            <li className="list-disc mx-16 gradient">CONNECT</li>
            <li className="list-disc mx-16 gradient">SEND</li>
            <li className="list-disc mx-16 gradient">RECEIVE</li>
            <li className="list-disc mx-16 gradient">CONNECT</li>
            <li className="list-disc mx-16 gradient">SEND</li>
            <li className="list-disc mx-16 gradient">RECEIVE</li>
          </ul>
        </marquee>
        <div className="xsm:px-20 px-6 sm:px-10 py-10 xsm:py-20">
          {/* jombo gap-4 */}
          <div className=" jombo gap-4">
            <img src={Convert} className="hidden  xsm:flex" />
            <div className="mt-32  gradient">
              <img src={Component8} />
              <h2 className="text-4xl font-semibold mt-6">
                Seamless cash to crypto
                <span> conversion and vice-versa</span>
              </h2>
              <p className="text-2xl  mt-6">
                Quickly and easily convert between cash and cryptocurrencies at
                affordable rate.
              </p>
              <button
                className="my-6 text-white p-2
                            bg-blue font-normal sm:w-64 w-full hover:bg-indigo-900 xsm:hidden"
              >
                Connect your Business
              </button>
              <img src={Convert} className="xsm:hidden mt-6" />
              <button
                className="mt-12 mb-12 text-white p-2
                            bg-blue font-normal sm:w-64 w-full hover:bg-indigo-900 hidden xsm:block"
              >
                Connect your Business
              </button>
            </div>

            <div className="mt-32 gradient">
              <img src={Component7} />
              <h2 className="text-4xl font-semibold mt-6 mr-10">
                Pay and receive payment
                <span> quickly, gratis, anywhere</span>
              </h2>
              <p className="text-2xl  mt-6 mr-32">
                Pay and receive paid quickly, gratis, and from anywhere.
              </p>
              <button
                className="mt-12 mb-12 text-white p-2
                            bg-blue font-normal  hover:bg-indigo-900 sm:w-64 w-full"
              >
                Become a Merchant
              </button>
            </div>
            <div>
              <img src={Convert1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
