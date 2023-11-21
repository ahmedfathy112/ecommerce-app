function Home() {
  return (
    <>
      <main className="pt-28 text-center pr-5 pl-5 flex bg-[#494d60] min-h-screen justify-between">
        <section className="text-left p-4">
          <h2 className="text-6xl text-yellow-50 font-sans font-bold">
            E-Commerce <span className="text-orange-400">Golden</span>
          </h2>
          <p className="text-2xl text-yellow-200 font-mono font-bold mt-4">
            Here you can browse and buy what you want
          </p>
          <p className="text-xl text-yellow-100 font-mono font-bold mt-5">
            Here You Can Find My Social Mediea
          </p>
          <ul className="mt-5 list-none flex flex-row">
            <a
              href="https://www.facebook.com/profile.php?id=100029095692492&locale=ar_AR"
              target="_blank"
              className="text-2xl text-yellow-50 mr-6 cursor-pointer"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fahmed%2520fathy960%3Ffbclid%3DIwAR2-PqKeFD-uDRfcmMqo3WnIuqbcm4deNTEaflqzZCEgI-ac7msOPuhK5CY&h=AT3AXormzWk3cFI8uHTL1l6d6jivgnKrTsjMkGHB6SicRbrZcMIMbinWr3Qbns5P-tMxtTuSlrcdmg8Rf7mufYuGJfxcDpBwBoLnHq31TSU7zGbwEsrIye7ZIoKMw5L50XlU"
              target="_blank"
              className="text-2xl text-yellow-50 mr-6 cursor-pointer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-fathy-20178319a/"
              target="_blank"
              className="text-2xl text-yellow-50 mr-6 cursor-pointer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/ahmedfathy112"
              target="_blank"
              className="text-2xl text-yellow-50 mr-6 cursor-pointer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </ul>
        </section>
        <section className="w-1/2 h-1/2">
          <img
            className="w-1/2 h-1/2 rounded-r-full"
            src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_1280.jpg"
          ></img>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default Home;
