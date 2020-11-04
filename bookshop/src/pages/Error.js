import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Error() {
    return <Hero>
        <Banner title="404" subtitle="Sorry you missing this room!">
            <Link to="/" className="btn-primary">Go to Home .... page.</Link>
        </Banner>

    </Hero>;
}
