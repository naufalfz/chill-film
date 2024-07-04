import React from 'react'

function Footer() {
   
    return (
    
    <footer className="footer slate-900 text-base-content p-10">
     
    <aside>
      <img src="/src/assets/Images/logo1.png" alt="Chill" />
    
      <p>
    @2024 Chill All Rights Reserved.
        <br />
       
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Genre</h6>
      
      <a className="text-white link link-hover">Action</a>
      <a className="text-white link link-hover">Adventure</a>
      <a className="text-white link link-hover">Animation</a>
      <a className="text-white link link-hover">Comedy</a>
    
    </nav>
    <nav>
        <br></br>
      <h6 className="px-2"></h6>
      <a className="text-white link link-hover">Crime</a>
      <a className="text-white link link-hover">Sci-Fi & Fantasy</a>
      <a className="text-white link link-hover">Romance</a>
      <a className="text-white link link-hover">Drama</a>
    </nav>
    {/* <nav>
        <br></br>
      <h6 className="px-2"></h6>
      <a className="link link-hover">Komedi</a>
      <a className="link link-hover">Petualangan</a>
      <a className="link link-hover">Perang</a>
      <a className="link link-hover">Romantis</a>
    </nav> */}
    <nav>
      <h6 className="footer-title">Help</h6>
      <a className="text-white link link-hover">FAQ</a>
      <a className="text-white link link-hover">Contact Us</a>
      <a className="text-white link link-hover">Privacy</a>
      <a className="text-white link link-hover">Term & Condition</a>
    </nav>
  </footer>
  )
}

export default Footer