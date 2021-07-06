import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Getdata } from './store/Getdata'




function Home() {

    let state = useSelector(state => state)
    console.log(state)
    let dispatch = useDispatch();


    // const update = () => {



    // }

    // console.log("Todos" , state.todos)

    useEffect(() => {

        dispatch(Getdata())
    }, [])


    return (
        <div>

            {/* <button onClick={update}>Click and then update</button> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <li className="list-unstyled p-3 m-2 text-light my-des mb-3">Country Region</li>

                        {state.todos.map((e, i) =>
                            <li className="list-unstyled p-3 m-2 text-light my-des" key={i}>{e.countryRegion}</li>
                        )}
                    </div>
                    <div className="col-md-3">
                    <li className="list-unstyled p-3 m-2 text-light my-des mb-3 ">Confirmed</li>

                        {state.todos.map((e, i) =>
                            <li className="list-unstyled p-3 m-2 text-light my-des" key={i}>{e.confirmed}</li>
                        )}
                    </div>
                    <div className="col-md-3">
                        <li className="list-unstyled p-3 m-2 text-light my-des mb-3">recovered</li>
                        {state.todos.map((e, i) =>
                        
                            <li className="list-unstyled p-3 m-2 text-light my-des" key={i}>{e.recovered}</li>
                        )}
                    </div>
                    <div className="col-md-3">
                    <li className="list-unstyled p-3 m-2 text-light my-des mb-3">Deaths</li>

                        {state.todos.map((e, i) =>
                            <li className="list-unstyled p-3 m-2 text-light my-des" key={i}>{e.deaths}</li>
                        )}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;