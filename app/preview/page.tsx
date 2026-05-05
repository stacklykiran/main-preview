"use client";

import { useEffect, useState } from "react";


import {
  FaBars,
  FaShoppingCart,
  FaSearch,
  FaMicrophone,
  FaImage,
  FaSquare,
  FaVideo,
  FaColumns,
  FaWindowMinimize,
  FaMap,
  FaBlog,
  FaRegFileAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaEnvelope,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaCartShopping, FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
import { FaEye, FaPen } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const NAV_ITEMS = [
  { id: "home" as const, label: "Home", href: "/" },
  { id: "about" as const, label: "About Us", href: "/page-not-found" },
  { id: "products" as const, label: "Our Products", href: "/page-not-found" },
  { id: "categories" as const, label: "Categories", href: "/page-not-found" },
  { id: "contact" as const, label: "Contact", href: "/page-not-found" },
];

export default function Portfolioedit() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeNav, setActiveNav] = useState("Home");
  const [email, setEmail] = useState("");
  
  const [innerMobileMenuOpen, setInnerMobileMenuOpen] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [productsOpen, setProductsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [heroImageProps, setHeroImageProps] = useState({
    width: 165,
    height: 245,
    borderRadius: 50, // 50% for full round
    shadow: false,
    opacity: 100
  });

  //animations for stats and progress bars
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const stats = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Projects Done" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  //progress bars animation state
  const [animate, setAnimate] = useState(false);


  const skills = [
    { name: "Photoshop", value: 90 },
    { name: "Figma", value: 80 },
    { name: "HTML", value: 85 },
    { name: "CSS", value: 75 },
  ];

  function toggleCart() {
    setCartCount((prev) => prev + 1);
  }
  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // clear input
    setEmail("");

    // navigate to 404 page
    window.location.href="index.html";
  }


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <main className="flex flex-col min-h-screen bg-white pt-[70px]">
      {/* ✅ NAVBAR */}

      {/* <nav className="sticky top-0 z-[999] bg-[#06224C] border-b border-white/10 px-3 md:px-12 py-3 shadow-sm"> */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#06224C] border-b border-white/10 px-3 md:px-12 py-3 shadow-sm">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <button className="lg:hidden text-white">
              <FaBars />
            </button>

            {/* LOGO */}
            <div>
              <a href="#"
                className="flex h-7 w-[80px] sm:h-9 sm:min-w-[104px] shrink-0 items-center justify-center overflow-hidden rounded-[50%] bg-white px-2 sm:px-3 transition-all">
                <img
                  src="/stackly-logo.webp"
                  alt="logo"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </a>
            </div>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-6 text-white text-sm font-bold uppercase">
              <a href="index.html" className="hover:text-blue-300">
                Home
              </a>

              <a href="index.html" className="hover:text-blue-300">
                About
              </a>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 hover:text-blue-300"
                >
                  Our Products <FaChevronDown size={10} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-xl shadow-xl py-2 text-black  z-[9999">
                    <a className="block px-4 py-2 hover:bg-blue-50">Premium Templates</a>
                    <a className="block px-4 py-2 hover:bg-blue-50">UI Kits</a>
                    <a className="block px-4 py-2 hover:bg-blue-50">WordPress Themes</a>
                    <a className="block px-4 py-2 hover:bg-blue-50">Free Assets</a>
                  </div>
                )}
              </div>

              {/* CATEGORY DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center gap-1 hover:text-blue-300"
                >
                  Categories <FaChevronDown size={10} />
                </button>

                {categoryOpen && (
                  <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl p-4 w-[220px] text-black">
                    <p className="font-bold text-sm mb-2">Landing Page</p>
                    <a className="block py-1 text-sm hover:text-blue-500">Sales Page</a>
                    <a className="block py-1 text-sm hover:text-blue-500">Product Page</a>

                    <p className="font-bold text-sm mt-3 mb-2">Dashboard</p>
                    <a className="block py-1 text-sm hover:text-blue-500">Analytics</a>
                    <a className="block py-1 text-sm hover:text-blue-500">Finance</a>
                  </div>
                )}
              </div>

              <a href="index.html" className="hover:text-blue-300">
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* CART */}
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#06224C]">
              <FaCartShopping size={14} />
            </button>

            {/* WISHLIST */}
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-500">
              <FaHeart size={14} />
            </button>

            {/* SEARCH */}
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#06224C]">
              <FaMagnifyingGlass size={14} />
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)}>
                  <img
                  src="/profile.webp"
                  alt="profile"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-white"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl text-sm">
                  <a className="block px-4 py-2 hover:bg-blue-50">Account</a>
                  <a className="block px-4 py-2 hover:bg-blue-50">Settings</a>
                  <a className="block px-4 py-2 text-red-500 hover:bg-red-50">Logout</a>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>


      <div className={`bg-white p-6 border-b transition-all duration-300 ${searchOpen ? "block" : "hidden"}`}>
        <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/page-not-found'; }} className="w-full relative flex items-center">
          <input type="text" placeholder="Search..." className="w-full border p-3 pr-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#06224C]" />
          <button type="submit" aria-label="Submit search" className="absolute right-3 text-[#06224C] hover:scale-110 active:scale-95 transition-transform flex items-center justify-center w-8 h-8">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* ====== MAIN BUILDER LAYOUT ====== */}
      <div className="flex flex-1">

        {/* MAIN CONTENT */}

        {/* <div className="flex-1 bg-white p-4 md:p-7 flex justify-center min-w-0 overflow-hidden"> */}
        <div className="flex-1 bg-white p-4 md:p-7 flex justify-center min-w-0">

          <div className="w-full max-w-[1200px] relative flex flex-col h-[calc(100vh-80px)] min-w-0">

            {/* Canvas Box */}

            {/* <div className="flex-1 overflow-y-auto min-w-0"> */}
            <div className="flex-1 overflow-y-auto min-w-0 relative z-0">
              <div className="w-full min-h-[530px] bg-[#F2F2F2] rounded-xl border-2 border-gray-300 flex flex-col relative">


                {/* <div className="flex w-full flex-wrap items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 md:px-8 xl:flex-nowrap border-b border-gray-300 bg-[#06224C] rounded-t-xl"> */}
                <div className="sticky top-0 z-50 backdrop-blur-md bg-[#06224C]/95 flex w-full flex-wrap items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 md:px-8 xl:flex-nowrap border-b border-gray-300 rounded-t-xl">

                  {/* ✅ MOBILE LAYOUT */}
                  <div className="flex flex-col w-full lg:hidden gap-2">

                    {/* ROW 1 → Logo + Menu */}
                    {/* TOP ROW → Logo + Title + Menu */}
                    <div className="flex flex-wrap items-center justify-between w-full gap-2">

                      {/* LEFT → Logo */}
                      <a
                        href="index.html"
                        className="flex h-7 w-[64px] sm:h-8 sm:w-[80px] items-center justify-center overflow-hidden rounded-[50%] bg-white px-1 sm:px-2 shrink-0"
                      >
                        <img
                          src="/stackly-logo.webp"
                          alt="Stackly logo"
                          className="h-[12px] sm:h-[14px] object-contain"
                        />
                      </a>

                      {/* CENTER → Title */}
                      <span className="text-base sm:text-lg font-semibold text-white text-center flex-1 min-w-[100px]">
                        Portfolio
                      </span>

                      {/* RIGHT → Menu */}
                      <button
                        onClick={() => setInnerMobileMenuOpen((v) => !v)}
                        className="h-8 w-8 border border-white/25 text-white rounded-md hover:bg-white/10 transition flex items-center justify-center shrink-0"
                      >
                        <FaBars />
                      </button>

                    </div>

                    {/* ROW 3 → Actions (NOW VISIBLE ON MOBILE ✅) */}
                    <div className="flex justify-center">
                      <div className="flex flex-wrap justify-center gap-2 w-full max-w-[220px]">

                        {/* Save Draft */}
                        <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-md text-white hover:bg-white hover:text-black transition">
                          Save Draft
                        </button>

                        {/* Preview */}
                        <a href="preview.html" className="px-3 py-1 text-xs font-semibold flex items-center gap-1 border border-gray-300 rounded-md text-white hover:bg-white hover:text-black transition">
                          Preview <FaEye className="text-[10px]" />
                        </a>

                      </div>
                    </div>

                  </div>

                  {/* ✅ DESKTOP (unchanged) */}
                  <div className="hidden lg:flex w-full items-center justify-between">

                    <div className="flex shrink-0 justify-start">
                      <a href="index.html" className="flex h-10 min-w-[92px] items-center justify-center rounded-[50%] bg-white px-3">
                        <img src="/stackly-logo.webp" alt="Stackly logo" className="h-[18px]" />
                      </a>
                    </div>

                    <div className="flex flex-1 justify-center px-4">
                      <span className="text-lg font-semibold text-white">Portfolio</span>
                    </div>


                    <div className="flex shrink-0 items-center gap-x-6">

                      {/* NAV LINKS */}
                      <div className="flex gap-x-6">
                        {/* {["Home", "About Me", "Projects", "Contacts"].map((item, i) => (
                          <button key={i} className="relative text-white text-sm group">
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                          </button>
                        ))} */}
                        {[
                          { name: "Home", id: "home" },
                          { name: "About Me", id: "about" },
                          { name: "Projects", id: "projects" },
                          { name: "Contacts", id: "contact" },
                        ].map((item, i) => (
                          <button
                            key={i}
                            onClick={() => scrollToSection(item.id)}
                            className="relative text-white text-sm group"
                          >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                          </button>
                        ))}
                      </div>

                      {/* ACTION BUTTONS ✅ */}
                      <div className="flex border-2 border-gray-300 rounded-md overflow-hidden text-xs text-white font-bold">

                        <button className="px-2 py-1 hover:bg-white hover:text-black transition">
                          Save Draft
                        </button>

                        <div className="w-px border-1 border-gray-300"></div>

                        <a href="preview.html" className="px-2 py-1 flex items-center gap-1 hover:bg-white hover:text-black transition">
                          Preview <FaEye className="text-[10px]" />
                        </a>

                      </div>

                    </div>
                  </div>

                </div>

                {/* MOBILE MENU */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${innerMobileMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-3 pb-3 pt-2 bg-[#06224C] grid grid-cols-2 gap-2">
                    {/* {["Home", "About Us", "Projects", "Contact"].map((item, i) => (
                      <button key={i} onClick={() => setInnerMobileMenuOpen(false)} className="border border-white/25 px-3 py-2 text-xs text-white rounded-md hover:bg-white/10 transition hover:scale-105">
                        {item}
                      </button>
                    ))} */}
                    {[
                      { name: "Home", id: "home" },
                      { name: "About Us", id: "about" },
                      { name: "Projects", id: "projects" },
                      { name: "Contact", id: "contact" },
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          scrollToSection(item.id);
                          setInnerMobileMenuOpen(false);
                        }}
                        className="border border-white/25 px-3 py-2 text-xs text-white rounded-md hover:bg-white/10 transition hover:scale-105"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>


                {/* HERO SECTION WRAPPER */}
                <div id="home" className="relative w-full overflow-hidden flex flex-col">

                  {/* HERO CONTENT */}

                  <div className="flex-1 flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-8">

                      <div className="w-full lg:w-[50%] xl:w-[55%] shrink-0 flex flex-col relative z-30 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 text-gray-800 leading-snug md:leading-normal break-words whitespace-normal">
                          <div className="mb-2">Hello, I&apos;m</div>
                          <div className="text-[#63e5ff] mb-2 leading-snug break-words">Srinivas Pentakota</div>
                          <div className="leading-snug break-words">UI/UX Designer</div>
                        </h1>

                        <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0 break-words relative z-20">
                          I create modern, responsive websites with great user experience.
                        </p>

                        {/* MOBILE BLOBS + IMAGE */}
                        <div className="lg:hidden mt-8 mb-4 flex justify-center px-4 sm:px-6 w-full">
                          <div className="relative w-full max-w-[220px]">

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                              <div className="w-[90%] h-[90%] bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 opacity-20 blur-2xl rounded-full"></div>

                              <div className="absolute w-[70%] h-[50%] bg-cyan-300 opacity-20 blur-2xl rounded-full"></div>

                              <div className="absolute w-[40%] h-[40%] bg-pink-400 opacity-20 rounded-full bottom-2 right-2"></div>

                              <div className="absolute w-[60%] h-[80%] bg-cyan-300 opacity-20 blur-2xl rounded-[60%_40%_55%_45%] -top-4 -left-4"></div>

                              <div className="absolute w-[65%] h-[95%] bg-white/70 rounded-[80px] rotate-[-30deg] shadow-md"></div>
                            </div>

                            {/* Profile Image */}
                            <div className="relative overflow-hidden border-4 border-white z-10 transition-all duration-300 mx-auto"
                              style={{
                                width: `${heroImageProps.width}px`,
                                height: `${heroImageProps.height}px`,
                                maxWidth: '100%',
                                borderRadius: `${heroImageProps.borderRadius}%`,
                                boxShadow: heroImageProps.shadow ? '0 10px 25px rgba(0,0,0,0.3)' : 'none',
                                opacity: heroImageProps.opacity / 100
                              }}>
                              <img
                                src="/port.webp"
                                alt="Srinivas Pentakota - UI/UX Designer Portfolio"
                                className="w-full h-full object-cover"
                              />
                            </div>

                          </div>
                        </div>


                        <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">

                          <a
                            href="index.html"
                            className="w-40 flex justify-center items-center px-3 py-2 
               bg-gradient-to-r from-[#06224C] to-[#1A5BBC] 
               text-white rounded-lg text-sm 
               transition transform hover:scale-105 active:scale-95 
               shadow-md hover:shadow-lg

               outline-none focus:outline-none

               focus-visible:ring-4 
               focus-visible:ring-yellow-300 
               focus-visible:ring-offset-2 
               focus-visible:ring-offset-[#06224C]"
                          >
                            View My Works
                          </a>

                          <a
                            href="index.html"
                            className="w-40 flex justify-center items-center px-3 py-2 
               bg-gradient-to-r from-[#06224C] to-[#1A5BBC] 
               text-white rounded-lg text-sm 
               transition transform hover:scale-105 active:scale-95 
               shadow-md hover:shadow-lg

               outline-none focus:outline-none

               focus-visible:ring-4 
               focus-visible:ring-yellow-300 
               focus-visible:ring-offset-2 
               focus-visible:ring-offset-[#06224C]"
                          >
                            Download CV
                          </a>

                        </div>
                      </div>

                      {/* DESKTOP BLOBS */}
                      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] items-center justify-center relative min-h-[400px]">
                        <div className="relative w-full max-w-[400px] h-full flex items-center justify-center">
                          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 opacity-20 blur-2xl rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
                          <div className="absolute w-[200px] h-[150px] right-10 top-10 bg-cyan-300 opacity-20 blur-2xl rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
                          <div className="absolute w-[100px] h-[100px] left-17 bottom-22 bg-pink-400 opacity-20 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>
                          <div className="absolute w-[140px] h-[230px] bg-white/70 rounded-[80px] rotate-[-30deg] shadow-md animate-[float_6s_ease-in-out_infinite]"></div>
                          <div className="relative overflow-hidden border-4 border-white z-20 animate-[float_6s_ease-in-out_infinite] transition-all duration-300"
                            style={{
                              width: `${heroImageProps.width}px`,
                              height: `${heroImageProps.height}px`,
                              borderRadius: `${heroImageProps.borderRadius}%`,
                              boxShadow: heroImageProps.shadow ? '0 10px 25px rgba(0,0,0,0.3)' : 'none',
                              opacity: heroImageProps.opacity / 100
                            }}>
                            <img src="/port.webp" alt="Srinivas Pentakota - UI/UX Designer Portfolio" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* STATS */}

                    <div ref={statsRef} className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 lg:gap-8 mt-12 md:mt-15 mb-2 w-full flex-wrap">
                      {stats.map((item, i) => (
                        <div
                          key={i}
                          className="flex-1 min-w-[140px] sm:min-w-[160px] max-w-[280px] mx-auto sm:mx-0 bg-white py-4 min-h-[6rem] px-4 rounded-lg shadow-md flex flex-col items-center justify-center text-gray-700 transition transform hover:-translate-y-2 hover:shadow-xl text-center"
                        >
                          <h5 className="text-2xl font-bold">
                            {statsInView ? (
                              <CountUp
                                key={statsInView ? "start" : "reset"} // 👈 important fix
                                start={0}
                                end={item.value}
                                duration={2}
                                suffix={item.suffix}
                              />
                            ) : (
                              "0"
                            )}
                          </h5>

                          <span className="text-sm mt-1 break-words">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                {/* FLOAT ANIMATION */}
                <style jsx>{`
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}
`}</style>


                {/* ABOUT SECTION */}
                {/* <div className="w-full bg-[#F2F2F2] px-6 md:px-12 lg:px-20 py-16 md:py-24"> */}
                <div id="about" className="w-full bg-[#F2F2F2] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16">
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">About</h2>
                    <span className="bg-[#63e5ff] text-gray-900 font-extrabold px-3 py-1 rounded-full text-2xl md:text-3xl tracking-tight leading-none">Me</span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold text-gray-800 mb-8 md:mb-16 max-w-full md:max-w-3xl leading-relaxed break-words text-center md:text-left">
                    Described Briefly My Professional Background Skills and Accomplishments
                  </h3>

                  {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-b border-white pb-6"> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-white pb-6">

                    {/* LEFT → TEXT */}
                    <div className="flex flex-col justify-center">

                      <p className="font-extrabold text-gray-800 text-lg md:text-2xl mb-4 md:mb-6 leading-snug">
                        Hello! I&apos;m a UI/UX Designer providing awesome and modern design solutions for clients. My vision is to satisfy my clients.
                      </p>

                      <p className="text-gray-500 mb-6 md:mb-0 leading-relaxed text-sm md:text-lg">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                      </p>

                    </div>


                    <div ref={skillsRef} className="space-y-6 md:space-y-8">
                      {skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2 md:mb-3">
                            <span className="font-bold text-gray-800 text-sm md:text-lg">
                              {skill.name}
                            </span>
                            <span className="text-gray-500 text-xs md:text-sm">
                              {skill.value}%
                            </span>
                          </div>

                          <div className="w-full bg-gray-300 h-[4px] md:h-[6px] overflow-hidden">
                            <div
                              className="bg-[#1a3636] h-full transition-all duration-1000 ease-out"
                              style={{
                                width: skillsInView ? `${skill.value}%` : "0%",
                                transitionDelay: `${index * 150}ms`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* EDUCATION & EXPERIENCE SECTION */}
                <div className="w-full bg-[#F2F2F2] px-4 sm:px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-24">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">

                    {/* EDUCATION */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 border-b border-gray-200 pb-3">
                        Education
                      </h3>

                      <div className="space-y-5 md:space-y-6">

                        {[
                          { id: "01", date: "March 2013 - 2016", title: "Computer Science" },
                          { id: "02", date: "March 2017 - 2018", title: "Graphic Design" },
                          { id: "03", date: "June 2019 - 2021", title: "Web Development" },
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start sm:items-center gap-4 sm:gap-6 border-b border-gray-200 pb-4 sm:pb-6"
                          >
                            {/* NUMBER */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-[#1a3636] text-white rounded-full flex justify-center items-center font-bold text-xs sm:text-sm">
                              {item.id}
                            </div>

                            {/* TEXT */}
                            <div className="flex-1">
                              <p className="text-gray-500 text-xs sm:text-sm mb-1 font-medium break-words">
                                {item.date}
                              </p>
                              <h4 className="text-base sm:text-lg font-bold text-gray-800 break-words">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 border-b border-gray-200 pb-3">
                        Experience
                      </h3>

                      <div className="space-y-5 md:space-y-6">

                        {[
                          { id: "01", date: "January 2021 - 2022", title: "Microsoft" },
                          { id: "02", date: "March 2022 - 2023", title: "Google Inc" },
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start sm:items-center gap-4 sm:gap-6 border-b border-gray-200 pb-4 sm:pb-6"
                          >
                            {/* NUMBER */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-[#1a3636] text-white rounded-full flex justify-center items-center font-bold text-xs sm:text-sm">
                              {item.id}
                            </div>

                            {/* TEXT */}
                            <div className="flex-1">
                              <p className="text-gray-500 text-xs sm:text-sm mb-1 font-medium break-words">
                                {item.date}
                              </p>
                              <h4 className="text-base sm:text-lg font-bold text-gray-800 break-words">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>
                {/* </div> */}

                {/* MY SERVICES SECTION */}
                <div className="w-full bg-[#F2F2F2] px-6 md:px-12 lg:px-20 pb-16 lg:pb-24">
                  <div className="text-center mb-16">
                    {/* <h3 className="text-base font-bold flex items-center justify-center gap-1 mb-4 text-gray-800 tracking-wide"> */}
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">My</h2>
                      <span className="bg-[#63e5ff] text-gray-900 font-extrabold px-3 py-1 rounded-full text-2xl md:text-3xl tracking-tight leading-none">Services</span>
                    </div>
                    {/* <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight"> */}

                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold text-gray-800 mb-8 md:mb-16 max-w-full md:max-w-3xl leading-relaxed break-words text-center md:text-left">
                      Provide Wide Range of  Digital Services
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {[
                      { id: "01", title: "Web Development", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "02", title: "UI / UX DESIGN", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "03", title: "eCommerce Solution", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "04", title: "CMS Development", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "05", title: "Web Design", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "06", title: "3D Printing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "07", title: "App Development", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                      { id: "08", title: "Marketing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
                    ].map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-[20px] p-5 sm:p-6 lg:p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white group hover:border-gray-300 cursor-pointer h-full">
                        <div className="w-12 h-12 mb-4 sm:mb-6 flex items-center justify-center text-gray-800 shrink-0">
                          {service.id === "01" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
                          {service.id === "02" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>}
                          {service.id === "03" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>}
                          {service.id === "04" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><circle cx="12" cy="10" r="2"></circle></svg>}
                          {service.id === "05" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path></svg>}
                          {service.id === "06" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
                          {service.id === "07" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>}
                          {service.id === "08" && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.76a1 1 0 0 1 .84.45l2.4 3.6a1 1 0 0 1-.84 1.55H11z"></path><path d="M18 10h-2V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4z"></path></svg>}
                        </div>
                        <h4 className="text-[17px] font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h4>
                        <p className="text-gray-500 text-[13px] leading-relaxed mb-6 sm:mb-8 flex-1">
                          {service.desc}
                        </p>
                        <div className="mt-auto flex items-center gap-1.5 w-full shrink-0">
                          <div className="w-[30px] h-[30px] rounded-full bg-[#1a3636] text-white flex items-center justify-center text-[11px] font-semibold shrink-0 group-hover:bg-[#63e5ff] group-hover:text-gray-900 transition-colors">
                            {service.id}
                          </div>
                          <div className="flex items-center text-gray-300 group-hover:text-gray-900 transition-colors">
                            <span className="w-8 h-[1px] bg-current"></span>
                            <FaArrowRight size={10} className="-ml-[2px]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MY PROJECTS SECTION */}

                <div id="projects" className="w-full bg-[#F2F2F2] px-0 md:px-6 lg:px-12 pb-16 lg:pb-24 relative overflow-hidden">

                  {/* <div className="px-6 md:px-6 lg:px-8 mb-12">
                    <h2 className="text-base font-bold flex items-center gap-1 mb-4 text-gray-800 tracking-wide w-max">
                      My <span className="bg-[#c4ff0b] text-gray-900 px-2 py-0.5 rounded-full text-sm font-extrabold ml-1 leading-none shadow-sm flex items-center h-6">Projects</span>
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 max-w-2xl leading-[1.15]">
                      Showcase Your Talent with our <br className="hidden md:block" /> Latest Works
                    </h3>
                  </div> */}
                  <div className="text-center mb-16">
                    {/* <h3 className="text-base font-bold flex items-center justify-center gap-1 mb-4 text-gray-800 tracking-wide"> */}
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">My</h2>
                      <span className="bg-[#63e5ff] text-gray-900 font-extrabold px-3 py-1 rounded-full text-2xl md:text-3xl tracking-tight leading-none">Projects</span>
                    </div>
                    {/* <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight"> */}

                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold text-gray-800 mb-8 md:mb-16 max-w-full md:max-w-3xl leading-relaxed break-words text-center md:text-left">
                      Showcase Your Talent with our <br className="hidden md:block" /> Latest Works
                    </h3>
                  </div>


                  <div
                    id="projects-slider"
                    className="w-full overflow-x-auto flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {[
                      {
                        tag: "Graphics Design",
                        title: "UI / UX Mobile App Design",
                        img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=500&fit=crop"
                      },
                      {
                        tag: "UI UX Design",
                        title: "Website Template Design",
                        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                      },
                      {
                        tag: "Programming",
                        title: "ISO App Development",
                        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop"
                      },
                      {
                        tag: "Graphics Design",
                        title: "HandCraft With Palm fan",
                        img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=500&fit=crop"
                      },
                      {
                        tag: "Marketing",
                        title: "Social Media Marketing",
                        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=500&fit=crop"
                      },
                      {
                        tag: "Development",
                        title: "Full Stack Web Application",
                        img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=500&fit=crop"
                      }
                    ].map((proj, i) => (
                      <div key={i} className="flex flex-col flex-none w-[240px] sm:w-[260px] max-w-[80vw] shrink-0 snap-start cursor-pointer group">
                        <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4 sm:mb-5 relative border border-gray-100 shadow-sm">
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 w-full h-full"></div>
                          <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex items-start mb-3">
                          <span className="bg-[#63e5ff] border border-gray-900 text-gray-900 px-3.5 py-1.5 rounded-full text-[11px] font-semibold leading-none">
                            {proj.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-[15px] text-gray-900 leading-snug group-hover:text-[#1a3636] transition-colors mt-1">{proj.title}</h4>
                      </div>
                    ))}
                  </div>


                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 w-full relative px-4 sm:px-8">
                    <button
                      onClick={() => {
                        const slider = document.getElementById('projects-slider');
                        if (slider) slider.scrollBy({ left: -280, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center p-2 group hover:opacity-70 transition-opacity cursor-pointer"
                      aria-label="Slide Left"
                    >
                      <svg width="40" height="16" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] sm:w-[60px]">
                        <path d="M10 5L5 10L10 15M5 10H55" stroke="#1a3636" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const slider = document.getElementById('projects-slider');
                        if (slider) slider.scrollBy({ left: 280, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center p-2 group hover:opacity-70 transition-opacity cursor-pointer"
                      aria-label="Slide Right"
                    >
                      <svg width="40" height="16" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] sm:w-[60px]">
                        <path d="M50 5L55 10L50 15M55 10H5" stroke="#1a3636" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* <button
                      className="md:absolute right-4 md:right-8 bg-[#1a3636] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform ml-auto md:ml-0 shrink-0"
                      aria-label="Scroll to top"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </button> */}
                  </div>
                </div>

                {/* CONTACT SECTION */}
                <div id="contact" className="w-full bg-[#F2F2F2] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-24 relative border-t border-gray-100">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">

                    <div>
                      {/* <h2 className="text-base font-bold flex items-center gap-1 mb-4 text-gray-800 tracking-wide w-max">
                        Get In <span className="bg-[#c4ff0b] text-gray-900 px-2 py-0.5 rounded-full text-sm font-extrabold ml-1 leading-none shadow-sm flex items-center h-6">Touch</span>
                      </h2> */}
                      <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Get In</h2>
                        <span className="bg-[#63e5ff] text-gray-900 font-extrabold px-3 py-1 rounded-full text-2xl md:text-3xl tracking-tight leading-none">Touch</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-2xl leading-[1.15] mb-6">
                        Let’s build something <br className="hidden md:block" />  great together.
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md">
                        Fill out the form or reach out via email to discuss how we can work together to bring your ideas to life.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#1a3636]">
                            <FaEnvelope size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                            <p className="text-gray-900 font-bold">hello@example.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#1a3636]">
                            <FaMobileAlt size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Phone</p>
                            <p className="text-gray-900 font-bold">+1 (555) 000-0000</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                      <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Your Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#63e5ff] focus:border-transparent transition-all" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Your Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#63e5ff] focus:border-transparent transition-all" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Subject</label>
                          <input type="text" placeholder="Web Design Inquiry" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#63e5ff] focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Message</label>
                          <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#63e5ff] focus:border-transparent transition-all resize-none"></textarea>
                        </div>
                        <button className="w-full bg-[#1a3636] hover:bg-gray-900 text-white font-bold rounded-xl px-4 py-3.5 text-sm transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-gray-900/20">
                          Send Message
                          <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </div>

                  </div>
                </div>

                {/* PORTFOLIO FOOTER */}
                {/* <footer className="w-full bg-[#1a3636] text-white py-10 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-20 relative rounded-b-xl">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 sm:gap-8 border-b border-white/10 pb-8 sm:pb-10">

                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="text-xl font-black tracking-widest uppercase flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#477892] text-[#06224C] rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          S
                        </div>
                        Srinivas
                      </div>
                      <p className="text-sm text-gray-300 max-w-sm text-center md:text-left leading-relaxed">
                        A passionate UI/UX Designer crafting beautiful, engaging, and user-friendly digital experiences.
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {["Twitter", "LinkedIn", "Instagram", "Globe"].map((platform) => (
                        <a key={platform} href="#_" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c4ff0b] hover:text-[#06224C] hover:border-[#c4ff0b] transition-all transform hover:-translate-y-1">
                          {platform === "Twitter" && <FaXTwitter size={14} />}
                          {platform === "LinkedIn" && <FaLinkedinIn size={14} />}
                          {platform === "Instagram" && <FaInstagram size={14} />}
                          {platform === "Globe" && <FaGlobe size={14} />}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center mt-6 gap-4 text-xs text-gray-400 text-center lg:text-left">
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 font-medium">
                      <span className="hover:text-[#c4ff0b] cursor-pointer transition-colors">Home</span>
                      <span className="hover:text-[#c4ff0b] cursor-pointer transition-colors">About</span>
                      <span className="hover:text-[#c4ff0b] cursor-pointer transition-colors">Services</span>
                      <span className="hover:text-[#c4ff0b] cursor-pointer transition-colors">Projects</span>
                      <span className="hover:text-[#c4ff0b] cursor-pointer transition-colors">Contact</span>
                    </div>

                    <p>© 2026 Srinivas Pentakota. All rights reserved.</p>
                  </div>
                </footer> */}
                {/* MODERN FOOTER */}
                <footer className="w-full bg-[#0b1f2a] text-white pt-14 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 rounded-b-xl relative overflow-hidden">

                  {/* TOP SECTION */}
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">

                    {/* BRAND */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 bg-[#63e5ff] text-[#06224C] rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          S
                        </div>
                        <h2 className="text-xl font-bold tracking-wide">Srinivas</h2>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Crafting modern, user-friendly interfaces with a focus on clean design
                        and meaningful user experiences.
                      </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
                        Quick Links
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-400">
                        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="hover:text-[#c4ff0b] transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
                        Services
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="hover:text-[#c4ff0b] cursor-pointer">UI/UX Design</li>
                        <li className="hover:text-[#c4ff0b] cursor-pointer">Web Design</li>
                        <li className="hover:text-[#c4ff0b] cursor-pointer">Mobile Design</li>
                        <li className="hover:text-[#c4ff0b] cursor-pointer">Branding</li>
                      </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
                        Contact
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>Email: yourmail@gmail.com</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Location: India</li>
                      </ul>

                      {/* SOCIAL ICONS */}
                      <div className="flex gap-3 mt-5">
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c4ff0b] hover:text-black transition">
                          <FaXTwitter size={14} />
                        </a>
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c4ff0b] hover:text-black transition">
                          <FaLinkedinIn size={14} />
                        </a>
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c4ff0b] hover:text-black transition">
                          <FaInstagram size={14} />
                        </a>
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c4ff0b] hover:text-black transition">
                          <FaGlobe size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM BAR */}
                  <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3 text-center md:text-left">
                    <p>© 2026 Srinivas Pentakota. All rights reserved.</p>

                    <div className="flex gap-4">
                      <span className="hover:text-[#c4ff0b] cursor-pointer">Privacy Policy</span>
                      <span className="hover:text-[#c4ff0b] cursor-pointer">Terms</span>
                    </div>
                  </div>

                  {/* BACKGROUND GLOW EFFECT */}
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#c4ff0b]/10 rounded-full blur-3xl"></div>
                </footer>

              </div>
            </div>

            {/* <div className="w-full flex items-center justify-between mt-8 px-4"> */}
            <div className="w-full flex items-center justify-between px-4 py-3 mt-10 border-t bg-white">

              {/* 
              <button className="h-10 px-4 rounded-lg flex items-center gap-2 text-blue-800 border border-blue-600 bg-transparent hover:bg-blue-50">
                Help
              </button>


              <div className="h-10 flex items-center justify-center rounded-lg px-3 gap-3 bg-transparent border border-blue-600">
                <button className="h-full px-3 rounded flex items-center text-blue-800 hover:bg-blue-50">
                  <FaLaptop />
                </button>
                <button className="h-full px-3 rounded flex items-center text-blue-800 hover:bg-blue-50">
                  <FaMobileAlt />
                </button>
                <button className="h-full px-3 rounded flex items-center text-blue-800 hover:bg-blue-50">
                  <FaTabletAlt />
                </button>
                <button className="h-full px-3 rounded flex items-center text-blue-800 hover:bg-blue-50">
                  <FaSearch />
                </button>
              </div>


              <button className="h-10 px-4 rounded-lg flex items-center gap-2 text-blue-800 border border-blue-600 bg-transparent hover:bg-blue-50">
                Zoom
              </button> */}

            </div>
          </div>


        </div>




      </div>
      <footer className="w-full bg-[#051b3b] text-white shrink-0 py-10 sm:py-12 border-t-2 border-gray-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">

            {/* Column 1 */}
            <div className="flex flex-col gap-8 md:col-span-1">




              <form
                onSubmit={handleEmailSubmit}
                className="max-w-[260px] flex flex-col items-start gap-1"
              >
                <div className="flex items-center gap-2 w-full">
                  {/* INPUT */}
                  <div className="flex-grow relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />

                    <input
                      type="text"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      className={`w-full pl-9 pr-4 py-2.5 rounded-full bg-white text-black text-sm outline-none 
      placeholder-gray-700 border border-gray-700 shadow-sm
      focus:shadow-md focus:ring-2 
      ${emailError
                          ? "ring-2 ring-red-500 focus:ring-red-500 border-red-500"
                          : "focus:ring-blue-400 focus:border-blue-400"}`}
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="text-white hover:text-blue-300 transition group shrink-0"
                  >
                    <FaPaperPlane className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
                {emailError && (
                  <span className="text-red-400 text-xs ml-3 font-medium">{emailError}</span>
                )}
              </form>

              {/* ADDRESS */}
              <div className="text-[13px] text-white/80 leading-relaxed space-y-1">
                <h4 className="font-bold text-white mb-3 text-[15px]">Headquarters</h4>
                <p>MMR Complex, Salem,</p>
                <p>Tamil Nadu 636008</p>
              </div>

            </div>

            {/* PRODUCT */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-white text-[18px]">Product</h3>
              <ul className="flex flex-col gap-3 text-[15px] text-white">
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Features
                </a>

                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Templates
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Pricing
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Changelog
                </a>
              </ul>

            </div>

            {/* RESOURCES */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-white text-[18px]">Resources</h3>
              <ul className="flex flex-col gap-3 text-[15px] text-white">
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Documentation
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  API Reference
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Blog
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Status
                </a>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-white text-[18px]">Company</h3>
              <ul className="flex flex-col gap-3 text-[15px] text-white">
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  About
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Privacy Policy
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Terms of Service
                </a>
                <a href="index.html" className="transition-all duration-300 hover:text-gray-300 hover:translate-x-1 cursor-pointer">
                  Contact
                </a>
              </ul>
            </div>

            {/* LOGO + ABOUT */}
            <div className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
              <div className="flex flex-col gap-3">
                {/* <img src="/stackly-logo.webp" className="h-[20px]" /> */}
                <a
                  href="index.html"
                  className="flex h-10 w-fit items-center justify-center rounded-[50%] bg-white px-4 transition hover:scale-105"
                >
                  <img src="/stackly-logo.webp" alt="Stackly logo" className="h-[18px] w-auto" />
                </a>



              </div>


              <p className="text-[12px] text-white/70 max-w-[220px]">
                The <strong className="text-white">NO-CODE</strong> website builder for everyone. Powered by AWS infrastructure, built by<strong className="text-white"> The Stackly team.</strong>
              </p>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 mb-8"></div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* ✅ UPDATED SOCIAL ICONS */}
            <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-4 text-[#051b3b]">

              <a
                href="https://www.facebook.com/thestackly/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-blue-600 transition"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.youtube.com/@TheStackly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-red-600 transition"
              >
                <FaYoutube size={14} />
              </a>
              <a
                href="https://www.instagram.com/the_stackly/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-pink-600 transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://x.com/the_stackly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-black transition"
              >
                <FaXTwitter size={14} />
              </a>

              <a
                href="https://www.linkedin.com/company/the-stackly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-blue-700 transition"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://www.thestackly.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackly website"
                className="hover:scale-110 hover:text-green-600 transition"
              >
                <FaGlobe size={14} />
              </a>

            </div>

            {/* COPYRIGHT */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px] text-white/70 text-center mt-6 md:mt-0">
              <a href="index.html" className="hover:text-white transition">
                Terms of Use
              </a>
              <a href="index.html" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span>© 2018-2026 thestackly.com, Inc</span>
            </div>

          </div>

        </div>
      </footer>
    </main >
  );
}
