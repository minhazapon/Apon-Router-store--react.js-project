

function Details({ router }) {

    const { id, image, name, company, details, price, brand } = router


    return (
        <div>
            <p> {name} </p>
        </div>
    )
}

export default Details
