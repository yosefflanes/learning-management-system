import Card from "../shared/Card";
import Container from "./Container";
import Web from "../../assets/images/web.png";
import Javascript from "../../assets/images/javascript.png";
import Responsive from "../../assets/images/responsive.png";
import { Button } from "../shared/Button";

const Feature = () => {
  return (
    <Container>
      <div className="h-15">
        <h3 className="font-bold text-2xl">Featured Courses</h3>
      </div>
      <div
        className="flex gap-3 overflow-x-auto"
      >
        <Card
          image={Web}
          title={"Web Development Fundamentals"}
          description={
            "Learn the basics of HTML, CSS, and JavaScript to build your first website."
          }
          noPaddingBorder
        />
        <Card
          image={Javascript}
          title={"Advanced JavaScript Techniques"}
          description={
            "Dive deep into JavaScript concepts like asynchronous programming, closures, and ES6 features."
          }
          noPaddingBorder
        />
        <Card
          image={Responsive}
          title={"Responsive Design Mastery"}
          description={
            "Master the art of creating websites that adapt to different screen sizes and devices."
          }
          noPaddingBorder
        />
      </div>
      <div className="h-16 py-3 px-4 flex items-center justify-center mt-10">
        <Button size="md" title={'View All Courses'} variant="secondary" />
      </div>
    </Container>
  );
};

export default Feature;
