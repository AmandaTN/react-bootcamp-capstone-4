/* eslint-disable max-len */
import {bannersData} from '../../../mocks/featured-banners-data.js'
import "./styles.css"

export function Slider() {
    
    const banners = bannersData.results
    console.log(banners)
      
    return (
        <>
            {banners.map((image, i, key) => {
                const imgStyle = {
                    backgroundImage: `url( ${image.data.main_image.url})`,
                }

                return (
                    <div style={imgStyle} id={image.id} className='slider'>
                    <img alt={image.data.main_image.alt} src={image.data.main_image.url}/>
                    </div>
                )
            })}
        </>
    )
}


    
    // const bannersDataJSON = (".../../../mocks/en-us/featured-banners.json")

    // fetch(bannersDataJSON,{
    //     method : 'GET',
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //      },
    //   })
    // .then(async response => {
    //     try {
    //      const data = await response.json()
    //      if (response.success) {
    //         console.log("Success")
    //       }else{
    //           console.log("Failure")
    //       }
    //      console.log('response data?', data)
    //    } catch(error) {
    //      console.log('Error happened here!')
    //      console.error(error)
    //    }
    // })