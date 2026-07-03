import Card from "../shared/Card";
import Container from "./Container";
import Online from "../../assets/icons/online.svg";
import Quiz from "../../assets/icons/quiz.svg";
import Certificates from "../../assets/icons/certificates.svg";

const WhyChooseUs = () => {
  return (
    <Container>
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="font-bold text-3xl">Why Choose EduLearn?</h1>
        <p className="max-w-180">
          Our platform is designed to provide a seamless and effective learning
          experience, ensuring you gain the skills you need to succeed.
        </p>
      </div>
      <div
        className="flex gap-3 overflow-x-auto"
      >
        <Card
          icon={Online}
          title={"Online Material"}
          description={
            "Access a vast library of high-quality learning materials, including videos, articles, and interactive content."
          }
        />
        <Card
          icon={Quiz}
          title={"Quizzes & Assignments"}
          description={
            "Test your knowledge and reinforce your learning with engaging quizzes and practical assignments."
          }
        />
        <Card
          icon={Certificates}
          title={"Certificates"}
          description={
            "Earn certificates upon completion of courses, showcasing your achievements and enhancing your credentials."
          }
        />
      </div>
    </Container>
  );
};

export default WhyChooseUs;


