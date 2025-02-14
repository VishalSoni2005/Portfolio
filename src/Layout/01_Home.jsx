// import me from '../assets/me.png';
// import GradientText from '../components/custom_components/Text_Component/GradientText';
// import SplitText from '../components/custom_components/Text_Component/SplitText';
// import Loader from '../components/custom_components/Text_Component/SequenceText';

// export default function CardFive() {
//   return (
//     <div className="h-screen bg-[#F8F8F8] text-black flex flex-col md:flex-row justify-center items-center text-xl rounded-xl px-6 md:px-16 py-12 md:py-0 overflow-hidden">
//       {/* Left Section */}
//       <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
//         <GradientText
//           colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
//           animationSpeed={3}
//           showBorder={false}
//           className="text-lg md:text-xl"
//         >
//           🎉 | Available for freelance work
//         </GradientText>

//         <SplitText
//           text="Hi, I am Vishal Soni!"
//           className="text-4xl md:text-5xl font-semibold hover:scale-110 transform transition-all duration-1000"
//           delay={150}
//           animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
//           animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//           easing="easeOutCubic"
//           threshold={0.2}
//           rootMargin="-50px"
//         />

//         <div className="mt-4">
//           <span className="flex flex-col md:flex-row text-lg md:text-2xl font-serif">
//             I build
//             <div className="mx-2">
//               <Loader />
//             </div>
//             Websites & Web Apps
//           </span>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <div className="mt-8 md:mt-0">
//         <img
//           src={me}
//           alt="A portrait of me"
//           className="w-40 md:w-52 h-52 md:h-64 rounded-full shadow-lg border-2 border-transparent 
//              transform transition-all duration-700 ease-in-out 
//              hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:border-purple-500"
//         />
//       </div>
//     </div>
//   );
// }

import me from '../assets/me.png';
import GradientText from '../components/custom_components/Text_Component/GradientText';
import SplitText from '../components/custom_components/Text_Component/SplitText';
import Loader from '../components/custom_components/Text_Component/SequenceText';

export default function cardFive() {
  return (
    <div
      className={` h-screen bg-[#F8F8F8] text-black flex justify-evenly items-center overflow-hidden  text-xl rounded-xl md:flex-row flex-col`}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="">
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            🎉 | Available for freelance work
          </GradientText>
        </div>

        <SplitText
          text="Hi, I am Vishal Soni!"
          className="text-5xl font-semibold text-center hover:scale-110 transform:scale duration-1000"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <div className="my-4">
          <span className="flex text-2xl font-serif webkit-font-smoothing ">
            I build
            <div className="mx-2">
              <Loader />
            </div>
            Website and Webapps
          </span>
        </div>
      </div>

      <div>
        <img
          src={me}
          alt="A portrait of me"
          className="mx-6 w-[200px] h-[260px] rounded-full max-w-full shadow-lg border-2 border-transparent
             transform transition-all duration-700 ease-in-out
             hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:border-purple-500"
        />
      </div>
    </div>
  );
}
