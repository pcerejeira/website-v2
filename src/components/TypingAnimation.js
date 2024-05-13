import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Developer", "Consultant"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
