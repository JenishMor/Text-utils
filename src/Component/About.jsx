import React from 'react'

function About(props) {
    return (
        <div className={`container bg-${props.mode} text-${props.textMode}`}>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam odit iusto minima asperiores labore excepturi delectus eum, reiciendis voluptatibus quia nobis, quam voluptatem itaque architecto debitis aliquid quos optio nam corporis aspernatur magni beatae neque? Suscipit enim inventore esse quaerat, qui repudiandae eligendi ad voluptatem? Amet, facilis totam. Iste, tenetur? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima corporis nemo, vel debitis quas suscipit esse ad quos eum, obcaecati deleniti repudiandae exercitationem soluta magni similique quidem numquam. Maiores. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo voluptatibus ea temporibus vero ad mollitia autem eum voluptatum laudantium.</p>
        </div>
    )
}

export default About;