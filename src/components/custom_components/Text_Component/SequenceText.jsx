import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <div className="words">
            <span className="word">Beautiful</span>
            <span className="word">Modern</span>
            <span className="word">Creative</span>
            <span className="word">Interactive</span>
            <span className="word">Innovative</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// const StyledWrapper = styled.div`
//   .card {
//     /* color used to softly clip top and bottom of the .words container */
//     --bg-color: var(--color-green-500);
//     background-color: var(--bg-color);
//     padding: 1rem 2rem;
//     border-radius: 1.25rem;
//   }
//   .loader {
//     color: rgb(124, 124, 124);
//     font-family: 'Poppins', sans-serif;
//     font-weight: 500;
//     font-size: 25px;
//     -webkit-box-sizing: content-box;
//     box-sizing: content-box;
//     height: 40px;
//     padding: 10px 10px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     border-radius: 8px;
//   }

//   .words {
//     overflow: hidden;
//     position: relative;
//   }
//   .words::after {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       var(--bg-color) 10%,
//       transparent 30%,
//       transparent 70%,
//       var(--bg-color) 90%
//     );
//     z-index: 20;
//   }

//   .word {
//     display: block;
//     height: 100%;
//     padding-left: 6px;
//     color: white ;
//     animation: spin_4991 6s infinite;
//   }

//   @keyframes spin_4991 {
//     10% {
//       -webkit-transform: translateY(-102%);
//       transform: translateY(-102%);
//     }

//     25% {
//       -webkit-transform: translateY(-100%);
//       transform: translateY(-100%);
//     }

//     35% {
//       -webkit-transform: translateY(-202%);
//       transform: translateY(-202%);
//     }

//     50% {
//       -webkit-transform: translateY(-200%);
//       transform: translateY(-200%);
//     }

//     60% {
//       -webkit-transform: translateY(-302%);
//       transform: translateY(-302%);
//     }

//     75% {
//       -webkit-transform: translateY(-300%);
//       transform: translateY(-300%);
//     }

//     85% {
//       -webkit-transform: translateY(-402%);
//       transform: translateY(-402%);
//     }

//     100% {
//       -webkit-transform: translateY(-400%);
//       transform: translateY(-400%);
//     }
//   }
// `;

const StyledWrapper = styled.div`
  .card {
    --bg-color: var(--color-green-500);
    background-color: var(--bg-color);
    padding: 0.5rem; /* Reduced padding */
    border-radius: 0.75rem; /* Smaller rounded corners */
  }

  .loader {
    color: rgb(124, 124, 124);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px; /* Reduced font size */
    height: 25px; /* Reduced height */
    display: flex;
    border-radius: 5px; /* Smaller border radius */
  }

  .words {
    overflow: hidden;
    position: relative;
  }

  .words::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 4px; /* Adjust spacing */
    color: white;
    animation: spin_4991 6s infinite;
  }

  @keyframes spin_4991 {
    10% {
      transform: translateY(-102%);
    }
    25% {
      transform: translateY(-100%);
    }
    35% {
      transform: translateY(-202%);
    }
    50% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(-302%);
    }
    75% {
      transform: translateY(-300%);
    }
    85% {
      transform: translateY(-402%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
`;


export default Loader;
