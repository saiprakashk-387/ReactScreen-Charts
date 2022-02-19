import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DonutChart from './DonutChart'
import { BiInfoCircle, } from "react-icons/bi";
export const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        get();
    }, [])

    const get = () => {
        axios.get("https://ghibliapi.herokuapp.com/species").then((res) => {
            setData(res.data)
        })
    }
    return (
        <div>
            <div class="row">
                {data?.slice(0, 4).map((val) => {
                    return <>
                        <div class="col-sm-2">
                            <div class="card">
                                <div class="card-body" style={{ "height": "144px" }}>
                                    <h5 class="card-title">{val.classification} <span><BiInfoCircle/></span> </h5>
                                    <p class="card-text">{val.name}</p>
                                </div>
                            </div>
                        </div>

                    </>
                })}
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body" style={{ "height": "144px" }}>
                            <div id="chart" style={{ "height": "144px", "marginTop": "-11px" }}>
                                <DonutChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;
