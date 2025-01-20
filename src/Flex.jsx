import React from 'react'
import './style.css'
import vid from '../public/vid.mp4'

const Flex = () => {
    return (
        <>
            <div class="flex">
                <div class="flex-left">
                    <h1>We are trusted by more than 3600+ clients</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nam quibusdam dicta voluptatem
                        eligendi veniam porro aut ipsam, deserunt, illo ratione nemo iste reprehenderit in cumque
                        perferendis quas quod. Ullam.</p>
                    <button>Learn More</button>
                </div>
                <div class="flex-right">
                    <video src={vid} autoPlay={true} muted loop></video>
                </div>
            </div>
        </>
    )
}

export default Flex
