import { Form } from "react-router-dom"


function FormCompo() {


    return (
        <div className="m-20">

            <div>
                <p className="text-center text-2xl font-bold text-black">Contact Form</p>
            </div>

            <div>

                <Form>

                    <div>

                        <div>
                            <input type="text" name="name" />
                        </div>


                    </div>

                </Form>

            </div>
        </div>
    )
}

export default FormCompo
