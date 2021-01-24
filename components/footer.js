import Container from "./container";
import Signup from "./signup";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-dark bg-opacity-25">
      <Container>
        <div className="py-10 md:py-20">
          <h3 className="text-4xl lg:text-5xl font-bold mb-8">
            <a
              className="hover:text-brand-yellow duration-150 ease-in transform text-white"
              href="mailto:azhao991@gmail.com"
            >
              Want more inspiring insights from real entreprenuers?
            </a>
          </h3>

          <Signup />
        </div>
      </Container>
    </footer>
  );
}
