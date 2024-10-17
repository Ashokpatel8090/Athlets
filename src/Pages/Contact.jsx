export const Contact = () =>{

    const handleFormSubmit = (formData)=>{
        console.log(formData.entries());
        //entries return key values pair form data
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);
        
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input 
                type="text"
                 required 
                 autoComplete="off"
                 placeholder="Enter your name"
                 name="username"
                 />

                <input 
                className="form-control"
                type="email"
                 required 
                 autoComplete="off"
                 placeholder="Enter your email"
                 name="email"
                 />

                <textarea
                className="form-control"
                rows="10"
                placeholder="Enter your message"
                required
                autoComplete="off"
                name="message"
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>
            </div>
            
        </section>
    )
}