import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src="/assets/aboutmeimage.avif"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[white]">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-[#a9adb8;]">
              A passionate front-end developer with a keen eye for design and a
              love for crafting intuitive and user-friendly web experiences. My
              journey in web development has been fueled by a deep curiosity for
              new technologies and a dedication to creating seamless digital
              solutions. I specialize in HTML, CSS, JavaScript,Typescript and
              modern frameworks like React. My expertise lies in translating
              creative ideas into clean, efficient, and responsive code. Whether
              it’s developing interactive websites, building single-page
              applications, or optimizing the user interface, I’m always eager
              to take on new challenges and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
