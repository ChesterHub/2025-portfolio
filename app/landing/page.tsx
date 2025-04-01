import React from 'react'

const LandingSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
          Welcome to my personal abode! I am a software engineer with over 7+ years of experience. My passion for code comes when I build applications that leave a lasting impact at a company. When not coding, I am out traveling, eating all the things, and hanging out with loved ones.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default LandingSection
