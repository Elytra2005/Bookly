import '../BookMain/Book.css'
import "tailwindcss";

export default function Book() {
    return (
        <>

         <div className="contain-book-main flex flex-col items-center justify-center px-4 py-8 text-sans text-xl">
            
            <div className="container-main flex flex-row justify-center items-center gap-10">
                    <div className='inner-section-1'>
                        <div className='person-profile'>
                            <div className="contain-image-profile">
                                {/* profile pic details will be here later */}
                            </div>
                            <p>Mahmoud El Hajj</p>
                            <h3>{/* What this booked will be about */}</h3>
                            <div className='contain-other-details'>
                                {/* other details will be here later */}
                            </div>
                        </div>
                    </div>

                    <div className='inner-section-1'>
                          {/* booking calendar will be here */} 
                    </div>

                    <div className='inner-section-1'>
                          {/* booking confirmation will be here */}
                    </div>
            </div>
           
         </div>
   
        </>
    )
}