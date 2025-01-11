import './style.css'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function EmblaCarousel({images}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },[Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img,i)=>

        <div key={i} className="embla__slide">
            <img src={img} width="50%" height="100%"/>
        </div>
        )}
      </div>
    </div>
  )
}