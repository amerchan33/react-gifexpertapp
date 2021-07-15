import {useState,useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state,setSate] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getGifs(category).then(images => {

            setTimeout(()=>{
                setSate({
                    data: images,
                    loading: false
                })
            },3000)  
            
        })
    }, [category])

    return state;
}
