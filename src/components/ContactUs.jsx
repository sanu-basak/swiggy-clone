const ContactUs = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold p-4 m-4">Contact Us Page</h1>
            <input type="text" placeholder="name" className="border border-black p-2 m-2 rounded-2xl"/>
            <input type="text" placeholder="message" className="border border-black p-2 m-2 rounded-2xl"/>
            <button className="border bg-yellow-400 p-2 m-2 rounded-2xl">Submit</button>
        </div>
    )
}

export default ContactUs