import DecryptedText from '../components/custom_components/Text_Component/DecryptedText';

export default function CardFive() {
  return (
    <div className="h-[400px] bg-gray-600 font-serif text-black flex flex-col items-center justify-center overflow-hidden rounded-xl">
      {/* LinkedIn */}
      <div style={{ marginTop: '2rem' }}>
        <div className="group relative cursor-pointe text-8xl uppercase">
          <DecryptedText
            text="LinkedIn"
            animateOn="view"
            revealDirection="center"
            className="text-gray-800 group-hover:text-blue-600 transition duration-300"
          />
          {/* Underline animation */}
          <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Instagram */}
      <div
        className="group relative cursor-pointer text-8xl uppercase"
        style={{ marginTop: '2rem' }}
      >
        <DecryptedText
          text="Instagram"
          animateOn="view"
          revealDirection="center"
          className="text-gray-800 group-hover:text-pink-700 transition duration-300"
        />
        {/* Underline animation */}
        <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}
