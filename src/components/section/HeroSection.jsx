import Hero from "../../assets/images/hero.png";
import { Button } from "../shared/Button";
import Container from "./Container";

const HeroSection = () => {
  return (
    <Container className="mt-20 md:mt-5">
      <div
        style={{ backgroundImage: `var(--background-gradient), url(${Hero})` }}
        className="min-h-110 h-auto bg-cover bg-center bg-no-repeat rounded-xl flex flex-col justify-center items-center p-6 md:mt-15 mx-auto"
      >
        <div className="text-white flex flex-col gap-2 text-center items-center">
          <h1 className="font-bold text-3xl">
            Unlock Your Potential with EduLearn
          </h1>
          <p>
            Embark on a journey of knowledge and skill development with our
            comprehensive online courses. Learn at your own pace, anytime,
            anywhere.
          </p>
          <Button
            title={"Start Learning"}
            size="md"
            className={"hover:bg-blue-800"}
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
