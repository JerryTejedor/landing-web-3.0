import ImgMobile from '../assets/images/image-web-3-mobile.jpg'
import ImgDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    // hay un error en el margin de la section
    <section className='mb-12'> 
      <picture>
        <source media='(max-width: 640px)' srcSet={ImgMobile} />
        <source media='(min-width: 641px)' srcSet={ImgDesktop} />
        <img src={ImgMobile} alt="imagen articulo principal" />
      </picture>
      <div className='sm:flex gap-3'>
         <div className='sm:flex-1 py-6'>
            <h2 className='text-[40px] font-bold sm:text-[58px] sm:w-[300px]
            leading-none'>The Bright Future of Web 3.0?</h2>
          </div>
         <div className='sm:flex-1 sm:pt-9'>
           <p className='text-[13px] mb-10 sm:text-[18px]'> 
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?
           </p>
           <button className='bg-Softred w-[185px] h-[48px] uppercase
            text-Offwhite hover:bg-Verydarkblue duration-300'>Read more</button>
         </div>
      </div>
    </section>
  )
}



 

