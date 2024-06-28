import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:villiarnar1@gmail.com";
  };

  const toRotate = [
    "Machine Learning Engineer",
    "Backend Software Engineer",
    "Business Developer",
    "Full Stack Developer",
    "AI Research Assistant",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between h-screen bg-gradient-to-br from-black via-black to-[#1A001A] p-8 w-full">
      <div className="flex-1 p-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hi, I'm Vilhjalmur
        </h1>
        <h2 className="text-3xl text-gray-300 mb-4">{text}</h2>
        <p className="text-xl text-gray-300 mb-4">
          Currently pursuing M.Sc in Math & Physics and M.Sc in Computer Science
          at the Norwegian University of Science and Technology (NTNU)
        </p>
        <div
          onClick={handleEmailClick}
          className="flex items-center text-white text-xl cursor-pointer mb-8 transition-transform transform hover:translate-x-2"
        >
          <span className="mr-2">Let's connect!</span>
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-8">
        <Image
          src="/VilhjalmurPortrait.jpg"
          alt="Vilhjalmur"
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-lg shadow-lg shadow-gray-800"
        />
      </div>
    </div>
  );
};

export default LandingPage;
