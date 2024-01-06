export function NetflixRegister(){

    const submitText = ()=>{
        //alert("Are You sure to Submit Test.....?")
        
        if(window.confirm('Are you sure you want to submit?')){
            console.log("Submitted Test.....")
        }
    };
    return(
        <div className="p-5 text-white text-center">
        <p cla>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group input-group-lg">
            <input type="email" className="form-control"/>
            <button onClick={submitText} className="btn btn-danger">
               
                Get Started
                <span className="bi bi-chevron-right"></span>
            </button>
        </div>
        
        </div>
    )
}