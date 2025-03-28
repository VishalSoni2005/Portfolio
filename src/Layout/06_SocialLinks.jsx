import DecryptedText from '../components/custom_components/Text_Component/DecryptedText';

export default function CardFive() {
  return (
    <div className="h-[300px] bg-gray-800 font-serif text-gray-400 flex flex-col items-center justify-center overflow-hidden rounded-t-xl ">
      {/* LinkedIn */}
      <div className="m-2 pl-6 pr-6">
        <div className="group relative cursor-pointe text-4xl md:text-8xl uppercase">
          <button
            rel="noopener noreferrer"
            className="group relative cursor-pointer md:text-8xl uppercase"
            onClick={() =>
              window.open('https://www.linkedin.com/in/vishal-soni-07-/')
            }
          >
            <DecryptedText
              text="LinkedIn"
              animateOn="view"
              revealDirection="center"
              className="text-gray-400 group-hover:text-blue-600 transition duration-300"
            />
          </button>
          {/* Underline animation */}
          <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Instagram */}
      <div
        className="group relative cursor-pointer md:text-8xl uppercase "
        style={{ marginTop: '2rem' }}
      >
        <button
          rel="noopener noreferrer"
          className="group relative cursor-pointer text-4xl md:text-8xl uppercase"
          onClick={() => window.open('https://www.github.com/vishalsoni2005')}
        >
          <DecryptedText
            text="Github"
            animateOn="view"
            revealDirection="center"
            className="text-gray-400 group-hover:text-gray-200 transition duration-300"
          />
        </button>
        {/* Underline animation */}
        <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}
