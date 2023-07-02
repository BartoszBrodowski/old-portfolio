const AboutMe = () => {
  return (
    <div className="flex gap-8 justify-center items-center mx-auto w-2/3">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 sm:gap-12">
          <div>
            <h1 className="text-main-green text-xl sm:text-xl lg:text-2xl font-bold">
              About me
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              I'm a 2nd year Computer Science student at University of Gdańsk 🎓
              keen on learning new things and taking on challenges 💪 and open
              to new friendships.
            </p>
          </div>
          <div>
            <h1 className="text-main-green text-xl sm:text-xl lg:text-2xl font-bold">
              Hobbies
            </h1>
            <div className="flex flex-col gap-2 sm:gap-2 text-sm sm:text-base lg:text-lg">
              <p>
                🏁 Formula 1 became my big interest back in 2021 and ever since
                I've been a big fan of the sport.
              </p>
              <p>
                🎸 From time to time I really enjoy playing Electric Guitar,
                mostly fingerstyle.
              </p>
              <p>
                💿 Music, especially Rap genre has been a big part of my youth
                and it still is to this day. I love listening to albums as a
                whole and expand my horizons while forming my own opinion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-col gap-8 justify-center w-full">
        <img
          className="rounded-lg"
          src="src/assets/images/GdanskView.jpg"
          alt="Shiba dog and a gray cat sitting on a couch"
        />
      </div>
    </div>
  );
};

export default AboutMe;
