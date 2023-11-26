export const Article = ({img, numero,subTittle,texto}) => {
  return (
    <article className='flex h-[162px] items-end'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="imagen de articulo" />
        </div>
        <div className='pl-6'>
            <p className='text-Grayishblue text-3xl mb-[10px] font-bold'>{numero}</p>
            <h2 className='font-bold mb-3 hover:text-Softorange 
            transition-all cursor-pointer'>{subTittle}</h2>
            <p className='text-Grayishblue'>{texto}</p>
        </div>
    </article>
    
  )
}





//  
//  
//  