import { Form } from "react-router-dom"
import Swal from "sweetalert2"

export const handleForm = async ({ request }) => {

    try {
        const res = await request.formData()
        const data = Object.fromEntries(res)
        console.log(data)

        Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "OK",
        });

        document.querySelector("form").reset();

        return null
    } catch (error) {
        console.log(error)
    }

}

function FormCompo() {

    return (
        <div className="m-20">
            <div>
                <p className="text-center text-2xl font-bold text-black">Contact Form</p>
            </div>
            <div>
                <Form method="POST" action="/contactForm">
                    <div className=" mt-10 ">
                        <div>
                            <input placeholder="name" className=" p-1 h-[50px] w-full border-[1px] border-cyan-600 " type="text" name="name" />
                        </div>
                        <div>
                            <input placeholder="Email" className=" mt-5 p-1 h-[50px] w-full border-[1px] border-cyan-600 " type="email" name="email" />
                        </div>
                        <div>
                            <input placeholder="message" className=" mt-5 p-1 h-[50px] w-full border-[1px] border-cyan-600 " type="text" name="message" />
                        </div>
                        <div>
                            <input className=" btn w-full mt-5 bg-black text-white " type="submit" value="Submit" />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FormCompo
