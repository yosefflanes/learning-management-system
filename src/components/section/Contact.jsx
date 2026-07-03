import Container from "./Container";

const Contact = () => {
    return (
        <Container className="flex px-5 gap-6 text-secondary">
            <div className="flex justify-around">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="flex justify-center">
               <p>© 2026 DibiEdu. All rights reserved.</p>
            </div>
        </Container>
    );
}

export default Contact;