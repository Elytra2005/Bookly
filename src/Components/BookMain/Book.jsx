import '../BookMain/Book.css'
import { Calendar } from "../ui/calendar";
import { useState } from 'react';
import { useId } from "react";

export default function Book() {
  const [date, setDate] = useState(new Date());
  const [id1, setIdOne] = useState(null);
  const [id2, setIdTwo] = useState(null);

  const [clickOne, clickStateOne] = useState(false);
  const [clickTwo, clickStateTwo] = useState(false);

  const timeStamps = [
     {time: "9:00 AM", id: useId()},
     {time: "10:00 AM", id: useId()},
     {time: "11:00 AM", id: useId()}, 
     {time: "12:00 PM", id: useId()},
  ]

  const showConfirmOne = (selectedID) => {
       setIdOne(selectedID);
  }
  
  const showConfirmTwo = (selectedID) => {
        setIdTwo(selectedID);
  }


  const reverse = () => {
     clickStateOne(!clickOne);
  }

  const reverseTwo = () => {
     clickStateTwo(!clickTwo);
  }

  const buttonSectionOne = timeStamps.slice(0,2);
  const buttonSectionTwo = timeStamps.slice(2,4);


    return (
        <>
       
          <section className='section-book'>
       
  

             <div className='book-container'>

             {/* mostly dots for deocration */}
              <div className='dot-1'></div>
             <div className='dot-2'></div>
             <div className='dot-3'></div>
             <div className='dot-4'></div>


                  <div className='hold-calendar'>
                     <Calendar 
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="calendar rounded-lg border" />
                 </div>

         
             {/* cool hr line i made cuz theres no vr tag */}
            <div className='calendar-title'>
                <h3>Book Appointment</h3>
            </div>


             <div className='vertical-line'></div>
         
            
              <div className='confirm-container'>
                   <div className='title-and-date'>
                        <h3 className='fun-title'>Pick a Time, Pal!</h3>
                        <p className='date-selection'>{date.toLocaleDateString()}</p>
                   </div>
                    
                     <div className='contain-buttons'>
 
                      {/* Error log this component is duplicating buttons and also not responding correctly */}
                      {/* when i click on a button it works but when i click another it duplicates, so i think theres a conditional issue */ }
                            <div className='button-section-1 flex flex-row gap-4 w-full'>
                              {buttonSectionOne.map((slot) => {
                                    return (
                                      <div className='button-bar gap-4'>
                                        <div className=''> 
                                          <button key={slot.id} id={slot.id} onClick={() => {
                                                    showConfirmOne(slot.id); reverse();
                                          }} className='cursor-pointer time-button button bg-special'>{slot.time}</button>
                                          {slot.id === id1 && !clickOne ? <button key={slot.id} className='cursor-pointer button-confirm bg-light-special  border-cartoony ' style={{marginTop: "15px"}}>Confirm</button> : null}
                                        </div>
                                      </div>
                                    )
                                })}
                            </div>
                        

                          <div className='button-section-2 flex flex-row gap-4 w-full'> 
                              {buttonSectionTwo.map((slot) => {
                              return (
                                <div className='button-bar gap-4'>
                                  <div className='d-flex'> 
                                    <button key={slot.id} id={slot.id} onClick={() => {
                                          showConfirmTwo(slot.id); reverseTwo();
                                    }} className='cursor-pointer time-button button bg-special'>{slot.time}</button>
                                    {slot.id === id2 && !clickTwo && clickOne != false ? <button key={slot.id} className='cursor-pointer button-confirm bg-light-special mt-1 border-cartoony'>Confirm</button> : null}
                                  </div>
                                </div>
                              )
                            })}
                            
                          </div>
                     </div>              
                 </div>



             </div>

             
    
          </section>
   
        </>
    )
}