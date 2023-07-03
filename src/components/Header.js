import React from 'react';
//images

import Logo from '../assets/logo.svg'

const PDF_URL = '/shivank_resume.pdf';

const Header = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.setAttribute('download', 'shivank_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return <header className=' py-8'>
    <div className='container mx-auto'>
     <div className='flex justify-between items-center'>
      {/* logo */}
      <a href='https://shivank-goel.github.io/Website/'>
      <img src={Logo} alt=' '/>
      </a>
      {/* button */}
      <button type='button' className='btn btn-sm' onClick={handleDownload}>
        CV
      </button>
     </div>
    </div>
  </header>;
};

export default Header;
