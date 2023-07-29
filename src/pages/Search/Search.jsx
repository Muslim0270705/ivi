import React, {useEffect, useState} from 'react';

import instance from "../../utlis/instance";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Card from "../../components/Card/Card";
const Search = ({active}) => {
    const [name,setName] = useState("")
    const [data,setData] = useState("")
    const getSearch = (name) => {
         instance(`/movie?${name.length ? `name=${name}` : ""}`)
             .then(({data}) => setData(data.docs))
             .catch((err) => console.log(err))
    }
    console.log(data)
    useEffect(() => {
        getSearch(name)
    },[name])
    return (
        <div className={"search"} style={{display: active ? "block" : "none"}}>
            <div className="container">
                <input type="text" className="search__input" onChange={(e) => setName(e.target.value)}/>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                       data && name.length ? data.map(item => (
                            <SwiperSlide>
                                <Card item={item} opp={true}/>
                            </SwiperSlide>

                                ))
                           : ""
                    }




                 </Swiper>
            </div>
        </div>
    );
};

export default Search;